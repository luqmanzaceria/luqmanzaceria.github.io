import React from 'react';

const ProjectDesc = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" id="my-modal">
      <div className="relative mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-lg rounded-md bg-white">
        <div className="text-left">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-3xl font-light"
            >
              ×
            </button>
          </div>
          {/* Modal content here */}
          <div className="mt-3">
            {children}
          </div>
          <div className="mt-4 flex justify-center">
            <button
              onClick={onClose}
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none transition ease-in-out duration-150"
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDesc;
