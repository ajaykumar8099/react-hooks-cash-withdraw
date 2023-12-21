// Write your code here

import {useState} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

const CashWithdrawal = props => {
  const {denominationsList} = props
  const [rupees, setRupees] = useState(2000)
  const onClickBtn = value => {
    if (rupees > 0) {
      setRupees(rupees - value)
    }
  }
  return (
    <div className="container">
      <div className="card-container">
        <div className="name-container">
          <div className="s-container">
            <p className="name-logo">s</p>
          </div>
          <p className="name">Sarah Williams</p>
        </div>
        <div className="balance-container">
          <p className="your-blnc">Your Balance</p>
          <div className="sub-blnc-container">
            <p className="rupees">{rupees}</p>
            <p className="rup-default">Rupees</p>
          </div>
        </div>
        <p className="With-head">Withdraw</p>
        <p className="choose-head">CHOOSE SUM (IN RUPEES)</p>
        <ul className="ul-list">
          {denominationsList.map(each => (
            <DenominationItem
              key={each.id}
              data={each}
              onClickBtn={onClickBtn}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CashWithdrawal
