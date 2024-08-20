import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAppDispatch } from "@/redux/hook";
import { addTodo } from "@/redux/features/todoSlice";

const AddTodoModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const randomString = Math.random().toString(36).substring(2, 7);
    const taskDetails = {
      id: randomString,
      title: title,
      description: description,
    };
    dispatch(addTodo(taskDetails));
    console.log(taskDetails);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="ml-1">Add todo</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Task
              </Label>
              <Input
                id="title"
                name="title"
                defaultValue={title}
                onBlur={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Enter title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Desctiption
              </Label>
              <Input
                id="description"
                name="description"
                defaultValue={description}
                onBlur={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Enter your description"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
