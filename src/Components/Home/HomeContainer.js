import { withStyles } from '../../../node_modules/@material-ui/core/styles'
import Container from '../../../node_modules/@material-ui/core/Container'
import CssBaseline from '../../../node_modules/@material-ui/core/CssBaseline'
import ExpCard from '../Experience/Card'
import ExpChart from '../Experience/ExpChart'
import ExpTimeline from '../Experience/ExpTimeline'
import FrontPage from './FrontPage'
import Grid from '../../../node_modules/@material-ui/core/Grid'
import Paper from '../../../node_modules/@material-ui/core/Paper'
import React from '../../../node_modules/react'
import Typography from '../../../node_modules/@material-ui/core/Typography'
import adventureImage from '../../assets/images/adventure.jpg'
import mainBackgroundImage from '../../assets/images/main-image.jpg'
import mainBackgroundMobileImage from '../../assets/images/main-mobile-image.jpg'
// import styles from './styles'

const styles = theme => ({
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
    backgroundImage: `url(${mainBackgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mainFeaturedPostMobile: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: `url(${mainBackgroundMobileImage})`,
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
    backgroundColor: 'rgba(0,0,0,0)',
  },
  textContainer: {
    position: 'relative',
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
  media: {
    height: '100vh',
  },
})

const isMobileDevice = () => typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1
const isMobileInPortrait = () => isMobileDevice && window.orientation === 0

class Home extends React.Component {
  state = {
    screenOrientation: 0,
  }

  componentDidMount() {
    window.addEventListener('orientationchange', this.setScreenOrientation)
  }

  setScreenOrientation = () => {
    this.setState({ screenOrientation: window.orientation })
  }

  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <CssBaseline />
        <FrontPage />
        <ExpChart />
        <ExpTimeline />
        <footer className={classes.footer}>
          <Container maxWidth='lg'>
            <Typography align='center' variant='h6'>
              Footer
            </Typography>
            <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
              More footer content to come!
            </Typography>
            <Typography align='center' color='textSecondary' variant='body2'>
              {'Built with love by me!'}
            </Typography>
          </Container>
        </footer>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Home)
