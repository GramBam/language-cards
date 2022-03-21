import { useState, useEffect } from 'react'
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa'
import { MdTranslate } from 'react-icons/md'

function Card({ translation, color }) {
  const { english, mandarin, characters, info } = translation

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

  const onCardClick = () => {
    if (clickable) {
      fade()
    }
  }
  const onButtonClick = (e) => {
    console.log(e)
  }

  return (
    <div className='card-container' onClick={onCardClick} style={{ backgroundColor: color }}>
      {
        info && text === mandarin &&
        <div className="tooltip left">
          <p className='tooltiptext'>{info}</p>
          <FaInfoCircle />
        </div>
      }
      {
        characters && text === mandarin &&
        <div className='tooltip right'>
          <p className='tooltiptext'>{characters}</p>
          <MdTranslate />
        </div>
      }

      <p className={'card-text ' + textVisible} >{text}</p>
      <button className={'card-button check ' + buttonVisible} onClick={onButtonClick} ><FaCheck /></button>
      <button className={'card-button cross ' + buttonVisible} onClick={onButtonClick} ><FaTimes /></button>
    </div>

  )
}

export default Card;
