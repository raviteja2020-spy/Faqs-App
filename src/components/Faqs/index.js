import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="faqs-container">
      <div className="faqs-items-container">
        <h1 className="faqs-heading">FAQs</h1>
        <ul className="faqs-item">
          {faqsList.map(eachItem => (
            <FaqItem key={eachItem.id} faqDetails={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
