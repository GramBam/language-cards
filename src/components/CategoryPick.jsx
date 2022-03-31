function categoryPick({ title, callback }) {
  return (
    <div className="category">
      <label htmlFor={title.toLowerCase()}>{title.charAt(0).toUpperCase() + title.slice(1)}</label>
      <input className="checkmark" type="checkbox" id={title.toLowerCase()} onChange={callback} defaultChecked={title === "other"} />
    </div>
  )
}

export default categoryPick