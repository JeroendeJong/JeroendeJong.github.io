import styled from "styled-components"
import { LifeExperience } from "./About/LifeExperience";
import { ElevatorPitch, Personal } from "./About/Personal";
import { Tag, TagContainer } from "./Tag";


const SectionTitle = styled.h2`
  margin: 30px 0;
  border-bottom: 5px solid black;
`

export function Section({ title, children }: { title: string, children: any }) {
  return (
    <>
      <SectionTitle>
        {title}
      </SectionTitle>
      {children}
    </>
  )
}

function About() {
  return (
    <>
      <Personal/>
      <ElevatorPitch/>

      <Section title="Experience and Education">
        <LifeExperience/>
      </Section>

      <Section title="Skills">
        <TagContainer>
          <Tag>React</Tag>
          <Tag>Redux</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Node.js</Tag>
          <Tag>Styled Components</Tag>
          <Tag>Mapbox</Tag>

          <Tag>(S)CSS</Tag>
          <Tag>Vite</Tag>
          <Tag>Scala</Tag>
          <Tag>Git</Tag>
          <Tag>Jest</Tag>
          <Tag>Storybook</Tag>

          <Tag>Data Visualizations</Tag>
          <Tag>(Geospatial) data</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>REST APIs</Tag>
          <Tag>Swagger documentation</Tag>

          <Tag>Scrum & Agile management</Tag>
          <Tag>Continuous Integration</Tag>
          <Tag>Continuous Deployment</Tag>
          <Tag>Kubernetes, AWS, GCP</Tag>
          <Tag>AWS</Tag>
          <Tag>GCP</Tag>

        </TagContainer>
      </Section>

      <div style={{height: '100px'}}/>
    </>
  )
}


export { About }
