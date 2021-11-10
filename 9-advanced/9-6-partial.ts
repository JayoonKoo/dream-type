{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: ToDo, fildsToUpdate: Partial<ToDo>): ToDo {
    return {
      ...todo,
      ...fildsToUpdate,
    };
  }
  const todo: ToDo = {
    title: "lean",
    description: "study",
    label: "study",
    priority: "high",
  };

  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);
}
