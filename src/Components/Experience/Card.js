import { makeStyles } from '../../../node_modules/@material-ui/core/styles'
import Avatar from '../../../node_modules/@material-ui/core/Avatar'
import Container from '../../../node_modules/@material-ui/core/Container'
import FolderIcon from '../../../node_modules/@material-ui/icons/Folder'
import Grid from '../../../node_modules/@material-ui/core/Grid'
import List from '../../../node_modules/@material-ui/core/List'
import ListItem from '../../../node_modules/@material-ui/core/ListItem'
import ListItemAvatar from '../../../node_modules/@material-ui/core/ListItemAvatar'
import ListItemText from '../../../node_modules/@material-ui/core/ListItemText'
import Paper from '../../../node_modules/@material-ui/core/Paper'
import React from '../../../node_modules/react'
import Typography from '../../../node_modules/@material-ui/core/Typography'
import map from '../../../node_modules/lodash/map'

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    color: theme.palette.common.black,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  container: {
    paddingTop: '32px',
    backgroundColor: theme.palette.grey[200],
  },
  title: {
    margin: theme.spacing(4, 2, 2),
  },
}))

const renderExperience = experiencePoints => map(experiencePoints, experience => (<li key={experience}>{experience}</li>))

const renderTechnologies = technologies => map(technologies, technology => (
  <ListItem key={`${technology}`}>
    <ListItemAvatar>
      <Avatar>
        <FolderIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={technology} />
  </ListItem>
))


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
                <ul>
                  {renderExperience(experiencePoints)}
                </ul>
              </div>
            </Grid>
            <Grid item md={3}>
              <Typography className={classes.title} variant='h6'>
                Technologies
              </Typography>
              <div className={classes.demo}>
                <List>
                  {renderTechnologies(technologies)}
                </List>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  )
}

export default Card
