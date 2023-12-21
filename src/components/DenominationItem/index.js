// Write your code here
import './index.css'

const DenominationItem = props => {
  const {data, onClickBtn} = props
  const {value} = data
  const sumBtn = () => {
    onClickBtn(value)
  }
  return (
    <li className="li-container">
      <button type="button" onClick={sumBtn} className="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
