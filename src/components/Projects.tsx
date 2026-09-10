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
          <a rel="noopener noreferrer" href="http://www.jeroenblog.com/liquid-clock">
            <ExperienceImage src="/assets/liquid-clock.png" />
          </a>
          <div>
            <ExperienceTitle as='a' rel="noopener noreferrer" href="http://www.jeroenblog.com/liquid-clock">Time through liquid motion</ExperienceTitle>
            <p>
              Many years ago, I came across <a rel="noopener noreferrer" href="http://www.hellorhei.com/">this really awesome concept project</a>, which made a clock work using ferrofluid and magnetic activation. I recreated it in WebGL. When Astra was released, I wanted to try it out on this idea: the particle behaviour is a complex 3D problem, which made it a fun experiment in understanding and building its visual character.
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
              At some point, I was walking through a city and saw a clock that sparked the idea for this project. This clock works in a few different languages
              that I know. It uses an algorithm called rectangle packing to find an optimal arrangement for the words. I implemented a restricted
              version of the algorithm to ensure it is always readable from top to bottom.
            </p>
          </div>
        </ExperienceContainer>
        <ExperienceContainer>
          <a rel="noopener noreferrer" href="http://www.jeroentravel.com">
            <ExperienceImage src="/assets/JeroenTravel.png" />
          </a>
          <div>
            <ExperienceTitle as='a' rel="noopener noreferrer" href="http://www.jeroentravel.com">Jeroen Travel - My Personal Travel Tracker</ExperienceTitle>
            <p>
              I made this personal travel website out of a longing for a better experience while travelling, as well as a more detailed geographical representation of my travels.
              I developed an admin portal where I can upload GPS tracks and photos. GPS data is automatically extracted from uploaded photos,
              which are then represented on the map.

              It is also possible to write stories for every entry.

              This project is an active work in progress, so some features still require improvement.
            </p>
          </div>
        </ExperienceContainer>
      </Container>
    </Section>
  )
}

export { Projects }
