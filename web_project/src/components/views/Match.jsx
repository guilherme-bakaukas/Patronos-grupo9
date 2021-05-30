import DatabaseManager from '../../services/UserServices'
import firebase from '../../firebase'
import React, {Component, useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import './Match.css'

const getMentores = async (info)=> {
    console.log(info)
    var databaseManager = new DatabaseManager()

    var user = firebase.auth().currentUser;

    const user_info = 
    {
        "nome": info.name,
        "materias": info.materias,
        "email": info.email,
        "tel": info.tel,
        "uid": user.uid
    }
    //enviar os dados para o backend
    
    //console.log(user_info)
    await databaseManager.addUsertoDatabase("Mentorados", user_info)
    const mentores = databaseManager.findMatch(info.materias)
    return mentores
}

const Match = ({ location }) => {
    const [mentores, setMentores] = useState([])
    const { state } = location

    useEffect(() => {
      getMentores(state)
        .then((res) => {
          setMentores(res)
        })
    }, [state])

    return (
        <div className='match'>
            <h2 className='mt-4'>Encontramos algumas opções para você...</h2>
            <h5 className='mt-4 mb-3'>Selecione seu mentor</h5>
            {mentores.map((mentor) => (
              <>
              <button className='ml-3 btn btn-primary'>
                  <h3>{mentor.nome}</h3>
                  <p>{mentor.description}</p>
              </button>
              </>
            ))}
        </div>
    )
} 

export default Match

/*
            <h2>Encontramos algumas opções para você...</h2>
            <button>
              <h3>{mentores["0"]["name"]}</h3>
               <p>{mentores["0"]["email"]}</p>
               <p>{mentores["0"]["tel"]}</p> 
            </button>
            <button>
            <   h3>{mentores["1"]["name"]}</h3>
               <p>{mentores["1"]["email"]}</p>
               <p>{mentores["1"]["tel"]}</p> 
            </button>
            <button>
                <h3>{mentores["2"]["name"]}</h3>
               <p>{mentores["2"]["email"]}</p>
               <p>{mentores["2"]["tel"]}</p> 
            </button>
*/
