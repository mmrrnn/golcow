import React from 'react'
import styled from 'styled-components';
import {
  Grid,
  Container,
  Dialog,
  IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import mainHeroImage from '../images/mainHeroImage.jpeg';

const GalleryContainer = styled(Grid)`
  padding: 4rem 0rem;
`;

const GalleryImage = styled.img`
  cursor: pointer;
  position: relative;
  width: 100%;
  &:hover {
    filter: blur(3px);
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 0;
  border-radius: 0;
  background-color: white;
  color: ${({ theme }) => theme.palette.gold};
  &:hover {
    background-color: rgba(255, 255, 255, 0.95);
  }
`

function Gallery() {
  const [open, setOpen] = React.useState(false);
  const dialogImage = React.useRef(null);

  const getOnClick = (image) => () => {
    setOpen(true);
    dialogImage.current = image;
  }

  const handleClose = () => {
    setOpen(false);
    dialogImage.current = null;
  }

  return (
    <Container maxWidth="xl">
      <GalleryContainer container spacing={5} justify="center">
        <Grid item xs={12} sm={4}>  
          <GalleryImage src={mainHeroImage} alt="cottage" onClick={getOnClick(mainHeroImage)} />
        </Grid>
        <Grid item xs={12} sm={4}>  
          <GalleryImage src={mainHeroImage} alt="cottage" onClick={getOnClick(mainHeroImage)} />
        </Grid>
        <Grid item xs={12} sm={4}>  
          <GalleryImage src={mainHeroImage} alt="cottage" onClick={getOnClick(mainHeroImage)} />
        </Grid>
        <Grid item xs={12} sm={4}>  
          <GalleryImage src={mainHeroImage} alt="cottage" onClick={getOnClick(mainHeroImage)} />
        </Grid>
        <Grid item xs={12} sm={4}>  
          <GalleryImage src={mainHeroImage} alt="cottage" onClick={getOnClick(mainHeroImage)} />
        </Grid>
      </GalleryContainer>
      <Dialog
        maxWidth="xl"
        open={open}
        onClose={handleClose}
      >
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
        <img src={dialogImage.current} alt="gallery-iamge" style={{ objectFit: "fill" }}/>
      </Dialog>
    </Container>
  )
}

export default Gallery
