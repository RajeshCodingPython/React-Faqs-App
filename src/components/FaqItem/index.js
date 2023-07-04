import './index.css'

const FaqItem = props => {
  const {listItams, onChangeImage} = props

  const {questionText, answerText, isTrue, id} = listItams

  const isTrueChange = () => {
    onChangeImage(id)
  }

  return (
    <li className="listItmes">
      <div className="listCointainer">
        <h1 className="headinQuti">{questionText}</h1>
        <button type="button" className="button" onClick={isTrueChange}>
          {!isTrue && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
            />
          )}
          {isTrue && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
            />
          )}
        </button>
      </div>
      {isTrue && (
        <div className="listCointainer1">
          <hr className="horizontal" />
          <p className="headinQuti1">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
