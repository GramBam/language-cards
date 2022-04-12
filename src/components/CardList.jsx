import Card from "./Card";
import { translations } from '../data'
import { useState } from "react";
import CategoryPick from "./CategoryPick";

function CardList() {
  const colors = ['#f9ceee', '#e0cdff', '#c1f0fb', '#dcf9a8', '#ffebaf']
  const categories = ['numbers', 'animals', 'conversation', 'food', 'colors', 'shapes', 'instruments', 'transport', 'pronouns', 'other',]

  const [startLanguage, setStartLanguage] = useState('english')
  const [speechEnabled, setSpeechEnabled] = useState(true)
  const [options, setOptions] = useState({ numbers: false, animals: false, conversation: false, food: false, colors: false, other: true })

  const synth = window.speechSynthesis;
  const englishVoice = synth.getVoices().find(voice => voice.name.includes('Linda'))
  const mandarinVoice = synth.getVoices().find(voice => voice.lang === 'zh-TW')

  const textToSpeech = (content) => {
    if (speechEnabled) {
      let utterance = new SpeechSynthesisUtterance(startLanguage === 'mandarin' ? content.english : content.characters)
      utterance.lang = startLanguage === 'mandarin' ? 'en-CA' : 'zh-TW'
      utterance.voice = startLanguage === 'mandarin' ? englishVoice : mandarinVoice
      synth.speak(utterance)
    }
  }

  const langChange = (e) => {
    setStartLanguage(e.target.checked ? 'mandarin' : 'english')
  }

  const toggleTTS = (e) => {
    setSpeechEnabled(e.target.checked)
  }

  const updateCategories = (e) => {
    setOptions((prevState) => ({ ...prevState, [e.target.id]: e.target.checked }))
    loadCards()
  }

  const getCategories = () => {
    let cardsIncluded = []
    for (let i = 0; i < categories.length; i++) {
      let c = categories[i]
      if (options[c]) {
        cardsIncluded = cardsIncluded.concat(translations[c])
      }
    }
    return cardsIncluded
  }

  const loadCards = () => {
    let randomOrder = getCategories().sort(() => 0.5 - Math.random())

    return [...Array(randomOrder.length)].map((_, i) =>
      <Card key={i} startLanguage={startLanguage} color={colors[i % colors.length]} translation={randomOrder[i]} speechCallback={textToSpeech} />
    )
  }

  return (
    <div className="main">
      <div className="options">
        <div className="top-options">
          <div>
            <label htmlFor="lang">Start in Mandarin</label>
            <input type="checkbox" id="lang" onChange={langChange} />
          </div>
          <div>
            <label htmlFor="tts">Text-to-Speech</label>
            <input defaultChecked={true} type="checkbox" id="tts" onChange={toggleTTS} />
          </div>
        </div>
        <div className="categories">
          {[...Array(categories.length)].map((_, i) => <CategoryPick key={i} title={categories[i]} callback={updateCategories} />)}
        </div>
      </div>

      <div className="cards">
        {loadCards()}
      </div>
    </div>
  )
}

export default CardList;
