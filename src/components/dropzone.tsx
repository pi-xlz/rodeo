import { PaperClipIcon } from "../assets/icons";

const DropZone = () => {
  return (
    <div className="bg-clr-bg-dropzone h-[11.625rem] rounded-lg flex justify-center items-center">
      <div className="text-center">
        <PaperClipIcon className="mx-auto" />
        <p className="text-sm">Drag and Drop your files here</p>
        <p className="text-sm text-clr-accent-100">Click to browse</p>
      </div>
    </div>
  );
};

export default DropZone;
