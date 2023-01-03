import "../styles.css"

const Footer = (props) => {

    const { items, setItems } = props

    const clearTasks = () => {
        setItems([])
    }

    return (
        <div className="footer">
            <span className="footerText">You have <strong>{items.length}</strong> pending tasks</span>
            <button className="footerBtn" onClick={clearTasks}><i className="fas fa-broom"></i> Clear List</button>
        </div>
    )
}

export default Footer