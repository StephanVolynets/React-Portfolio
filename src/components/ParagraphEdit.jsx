import './ParagraphEdit.css';

export default function ParagraphEdit({ children, editMode = false }) {

  let componentContent;
  if (editMode) {
    componentContent = (
      <>
        <textarea defaultValue={children} />
      </>
    )
  } else {
    componentContent = (
      <>
        <p>{children}</p>
      </>
    )
  }

  return (
    <>
      {componentContent}
    </>
  );
}
