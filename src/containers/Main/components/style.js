import styled from 'styled-components';
import {Typography, CardContent} from '../../../components'

export const LabelStyled = styled(Typography)`
    font-weight: 500;
    font-size: 1.5rem;

`;

export const ValueStyled = styled(Typography)`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const CardPanelContentStyled = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding: 25px;
`;


export const CardContentStyled = styled(CardContent)`
    border-left: 8px solid #5d78ff;
`;

export const ItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 150px
    `;

export const FlagStyled = styled.img`
    width: 150px;
    `;