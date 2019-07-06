import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Container from '@material-ui/core/Container'
import FolderIcon from '@material-ui/icons/Folder'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    color: theme.palette.common.black,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mainFeaturedPostContent: { position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    }},
  container: {
    paddingTop: '32px',
    paddingBottom: '32px',
    backgroundColor: theme.palette.grey[200],
  },
}))


const ExpCard = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Container className={classes.container} maxWidth='false'>
        <Paper className={classes.mainFeaturedPost}>
          <Grid container>
            <Grid item md={8}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography color='inherit' component='h1' gutterBottom variant='h3'>
                    Ungerboeck Software International (USI)
                </Typography>
                <Typography color='inherit' paragraph variant='h5'>
                    Multiple lines of text that form the lede, informing new readers quickly and
                    efficiently about what&apos;s most interesting in this post&apos;s contents.
                </Typography>
              </div>
            </Grid>
            {/* <Grid item md={4}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography color='inherit' component='h1' gutterBottom variant='h3'>
                    Ungerboeck Software International (USI)
                </Typography>
                <Typography color='inherit' paragraph variant='h5'>
                    Multiple lines of text that form the lede, informing new readers quickly and
                    efficiently about what&apos;s most interesting in this post&apos;s contents.
                </Typography>
              </div>
            </Grid> */}
            <Grid item md={4}>
              <Typography className={classes.title} variant='h6'>
                Technologies
              </Typography>
              <div className={classes.demo}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='VB .NET' />
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  )
}

export default ExpCard
