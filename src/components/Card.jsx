import { useState, useEffect } from 'react'

function Card({ translation }) {
  const { english, mandarin } = translation

  const [text, setText] = useState(english)
  const [visibility, setVisibility] = useState('visible')
  const [clickable, setClickable] = useState('enabled')

  const fade = () => {
    setClickable('disabled')
    setVisibility('hidden')
    setTimeout(() => fadeIn(), 750)
  }

  const fadeIn = () => {
    setText(mandarin)
    setVisibility('visible')
  }

  const onClick = () => {
    fade()
  }

  return (
    <div className={'card ' + clickable} onClick={onClick} >
      <p className={'card-text ' + visibility} >{text}</p>
    </div>
  )
}

export default Card;
