import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Chart from 'react-google-charts'
import Paper from '@material-ui/core/Paper'
import React from 'react'

const styles = theme => ({
  root: {
    padding: theme.spacing(4),
  },
})

const companyData = [
  [
    { type: 'string', id: 'Technology' },
    { type: 'string', id: 'Type' },
    { type: 'date', id: 'Start' },
    { type: 'date', id: 'End' },
  ],
  [
    'Organization',
    'Monsanto',
    new Date(2015, 7),
    new Date(2019, 6),
  ],
  [
    'Organization',
    'Ocelot',
    new Date(2019, 6),
    new Date(2019, 11),
  ],
]

const data = [
  [
    { type: 'string', id: 'Technology' },
    { type: 'string', id: 'Type' },
    { type: 'date', id: 'Start' },
    { type: 'date', id: 'End' },
  ],
  [
    'Angular JS',
    'Javascript',
    new Date(2015, 7),
    new Date(2016, 1),
  ],
  [
    'Jasmine',
    'Testing',
    new Date(2015, 7),
    new Date(2016, 1),
  ],
  [
    'PostgreSQL',
    'Database',
    new Date(2015, 7),
    new Date(2017, 2),
  ],
  [
    'PostgreSQL',
    'Database',
    new Date(2018, 7),
    new Date(2019, 7),
  ],
  [
    'Scala',
    'JVM',
    new Date(2015, 7),
    new Date(2017, 2),
  ],
  [
    'Scala',
    'JVM',
    new Date(2018, 7),
    new Date(2019, 7),
  ],
  [
    'React JS',
    'Javascript',
    new Date(2016, 2),
    new Date(2017, 2),
  ],
  [
    'React JS',
    'Javascript',
    new Date(2018, 7),
    new Date(2019, 11),
  ],
  [
    'React-Redux',
    'Javascript',
    new Date(2018, 7),
    new Date(2019, 11),
  ],
  [
    'Mocha',
    'Testing',
    new Date(2016, 2),
    new Date(2017, 2),
  ],
  [
    'Jest',
    'Testing',
    new Date(2018, 7),
    new Date(2019, 7),
  ],
  [
    'GraphQL',
    'Query',
    new Date(2019, 2),
    new Date(2019, 7),
  ],
  [
    'Swift 3',
    'Mobile',
    new Date(2017, 3),
    new Date(2018, 7),
  ],
  [
    'Swift 4',
    'Mobile',
    new Date(2017, 10),
    new Date(2018, 7),
  ],
  [
    'DynamoDB',
    'Database',
    new Date(2019, 2),
    new Date(2019, 11),
  ],
]

const ExpTimeline = ({ classes }) => (
  <React.Fragment>
    <Paper className={classes.root}>
      <Typography variant='h4'>Where I've been, What I've done</Typography>
      <br />
      <Chart
        chartType='Timeline'
        data={companyData}
        height={'100px'}
        loader={<div>Loading Chart</div>}
        options={{
          timeline: {
            showBarLabels: true,
            showRoLabels: false,
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
      <Chart
        chartType='Timeline'
        data={data}
        height={'800px'}
        loader={<div>Loading Chart</div>}
        options={{
          timeline: {
            showBarLabels: false,
          },
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </Paper>
  </React.Fragment>
)

export default withStyles(styles)(ExpTimeline)
