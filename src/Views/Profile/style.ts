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
    width: 90%;
    height: 99vh;
    padding: 1.5rem 1.5rem 1.5rem 12rem;
    position: fixed;
    bottom: 0;
    background-color: #2C3E50;
    border-radius: 10px;
    margin: 0 0 0 10rem;
    display: flex;
    flex-direction: row;
`;

export const Title = styled.h1`
    background: none;
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin: 0 0 2rem 0;
    width: 100%;
    text-align: center;
`;

export const Description = styled.small`
    font-size: 12px;
    background: none;
    color: white;
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
    margin: 1.5rem;
`;

export const PhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    align-items: center;
    width: 20%;
    height: auto;
    padding: 1rem;
`;

export const Divisoria = styled.div`
    width: 100%;
    height: 1px;
    margin: 1rem 0 1rem 0;
    background-color: #7f8c8d;
`;

export const DataContainer = styled.div`
    width: 60%;
    height: auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`;
