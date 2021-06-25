import * as React from 'react';
import styled from 'styled-components';
import {
    Button,
    Container,
    Grid,
    Typography,
    useTheme,
    useMediaQuery
} from '@material-ui/core';

import mainHeroImage from '../images/mainHeroImage.jpeg';

const HeroContainer = styled(Container)`
    height: calc(100vh - 110px);
    padding: 4rem 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url("${mainHeroImage}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
`;

const HeroButton = styled(Button)`
    padding: 16px 32px;
    background-color: #fff;
`

function Hero() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <HeroContainer maxWidth="xl">
            <Grid
                container
                direction="column"
                justify="flex-end"
                alignItems="center"
                style={{ height: "100%" }}
            >
                <Grid item style={{ margin: "2rem" }}>
                    <Typography variant={isMobile ? 'h3' : 'h1'} align="center">
                        Domek pod Golcowem
                    </Typography>
                </Grid>
                <Grid item>
                    <HeroButton variant="contained">Sprawdź teraz</HeroButton>
                </Grid>
            </Grid>
        </HeroContainer>
    )
}

export default Hero
