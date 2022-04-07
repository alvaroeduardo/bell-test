import React, {useEffect, useState} from "react";
import MenuComponent from "../../Components/Menu";
import { userView } from "../../Context/AuthProvider/util";
import { Container, ContainerData } from "./style";

export default function Main(){
    const [data, setData] = useState(['']);

    const dataUsers = userView();

    useEffect(()=>{
        async function getData() {
            try {
                const dataArray = await dataUsers;
                setData(dataArray);
            } catch (error) {
                return error;
            }
        }

        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const response: any = data;
    

    return(
        <Container>
            <MenuComponent/>

            <ContainerData>
                {
                    response.map((d: any)=>{
                        return(
                            <>
                                <p>{d.id}</p>
                                <p>{d.name}</p>
                            </>
                    )
                }) 
                }
            </ContainerData>
        </Container>
    )
}