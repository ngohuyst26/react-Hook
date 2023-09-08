

const Todo = (props) => {
    const {todos, title , TodoDelete} = props;

    const DeleteToDo = (id) => {
        TodoDelete(id);
        console.log(id)
    }
    return (
        <div className='todos'>
            <div>
                {title}
            </div>
            {todos.map((todo, index) => {
                return (
                    <li className='li-todo' key={index}> {todo.title}  <span onClick={() => {DeleteToDo(todo.id)}} >X</span></li>
                )
            })}
        </div>
    )
};

export default Todo;