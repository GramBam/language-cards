import Card from "./Card";
import { translations } from '../data'

function CardList() {
  let randomOrder = translations.sort(() => 0.5 - Math.random())
  return (
    <div className="container">
      {[...Array(randomOrder.length)].map((_, i) => <Card key={i} translation={randomOrder[i]} />)}
    </div>
  )
}

export default CardList;
