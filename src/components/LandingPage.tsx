import React from 'react'
import { useState } from 'react'
import styles from '../styles/LandingPage.module.css'
import GitHub from '../images/icon-github.svg'
import LinkedIn from '../images/icon-linkedin.svg'



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
            <li><a href="https://github.com/ConwayCJ" target="_blank"><img src={GitHub}></img></a></li>
            <li><a href="https://www.linkedin.com/in/conwaycj/" target="_blank"><img src={LinkedIn}></img></a></li>
          </ul>
        </nav>
      </div>

      <div>

      </div>


    </div>
  )
}
