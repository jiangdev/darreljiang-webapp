import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import mainBackgroundImage from '../../assets/images/main-image.jpg'
import mainBackgroundMobileImage from '../../assets/images/main-mobile-image.jpg'

const styles = theme => ({
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
})

const isMobileDevice = () => typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1
const isMobileInPortrait = () => isMobileDevice && window.orientation === 0

const MainPage = ({ classes }) => (
  <Paper className={isMobileDevice() && isMobileInPortrait() ? classes.mainFeaturedPostMobile : classes.mainFeaturedPost} style={{ backgroundImage: 'url' }}>
    <div className={classes.overlay} />
    <Grid className={classes.textContainer} container direction='column' justify='center' spacing={2}>
      <Grid item>
        <Typography align='center' style={{ fontWeight: '500' }} variant={isMobileDevice() ? 'h2' : 'h1'}>
          Darrel Jiang
        </Typography>
      </Grid>
      <Grid item>
        <Typography align='center' variant={isMobileDevice() ? 'h5' : 'h4'}>
          Passionate software developer,
        </Typography>
        <Typography align='center' variant={isMobileDevice() ? 'h5' : 'h4'}>
          avid adventurer
        </Typography>
      </Grid>
      <Grid item>
        <Typography align='center' variant={isMobileDevice() ? 'h5' : 'h4'}>
          <a href='https://www.linkedin.com/in/darreljiang' style={{ color: '#FFFFFF' }}>linkedin.com/in/darreljiang</a>
        </Typography>
      </Grid>
    </Grid>
  </Paper>
)

export default withStyles(styles)(MainPage)