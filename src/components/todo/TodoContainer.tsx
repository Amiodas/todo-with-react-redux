import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-3">
       <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary w-full h-full rounded-xl p-1 space-y-3">
        {/* <div className="bg-white p-3 mb-3 rounded-md">
          <p className="text-center font-semibold">There is no task pending.</p>
        </div> */}
        <div className="bg-white w-full h-full rounded-lg p-2 space-y-2">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
