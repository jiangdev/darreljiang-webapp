import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'
import axios from 'axios'

class SpaceXContainer extends React.Component {
    state = {
      launchDates: {
        data: [],
      },
    }

    componentDidMount = async () => {
      const launchDates = await axios.get('https://api.spacexdata.com/v3/launches/upcoming')

      this.setState({
        launchDates,
      })
    }

    renderUpcomingLaunchList = () => {
      const { launchDates: { data }} = this.state
      const dates = data.sort((a, b) => new Date(a.launch_date_local).valueOf() - new Date(b.launch_date_local).valueOf())

      return dates.map( launchDate => (
        <ListItem key={launchDate.flight_number}>
          <ListItemText >
            {launchDate.mission_name}
            <br />
            {launchDate.launch_date_local}
          </ListItemText>
        </ListItem>
      ))
    }

    render() {
      return (
        <React.Fragment>
          <List style={{ marginTop: '30px' }}>
            {this.renderUpcomingLaunchList()}
          </List>
        </React.Fragment>
      )
    }
}

export default SpaceXContainer
