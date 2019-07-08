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
import map from 'lodash/map'

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
    backgroundColor: theme.palette.grey[200],
  },
  title: {
    margin: theme.spacing(4, 2, 2),
  },
}))

const renderExperience = experiencePoints => (
  <ul>
    {map(experiencePoints, experience => <li>{experience}</li>)}
  </ul>
)

const renderTechnologies = technologies => (
  <List>
    {
      map(technologies, technology => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={technology} />
        </ListItem>
      ))
    }
  </List>
)

const Card = ({ company, experiencePoints, technologies, term, position }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Container className={classes.container} maxWidth={false}>
        <Paper className={classes.mainFeaturedPost}>
          <Grid container>
            <Grid item md={9}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography color='inherit' gutterBottom variant='h4'>
                  {company}
                </Typography>
                <Typography color='inherit' gutterBottom variant='subtitle1'>
                  <i>{position}, {term}</i>
                </Typography>
                {renderExperience(experiencePoints)}
              </div>
            </Grid>
            <Grid item md={3}>
              <Typography className={classes.title} variant='h6'>
                Technologies
              </Typography>
              <div className={classes.demo}>
                {renderTechnologies(technologies)}
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  )
}

export default Card
