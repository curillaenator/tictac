import { makeObservable, observable, action, computed } from 'mobx';

export interface TodoType {
  id: number;
  title: string;
  finished: boolean;
}

export class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor(title: string) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });

    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}

export class TodoList {
  todos: TodoType[] = [];

  get getUnfinishedCnt() {
    return this.todos.filter((td) => !td.finished).length;
  }

  constructor(todos: TodoType[]) {
    makeObservable(this, {
      todos: observable,
      getUnfinishedCnt: computed,
    });

    this.todos = todos;
  }
}
