import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
   /* text-align: center; */
    background-color: red;
    min-height: 100vh;
`;

export const Content = styled.div`
    background-color: #ffffff;
    width: 450px;

    @media screen and (max-width: 450px) {
        width: 100%;
      }
`;
