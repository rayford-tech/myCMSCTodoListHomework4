const { TodoList, Todo } = require("../todo");

describe("TodoList", () => {
  let todoList;
  let todo;
  let mockTodo;

  beforeEach(() => {
    todoList = new TodoList();
    todo = new Todo("Title", "Description");
    mockTodo = jest.fn();
  });

  test("add method should call Todo constructor with given title and description", () => {
    mockTodo.mockReturnValue(todo);

    todoList.add(mockTodo("Title", "Description"));

    expect(mockTodo).toHaveBeenCalledWith("Title", "Description");
  });
});
