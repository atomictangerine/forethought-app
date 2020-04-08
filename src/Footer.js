import React from 'react';

import './Footer.scss';

class Footer extends React.PureComponent {
  render() {
    const {
      newTodo,
      newTodoTime,
      showNewTodo,
      handleSubmit,
      handleChange,
      handleTimeChange,
      closeAddTodo,
      errorMessage,
    } = this.props;

    return (
      <div className={`container--footer padding--large ${showNewTodo ? '' : 'hidden'}`}>
        <div className="form-container">
          <div className="inputs-container">
            <div className="input-container">
              <label className="font--small">to-do item</label>
              <input type="text" name="new-todo" value={newTodo} onChange={handleChange} required />
            </div>
            <div className="input-container margin-left--extra-small">
              <label className="font--small">do by:</label>
              <input type="time" name="new-todo-time" value={newTodoTime} onChange={handleTimeChange} required/>
            </div>
          </div>
          <div className="error-message font--small">{errorMessage}</div>
        </div>
        <div>
          <button className="button button--text margin-left--extra-small" onClick={closeAddTodo} >Cancel</button>
          <button className="button button--secondary margin-left--extra-small" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    );
  }
}

export default Footer;
