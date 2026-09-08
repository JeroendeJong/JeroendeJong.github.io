import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.main`
  margin-top: 90px;
  margin-bottom: 50px;
`

const Title = styled.span`
  --gradient-to-color: #FF006E;
  --gradient-from-color: #FB5607;
  --gradient-color-stops: var(--gradient-from-color), var(--gradient-to-color, rgba(251, 86, 7, 0));
  background-image: linear-gradient(to right, var(--gradient-color-stops));
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  font-size: 40px; 
`

const Description = styled.p`
  margin-top: 0.5em;
  color: #4a5568;

  strong {
    color: black;
  }
`

const Navigation = styled.div`
  margin: 2em;
  width: min-content;
`

const LinkItem = styled(Link)`
  color: black;
  display: block;
  padding: 0.25em;
  font-size: 25px;
  font-weight: 700;
  border-bottom: 5px solid black;

  &:hover, &:focus {
    border-bottom: 5px solid #FB5607;
    transition: 0.2s;
    color: #FB5607;
  }
`

const MainTitleLine = styled.h1`
  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end
  }
`

const CharacteristicText = styled.div`
  font-size: 30px;
  font-weight: 200;
`

const text = ['Builder', 'Frontend Engineer', 'Geography Geek', 'Data Enthusiast']

function Home() {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState(0);
  const [direction, setDirection] = useState('forward');
  const isFull = size === text[index].length

  // direction effect
  useEffect(() => {
    const currentText = text[index];
    if (size >= currentText.length) {
      setDirection(d => d === 'forward' ? 'backward' : 'forward')
    }
  }, [index, size])

  useEffect(() => {
    if (size === 0 && direction === 'backward') {
      setIndex((state) => (state + 1) % text.length)
      setDirection('forward')
    }
  }, [size, direction])

  // effect for displaying the current text item.
  useEffect(() => {
    const isForward = direction === 'forward'
    const timerID = setTimeout(() => {
      if (isForward) setSize(size + 1)
      else setSize(size - 1)
    }, isFull ? 2500 : isForward ? 100 : 50);

    return () => clearTimeout(timerID);
  }, [direction, size, isFull]);

  const currentText = text[index].substring(0, size)

  return (
    <Container>
      <MainTitleLine>
        <Title>
          Jeroen de Jong
        </Title>
        <CharacteristicText>
          {currentText} {!isFull && '|'}
        </CharacteristicText>
      </MainTitleLine>
      <Description>
        I'm a software engineer focused on frontend development, with experience in React, TypeScript and React Native. I enjoy making complex geographical data understandable through clear interfaces. Currently, I work in logistics SaaS at Simacan B.V..
      </Description>

      <Navigation>
        <LinkItem id="about" to="/about">About</LinkItem>
        <LinkItem id="projects" to="/projects">Projects</LinkItem>
        <LinkItem id="articles" to="/articles">Articles</LinkItem>
      </Navigation>
    </Container>
  )
}

export { Home }
