import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    background-color: #ffffff;
`;

export const Title = styled.h1`
    font-size: 20px;
    color: #000814;
`;

export const ButtonCart = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 16px;
        height: 24px;
    }
`;