import React from 'react';

import logo from '../images/ucsc_logo.png';

const Education = () => {
    return (
        <>
            <div id="education" class='pt-16'>
                <h2 class='text-3xl font-light px-8 sm:px-16 md:px-32'>Education</h2>
                <div class='flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center mt-8'>
                    <div class='flex flex-col items-center justify-center mr-24 pb-10'>
                        <img src={logo} alt="UC Santa Cruz Logo" class="h-auto w-64"></img>
                        <h2 class='text-2xl font-bold'>UC Santa Cruz</h2>
                        <h2 class='text-2xl font-bold'>B.S. Computer Science</h2>
                    </div>
                    <div class='text-left pb-10'>
                        <h3 class='text-xl font-bold'>Relevant Coursework</h3>
                        <p class='font-bold'>✅ CSE 16: Applied Discrete Mathematics (I tutored this class!)</p>
                        <p class='font-bold'>✅ CSE 30: Programming Abstractions: Python</p>
                        <p class='font-bold'>✅ CSE 101: Data Structures & Algorithms</p>
                        <p class='font-bold'>✅ CSE 102: Introduction to Analysis of Algorithms</p>
                        <p class='font-bold'>✅ CSE 120: Computer Architecture</p>
                        <p class='font-bold'>✅ ECE 30: Engineering Principles of Electronics</p>
                        <p class='font-bold'>✅ CSE 40: Machine Learning Basics (I tutored this class too!)</p>
                        <p class='font-bold'>✅ CSE 103: Computational Models</p>
                        <p class='font-bold'>✅ CSE 130: Principles of Computer System Design</p>
                        <p class='font-bold'>✅ CSE 144: Applied Machine Learning: Deep Learning</p>
                        <p class='font-bold'>✅ CSE 186: Full Stack Web Development I</p>
                        <p class='font-bold'>✅ CSE 187: Full Stack Web Development II</p>
                        <p class='font-bold'>✅ CSE 164: Computer Vision</p>
                        <p class='font-bold'>✅ CSE 114A: Foundations of Programming Languages</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;