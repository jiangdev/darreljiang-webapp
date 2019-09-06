import Chart from 'react-google-charts'
import React from 'react'

const columns = [
  { type: 'string', label: 'Task ID' },
  { type: 'string', label: 'Task Name' },
  { type: 'string', label: 'Resource' },
  { type: 'date', label: 'Start Date' },
  { type: 'date', label: 'End Date' },
  { type: 'number', label: 'Duration' },
  { type: 'number', label: 'Percent Complete' },
  { type: 'string', label: 'Dependencies' },
]
const rows = [
  [
    'angular-2015',
    'Angular JS',
    'javascript',
    new Date(2015, 6, 15),
    new Date(2015, 12, 20),
    null,
    100,
    null,
  ],
  [
    'jasmine-2015',
    'Jasmine',
    'testing',
    new Date(2015, 6, 15),
    new Date(2015, 12, 20),
    null,
    100,
    null,
  ],
  [
    'postgres-2015',
    'PostgreSQL',
    'database',
    new Date(2015, 6, 15),
    new Date(2017, 1, 20),
    null,
    100,
    null,
  ],
  [
    'scala-2015',
    'Scala',
    'jvm',
    new Date(2015, 6, 15),
    new Date(2017, 1, 20),
    null,
    100,
    null,
  ],
  [
    'react-2016',
    'React JS',
    'javascript',
    new Date(2016, 1, 1),
    new Date(2017, 1, 20),
    null,
    100,
    null,
  ],
  [
    'mocha-2016',
    'Mocha',
    'testing',
    new Date(2016, 1, 1),
    new Date(2017, 1, 20),
    null,
    100,
    null,
  ],
  [
    'swift3-2017',
    'Swift 3',
    'mobile',
    new Date(2017, 2, 1),
    new Date(2018, 6, 20),
    null,
    100,
    null,
  ],
  [
    'swift4-2017',
    'Swift 4',
    'mobile',
    new Date(2017, 9, 20),
    new Date(2018, 6, 20),
    null,
    100,
    null,
  ],
  [
    'react-2018',
    'React JS',
    'javascript',
    new Date(2018, 6, 20),
    new Date(),
    null,
    100,
    'react-2016',
  ],
  [
    'redux-2018',
    'React-Redux',
    'javascript',
    new Date(2018, 6, 20),
    new Date(),
    null,
    100,
    null,
  ],
  [
    'jest-2018',
    'Jest',
    'testing',
    new Date(2018, 6, 20),
    new Date(2019, 6, 20),
    null,
    100,
    null,
  ],
  [
    'scala-2018',
    'Scala',
    'jvm',
    new Date(2018, 6, 20),
    new Date(2019, 6, 20),
    null,
    100,
    'scala-2015',
  ],
  [
    'postgres-2018',
    'PostgreSQL',
    'database',
    new Date(2018, 6, 20),
    new Date(2019, 6, 20),
    null,
    100,
    'postgres-2015',
  ],
  [
    'graphql-2018',
    'GraphQL',
    'query',
    new Date(2019, 1, 20),
    new Date(2019, 6, 20),
    null,
    100,
    null,
  ],
  [
    'dynamo-2018',
    'DynamoDB',
    'database',
    new Date(2019, 1, 20),
    new Date(),
    null,
    100,
    null,
  ],
]

const ExpChart = () => (
  <div className='App'>
    <Chart
      chartType='Gantt'
      data={[ columns, ...rows ]}
      height='1000px'
      legendToggle
      width='100%'
    />
  </div>
)

export default ExpChart
