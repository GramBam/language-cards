import Card from "./Card";
import { translations } from '../data'
import { useState } from "react";
import CategoryPick from "./CategoryPick";

function CardList() {
  const colors = ['#f9ceee', '#e0cdff', '#c1f0fb', '#dcf9a8', '#ffebaf']
  const categories = ['numbers', 'animals', 'conversation', 'food', 'colors', 'shapes', 'instruments', 'transport', 'pronouns', 'other',]

  const [language, setLanguage] = useState('eng')
  const [options, setOptions] = useState({ numbers: false, animals: false, conversation: false, food: false, colors: false, other: true })

  const langChange = (e) => {
    setLanguage(e.target.checked ? 'man' : 'eng')
  }

  const updateCategories = (e) => {
    setOptions((prevState) => ({ ...prevState, [e.target.id]: e.target.checked }))
    loadCards()
  }

  const getcategories = () => {
    let cardsIncluded = []
    for (let i = 0; i < categories.length; i++) {
      let c = categories[i]
      if (options[c]) {
        cardsIncluded = cardsIncluded.concat(translations[c])
      }
    }
    return cardsIncluded
  }

  const loadCards = () => {
    let randomOrder = getcategories().sort(() => 0.5 - Math.random())

    return [...Array(randomOrder.length)].map((_, i) => <Card key={i} language={language} color={colors[i % colors.length]} translation={randomOrder[i]} />)
  }

  return (
    <div className="main">
      <div className="options">
        <div className="top-option">
          <label htmlFor="lang">Start in Mandarin</label>
          <input type="checkbox" id="lang" onChange={langChange} />
        </div>
        <div className="categories">
          {[...Array(categories.length)].map((_, i) => <CategoryPick key={i} title={categories[i]} callback={updateCategories} />)}
        </div>
      </div>

      <div className="cards">
        {loadCards()}
      </div>
    </div>
  )
}

export default CardList;
