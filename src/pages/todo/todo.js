import React, { useEffect, useState } from 'react';
import Button from '../../components/button';
import { getItemsAPI, addItemAPI, deleteItemAPI, updateItemAPI, deleteAllItemsAPI } from '../../api-gateway';
import useLocale from '../../hooks/use-locale';
import './todo.scss'


const TodoList =  () => {
  const [inputMessage, setInputMessage] = useState('');
  const { i } = useLocale();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
     const itemsList =  await getItemsAPI()

     if(itemsList && Array.isArray(itemsList) && itemsList.length){
      setItems(itemsList)
     }
    }

    fetchItems();
  }, [])

  const activeItems = (items || []).filter(item => !item.isCompleted && !item.isDeleted);
  const completedItems = (items || [] ).filter(item => item.isCompleted);


  const addItem = async () => {

    if(!inputMessage) {
      return;
    }

    const item  = {
      title: inputMessage
    }


   const itemSaved = await addItemAPI(item)

    setItems([itemSaved, ...items])

    setInputMessage('')
  }

  const deleteItem = async (item) => {
    await deleteItemAPI(item);
    setItems(items.filter(itm => itm._id !== item._id))
  }

  const updateItem = async (item) => {
    const updatedItem = {
      ...item,
      isCompleted: true
    }

    await updateItemAPI(updatedItem);
    
    setItems(items.map(m => (m._id === item._id) ? updatedItem : m ))
  }

  const onClickAddButton = (e) => {
    if (inputMessage) {
      addItem();
    }
  };

  const deleteAllItems = async () => {
    await deleteAllItemsAPI();
    setItems([]);
  }

  const onPressEnter = (e) => {
    if (e.target.value && (e.keyCode || e.which === 13 || e.key === 'Enter')) {
      addItem()
    }
  }


  return <div className="todo ">
    <div className="todo__container">
      <header className="todo__header" >
        <span>{i('todo-list')}</span>
      </header>

      <div className="todo__input-wrapper">
        <div>
          <input
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => onPressEnter(e)}
            value={inputMessage}
            className="todo__input"
            placeholder={i('what-needs-to-be-done')}
          />
          <Button name={i('add')} className="button--success" onClick={(e) => onClickAddButton(e)} />
        </div>
        <div>
          <Button
            name={i('reset')}
            className="button--reset"
            onClick={() => deleteAllItems()}
          />
        </div>
      </div>

      <div className="todo__list-container" >
        <ul className="todo__list-wrapper">
          {activeItems.map(item => (
            <li className="todo__list" key={item._id}>
              <span className="todo__list-item todo__list-item-active" onClick={() => updateItem(item)}>{item.title}</span>
              <Button
                name={i('remove')}
                className="button--danger"
                onClick={() => deleteItem(item)}
              />
            </li>
          ))}
        </ul>

        <ul className="todo__list-wrapper">
          {completedItems.map(item => (
            <li className="todo__list todo__mute-text" key={item._id}> <span className="todo__list-item"> {item.title} </span>  </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
}

export default TodoList;