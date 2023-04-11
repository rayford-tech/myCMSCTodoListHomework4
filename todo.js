class TodoList {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    if (!todo) {
      throw new Error("Todo cannot be null");
    }

    this.todos.push(todo);
  }

  remove(todo) {
    if (!todo) {
      throw new Error("Todo cannot be null");
    }

    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  count() {
    return this.todos.length;
  }
}

class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

module.exports = { TodoList, Todo };
