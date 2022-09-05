import { lightBlue } from '@material-ui/core/colors';
import { ViewColumn } from '@material-ui/icons';
import { findByLabelText } from '@testing-library/react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    button {
        border-radius: 0 0 20px 20px;  
    }

    img {
        max-height: 250px;
        object-fir: cover;
        border-radius: 20px 20px 0 0;
    }

 {
    font-family: Arial, Helvetica, sans-serif;
    padding: item;
    height: 100%;
 }

`;

