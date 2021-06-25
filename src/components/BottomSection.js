import * as React from 'react';
import styled from 'styled-components';
import {
    Container,
    Typography,
    useMediaQuery
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const Icon = styled.img`
    height: 90px;
    width: 90px;
`

const BottomSectionContainer = styled(Container)`
    text-align: center;
    padding: 8rem 0;
`;

const Header = styled(Typography)`
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const Subtitle = styled(Typography)`
    color: rgb(107, 100, 96);
`

function BottomSection() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <BottomSectionContainer>
            <Typography variant={isSmall ? 'h3' : 'h2'}>Atrakcje w poblizu</Typography>
        </BottomSectionContainer>
    )
}

export default BottomSection;
