import * as React from 'react';
import styled from 'styled-components';
import {
    Container,
    Grid,
    Typography
} from '@material-ui/core';

import familyIcon from '../images/family.svg';
import sunbathingIcon from '../images/sunbathing.svg';
import treesIcon from '../images/trees.svg';

const Icon = styled.img`
    height: 90px;
    width: 90px;
`

const TopSectionContainer = styled(Container)`
    text-align: center;
    padding: 6rem 0;
`;

const Header = styled(Typography)`
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const Subtitle = styled(Typography)`
    color: rgb(107, 100, 96);
`

const SpacedGrid = styled(Grid)`
    margin: 2rem 1rem;
    padding: 0 0.5rem;
`;

function TopSection() {
    return (
        <TopSectionContainer>
            <Grid
                container
                justify="space-around"
                align-items="center"
            >
                <SpacedGrid item xs={12} sm={3}>
                    <Icon src={familyIcon} alt="family" />
                    <Header variant="h5"><b>Family friendly</b></Header>
                    <Subtitle variant="subtitle1">Feel and experience nature in its fullest glory to refresh yourself</Subtitle>
                </SpacedGrid>
                <SpacedGrid item xs={12} sm={3}>
                    <Icon src={treesIcon} alt="trees" />
                    <Header variant="h5"><b>Heritage Homestay</b></Header>
                    <Subtitle variant="subtitle1">Kerala heritage that have been preserved throughout the ages</Subtitle>
                </SpacedGrid>
                <SpacedGrid item xs={12} sm={3}>
                    <Icon src={sunbathingIcon} alt="sunbathing" />
                    <Header variant="h5"><b>Live Amidst Nature</b></Header>
                    <Subtitle variant="subtitle1">Feel and experience nature in its fullest glory to refresh yourself</Subtitle>
                </SpacedGrid>
            </Grid>
        </TopSectionContainer>
    )
}

export default TopSection
