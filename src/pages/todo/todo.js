import React, { useState } from 'react';
import Button from '../../components/button';
import './todo.scss'

const i = {
  "add": "add",
  "remove": 'remove',
  "what-needs-to-be-done": "What needs to be done?",
  "todo-list": "Todo",
  "reset": "reset"
}


const TodoList = () => {
  const [inputMessage, setInputMessage] = useState('');
  const list = ['Buy Milk', 'Walk the dog', 'pick up kids from school'];
  const [items, setItems] = useState(list);

  const addItem = () => {
    setItems([inputMessage, ...items])
    setInputMessage('')
  }

  const deleteItem = (item) => {
    setItems(items.filter(m => m !== item))
  }

  const updateItem = (item) => {
    setItems(items.filter(m => m !== item))
  }

  const onClickAddButton = (e) => {
    if (inputMessage) {
      addItem();
    }
  };

  const onPressEnter = (e) => {
    if (e.target.value && (e.keyCode || e.which === 13 || e.key === 'Enter')) {
      addItem()
    }
  }


  return <div className="todo ">
    <div className="todo__container">
      <header className="todo__header" >
        <span>{i['todo-list']}</span>
      </header>

      <div className="todo__input-wrapper">
        <div>
          <input
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => onPressEnter(e)}
            value={inputMessage}
            className="todo__input"
            placeholder={i['what-needs-to-be-done']}
          />
          <Button name={i['add']} className="button--success" onClick={(e) => onClickAddButton(e)} />
        </div>
        <div>
          <Button
            name={i['reset']}
            className="button--reset"
            onClick={() => setItems([])}
          />
        </div>
      </div>

      <div className="todo__list-container" >
        <ul className="todo__list-wrapper">
          {items.map(item => (
            <li className="todo__list">
              <span className="todo__list-item todo__list-item-active" onClick={() => updateItem(item)}>{item}</span>
              <Button
                name={i['remove']}
                className="button--danger"
                onClick={() => deleteItem(item)}
              />
            </li>
          ))}
        </ul>

        <ul className="todo__list-wrapper">
          {items.map(item => (
            <li className="todo__list todo__mute-text"> <span className="todo__list-item"> {item} </span>  </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
}

export default TodoList;