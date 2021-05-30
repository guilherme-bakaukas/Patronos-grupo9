import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from '../../context/Auth'
import { Link } from 'react-router-dom'
import { Container } from "react-bootstrap";

export default function Signup() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()
  const { signUp } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
      e.preventDefault()

      if (passwordRef.current.value !== passwordConfirmationRef.current.value){
         return setError('As senhas precisam ser iguais')
      }

      if (passwordRef.current.value.length < 6) {
        return setError('A senha precisa possuir mais que 6 caracteres')
      }

      try {
        setError('') // Remove old error messages
        setLoading(true)
        await signUp(emailRef.current.value, passwordRef.current.value)
        console.log('chamou o console')
        window.location.href ='/home'
      } catch (error) {
        setError('Não foi possível realizar o cadastro')
        console.log(error)
      }

      setLoading(false)
  }

  return (
    <Container         
    className="d-flex align-items-center justify-content-center"
    style ={{minHeight: "100vh"}}>
<div className="w-100" style = {{maxWidth:  "400px"}}>
<>
      <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Eduka</h2>
            { error && <Alert variant="danger">{error}</Alert> }
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" autoComplete="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password"  autoComplete="new-password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirmation">
                    <Form.Label>Confirme a sua senha</Form.Label>
                    <Form.Control type="password"  autoComplete="new-password" ref={passwordConfirmationRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit" >Cadastrar</Button>
            </Form>      
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2"><Link to="/">Já possuo uma conta </Link></div>
</>
</div>
    </Container>
  );
}
