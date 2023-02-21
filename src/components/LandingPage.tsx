import React from 'react'
import { useState } from 'react'
import styles from '../styles/LandingPage.module.css'
import GitHub from '../images/icon-github.svg'
import LinkedIn from '../images/icon-linkedin.svg'
import { Link, Button } from '@mui/material'


export default function LandingPage() {

  const [mode, setMode] = useState(true)


  return (
    <div className={styles.landingWrapper}>
      <div className={styles.nav}>
        <span>christopherconway</span>
        <nav>
          <ul className={styles.navLinks}>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li>
              <Button variant="outlined" size="large" color="success">
                <Link
                  href="https://drive.google.com/file/d/1U4BuhfXINBjEiHo7yHHFfbpgzpe0_cJG/view?usp=sharing"
                  target="_blank">Resume</Link>
              </Button></li>
            {/* <li className="resumeLink"><a href="https://drive.google.com/file/d/1U4BuhfXINBjEiHo7yHHFfbpgzpe0_cJG/view?usp=sharing" target="_blank">Resume</a></li> */}
            <li><a href="https://github.com/ConwayCJ" target="_blank"><img src={GitHub}></img></a></li>
            <li><a href="https://www.linkedin.com/in/conwaycj/" target="_blank"><img src={LinkedIn}></img></a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
