import CssBaseline from '../../../node_modules/@material-ui/core/CssBaseline'
import ExpChart from './ExpChart'
import ExpTimeline from './ExpTimeline'
import Footer from './Footer'
import MainPage from './MainPage'
import React from '../../../node_modules/react'

class Home extends React.Component {
  state = {
    screenOrientation: 0,
  }

  componentDidMount() {
    window.addEventListener('orientationchange', this.setScreenOrientation)
  }

  setScreenOrientation = () => {
    this.setState({ screenOrientation: window.orientation })
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MainPage />
        <ExpChart />
        <ExpTimeline />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
