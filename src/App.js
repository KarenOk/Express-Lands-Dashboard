import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar.js"
import Header from "./components/Header.js"
import Dashboard from "./components/Dashboard.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: window.screen.width < 1190 ? false : true
    }
  }

  toggleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar
    })
  }

  removeSidebar = () => {
    this.setState({
      showSidebar: false
    })
  }

  render() {
    return (
      <div className="app">
        <Sidebar showSidebar={this.state.showSidebar} />

        <div className="content">
          <Header toggleSidebar={this.toggleSidebar} showSidebar={this.state.showSidebar} />
          <Dashboard removeSidebar={this.toggleSidebar} showSidebar={this.state.showSidebar} />
        </div>
      </div>
    );
  }


}

export default App;
