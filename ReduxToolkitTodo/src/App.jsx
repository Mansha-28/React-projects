import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export default function App() {

  return (
    <div className="bg-slate-500 min-h-screen justify-center">
      <div className="p-2 py-10 text-center font-bold text-2xl">
        Todo using Redux-Toolkit
      </div>
      <AddTodo />
      <Todos />
    </div>
  )
}

