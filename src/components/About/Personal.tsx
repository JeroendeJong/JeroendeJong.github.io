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
          <span>Utrecht, The Netherlands</span>
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
          <span>LinkedIn</span>
        </IconContainer>

        <IconContainer as={'a'} href="https://github.com/JeroendeJong" target="_blank" rel="noopener noreferrer">
          <Github />
          <span>GitHub</span>
        </IconContainer>

        <IconContainer as={'a'} href="mailto:jdjjong@icloud.com" target="_blank" rel="noopener noreferrer">
          <EnvelopeCheckFill />
          <span>Mail</span>
        </IconContainer>

      </InformationContainer>
    </ImageContainer>
  )
}

const TextAlignParagraph = styled.p`
  text-align: justify;
`

function ElevatorPitch() {
  return (
    <>
      <TextAlignParagraph>
        I'm a software engineer with a background in geo-informatics and a particular interest in making complex data understandable and useful. My main working interest spans interactive maps, 3D visualisations and realtime data applications, with a focus on frontend development using React and TypeScript.
      </TextAlignParagraph>
      <br />
      <TextAlignParagraph>
        At Simacan, I work across web and mobile products, including a real-time navigation and delivery application built with React Native and Kotlin. Previously, I helped build a WebGL-based mapping product at Living Map, where I became frontend team lead, and worked on a 3D graphing application at KPV Lab.
      </TextAlignParagraph >
      <br />
      <TextAlignParagraph>
        I enjoy working with designers and other developers to turn complex requirements into clear, usable interfaces. Alongside my engineering experience, my masters degree in Human Geography has strengthened how I research problems, evaluate evidence and communicate ideas.
      </TextAlignParagraph >
    </>
  )
}


export { Personal, ElevatorPitch }