import React, { Component } from 'react'
import wizardStore from './wizardStore'

class Wizards extends Component {
  state = {
    items: wizardStore
  }

  render() {
    const { items } = this.state;
    return (
      <div className='container'>
      { items.map(item => (
        <div key={item.id} className={`wizard ${item.house}`}>{item.name} from House {item.house}</div>
      ))}
      </div>
    )
  }
}
export default Wizards
