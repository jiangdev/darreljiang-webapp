import { withStyles } from '@material-ui/core/styles'
import Container from '../../../node_modules/@material-ui/core/Container'
import React from 'react'
import Typography from '../../../node_modules/@material-ui/core/Typography'

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
})

const Footer = ({ classes }) => (
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
)

export default withStyles(styles)(Footer)
