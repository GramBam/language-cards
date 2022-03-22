import Card from "./Card";
import { translations } from '../data'
import { useState } from "react";

function CardList() {
  let randomOrder = translations.sort(() => 0.5 - Math.random())
  let colors = ['#f9ceee', '#e0cdff', '#c1f0fb', '#dcf9a8', '#ffebaf']

  const [checked, setChecked] = useState(false)

  const onChange = (e) => {
    setChecked(e.target.checked)
    // loadCards();
  }

  const loadCards = () => {
    return [...Array(randomOrder.length)].map((_, i) => <Card key={i} checked={checked} color={colors[i % colors.length]} translation={randomOrder[i]} />)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <label htmlFor="lang" style={{ color: '#FFF', fontSize: '24px' }}>Start In Mandarin</label>
      <input type="checkbox" id="lang" onChange={onChange} />
      <div className="cards">
        {loadCards()}
      </div>
    </div>
  )
}

export default CardList;
