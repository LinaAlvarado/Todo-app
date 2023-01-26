const TodoComputed = ({totalTodosLeft, removeTodosCompleted}) => {
  return(
    <section className="flex justify-between rounded-b-md bg-white p-4  dark:bg-slate-800">
    <span className="text-gray-400">{totalTodosLeft()} items left </span>
    <button
     onClick={removeTodosCompleted}
     className="text-gray-400"> Clear Completes</button>
  </section>
  )
}

export default TodoComputed
