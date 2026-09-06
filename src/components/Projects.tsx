import styled from "styled-components"
import { ExperienceContainer, ExperienceImage, ExperienceTitle } from "./About/LifeExperienceItem"
import { Section } from "./About"

const Container = styled.main`
  margin-top: 90px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  row-gap: 50px;
`

function Projects() {
  return (
    <Section title="Projects">
      <Container>
        <ExperienceContainer>
          <a rel="noopener noreferrer" href="http://www.jeroentravel.com">
            <ExperienceImage src="/assets/JeroenTravel.png" />
          </a>
          <div>
            <ExperienceTitle as='a' rel="noopener noreferrer" href="http://www.jeroentravel.com">Jeroen Travel - My Personal Travel Tracker</ExperienceTitle>
            <p>
              I made this personal travel website out of a longing for a better experience during travel as well as the ability for a more detailed geographical representation of my travels.
              I have developed an admin portal for this, which i can acces to upload gps tracks data as well as pictures. From the pictures uploaded, the GPS data will automaticallically be pulled out of the picture,
              and these picture will then also be represented on the map.

              Furthermore it is also possible to write stories on every entry.

              This project is in active work in progress, so some features might still require improvements.
            </p>
          </div>
        </ExperienceContainer>
        <ExperienceContainer>
          <a rel="noopener noreferrer" href="http://www.jeroenblog.com/liquid-clock">
            <ExperienceImage src="/assets/liquid-clock.png" />
          </a>
          <div>
            <ExperienceTitle as='a' rel="noopener noreferrer" href="http://www.jeroenblog.com/liquid-clock">Time through liquid motion</ExperienceTitle>
            <p>
              Many years ago I came across <a rel="noopener noreferrer" href="http://www.hellorhei.com/">this really awesome concept project</a> which made a clock work based on a type of Ferrofluid and magnet activation. So, I re-made it in webGL on the web. The particle behavior is rather complex, which made it a fun excersise to see how I could make ChatGPT understand the complexity and learn about the visual character.
            </p>
          </div>
        </ExperienceContainer>
        <ExperienceContainer>
          <a rel="noopener noreferrer" href="http://www.jeroenblog.com/textual-clock">
            <ExperienceImage src="/assets/textual-clock.png" />
          </a>
          <div>
            <ExperienceTitle as='a' rel="noopener noreferrer" href="http://www.jeroenblog.com/textual-clock">Time through spoken words</ExperienceTitle>
            <p>
              At some point I was walking through the a city and saw a clock that sparked the idea of this project. This clock works for a few different languages
              that I know. It makes use of an algorithm called rectangle packing to find the most optimal way through which the words are filled. I implemented a restricted
              version of this however to ensure it always is readable from up to down.
            </p>
          </div>
        </ExperienceContainer>
      </Container>
    </Section>
  )
}

export { Projects } 