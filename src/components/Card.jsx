function Card({ translation }) {
  const { english, mandarin } = translation

  const onClick = () => {

  }

  return (
    <div className="card" onClick={onClick}>
      <p className="card-text">{english}</p>
    </div>
  )
}

export default Card;
