import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import React from 'react'
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfiedAlt'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles(theme => ({
  toolbar: {
    position: 'fixed',
    top: 0,
    width: '100vw',
    zIndex: 10,
    backgroundColor: '#1A1B1C',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))

function Navbar() {
  const classes = useStyles()

  return (

    <Toolbar className={classes.toolbar} >
      <Typography
        align='left'
        className={classes.toolbarTitle}
        color='inherit'
        component='h2'
        noWrap
        variant='h5'
      >
        <Button>
          <SentimentSatisfied fontSize='large' style={{ color: 'white' }} />
        </Button>
      </Typography>
    </Toolbar>
  )
}

export default Navbar
