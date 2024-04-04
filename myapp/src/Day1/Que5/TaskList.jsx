import React from "react";

function TaskList(props) {
  return (
    <div>
      <ul>
        {props.task.map((task) => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default TaskList;
