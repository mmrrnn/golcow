import React from 'react';
import styled from 'styled-components';
import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery
} from '@material-ui/core';

import mainHeroImage from '../images/mainHeroImage.jpeg';

const HeroContainer = styled(Grid)`
  height: 320px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${mainHeroImage}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Title = styled(Typography)`
  color: white;
`

function SmallHero({ title }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <HeroContainer container alignItems="center" justify="center">
      <Title variant={isMobile ? 'h4' : 'h2'}>{title}</Title>
    </HeroContainer>
  )
}

export default SmallHero
