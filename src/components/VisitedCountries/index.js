import {Component} from 'react'

import './index.css'

class VisitedCountries extends Component {
  render() {
    const {each, removeCountry, toggleIsFavorite, values} = this.props
    const {name, imageUrl, id} = each
    const deleteCountry = () => {
      removeCountry(id)
      toggleIsFavorite(id)
    }

    if (values === '') {
      console.log('true')
    }

    return (
      <li className="visited-countries-bg">
        <img src={imageUrl} alt="thumbnail" className="image" />
        <div className="div">
          <p className="name">{name}</p>
          <button type="button" className="remove" onClick={deleteCountry}>
            Remove
          </button>
        </div>
      </li>
    )
  }
}
export default VisitedCountries
