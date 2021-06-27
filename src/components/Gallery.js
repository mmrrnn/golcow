import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Grid, Container, Dialog, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

const GalleryContainer = styled(Grid)`
  padding: 4rem 0rem;
`

const GalleryImage = styled(Img)`
  cursor: pointer;
  position: relative;
  width: 100%;
  &:hover {
    opacity: 0.9;
  }
`

const CloseButton = styled(IconButton)`
  z-index: 10;
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
  const {
    allContentfulGalleryImage: { nodes },
  } = useStaticQuery(graphql`
    {
      allContentfulGalleryImage {
        nodes {
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  const [open, setOpen] = React.useState(false)
  const dialogImage = React.useRef(null)

  const getOnClick = image => () => {
    setOpen(true)
    dialogImage.current = image
  }

  const handleClose = () => {
    setOpen(false)
    dialogImage.current = null
  }

  return (
    <Container maxWidth="xl">
      <GalleryContainer container spacing={5} justify="center">
        {nodes.map(({ image }) => (
          <Grid
            item
            xs={12}
            sm={4}
            onClick={getOnClick(image.fluid)}
            key={image.id}
          >
            <GalleryImage
              style={{ height: "100%" }}
              fluid={image.fluid}
              alt="gallery image"
            />
          </Grid>
        ))}
      </GalleryContainer>
      {open && (
        <Dialog
          maxWidth="xl"
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: { width: "100%" },
          }}
        >
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <Img fluid={dialogImage.current} alt="gallery iamge" />
        </Dialog>
      )}
    </Container>
  )
}

export default Gallery
