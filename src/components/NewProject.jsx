import React, { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const saveModal = useRef();
  const cancelModal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      saveModal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  function handleCancel() {
    // Display a modal for the cancel operation
    cancelModal.current.open();
  }

  return (
    <>
      <Modal ref={saveModal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 mb-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">You must enter a value for every field</p>
      </Modal>

      <Modal ref={cancelModal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 mb-4">Cancel Operation</h2>
        <p className="text-stone-600 mb-4">Are you sure you want to cancel?</p>
        <button
          className="px-6 by-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={onCancel}
        >
          Yes, Cancel
        </button>
      </Modal>

      <div className="w-[35rem] my-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={handleCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 by-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
