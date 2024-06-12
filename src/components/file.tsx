import { CancelIcon, EyeIcon, PlayIcon } from "../assets/icons";

const File = () => {
  return (
    <div className="bg-clr-base-200 px-4 py-6 flex justify-between rounded-lg">
      <div className="flex items-center gap-1">
        <PlayIcon />
        <Dot />
        <p className="text-clr-text-300 font-medium text-[.875rem]">
          Sukuna-Wailing.mp4
        </p>
        <Dot />
        <span className="text-[.875rem]">2.5MB</span>
      </div>
      {/* ACTIONS */}
      <div className="flex items-center gap-3">
        <EyeIcon />
        <CancelIcon />
      </div>
    </div>
  );
};

export default File;

const Dot = () => {
  return <div className="w-[5px] h-[5px] bg-clr-accent-300 rounded-full"></div>;
};
