import React from "react";
import { Button } from "react-bootstrap";

const Listtask = ({ task, index, removeTask }) => {
  return (
    <>
      <div className="list-task">
        {task.title ? (
          <>
            {task.title}
            <Button
              onClick={() => {
                removeTask(index);
              }}
              className="delete-btn"
              variant="danger"
            >
              Remove
            </Button>
          </>
        ) : (
          <div className="empty-task-message">No task title provided</div>
        )}
      </div>
    </>
  );
};

export default Listtask;
