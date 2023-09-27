import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Modal from "../components/Modal";
import { Service } from "../http/service";

export default function TodoPage() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
  });
  const [changedFormData, setChangedFormData] = useState({
    title: "",
    date: "",
  });
  const [todos, setTodos] = useState([]);
  const [changed, setChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editedTodo, setEditedTodo] = useState({})

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    Service.getTodos()
      .then((data) => {
        console.log(data.list, "data.list");
        setTodos(data.list);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      });
  }, [changed, navigate]);

  const createTodo = () => {
    Service.createTodo(formData).then((data) => {
      setFormData({
        title: "",
        date: "",
      });
      setChanged((changed) => !changed);
    });
  };

  const updateTodo = () => {
    // console.log(todo,'todotodotodo');
    // setChangedFormData({
    //   title: todo.title,
    //   date: todo.date,
    // });
    console.log(editedTodo._id,'editedTodoeditedTodo');
    

    Service.updateTodo({ taskID: editedTodo._id, title: changedFormData }).then(
      (data) => {
        setChangedFormData({
          title: "",
          date: "",
        });
        setChanged((changed) => !changed);
        setIsOpen(false);
      }
    );
  };

  const editTodo = () => {

    setIsOpen(true);
  };

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <div className="todopage">
      <button onClick={() => navigate(-1)} className="back">
        {"<--"}
      </button>
      <h2>ToDo List</h2>
      <Modal open={isOpen} setOpen={setIsOpen}>
        <input
          type="text"
          placeholder="Change Title"
          value={changedFormData.title}
          onChange={(e) =>
            setChangedFormData({ ...changedFormData, title: e.target.value })
          }
        />
        <input
          type="date"
          value={changedFormData.date}
          onChange={(e) =>
            setChangedFormData({ ...changedFormData, date: e.target.value })
          }
        />
        <button onClick={updateTodo}>Update</button>
      </Modal>
      <div className="create">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <button onClick={createTodo}>Create</button>
      </div>
      <div className="main">
        {todos &&
          todos.map((todo, index) => (
            <div className="item" key={index}>
              <p className="index">{index + 1}</p>
              <h3>{todo.title}</h3>
              <p className="date">{todo.date}</p>
              <div className="actions">
                <button
                  onClick={() => {
                    setEditedTodo(todo)
                    editTodo();
                  }}
                  className="editTodo"
                ></button>
                <button
                  onClick={() => {
                    Service.deleteTodo({
                      taskID: todo._id,
                    }).then(() => {
                      setChanged((changed) => !changed);
                    });
                  }}
                  className="deleteTodo"
                ></button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
