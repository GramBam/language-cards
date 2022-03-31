function CatagoryPick({ title, callback }) {
  return (
    <div>
      <label htmlFor={title.toLowerCase()}>{title.charAt(0).toUpperCase() + title.slice(1)}</label>
      <input type="checkbox" id={title.toLowerCase()} onChange={callback} defaultChecked={title === "other"} />
    </div>
  )
}

export default CatagoryPick