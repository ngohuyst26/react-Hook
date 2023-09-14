import { useState } from 'react';


const Todo = () => {

    let [value, setValue] = useState("");

    let [todos, setTodos] = useState([
        { id: "todo1", title: "Học bài", type: "huy" },
        { id: "todo2", title: "Chơi Game", type: "Mai" },
        { id: "todo3", title: "Xem Tik Tok", type: "Mai" },
        { id: "todo4", title: "Xem Facebook", type: "huy" }
    ]);

    const changName = (event) => {
        setValue(event.target.value);
    }

    const setTen = () => {
        let todosAdd = { id: Math.floor((Math.random() * 100000) + 1), title: value };
        setTodos([...todos, todosAdd]);
    }

    const handleDeleteTodos = (id) => {
        let TodoDelete = todos;
        TodoDelete = TodoDelete.filter(item => item.id !== id);
        console.log(TodoDelete);
        setTodos(TodoDelete);
    }

    return (
        <>
            <div className="container" style={{ textAlign: "center" }}>
                <div classNamhandleDeleteTodose='todos'>
                    <div>
                    </div>
                    {todos.map((todo, index) => {
                        return (
                            <li className='li-todo' key={index}> {todo.title}  <span onClick={() => { handleDeleteTodos(todo.id) }} >X</span></li>
                        )
                    })}
                </div>
                <input type='text' value={value} onChange={(event) => changName(event)} />
            <button type='button' onClick={() => setTen()}>Change Name </button>
            </div>
        </>
    )
};

export default Todo;