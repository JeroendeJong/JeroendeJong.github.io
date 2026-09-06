import styled from "styled-components"
import { LifeExperienceItem } from "./LifeExperienceItem"
import { JobExperienceAtKPVLab, JobExperienceAtLivingMap, JobExperienceAtSimacan } from "./Experiences"
import { Tag, TagContainer } from "../Tag"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`

export function LifeExperience() {
  return (
    <Container>
      <Simacan />
      <RadboudUniversity />
      <KPVLab />
      <LivingMap />
      <HogeschoolUtrecht />
    </Container>
  )
}

function Simacan() {
  return (
    <LifeExperienceItem
      imageSource="/assets/Simacan.png"
      title="Frontend Software Developer at Simacan B.V."
      period="Current role"
    >
      <JobExperienceAtSimacan />
      <TagContainer>
        <Tag>React Native</Tag>
        <Tag>Kotlin</Tag>
        <Tag>Android</Tag>
        <Tag>Real-time applications</Tag>
        <Tag>Logistics</Tag>
        <Tag>Frontend development</Tag>
      </TagContainer>
    </LifeExperienceItem>
  )
}

function RadboudUniversity() {
  return (
    <LifeExperienceItem
      imageSource="/assets/Radboud.png"
      title="MSc in Human Geography at Radboud University"
      period="September 2021 - December 2023"
    >
      <p>
        My experience as a software developer taught me the value of stepping back before diving into the details. Wanting to strengthen my strategic thinking, research methodology, and management skills, I pursued a master&apos;s degree in Human Geography at Radboud University. Although the subject is not directly tied to software development, the research, communication, and analytical skills I gained are highly relevant to my work. It was also a field I had long been personally interested in.
      </p>
      <TagContainer>
        <Tag>Analytical Thinking</Tag>
        <Tag>Writing and Reporting skills</Tag>
        <Tag>Research Skills</Tag>
        <Tag>Experience in Management</Tag>
      </TagContainer>
    </LifeExperienceItem>
  )
}

function KPVLab() {
  return (
    <LifeExperienceItem
      imageSource="/assets/KPV.jpg"
      title="Frontend Software Developer at KPV Lab"
      period="December 2020 - September 2021"

    >
      <JobExperienceAtKPVLab />
      <TagContainer>
        <Tag>Functional Programming</Tag>
        <Tag>TDD</Tag>
        <Tag>3D data visualisations</Tag>
        <Tag>React</Tag>
        <Tag>Redux</Tag>
      </TagContainer>
    </LifeExperienceItem>
  )
}

function LivingMap() {
  return (
    <LifeExperienceItem
      imageSource="/assets/LM.png"
      title="Software Developer at Living Map"
      period="February 2017 - December 2020"
    >
      <JobExperienceAtLivingMap />
      <TagContainer>
        <Tag>React</Tag>
        <Tag>Redux</Tag>
        <Tag>Mapbox</Tag>
        <Tag>Micro Frontends</Tag>
        <Tag>Componentized UI library</Tag>
        <Tag>Styled Components</Tag>
        <Tag>Scala</Tag>
        <Tag>NodeJS</Tag>
      </TagContainer>
    </LifeExperienceItem>
  )
}

function HogeschoolUtrecht() {
  return (
    <LifeExperienceItem
      imageSource="/assets/HU.png"
      title="BSc Geodesy and Geo-informatics at the Hogeschool Utrecht"
      period="August 2013 - August 2017"
    >
      During my BSc, I worked extensively with geographical databases and applied mathematics, including linear algebra and matrix computation. I also learned how to visualise information, structure data, and interpret its meaning.
      <TagContainer>
        <Tag>Statistics</Tag>
        <Tag>Linear Algebra</Tag>
        <Tag>Geodesy</Tag>
        <Tag>Geographical Information Systems (GIS)</Tag>
        <Tag>Databases</Tag>
        <Tag>Data Visualizations</Tag>
      </TagContainer>
    </LifeExperienceItem>
  )
}
