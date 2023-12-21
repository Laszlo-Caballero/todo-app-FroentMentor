import ComponentTodo from "./ComponentTodo";
import { useEffect, useState } from "react";
import SetTodo from "./SetTodo";
import { ListTodos } from "./ListTodos.js";
import Footer from "./Footer.jsx";
function Todos() {
  const [allTodos, setAllTodos] = useState(ListTodos);
  let todosNoCompleted = ListTodos.filter((objeto) => {
    return objeto.complete === false;
  });
  const [activeTodos, setActiveTodos] = useState(todosNoCompleted);
  let todosCompleted = ListTodos.filter((objeto) => {
    return objeto.complete === true;
  });
  const [completedTodos, setCompleteTodos] = useState(todosCompleted);
  useEffect(() => {
    todosNoCompleted = allTodos.filter((objeto) => {
      return objeto.complete === false;
    });
    setActiveTodos(todosNoCompleted);
    todosCompleted = allTodos.filter((objeto) => {
      return objeto.complete === true;
    });
    setCompleteTodos(todosCompleted);
  }, [allTodos]);
  const [isAll, setAll] = useState(true);
  const [isActive, setActive] = useState(false);
  const [isCompleted, setCompleted] = useState(false);

  return (
    <>
      <SetTodo todos={allTodos} setTodos={setAllTodos} />
      <section className="mobile:mt-3 md:mt-6 h-auto">
        {isAll &&
          allTodos.map((todo, index) => {
            return (
              <ComponentTodo
                key={index}
                isComplete={todo.complete}
                todo={todo.todo}
                setComplete={() => {
                  const updatedTodos = [...allTodos];
                  updatedTodos[index].complete = !updatedTodos[index].complete;
                  setAllTodos(updatedTodos);
                }}
                deleteTodo={() => {
                  const nuevoArray = allTodos.filter(
                    (objeto, indexFilter) => indexFilter !== index
                  );
                  setAllTodos(nuevoArray);
                }}
              />
            );
          })}
        {isActive &&
          activeTodos.map((todo, index) => {
            return (
              <ComponentTodo
                key={index}
                isComplete={todo.complete}
                todo={todo.todo}
                setComplete={() => {
                  const updatedTodos = [...allTodos];
                  updatedTodos[index].complete = !updatedTodos[index].complete;
                  setAllTodos(updatedTodos);
                }}
                deleteTodo={() => {
                  const nuevoArray = allTodos.filter(
                    (objeto, indexFilter) => indexFilter !== index
                  );
                  setAllTodos(nuevoArray);
                }}
              />
            );
          })}
        {isCompleted &&
          completedTodos.map((todo, index) => {
            return (
              <ComponentTodo
                key={index}
                isComplete={todo.complete}
                todo={todo.todo}
                setComplete={() => {
                  const updatedTodos = [...allTodos];
                  updatedTodos[index].complete = !updatedTodos[index].complete;
                  setAllTodos(updatedTodos);
                }}
                deleteTodo={() => {
                  const nuevoArray = allTodos.filter(
                    (objeto, indexFilter) => indexFilter !== index
                  );
                  setAllTodos(nuevoArray);
                }}
              />
            );
          })}
      </section>
      <Footer
        cant={activeTodos.length}
        isAll={isAll}
        isActive={isActive}
        isComplete={isCompleted}
        onClickAll={() => {
          setAll(true);
          setActive(false);
          setCompleted(false);
        }}
        onClickActive={() => {
          setAll(false);
          setActive(true);
          setCompleted(false);
        }}
        onClickComplete={() => {
          setAll(false);
          setActive(false);
          setCompleted(true);
        }}
        onClickClear={() => {
          const clearArray = allTodos.filter((objeto) => {
            return objeto.complete === false;
          });
          setAllTodos(clearArray);
        }}
      />
    </>
  );
}

export default Todos;
