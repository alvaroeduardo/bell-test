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
    border-radius: 10px;
    background-color: #ecf0f1;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    background: none;
    font-size: 25px;
    font-weight: bold;
    color: #2c3e50;
    margin: 0 0 2rem 0;
    width: 100%;
    text-align: center;
`;

export const Description = styled.small`
    font-size: 12px;
    background: none;
    color: #34495e;
    margin: 0 0 5px 0;
`;