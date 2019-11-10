import { Typography } from '@material-ui/core'
import Chart from 'react-google-charts'
import Paper from '@material-ui/core/Paper'
import React from 'react'

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

const ExpTimeline = () => (
  <React.Fragment>
    <Typography variant='h5'>My Experience</Typography>
    <Paper>
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

export default ExpTimeline
