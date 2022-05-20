import { useState, useCallback } from "react";
import { ListGroup } from "react-bootstrap";
import "./App.css";
//import Test from "./components/test/index.js";
import AddInput from "./components/AddInput";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

function App() {
  // const [title, setTitle] = useState("This is an init title");
  // const changeTitleFn = (t) => {
  //   setTitle(t);
  // };

  const [isInputShow, setInputShow] = useState(false),
    [todoList, setTodoList] = useState([]);
  const addItem = useCallback((value) => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      isCompleted: false,
    };

    setTodoList((list) => [...list, dataItem]);

    setInputShow(false);
  }, []);

  return (
    // <div className="App">
    //   <Test title={title} changeTitle={changeTitleFn} />
    // </div>
    <>
      <Header openInput={() => setInputShow((isShow) => !isShow)} />
      <AddInput isInputShow={isInputShow} addItem={addItem} />

      <ListGroup as="ul">
        {todoList.map((item, index) => {
          return <TodoItem data={item} key={index} />;
        })}
      </ListGroup>
    </>
  );
}

export default App;
