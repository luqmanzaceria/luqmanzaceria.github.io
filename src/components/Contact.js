import React from 'react';

import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import email from '../images/email.png'

const Contact = () => {
    return (
        <>
            <meta charset="UTF-8"></meta>
            <div id="contact" class='flex flex-col pt-24'>
                <h2 class='text-3xl font-light px-8 sm:px-16 md:px-32 pb-8'>Contact</h2>
                <a class='px-14 sm:px-28 md:px-40 pt-4 text-lg hover:underline hover:text-blue-500' href='mailto:luqmanzaceria@gmail.com'>luqmanzaceria@gmail.com</a>
                <div class="flex justify-center space-x-4 py-16">
                    <a href="mailto:luqmanzaceria@gmail.com" target="_blank" rel="noopener noreferrer" class="block">
                        <img src={email} alt="Email" class="h-16 w-16" />
                    </a>
                    <a href="https://www.linkedin.com/in/luqman-zaceria" target="_blank" rel="noopener noreferrer" class="block">
                        <img src={linkedin} alt="LinkedIn" class="h-16 w-16" />
                    </a>
                    <a href="https://github.com/luqmanzaceria" target="_blank" rel="noopener noreferrer" class="block">
                        <img src={github} alt="GitHub" class="h-16 w-16" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contact;