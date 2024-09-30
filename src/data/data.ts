import Todo from "../types/models/todo";
import User from "../types/models/user";

export const users: User[] = [];

export const todos: Todo[] = [];

(async (): Promise<void> => {
  const johnny: User = new User("Johnny");
  await johnny.hashPassword("1234");

  const laundry: Todo = new Todo("Fold come clean laundry", johnny.id);
  const dished: Todo = new Todo(
    "Make the dishes from Shabbat dinner",
    johnny.id
  );

  users.push(johnny);
  todos.push(laundry, dished);
})();



