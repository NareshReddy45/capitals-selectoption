import React, {useState} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

function Capitals() {
  const [selectedCapitalId, setSelectedCapitalId] = useState('NEW_DELHI')

  // Find the country based on the selected capital
  const selectedCountry = countryAndCapitalsList.find(
    item => item.id === selectedCapitalId,
  ).country

  const handleSelectChange = event => {
    setSelectedCapitalId(event.target.value)
  }

  return (
    <div className="bg-container">
      <div className="container">
        <h1>Countries And Capitals</h1>
        <div className="select-row">
          <select
            onChange={handleSelectChange}
            value={selectedCapitalId}
            className="option-heading"
          >
            {countryAndCapitalsList.map(item => (
              <option key={item.id} value={item.id}>
                {item.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country?</p>
        </div>
        <p className="country-display">{selectedCountry}</p>
      </div>
    </div>
  )
}

export default Capitals
