// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeteleTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDeteleTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
