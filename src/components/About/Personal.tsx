import styled from "styled-components"
import { Geo, Linkedin, Twitter, EnvelopeCheckFill, MapFill, Translate, HospitalFill, FlagFill, Github } from 'react-bootstrap-icons'

/**
 * In principle: if its mobile we use flexbox,
 * if its desktop: we use float left, and right due to the shape-outside requirements. 
 */

const RoundedImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  box-shadow: 0 30px 40px 0 rgb(16 36 94 / 30%);
  border: 3px solid #FB5607;

  @media (min-width: 712px) {
    float: left;
    shape-outside: circle(50%);
  }

  @media (max-width: 712px) {
    margin: auto;
    margin-bottom: 20px;
  }
`

const ImageContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 712px) {
    height: calc(300px + 6px);
    position: relative;
    left: calc(50% - 250px);
  }

  @media (max-width: 712px) {
    display: flex;
    flex-direction: column;
  }
`

const IconContainer = styled.div`
  display: block;
  color: black;
  margin: 5px 0;
  white-space: nowrap;

  @media (min-width: 712px) {
    left: 15px;
    position: relative;
  }

  span {
    margin-left: 5px;
  }

  svg {
    vertical-align: middle;
  }
`

const InformationContainer = styled.div`
  @media (max-width: 712px) {
    margin: auto;
  }
`



function Personal() {
  return (
    <ImageContainer>
      <RoundedImage src="assets/IMG_5551.jpeg" />

      <InformationContainer>
        <IconContainer>
          <Geo />
          <span>Nijmegen, The Netherlands</span>
        </IconContainer>

        <IconContainer>
          <HospitalFill />
          <span>19 September 1995</span>
        </IconContainer>

        <IconContainer>
          <FlagFill />
          <span>Dutch Nationality</span>
        </IconContainer>

        <IconContainer>
          <Translate />
          <span>Native Dutch & English</span>
        </IconContainer>

        <IconContainer>
          <Translate />
          <span>Limited German</span>
        </IconContainer>

        <IconContainer>
          <Translate />
          <span>Learning Russian</span>
        </IconContainer>

        <br />

        <IconContainer as={'a'} href="https://www.linkedin.com/in/jeroen-dejong/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
          <span>Connect with me on LinkedIn</span>
        </IconContainer>

        <IconContainer as={'a'} href="https://github.com/JeroendeJong" target="_blank" rel="noopener noreferrer">
          <Github />
          <span>Find me on GitHub</span>
        </IconContainer>

        <IconContainer as={'a'} href="mailto:jdjjong@icloud.com" target="_blank" rel="noopener noreferrer">
          <EnvelopeCheckFill />
          <span>Feel free to contact me!</span>
        </IconContainer>

        <IconContainer as={'a'} href="http://www.jeroentravel.com" target="_blank" rel="noopener noreferrer">
          <MapFill />
          <span>Personal Travel website</span>
        </IconContainer>
      </InformationContainer>
    </ImageContainer>
  )
}

const TextAlignParagrah = styled.p`
  text-align: justify;
`

function ElevatorPitch() {
  return (
    <>
      <TextAlignParagrah>
        Hi, Welcome to my personal website. My name is Jeroen de Jong, born and raised in the north of The Netherlands.
        At the end of my bachelors in Geo-informatics, I found a lot of joy in solving geographical problems. Specifically the combination between software development and data visualisation I found my passion.
        I however came to thoroughly enjoy software development in general because it allows me to solve problems and be creative.
        Working with like minded people on building complex and user friendly applications is very fun to me.
        Specifically frontend development is something I really enjoyed because I personnaly find a good design to be extremely important.
        I came to love working with TypeScript, React, and many other technologies that allow me to be able to create even beter user experiences.
      </TextAlignParagrah>
      <br />
      <TextAlignParagrah>
        I have worked as a software developer for almost 5 years now, but I concluded that I was missing some more theorethical thinking level and research background.
        As a result, I decided to pursue a Master degree in Geography at the Radboud University in Nijmegen.
      </TextAlignParagrah>
      <br />
      <TextAlignParagrah>
        Now that I've finished this I am once again looking for a place where I can help build awesome software, and apply my working experience together with my new-found academical skills.
      </TextAlignParagrah>

    </>
  )
}


export { Personal, ElevatorPitch }