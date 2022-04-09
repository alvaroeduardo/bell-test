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

export const Description = styled.small`
    font-size: 12px;
    background: none;
    color: #8e44ad;
    margin: 0 0 5px 0;
`;

export const Form = styled.form`
    width: 100%;
    height: auto;
    padding: 1.5rem;
    border-radius: 10px;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Photo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #8e44ad;
`;