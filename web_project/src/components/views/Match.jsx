import DatabaseManager from '../../services/UserServices'
import firebase from '../../firebase'
import React, {Component} from 'react'
import { Container } from 'react-bootstrap'
import './Match.css'

class Mentoria extends Component{

    constructor(props){
        super(props)
        this.state={
            mentores : []
        }

        this.setMentores = this.setMentores.bind(this);
        this.getMentores = this.getMentores.bind(this);
    }

    setMentores(newMentores){
        this.setState({mentores: newMentores})
    }

    getMentores(){
        return this.state.mentores
    }
}

const mentoria = new Mentoria()

const getMentores=(info)=>{
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
    databaseManager.addUsertoDatabase("Mentorados", user_info)
    const mentores = databaseManager.findMatch(info.materias)
    console.log(mentores)
    mentoria.setMentores(mentores)
    window.location.href ='/Match'
}

const Match=()=>{
    //console.log(mentoria.getMentores())
    return(
        <div className='match'>
            
            <h2 className='mt-4'>Encontramos algumas opções para você...</h2>
            <h5 className='mt-4 mb-3'>Selecione seu mentor</h5>
            <button className='ml-3 btn btn-primary'>
                <h3>Nome</h3>
                <p>Descrição</p>
            </button>
            <button className='ml-3 btn btn-primary'>
                <h3>Nome</h3>
                <p>Descrição</p>
            </button>
            <button className='ml-3 btn btn-primary'>
                <h3>Nome</h3>
                <p>Descrição</p>
            </button>
        </div>

    )
}    

export {
    getMentores,
    Match
}

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
