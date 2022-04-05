import React from "react";
import ButtonContainer from "../../Components/Button";
import InputComponent from "../../Components/Input";


import Title from "../../Components/Title";
import { Container, Form } from "./style";

export default function LoginPage(){


    return(
        <Container>
            <Form>
                <Title texto="Entrar" />

                <InputComponent description="Insira seu email: " placeholder="Insira seu email" tipo="email"/>

                <InputComponent description="Insira sua senha:" placeholder="Insira sua senha" tipo="password"/>

                <ButtonContainer titulo="Entrar" type="submit"/>
            </Form>
        </Container>
    )
}