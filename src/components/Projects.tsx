import React from 'react'
import styles from '../styles/Projects.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export default function Projects() {
  return (
    <div className={styles.projectsWrapper}>
      <Stack className={styles.header} alignItems="flex-start" flexDirection="row" justifyContent="space-between" padding=".5em">
        <h1>Projects</h1>
        <Button variant="outlined">Resume</Button>

      </Stack>
    </div>
  )
}
