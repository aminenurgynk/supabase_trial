// components/todos/delete-todo.tsx

"use client";

import { deleteTodo } from "@/actions/todos/actions";
import { Button } from "@/components/ui/button";
import { IoClose } from "react-icons/io5";

export default function DeleteTodo({ id }: { id: number }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-4 h-4"
      onClick={async () => {
        await deleteTodo(id);
      }}
    >
      <IoClose />
    </Button>
  );
}