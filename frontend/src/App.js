import { Component } from "react"
import NavBar from "./components/NavBar"
import CategoryBar from "./components/CategoryBar"
import Carousel from "./components/Carousel/Carousel"
import SearchGrid from "./components/SearchGrid/SearchGrid"
import Footer from "./components/Footer"
import "./components/css/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import defaultCarousels from "./data/defaultCarousel.json"
import ShowDetails from "./components/ShowDetails/ShowDetails"

import { Route } from 'react-router-dom'

//TODO CTRL-R Bearer.. with process.env.STRIVE_TOKEN

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/:type" render={(props) =>
          <>
            <CategoryBar {...props} />
            {
              props.match.params.type in defaultCarousels
              && defaultCarousels[props.match.params.type]
                  .map(carousel =>
                  <Carousel key={carousel.carouselName} {...carousel} />)
            }
          </>
        } />
        <Route exact path="/search/:type/:query" component={SearchGrid} />
        <Route path="/details/:showId" component={ShowDetails} />
        <Footer />
      </div>
    )
  }
}

export default App
