import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ContainerData = styled.div`
    width: 78%;
    height: 95%;
    padding: 1.5rem;
    background-color: #ecf0f1;
    border-radius: 10px;
    margin: 0 0 0 23rem;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    background: none;
    font-size: 25px;
    font-weight: bold;
    color: #8e44ad;
    margin: 0 0 2rem 0;
    width: 100%;
    text-align: center;
`;

export const Table = styled.table`
    background: none;
    border: 2px solid #bdc3c7;
    border-radius: 10px;
    padding: 1rem;
`;

export const THead = styled.thead`
    background: none;
    padding: 1rem;
`;

export const Th = styled.th`
    background: none;
    font-size: 14px;
    padding: .5rem;
    border-bottom: 2px solid #bdc3c7;
`;

export const TBody = styled.tbody`
    background: none;
    padding: 1rem;
`

export const Tr = styled.tr`
    height: auto;
    text-align: center;
    padding: .5rem;
    background: none;
`;

export const Td = styled.td`
    background: none;
    font-size: 12px;
    padding: 1rem;
    border-bottom: 1px solid #bdc3c7;
`;

export const Photo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
    background-color: #ecf0f1;
`;

export const Form = styled.form`
    width: 100%;
    height: auto;
    padding: 1.5rem;
    border-radius: 10px;
    background-color: none;
    display: flex;
    flex-direction: column;
`;

export const Description = styled.small`
    font-size: 12px;
    background: none;
    color: #8e44ad;
    margin: 0 0 5px 0;
`;