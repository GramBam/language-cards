import { useState, useEffect } from 'react'
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa'
import { MdTranslate } from 'react-icons/md'

function Card({ translation, color, checked }) {
  const { english, mandarin, characters, info } = translation

  const [text, setText] = useState(checked ? mandarin : english)
  const [textVisible, setTextVisible] = useState('visible')
  const [buttonVisible, setButtonVisible] = useState('hidden')
  const [clickable, setClickable] = useState(true)

  useEffect(() => {
    setText(checked ? mandarin : english)
  }, [checked])


  const fade = () => {
    setClickable(false)
    setTextVisible('hidden')
    setTimeout(() => fadeIn(), 750)
  }

  const fadeIn = () => {
    setText(checked ? english : mandarin)
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
      {/* {
        info && text === mandarin &&
        <div className="tooltip left">
          <FaInfoCircle />
          <p className='tooltiptext'>{info}</p>
        </div>
      }
      {
        characters && text === mandarin &&
        <div className='tooltip right'>
          <MdTranslate />
          <p className='tooltiptext'>{characters}</p>
        </div>
      } */}

      <div>
        <p className={'card-text ' + textVisible} >{text}</p>
        {/* <button className={'card-button check ' + buttonVisible} onClick={onButtonClick} ><FaCheck /></button>
        <button className={'card-button cross ' + buttonVisible} onClick={onButtonClick} ><FaTimes /></button> */}
        {
          text === mandarin &&
          <p className={'card-text ' + textVisible}>{characters}</p>
        }
      </div>
    </div>

  )
}

export default Card;
