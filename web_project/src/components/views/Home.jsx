import './Home.css'
import React from 'react'

export default function Home() {
    
    function HandleMentorado(e){
        e.preventDefault()
        window.location.href ='/Mentorado_page'
        //colocar o usuário dentre os mentorados
    }

    function HandleMentor(e){
        e.preventDefault()
        window.location.href ='/Mentor_page'
        //colocar o usuário dentre os mentores
    }
    
    return(
        <div className='home'>
            <h1 className="mt-3">SEJA BEM VINDO!!!</h1>
            <h2 className="mt-3 mb-3">Escolha se deseja atuar como um mentor ou se está a procura de um: </h2>
            <button className='btn btn-primary ml-3 p-3' onClick = {HandleMentor}>Quero ser um mentor</button>
            <button className='btn btn-primary ml-3 p-3' onClick = {HandleMentorado}>Quero encontrar um mentor</button>
        </div>
    )

}