import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b border-b-gray-300 py-4 px-4">
      <button
        onClick={() => {
          updateTodo(id);
        }}
        className={`h-6 w-6 rounded-full border-2 ${
          completed
            ? "flex items-center justify-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block flex-none  border-gray-400"
        }`}
      >
        {completed && <IconCheck />}
      </button>
      <p className={`grow text-gray-600 ${completed && "line-through"}`}>
        {title}
      </p>
      <button
        onClick={() => {
          removeTodo(id);
        }}
        className="flex-none"
      >
        <IconCross />
      </button>
    </article>
  );
};
export default TodoItem;
