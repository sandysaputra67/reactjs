import React from "react";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value,e.target.completed.value);
    e.target.title.value = "";
    e.target.completed.value = ""
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Add User</h3>
        <input placeholder="title" name="title" />
        <input placeholder="completed" name="completed" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
