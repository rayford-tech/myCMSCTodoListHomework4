const { TodoList, Todo } = require("../todo");

describe("TodoList", () => {
  let todoList;
  let todo;

  beforeEach(() => {
    todoList = new TodoList();
    todo = new Todo("Title", "Description");
  });

  test("add method should add a todo to the list", () => {
    todoList.add(todo);
    expect(todoList.count()).toBe(1);
  });

  test("remove method should remove a todo from the list", () => {
    todoList.add(todo);
    todoList.remove(todo);
    expect(todoList.count()).toBe(0);
  });

  test("remove method should throw an error when removing a null todo", () => {
    expect(() => {
      todoList.remove(null);
    }).toThrowError("Todo cannot be null");
  });
});
