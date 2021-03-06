import React, { Component } from "react";
import firebase from '../../firebase'
import DatabaseManager from '../../services/UserServices'
import { withRouter } from "react-router";


class FormsMentorado extends Component {

    constructor(props){
        super(props)
        this.state = {
            materias: {"Biologia": false, "Matematica": false, "Português": false},
            name: '',
            email:'',
            tel:''
        }

        this.history = this.props.history
        this.save = this.save.bind(this)
        this.updateName = this.updateName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateTel= this.updateTel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    updateName(e){
        this.setState({name: e.target.value})
    }

    updateEmail(e){
        this.setState({email: e.target.value})
    }
    
    updateTel(e){
        this.setState({tel:e.target.value})
    }



    handleInputChange(e){
        var materias_aux = this.state.materias
        //console.log(materias)
        console.log(e.target.id)
        console.log(e.target.checked)
        materias_aux[e.target.id] = e.target.checked
       
        this.setState({materias:materias_aux})
        
    }

    save(e) {
        e.preventDefault()
        this.props.history.push({
          pathname: '/Match',
          state: {
            ...this.state
          }
        })
    }
    
    render(){
      
        return(
            <div className="p-5">
                
                <h1 className="mt-4">Olá!</h1>
                <h2 className='mt-3 mb-5'>Vamos fazer umas perguntas para encontrar o mentor ideal para você!</h2>
    
    
                <form className="forms">
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Seu nome"
                        value={this.state.name}
                        onChange={this.updateName}/>
                    </div>
                    <h5 className='mt-4'>Marque as disciplinas que você se interessa</h5>
    
                    <div class="form-check">
                        <input 
                        class="form-check-input" type="checkbox" id="Biologia"
                        checked={this.state.materias["Biologia"]}
                        onChange={this.handleInputChange}
                        />
                        <label class="form-check-label" for="defaultCheck1">
                            Biologia
                        </label>
                    </div>
                    <div class="form-check">
                        <input 
                        class="form-check-input" type="checkbox" value="" id="Matematica"
                        checked={this.state.materias["Matematica"]}
                        onChange={this.handleInputChange}
                        />
                        <label class="form-check-label" for="defaultCheck1">
                            Matematica
                        </label>
                    </div>
                    <div class="form-check">
                        <input 
                        class="form-check-input" type="checkbox" value="" id="Português"
                        checked={this.state.materias["Português"]}
                        onChange={this.handleInputChange}
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
                        value={this.state.email}
                        onChange={this.updateEmail}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Tel">Cel:</label>
                        <input type="tel" 
                        name="cel" 
                        className="form-control" 
                        placeholder="Número de celular para contato"
                        value={this.state.tel}
                        onChange={this.updateTel}/>
                    </div>
    
    
                    <div className="d-flex p-5">
                    <button className="ml-auto btn btn-primary"
                        onClick={(e)=>this.save(e)}>
                        Salvar
                    </button>
                    </div>
    
                </form>
            </div>
        )
    }
    
}

const FormsMentorados = withRouter(FormsMentorado);
export default FormsMentorados
