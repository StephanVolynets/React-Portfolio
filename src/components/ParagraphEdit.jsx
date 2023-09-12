import './ParagraphEdit.css';

export default function ParagraphEdit({ children, editMode = false }) {

  function handleSaveText() {
    console.log("TODO: save text");
  }

  function handleEditText() {
    console.log("TODO: edit text");
  }

  let componentContent;
  if (editMode) {
    componentContent = (
      <>
        <textarea defaultValue={children} />
        <button onClick={handleSaveText}>Save</button>
      </>
    )
  } else {
    componentContent = (
      <>
        <p>{children}</p>
        <button onClick={handleEditText}>Edit Function (Conventional)</button>
        <button onClick={() => { console.log("TODO: edit text (arrow function)") }}>Edit Arrow Function</button>
      </>
    )
  }

  return (
    <>
      {componentContent}
    </>
  );
}
