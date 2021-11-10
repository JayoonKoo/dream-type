type ToDo = {
  title: string;
  description: string;
};
function display(todo: ReadOnly<ToDo>) {
  // todo.title = 'koo' error
}
