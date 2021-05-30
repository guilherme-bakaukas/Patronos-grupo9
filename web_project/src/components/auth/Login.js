import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'
import { Container } from "react-bootstrap";

export default function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
      e.preventDefault()

      try {
        setError('') // Remove old error messages
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        console.log("entrou")
        window.location.href ='/initialPage'
      } catch (error) {
        setError('Não foi possível inciar a sessão')
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
                <Button disabled={loading} className="w-100" type="submit" >Entrar</Button>
            </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Não possui uma conta? <Link to="/signup">Cadastrar</Link></div>
    </>

</div>
    </Container>
    
  );
}
