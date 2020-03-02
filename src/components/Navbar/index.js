import React from 'react'
import Grid from '@material-ui/core/Grid'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <Grid
      className={styles['navbar']}
      direction="row"
      justify="flex-end"
      alignItems="center"
      container
    />
  )
}

export default Navbar
