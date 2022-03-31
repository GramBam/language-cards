function CatagoryPick({ title, callback }) {
  return (
    <div>
      <label htmlFor={title.toLowerCase()}>{title}</label>
      <input type="checkbox" id={title.toLowerCase()} onChange={callback} defaultChecked={title === "Other"} />
    </div>
  )
}

export default CatagoryPick