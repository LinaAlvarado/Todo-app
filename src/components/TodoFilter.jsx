const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-evenly rounded-md bg-white p-4  dark:bg-slate-800">
        <button
          onClick={() => changeFilter("all")}
          className={`font-medium ${filter === 'all' ? ' text-gray-500  dark:text-indigo-300':  ' text-gray-500 hover:text-gray-300' } `}
        >
          All
        </button>
        <button
          onClick={() => changeFilter("active")}
          className={`font-medium ${filter === 'active' ? ' text-gray-500  dark:text-indigo-300':  'text-gray-500 hover:text-gray-300' } `}
        >
          Active
        </button>
        <button
          onClick={() => changeFilter("completed")}
          className={`font-medium ${filter === 'completed' ? ' text-gray-500  dark:text-indigo-300':  'text-gray-500 hover:text-gray-300' } `}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
