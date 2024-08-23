// import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // const { todos } = useAppSelector((state) => state.todos);
  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);

  console.log(todos, isError);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="flex justify-between mb-3">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary w-full h-full rounded-xl p-1 space-y-3">
        {todos.length === 0 ? (
          <div className="bg-white p-6 rounded-md">
            <p className="text-center font-semibold">
              There is no task pending.
            </p>
          </div>
        ) : (
          <div className="bg-white w-full h-full rounded-lg p-2 space-y-2">
            {todos?.data?.map((todo, index) => (
              <div key={index}>
                <TodoCard {...todo} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
