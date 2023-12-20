import React, { useState } from 'react';
import Desc from './ProjectDesc'; // Ensure this import points to where your Desc component is located.

const ProjectCard = ({ imageUrl, title, descContent }) => {
    const [isDescOpen, setIsDescOpen] = useState(false);

    const openDesc = () => {
        setIsDescOpen(true);
    };

    const closeDesc = () => {
        setIsDescOpen(false);
    };

    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg flex flex-col">
                <div className="flex-shrink-0">
                    <a onClick={openDesc}>
                        <img alt="Placeholder" className="block h-48 w-full object-cover hover:opacity-75" src={imageUrl} />
                    </a>
                </div>
                <header className="flex flex-col items-center justify-center leading-tight p-2 md:p-4 flex-grow">
                    <h1 className="text-lg font-semibold text-center">
                        <a className="no-underline hover:text-blue-500 text-black" onClick={openDesc}>
                            {title}
                        </a>
                    </h1>
                </header>
                <footer className="flex items-center justify-center leading-none p-2 md:p-4">
                    <button
                        onClick={openDesc}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md text-center"
                    >
                        Details
                    </button>
                </footer>
            </article>
            {isDescOpen && (
                <Desc isOpen={isDescOpen} onClose={closeDesc}>
                    {/* Content for your Desc goes here */}
                    <h2 className="text-lg font-bold text-center pb-3">{title}</h2>
                    {/* Include any other details you want to show in the Desc */}
                    <p>{descContent}</p>
                </Desc>
            )}
        </div>
    );
};

export default ProjectCard;