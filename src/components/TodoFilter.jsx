const TodoFilter = () =>{
    return(
        <section className="container mx-auto mt-8">
        <div className="flex justify-evenly rounded-md bg-white p-4">
          <button className="font-medium text-gray-500"> All</button>
          <button className="font-medium text-gray-300 hover:text-gray-500">
            Active
          </button>
          <button className="font-medium text-gray-300 hover:text-gray-500">
            Completed
          </button>
        </div>
      </section>
    )
}

export default TodoFilter