import { useState, useEffect } from 'react'

function Card({ translation, color, startLanguage, speechCallback }) {
  const { english, mandarin, characters } = translation

  const [text, setText] = useState(startLanguage === 'mandarin' ? mandarin : english)
  const [textVisible, setTextVisible] = useState('visible')
  const [clickable, setClickable] = useState(true)

  useEffect(() => {
    setText(startLanguage === 'mandarin' ? mandarin : english)
    setClickable(true)
  }, [startLanguage, english, mandarin])


  const fade = () => {
    setClickable(false)
    setTextVisible('hidden')
    setTimeout(() => fadeIn(), 750)
  }

  const fadeIn = () => {
    setText(startLanguage === 'mandarin' ? english : mandarin)
    setTextVisible('visible')
    speechCallback(translation)
  }

  const onCardClick = () => {
    if (clickable) {
      fade()
    }
  }

  return (
    <div className='card-container' onClick={onCardClick} style={{ backgroundColor: color, cursor: clickable ? 'pointer' : 'default' }}>
      <p className={'card-text ' + textVisible} >{text}</p>
      {
        text === mandarin &&
        <p className={'card-text ' + textVisible}>{characters}</p>
      }
    </div>

  )
}

export default Card;
