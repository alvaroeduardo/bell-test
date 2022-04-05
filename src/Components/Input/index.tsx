import React from "react";

import { Container, Description, Input } from "./style";

export default function InputComponent(props: any){
    return(
        <Container>
            <Description>{ props.description }</Description>

            <Input placeholder={ props.placeholder } value={ props.value } type={ props.tipo }/>
        </Container>
    )
}