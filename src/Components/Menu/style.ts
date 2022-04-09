import styled from "styled-components";

export const Container = styled.div`
    width: 244px;
    height: 99vh;
    box-sizing: border-box;
    padding: 20px;
    background: #ecf0f1;
    margin-left: 5px;
    position: fixed;
    bottom: 0; 
    border-radius: 25px 25px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    background: none;
    font-size: 25px;
    font-weight: bold;
    color: #8e44ad;
    margin: 0 0 1rem 0;
    width: 100%;
    text-align: center;
`;

export const Divisoria = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: #8e44ad;
    margin: 1rem 0 1rem 0;
`;

export const Link = styled.a`
    background: none;
    color: #8e44ad;
    font-style: none;
    text-decoration: none;
    font-size: 14px;
`;