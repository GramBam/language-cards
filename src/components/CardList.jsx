import Card from "./Card";
import { translations } from '../data'

function CardList() {
  let randomOrder = translations.sort(() => 0.5 - Math.random())
  let colors = ['#f9ceee', '#e0cdff', '#c1f0fb', '#dcf9a8', '#ffebaf']

  return (
    <div className="container">
      {[...Array(randomOrder.length)].map((_, i) => <Card key={i} color={colors[Math.floor(Math.random() * colors.length)]} translation={randomOrder[i]} />)}
    </div>
  )
}

export default CardList;
