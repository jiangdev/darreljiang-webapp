import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'

function MadeWithLove() {
  return (
    <Typography align='center' color='textSecondary' variant='body2'>
      {'Built with love by the me!'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  textContainer: {
    position: 'relative',
    color: 'white',
    backgroundColor: '#1A1B1C',
    height: '100vh',
    width: '100vw',
    margin: 0,
  },
  headerText: {
    fontSize: '5em',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}))

function isMobileDevice() {
  return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1
}

export default function Home() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid className={classes.textContainer} container direction='column' justify='center' spacing={2}>
        <Grid item>
          <Typography align='center' style={{ fontWeight: '500' }} variant={isMobileDevice() ? 'h2' : 'h1'}>
                  Darrel Jiang
          </Typography>
        </Grid>
        <Grid item>
          <Typography align='center' variant={isMobileDevice() ? 'h5' : 'h4'}>
                  A Passionate Software Developer
          </Typography>
        </Grid>
        <Grid item>
          <Typography align='center' variant={isMobileDevice() ? 'h5' : 'h4'}>
            <a href='https://www.linkedin.com/in/darreljiang'style={{ color: '#0077CC' }}>linkedin.com/in/darreljiang</a>
          </Typography>
        </Grid>
      </Grid>

      <footer className={classes.footer}>
        <Container maxWidth='lg'>
          <Typography align='center' variant='h6'>
            Footer
          </Typography>
          <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
            More footer content to come!
          </Typography>
          <MadeWithLove />
        </Container>
      </footer>
    </React.Fragment>
  )
}
