import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    width: 30rem;
    height: auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    background: none;
`;

export const Title = styled.h1`
    background: none;
    font-size: 25px;
    font-weight: bold;
    color: white;
    font-style: italic;
    margin: 0 0 2rem 0;
    width: 100%;
    text-align: center;
`;

export const Description = styled.small`
    font-size: 12px;
    background: none;
    color: #ecf0f1;
    margin: 0 0 5px 0;
`;

export const Button = styled.button`
    width: 100%;
    height: 4rem;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid #9b59b6;
    background-color: #9b59b6;
    color: #ecf0f1;
    border-radius: 50px;
    cursor: pointer;
    margin-bottom: 1rem;
`;