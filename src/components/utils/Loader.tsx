import 'tw-elements';

export const LoaderSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-5 h-5 border-2 rounded-full text-white"
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};
