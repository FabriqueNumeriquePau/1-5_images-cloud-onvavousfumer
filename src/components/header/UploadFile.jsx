import { useState } from "react";

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const send = (event) => {
    event.preventDefault();
    console.log(file);
  };

  return (
    <form className="form" onSubmit={(event) => send(event)}>
      <div className="file-upload-wrapper" data-text="Selectionne ton image !">
        <input
          name="file-upload-field"
          type="file"
          className="file-upload-field"
          onChange={(e) => {
            setFile(e.target.value);
          }}
        />
      </div>
    </form>
  );
}
