import { useState, useEffect } from 'react'

function Card({ translation, color, language }) {
  const { english, mandarin, characters } = translation

  const [text, setText] = useState(language === 'man' ? mandarin : english)
  const [textVisible, setTextVisible] = useState('visible')
  // const [buttonVisible, setButtonVisible] = useState('hidden')
  const [clickable, setClickable] = useState(true)

  useEffect(() => {
    setText(language === 'man' ? mandarin : english)
    setClickable(true)
  }, [language, english, mandarin])


  const fade = () => {
    setClickable(false)
    setTextVisible('hidden')
    setTimeout(() => fadeIn(), 750)
  }

  const fadeIn = () => {
    setText(language === 'man' ? english : mandarin)
    setTextVisible('visible')
    // setButtonVisible('visible')
  }

  const onCardClick = () => {
    if (clickable) {
      fade()
    }
  }

  return (
    <div className='card-container' onClick={onCardClick} style={{ backgroundColor: color, cursor: clickable ? 'pointer' : 'default' }}>
      <div>
        <p className={'card-text ' + textVisible} >{text}</p>
        {
          text === mandarin &&
          <p className={'card-text ' + textVisible}>{characters}</p>
        }
      </div>
    </div>

  )
}

export default Card;
