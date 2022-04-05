import React from "react";

import { Container, Button } from "./style";

export default function ButtonContainer(props: any){
    return(
        <Container>
            <Button onClick={ props.action } >{ props.titulo }</Button>
        </Container>
    )
}