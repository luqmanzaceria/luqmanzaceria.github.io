import React from 'react';

import headshot from '../images/headshot.jpg';

const Intro = () => {
    return (
        <>
            <div class='flex flex-col items-center justify-center mt-32'>
                <img src={headshot} alt="Luqman Zaceria Headshot" class="rounded-full h-48 w-48"></img>
                <h1 class="text-4xl font-bold mt-4">Luqman Zaceria</h1>
            </div>
        </>
    );
};

export default Intro;