import React, { FC } from 'react';

import { Todo, TodoList } from './mobx/store';

import { observer } from 'mobx-react-lite';

const newList = new TodoList([new Todo('One'), new Todo('Two')]);

const Game = observer<{ todoList: TodoList }>(({ todoList }) => {
  return (
    <div>
      {todoList.todos.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}

      <div>{todoList.getUnfinishedCnt}</div>
    </div>
  );
});

export const MobxGame: FC = () => <Game todoList={newList} />;
