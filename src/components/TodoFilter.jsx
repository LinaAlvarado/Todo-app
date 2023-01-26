const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-evenly rounded-md bg-white p-4">
        <button
          onClick={() => changeFilter("all")}
          className={`font-medium ${filter === 'all' ? ' text-gray-500':  'text-gray-300  hover:text-gray-500' } `}
        >
          All
        </button>
        <button
          onClick={() => changeFilter("active")}
          className={`font-medium ${filter === 'active' ? ' text-gray-500':  'text-gray-300  hover:text-gray-500' } `}
        >
          Active
        </button>
        <button
          onClick={() => changeFilter("completed")}
          className={`font-medium ${filter === 'completed' ? ' text-gray-500':  'text-gray-300  hover:text-gray-500' } `}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
