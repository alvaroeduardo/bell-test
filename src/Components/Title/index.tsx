import React from "react";
import { Container, Text } from "./style";

export default function Title(props: any){
    return(
        <Container>
            <Text>{ props.texto }</Text>
        </Container>
    )
}