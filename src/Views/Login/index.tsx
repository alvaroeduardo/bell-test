import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";

import { useAuth } from "../../Context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const auth = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        try {
            await auth.authenticate(data.email, data.password);

            navigate("/profile");
        } catch (error) {
            alert("Email ou senha inválidos")
        }
    };

    return(
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title">Entrar</h1>

                <small>Insira seu e-mail: </small>
                <input type="email" {...register("email")} placeholder="Insira seu e-mail"/>

                <small>Insira sua senha: </small>
                <input type="password" {...register("password")} placeholder="Insira seu e-mail"/>

                <button type="submit" >Entrar</button>
            </form>
        </div>
    )
}