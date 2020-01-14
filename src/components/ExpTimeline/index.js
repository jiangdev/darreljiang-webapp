import React from 'react';
import Chart from 'react-google-charts';
import styles from './ExpTimeline.module.scss';

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
];

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
];

const ExpTimeline = () => (
  <div className={styles.expTimeline}>
    <div className={styles.title}>
      Where I've been and what I've done
    </div>
    <Chart
      className={styles.chart}
      chartType="Timeline"
      data={companyData}
      height="100px"
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
      className={styles.chart}
      chartType="Timeline"
      data={data}
      height="800px"
      loader={<div>Loading Chart</div>}
      options={{
        timeline: {
          showBarLabels: false,
        },
      }}
      rootProps={{ 'data-testid': '2' }}
    />
  </div>
);

export default ExpTimeline;
