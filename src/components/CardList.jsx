import Card from "./Card";
import { translations } from '../data'
import { useState } from "react";

function CardList() {
  let colors = ['#f9ceee', '#e0cdff', '#c1f0fb', '#dcf9a8', '#ffebaf']

  const [language, setLanguage] = useState('eng')
  const [options, setOptions] = useState({ numbers: false, animals: false, greetings: false, food: false })

  const langChange = (e) => {
    setLanguage(e.target.checked ? 'man' : 'eng')
  }

  const catagoryChange = (e) => {
    switch (e.target.id) {
      case 'numbers': setOptions((prevState) => ({ ...prevState, numbers: e.target.checked })); break;
      case 'animals': setOptions((prevState) => ({ ...prevState, animals: e.target.checked })); break;
      case 'greetings': setOptions((prevState) => ({ ...prevState, greetings: e.target.checked })); break;
      case 'food': setOptions((prevState) => ({ ...prevState, food: e.target.checked })); break;
    }

    loadCards()
  }

  const loadCards = () => {

    console.log(options)
    let cardsIncluded = translations.other
    if (options.numbers) {
      cardsIncluded = cardsIncluded.concat(translations.numbers)
    }
    if (options.animals) {
      cardsIncluded = cardsIncluded.concat(translations.animals)
    }
    if (options.greetings) {
      cardsIncluded = cardsIncluded.concat(translations.greetings)
    }
    if (options.food) {
      cardsIncluded = cardsIncluded.concat(translations.food)
    }

    let randomOrder = cardsIncluded.sort(() => 0.5 - Math.random())

    return [...Array(randomOrder.length)].map((_, i) => <Card key={i} language={language} color={colors[i % colors.length]} translation={randomOrder[i]} />)
  }

  return (
    <div className="main">
      <div className="options">
        <div className="top-option">
          <label htmlFor="lang">Start in Mandarin</label>
          <input type="checkbox" id="lang" onChange={langChange} />
        </div>
        <div className="catagories">
          <div>
            <label htmlFor="numbers">Numbers</label>
            <input type="checkbox" id="numbers" onChange={catagoryChange} />
          </div>
          <div>
            <label htmlFor="animals">Animals</label>
            <input type="checkbox" id="animals" onChange={catagoryChange} />
          </div>
          <div>
            <label htmlFor="greetings">Greetings</label>
            <input type="checkbox" id="greetings" onChange={catagoryChange} />
          </div>
          <div>
            <label htmlFor="food">Food</label>
            <input type="checkbox" id="food" onChange={catagoryChange} />
          </div>
        </div>
      </div>

      <div className="cards">
        {loadCards()}
      </div>
    </div>
  )
}

export default CardList;
