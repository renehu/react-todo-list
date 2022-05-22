import { useState, useCallback, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import "./App.css";
//import Test from "./components/test/index.js";
import AddInput from "./components/AddInput";
import Header from "./components/Header";
import TodoModal from "./components/Modal";
import TodoItem from "./components/TodoItem";

function App() {
  // const [title, setTitle] = useState("This is an init title");
  // const changeTitleFn = (t) => {
  //   setTitle(t);
  // };

  const [isInputShow, setInputShow] = useState(false),
    [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todoListInLocalStorage =
      JSON.parse(localStorage.getItem("TodoList")) || [];
    setTodoList(todoListInLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todoList));
  }, [todoList]);

  const addItem = useCallback((value) => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      isCompleted: false,
    };

    setTodoList((list) => [...list, dataItem]);
    setInputShow(false);
  }, []);

  const [modalShow, setModalShow] = useState(true);

  const [currentId, setId] = useState(null);
  const [currentItem, setItem] = useState();

  useEffect(() => {
    getItem();
  }, [currentId]);

  const getItem = () => {
    const item = todoList.find((i) => i.id === currentId);
    setItem(item);
  };

  return (
    // <div className="App">
    //   <Test title={title} changeTitle={changeTitleFn} />
    // </div>
    <>
      <Header openInput={() => setInputShow((isShow) => !isShow)} />

      <AddInput isInputShow={isInputShow} addItem={addItem} />

      <ListGroup as="ul">
        {todoList.map((item, index) => {
          return (
            <TodoItem
              data={item}
              key={index}
              setModalShow={setModalShow}
              setId={setId}
            />
          );
        })}
      </ListGroup>

      <TodoModal
        data={currentItem}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;
