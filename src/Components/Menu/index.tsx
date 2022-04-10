import React from 'react';
import { useAuth } from '../../Context/AuthProvider/useAuth';

import { Container, Divisoria, Title, Link } from './style';


export default function MenuComponent(){

    const auth = useAuth();

    return(
        <Container>

            <Title>Bt</Title>

            <Divisoria/>
            <Link href="/">Página Inicial</Link>

            <button type="submit" onClick={auth.logout} >Sair</button>
        </Container>
    )
}