import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import styles from '../styles/Projects.module.css'
import ProjectImage1 from '../images/thumbnail-project-1-large.webp'
import ProjectImage2 from '../images/thumbnail-project-2-large.webp'
import ProjectImage3 from '../images/thumbnail-project-3-large.webp'
import ProjectImage4 from '../images/thumbnail-project-4-large.webp'
import ProjectImage5 from '../images/thumbnail-project-5-large.webp'
import ProjectImage6 from '../images/thumbnail-project-6-large.webp'

interface Project {
  title: string;
  codeLink: string;
  previewImage: string;
  projectDescription: string;
  liveLink: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([{
    title: 'Dynamic Tic-Tac-Toe',
    codeLink: 'https://github.com/ConwayCJ/CodingChallenges/blob/main/codecademy/findyourhat/main.js',
    previewImage: ProjectImage1,
    projectDescription: `Tic-Tac-Toe with a resizeable grid. 
    Check the code for the win condition check!    
    HTML, CSS, JavaScript`,
    liveLink: "https://github.com/ConwayCJ/CodingChallenges/blob/main/codecademy/findyourhat/main.js"
  }, {
    title: 'Clock App',
    codeLink: 'https://github.com/ConwayCJ/CodingChallenges/blob/main/codecademy/findyourhat/main.js',
    previewImage: ProjectImage2,
    projectDescription: `A clock based on your local time zone, styled with CSS to resemble an actual clock.`,
    liveLink: "https://github.com/ConwayCJ/CodingChallenges/blob/main/codecademy/findyourhat/main.js"
  }, {
    title: 'ToDo App',
    codeLink: 'https://github.com/ConwayCJ/CodingChallenges/blob/main/codecademy/findyourhat/main.js',
    previewImage: ProjectImage3,
    projectDescription: "Example description of a project",
    liveLink: "https://github.com/ConwayCJ/CodingChallenges/blob/main/codecademy/findyourhat/main.js"
  }, {
    title: 'Movie Review App',
    codeLink: 'https://github.com/ConwayCJ/CodingChallenges/blob/main/codecademy/findyourhat/main.js',
    previewImage: ProjectImage4,
    projectDescription: "Example description of a project",
    liveLink: "https://github.com/ConwayCJ/CodingChallenges/blob/main/codecademy/findyourhat/main.js"
  }, {
    title: 'Calculator App',
    codeLink: 'https://github.com/ConwayCJ/CodingChallenges/blob/main/codecademy/findyourhat/main.js',
    previewImage: ProjectImage5,
    projectDescription: "Example description of a project",
    liveLink: "https://github.com/ConwayCJ/CodingChallenges/blob/main/codecademy/findyourhat/main.js"
  }, {
    title: 'Pokemon Team Builder',
    codeLink: 'https://github.com/ConwayCJ/CodingChallenges/blob/main/codecademy/findyourhat/main.js',
    previewImage: ProjectImage6,
    projectDescription: `An app used to build your own Pokemon Team.
    Goals are to add the ability to get stats of your pokemon team after being added.`,
    liveLink: "https://github.com/ConwayCJ/CodingChallenges/blob/main/codecademy/findyourhat/main.js"
  }])

  return (
    <div className={styles.projectsWrapper}>

      <span className={styles.header}>
        <h1 id="projects">Projects</h1>
        <Button variant="outlined" color="success"><a href="https://drive.google.com/file/d/1U4BuhfXINBjEiHo7yHHFfbpgzpe0_cJG/view?usp=sharing" target="_blank">Resume</a></Button>
      </span>
      <span className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <span className={styles.projectsCard} key={index}>


            <img src={project.previewImage} width="300px" />

            <span className={styles.cardText}>
              <h1>{project.title}</h1>
              <p>{project.projectDescription}</p>
            </span>




            <div className={styles.buttonContainer}>
              <Button disabled={true} size="large" variant="outlined">Live</Button>
              <Button disabled={true} size="large" variant='outlined'>See Code</Button>
            </div>
          </span>
        ))}
      </span>

    </div>
  )
}
