import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import React from 'react'
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfiedAlt'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles(theme => ({
  toolbar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 10,
    // backgroundColor: '#ffffff',
    backgroundColor: '#FAFAFA',
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

    <Toolbar className={classes.toolbar}>
      <Typography
        align='left'
        className={classes.toolbarTitle}
        color='inherit'
        component='h2'
        noWrap
        variant='h5'
      >
        <Button>
          <SentimentSatisfied fontSize='large' />
        </Button>
      </Typography>
    </Toolbar>
  )
}

export default Navbar
