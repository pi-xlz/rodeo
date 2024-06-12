import { UploadIcon } from "../assets/icons";
import DropZone from "./dropzone";
import File from "./file";

const Uploader = () => {
  return (
    <div className="bg-clr-base-100 min-w-[34.375rem] h-[30.25rem] px-5 rounded-[.625rem] shadow-dark-shadow">
      <header className="flex flex-col gap-1 pt-5">
        <div className="flex gap-[.375rem] items-center">
          <UploadIcon />
          <h1 className="text-white text-xl font-medium ">Upload files</h1>
        </div>
        <p className="font-medium">
          Attachments that have been uploaded as part of the project.
        </p>
      </header>
      {/* DROPZONE */}
      <section className="py-4">
        <DropZone />
        <div className="flex justify-between text-sm pt-3 text-clr-text-200">
          <span>Supported formats: PDF, JPEG, PNG</span>
          <span>Max file size: 500MB</span>
        </div>
      </section>
      {/* UPLOADED FILES LIST */}
      <section>
        <File />
      </section>
    </div>
  );
};

export default Uploader;
