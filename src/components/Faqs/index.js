import {Component} from 'react'

import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {faqsList: props.faqsList}
  }

  onChangeImage = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachItam => {
        if (eachItam.id === id) {
          return {...eachItam, isTrue: !eachItam.isTrue}
        }
        return eachItam
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="app-cotainer">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul className="unorderList">
            {faqsList.map(eachItam => (
              <FaqItem
                listItams={eachItam}
                key={eachItam.id}
                onChangeImage={this.onChangeImage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
