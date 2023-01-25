import { useState } from "react";
const TodoCreate = ({createTodo}) => {
  
  const [title, setTitle] = useState("")

  const handleSubmitAddTodo = (e) => {
    e.preventDefault()
    if(title.trim().length > 0){
      createTodo(title)
      return setTitle("")
    }
    setTitle("")
  }
  

  return (
    <form onSubmit={handleSubmitAddTodo} className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white p-3">
      <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-400"></span>
      <input
        className="w-full text-gray-400 outline-none"
        type="text"
        placeholder="Create a new to-do..."
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        
      />
    </form>
  );
};

export default TodoCreate;
