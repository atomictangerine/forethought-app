import React from 'react';

import './List.scss';

class List extends React.PureComponent {

  formatTime = (time) => {
    const timeArray = time.split(':');
    const hoursAsInt = parseInt(timeArray[0]);
    
    if(hoursAsInt < 12) {
      return time + ' AM';
    }

    return hoursAsInt - 12 + ':' + timeArray[1] + ' PM';

  }

  render() {
    const {items, handleInputChange} = this.props;

    return (
      <div>
        {items.map((item, index) => {
          return (
            <div key={item.name} className="list-item padding--large border--bottom">
              <div className="list-item-checkbox">
                <input type="checkbox" id={item.name + index} name={index} value={item.isChecked} onChange={handleInputChange} />
                <label htmlFor={item.name + index} className={`list-item-checkbox--label ${item.isChecked ? 'list-item-crossed-out' : ''}`}>{item.name}</label>
              </div>
              <span className="list-item-time font--small font--grey margin-left--extra-small">{this.formatTime(item.time)}</span>
            </div>)
        })}
      </div>
    );
  }
}

export default List;