import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
// import Markdown from './Markdown'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import post1 from './blog-post.1.md'
// import post2 from './blog-post.2.md'
// import post3 from './blog-post.3.md'

function MadeWithLove() {
  return (
    <Typography align='center' color='textSecondary' variant='body2'>
      {'Built with love by the '}
      <Link color='inherit' href='https://material-ui.com/'>
        Material-UI
      </Link>
      {' team.'}
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
    // backgroundColor: 'rgba(0,0,0,.3)',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  textContainer: {
    position: 'relative',
    padding: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  headerText: {
    fontSize: '6vw',
    fontWeight: 'bold',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}))

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
]

const social = [ 'GitHub', 'Twitter', 'Facebook' ]

export default function Home() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='disabled'>
        <main>
          {/* Main featured post */}
          {/* <Paper className={classes.mainFeaturedPost}> */}
          {/* Increase the priority of the hero background image */}
          {/* {
            <img
              alt='background'
              src='https://source.unsplash.com/user/erondu'
              style={{ display: 'none' }}
            />
          } */}
          {/* <div className={classes.overlay} /> */}
          <Grid className={classes.textContainer}container direction='column' spacing='2'>
            <Grid item md={12}>
              <Typography className={classes.headerText}>
                  Darrel Jiang.
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Typography className={classes.headerText}>
                  Software Developer.
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Typography className={classes.headerText}>
                  Hooman.
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Typography className={classes.headerText} variant='h3'>
                <a href='https://www.linkedin.com/in/darreljiang'>LinkedIn.</a>
              </Typography>
            </Grid>
          </Grid>
          {/* </Paper> */}
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid className={classes.cardGrid} container spacing={4}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} md={6} xs={12}>
                <CardActionArea component='a' href='#'>
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component='h2' variant='h5'>
                          {post.title}
                        </Typography>
                        <Typography color='textSecondary' variant='subtitle1'>
                          {post.date}
                        </Typography>
                        <Typography paragraph variant='subtitle1'>
                          {post.description}
                        </Typography>
                        <Typography color='primary' variant='subtitle1'>
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image='https://source.unsplash.com/random'
                        title='Image title'
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid className={classes.mainGrid} container spacing={5}>
            {/* Main content */}
            <Grid item md={8} xs={12}>
              <Typography gutterBottom variant='h6'>
                From the Firehose
              </Typography>
              <Divider />

            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item md={4} xs={12}>
              <Paper className={classes.sidebarAboutBox} elevation={0}>
                <Typography gutterBottom variant='h6'>
                  About
                </Typography>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                  amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
              </Paper>
              <Typography className={classes.sidebarSection} gutterBottom variant='h6'>
                Archives
              </Typography>

              <Typography className={classes.sidebarSection} gutterBottom variant='h6'>
                Social
              </Typography>
              {social.map(network => (
                <Link display='block' href='#' key={network} variant='body1'>
                  {network}
                </Link>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth='lg'>
          <Typography align='center' gutterBottom variant='h6'>
            Footer
          </Typography>
          <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
            Something here to give the footer a purpose!
          </Typography>
          <MadeWithLove />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}
