import { useState } from "react";
import ToDoItem from "./ToDoItem";
import Footer from "./Footer"
import shortid from "shortid";
import "../styles.css"

const App = () => {

  const [inputText, setInputText] = useState("")
  const [items, setItems] = useState([])

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const addItem = (event) => {
    event.preventDefault()
    if (inputText.trim().length !== 0) {
      if (inputText.length <= 30) {
        setItems(prevItems => {
          return [...prevItems, { name: inputText, id: shortid.generate() }]
        })
      }
    } else {
      console.log("Cannot submit empty value");
    }
    setInputText("")
  }

  return (
    <div className="wrapper">
      <header>Todo List App</header>
      <form className="inputField" onSubmit={addItem}>
        <input onChange={handleChange} type="text" placeholder="Add new item" value={inputText} />
        <button type="submit"><i className="fas fa-plus"></i></button>
      </form>
      {
        inputText.length <= 30
          ? <p className="characterLimit">{30 - inputText.length} characters remaining</p>
          : <p className="characterLimit" style={{ color: "red", opacity: "0.5" }}>You've reached the max character limit</p>
      }
      {/* Only display if no task */}
      {items.length === 0 && <h3 className="noTasks">No Tasks!</h3>}

      <div className="todoList">
        {items.map((todoItem, index) => (
          <ToDoItem key={index} items={items} setItems={setItems} todoItem={todoItem}></ToDoItem>
        ))}
      </div>

      {/* Only display if tasks >= 1 */}
      {items.length >= 1 && <Footer items={items} setItems={setItems}></Footer>}

    </div>

  )
}

export default App;
