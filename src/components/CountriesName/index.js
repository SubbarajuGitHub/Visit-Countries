import {Component} from 'react'

import './index.css'

class CountriesName extends Component {
  render() {
    const {Each, visitedCountry, toggleIsFavorite, visitedLists} = this.props
    const {name, id, isVisited} = Each
    const getVisitedCountry = () => {
      visitedCountry(id)
      toggleIsFavorite(id)
    }
    return (
      <li className="countries-name">
        <p className="country-name">{name}</p>

        {isVisited ? (
          <div className="button-div">
            <button
              type="button"
              className="visited-button-2"
              onClick={getVisitedCountry}
            >
              <p>Visited</p>
            </button>
          </div>
        ) : (
          <div className="button-div">
            <button
              type="button"
              className="visited-button"
              onClick={getVisitedCountry}
            >
              <p>Visit</p>
            </button>
          </div>
        )}
      </li>
    )
  }
}
export default CountriesName
