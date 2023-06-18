import React from 'react';

const pagefun = ({todo}) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button>Completar</button>
        <button>x</button>
      </div>
    </div>
  );
};

export default pagefun;