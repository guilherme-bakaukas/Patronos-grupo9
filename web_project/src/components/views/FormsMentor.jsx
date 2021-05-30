import React, { useRef, useState } from "react";
import firebase from '../../firebase'
import DatabaseManager from '../../services/UserServices'

export default function FormsMentor(){

    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [materias, setMaterias] = useState({"Biologia": false, "Matematica": false, "Português": false,})

    function updateName(e){
        setName(e.target.value)
    }

    function updateEmail(e){
        setEmail(e.target.value)
    }
    
    function updateTel(e){
        setTel(e.target.value)
    }

    function updateDescription(e){
        setDescription(e.target.value)
    }

    function handleInputChange(e){
        var materias_aux = materias
        console.log(materias)
        console.log(e.target.id)
        console.log(e.target.checked)
        materias_aux[e.target.id] = e.target.checked
       
        setMaterias({...materias_aux})
        
    }

    function save(e){
        var databaseManager = new DatabaseManager()
        
        e.preventDefault()

        var user = firebase.auth().currentUser;
    
        
        const user_info = 
        {
            "nome": name,
            "materias": materias,
            "email": email,
            "tel": tel,
            "description": description,
            "uid": user.uid

        }
        //enviar os dados para o backend

        console.log(user_info)
        databaseManager.addUsertoDatabase("Mentores", user_info)
        window.location.href ='/Match'
    }    


    return(
        <div className="p-5">
            <h1 className="mt-4">Olá!</h1>
            <h2 className='mt-3 mb-5'>Vamos fazer umas perguntas para encontrar os alunos com interesses semelhantes aos seus</h2>

            <form className="forms">
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Seu nome"
                    value={name}
                    onChange={updateName}/>
                </div>

                <h5 className='mt-4'>Insira aqui uma descrição, isso facilitará a escolha do seu mentorado</h5>


                <div className="form-group">
                    <label htmlFor="description">Descrição:</label>
                    <input type="text" 
                    name="description" 
                    className="form-control" 
                    placeholder="Informações como: faculdade, curso..."
                    value={description}
                    onChange={updateDescription}/>
                </div>

                <h5 className='mt-4'>Selecione seus interesses</h5>
                <div class="form-check">
                    <input 
                    class="form-check-input" type="checkbox" id="Biologia"
                    checked={materias["Biologia"]}
                    onChange={handleInputChange}
                    />
                    <label class="form-check-label" for="defaultCheck1">
                        Biologia
                    </label>
                </div>
                <div class="form-check">
                    <input 
                    class="form-check-input" type="checkbox" value="" id="Matematica"
                    checked={materias["Matematica"]}
                    onChange={handleInputChange}
                    />
                    <label class="form-check-label" for="defaultCheck1">
                        Matematica
                    </label>
                </div>
                <div class="form-check">
                    <input 
                    class="form-check-input" type="checkbox" value="" id="Português"
                    checked={materias["Português"]}
                    onChange={handleInputChange}
                    />
                    <label class="form-check-label" for="defaultCheck1">
                        Português
                    </label>
                </div>
                <h5 className='mt-4'>Informações para contato</h5>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" 
                    name="email" 
                    className="form-control" 
                    placeholder="Email para contato"
                    value={email}
                    onChange={updateEmail}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Tel">Cel:</label>
                    <input type="tel" 
                    name="cel" 
                    className="form-control" 
                    placeholder="Número de celular para contato"
                    value={tel}
                    onChange={updateTel}/>
                </div>


                <div className="d-flex p-5">
                <button className="ml-auto btn btn-primary"
                    onClick={save}>
                    Salvar
                </button>
                </div>


            </form>
        </div>
    )
}