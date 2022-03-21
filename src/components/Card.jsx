import { useState, useEffect } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

function Card({ translation }) {
  const { english, mandarin, characters } = translation

  const [text, setText] = useState(english)
  const [textVisible, setTextVisible] = useState('visible')
  const [buttonVisible, setButtonVisible] = useState('hidden')
  const [clickable, setClickable] = useState(true)

  const fade = () => {
    setClickable(false)
    setTextVisible('hidden')
    setTimeout(() => fadeIn(), 750)
  }

  const fadeIn = () => {
    setText(mandarin)
    setTextVisible('visible')
    setButtonVisible('visible')
  }

  const onClick = () => {
    if (clickable) {
      fade()
    }
  }

  return (
    <div className='card-container' onClick={onClick}>
      <div className='card' >
        <p className={'card-text ' + textVisible} >{text}</p>
        {characters ? <p className={'card-text characters ' + textVisible}>{text === english ? '' : characters}</p> : null}
        <button className={'card-button check ' + buttonVisible}><FaCheck /></button>
        <button className={'card-button cross ' + buttonVisible}><FaTimes /></button>
      </div>

    </div>

  )
}

export default Card;
