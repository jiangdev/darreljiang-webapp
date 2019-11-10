import Chart from '../../../node_modules/react-google-charts'
import Paper from '../../../node_modules/@material-ui/core/Paper'
import React from '../../../node_modules/react'

const ExpTimeline = () => (
  <React.Fragment>
    <Paper>
      <Chart
        chartType='Timeline'
        data={[
          [
            { type: 'string', id: 'Term' },
            { type: 'string', id: 'Name' },
            { type: 'date', id: 'Start' },
            { type: 'date', id: 'End' },
          ],
          [
            '1',
            'George Washington',
            new Date(1789, 3, 30),
            new Date(1797, 2, 4),
          ],
          [ '2', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4) ],
          [ '3', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4) ],
        ]}
        height={'300px'}
        loader={<div>Loading Chart</div>}
        rootProps={{ 'data-testid': '2' }}
      />
    </Paper>
  </React.Fragment>
)

export default ExpTimeline
