import Card from "./Card";
import { translations } from '../data'
import { useState } from "react";
import CatagoryPick from "./CatagoryPick";

function CardList() {
  const colors = ['#f9ceee', '#e0cdff', '#c1f0fb', '#dcf9a8', '#ffebaf']
  const catagories = ['numbers', 'animals', 'greetings', 'food', 'colors', 'other']

  const [language, setLanguage] = useState('eng')
  const [options, setOptions] = useState({ numbers: false, animals: false, greetings: false, food: false, colors: false, other: true })

  const langChange = (e) => {
    setLanguage(e.target.checked ? 'man' : 'eng')
  }

  const catagoryChange = (e) => {
    setOptions((prevState) => ({ ...prevState, [e.target.id]: e.target.checked }))
    loadCards()
  }

  const getCatagories = () => {
    let cardsIncluded = []
    for (let i = 0; i < catagories.length; i++) {
      let c = catagories[i]
      if (options[c]) {
        cardsIncluded = cardsIncluded.concat(translations[c])
      }
    }
    return cardsIncluded
  }

  const loadCards = () => {
    let randomOrder = getCatagories().sort(() => 0.5 - Math.random())

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
          {[...Array(catagories.length)].map((_, i) => <CatagoryPick key={i} title={catagories[i]} callback={catagoryChange} />)}
        </div>
      </div>

      <div className="cards">
        {loadCards()}
      </div>
    </div>
  )
}

export default CardList;
