import * as React from 'react';
import styled from 'styled-components';
import {
    Grid,
    Typography,
    useMediaQuery
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import mainHeroImage from '../images/mainHeroImage.jpeg';
import barbequeIcon from '../images/barbeque.svg';

const LeftSection = styled(Grid)`
  min-height: 460px;
  background-image: url("${mainHeroImage}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const RightSection = styled(Grid)`
  padding: 6rem 4rem;
  background-color: ${({ theme }) => theme.palette.black};
`;

const Title = styled(Typography)`
  color: #fff;
`;

const Subtitle = styled(Typography)`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.palette.gold};
  font-family: "Cinzel", "Helvetica", "Arial", "sans-serif";
  letter-spacing: 1;
  font-weight: bold;
  text-transform: capitalize;
`;

const Paragraph = styled(Typography)`
  margin-top: 2rem;
  font-family: "Ubuntu", "Helvetica", "Arial", "sans-serif";
  color: ${({ theme }) => theme.palette.whiteGrey};
`;

const Icon = styled.img`
  height: 48px;
`;

const IconSection = styled(Grid)`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;

const IconHeader = styled(Typography)`
  margin-left: 1rem;
  color: #fff;
  font-family: "Cinzel", "Helvetica", "Arial", "sans-serif";
  text-transform: uppercase;
`;

function DoubleSection() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container>
          <LeftSection item xs={12} md={6} />
          <RightSection item xs={12} md={6}>
            <Title variant={isSmall ? 'h4' : 'h3'}>Dlaczego my?</Title>
            <Subtitle variant="subtitle1">SOME WORD ABOUT US</Subtitle>
            <Paragraph paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
            <Grid container>
                <IconSection item xs={12} sm={6}>
                  <Icon src={barbequeIcon} />
                  <IconHeader variant="subtitle2">Outdoor BBQ area</IconHeader>
                </IconSection>
                <IconSection item xs={12} sm={6}>
                  <Icon src={barbequeIcon} />
                  <IconHeader variant="subtitle2">Swimming pool</IconHeader>
                </IconSection>
                <IconSection item xs={12} sm={6}>
                  <Icon src={barbequeIcon} />
                  <IconHeader variant="subtitle2">Free breakfast</IconHeader>
                </IconSection>
                <IconSection item xs={12} sm={6}>
                  <Icon src={barbequeIcon} />
                  <IconHeader variant="subtitle2">Outdoor BBQ area</IconHeader>
                </IconSection>
                <IconSection item xs={12} sm={6}>
                  <Icon src={barbequeIcon} />
                  <IconHeader variant="subtitle2">Outdoor area</IconHeader>
                </IconSection>
                <IconSection item xs={12} sm={6}>
                  <Icon src={barbequeIcon} />
                  <IconHeader variant="subtitle2">Animals Pets Care</IconHeader>
                </IconSection>
            </Grid>
          </RightSection>
        </Grid>
    )
}

export default DoubleSection
