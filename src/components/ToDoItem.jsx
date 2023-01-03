import _ from "lodash"

const ToDoItem = (props) => {

    const { items, setItems, todoItem } = props

    const deleteItem = () => {
        setItems(items.filter((item) => item.id !== todoItem.id))
    }

    return (
        <div>
            <li><span className="itemNumber">{items.indexOf(todoItem) + 1}</span><span className="todoItem">{_.startCase(todoItem.name.toLowerCase())}</span><span className="icon" onClick={deleteItem}><i className="fas fa-trash"></i></span></li>
        </div>

    )
}

export default ToDoItem