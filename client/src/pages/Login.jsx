import React from 'react'
import styled from 'styled-components'
import RegisterImage from '../imgs/register.jpg'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
        display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`    
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    background-image: url(${RegisterImage});
    filter: blur(4px);
    -webkit-filter: blur(4px);
    z-index: 2;

    &:before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        background-color: #3d3d3d71;
        z-index: -1;
    }
`
const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
    height: 600;
    width: 450px;
    background-color: #fff;
    z-index:3;
    position: absolute;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
`

const Title = styled.h1`
    font-size: 25px;
    text-transform: uppercase;
    padding-bottom: 20px;
    border-bottom: 1px #5e5d5d67 solid;
`

const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px 0;
`

const Input = styled.input`
    margin: 20px 0;
    height: 40px;
    width: 100%;
    padding: 10px;
    font-size: 25px;
    border: none;
    border-bottom: 1px #000 solid;
    &:focus{
        outline: none;
    }
`

const Button = styled.button` 
    padding: 0.8rem 2rem;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background-color: #3ea3c2 ;

    &:hover{
        background-color: #3dacce;
    }
`

const CreateAccount = styled.p``

const Login = () => {
    return (
        <Container>
            <Wrapper></Wrapper>
            <InfoWrapper>
                <Title>Login</Title>
                <Form>
                <Input placeholder="Email " />
                <Input placeholder="Password" type="password" />
                <Button> Login </Button>
                </Form>
                <CreateAccount>Don't have an account? Create now</CreateAccount>

            </InfoWrapper>
        </Container>
    )
}

export default Login
