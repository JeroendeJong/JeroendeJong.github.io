import { Link } from 'react-router-dom';
import styled from 'styled-components'

const TopContainer = styled.header`
  background-color: white;
  padding-bottom: 5px;
  z-index: 999;
`

const TopHeaderOne = styled.h1`
  font-size: 24px;
  display: inline;
  font-weight: 900;
`

const TopSmall = styled.small`
  float: right;
  display: block;
  font-size: 13px;
  font-weight: 100;
`

const TopInfoLink = styled(Link)`
  color: black;
  padding: 0.25em;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 3px solid black;
  margin: 0 4px;

  &:hover, &:focus {
    border-bottom: 3px solid #FB5607;
    transition: 0.2s;
    color: #FB5607;
  }
`
const LogoLink = styled(Link)`
  --gradient-to-color: #FF006E;
  --gradient-from-color: #FB5607;
  --gradient-color-stops: var(--gradient-from-color), var(--gradient-to-color, rgba(251, 86, 7, 0));
  background-image: linear-gradient(to right, var(--gradient-color-stops));
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 20px; 
`

function Header() {
  return (
    <TopContainer>
      <nav> 
        <LogoLink to="/">
          <TopHeaderOne>Jeroen de Jong</TopHeaderOne>
        </LogoLink>
    
        <TopSmall>
          <TopInfoLink id="projects" to="/projects">Projects</TopInfoLink>
          <TopInfoLink id="about" to="/about">About</TopInfoLink>
          <TopInfoLink id="articles" to="/articles">Research &amp; Writing</TopInfoLink>
        </TopSmall>  
      </nav>
    </TopContainer>
  )
}

export { Header }
