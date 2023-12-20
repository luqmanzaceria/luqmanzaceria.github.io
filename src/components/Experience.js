import React from 'react';

const Experience = () => {
    return (
        <>
            <div id="experience" class='flex flex-col pt-24'>
                <h2 class='text-3xl font-light px-8 sm:px-16 md:px-32 pb-8'>Experience</h2>
                <div class="px-14 sm:px-28 md:px-40 mx-auto">
                <div class="flex justify-between items-center border-b-2 py-4">
                <div>
                    <h3 class="font-bold text-lg">University of Glasgow</h3>
                    <p class="text-gray-600">Researcher</p>
                    <p>Building autonomous surgical robots 🦾! I work on computer vision systems and web interfaces.</p>
                </div>
                <div class="text-right">
                    <p class="text-sm text-gray-500">Glasgow, SCT</p>
                    <p class="text-sm text-gray-500">Jun 2023 - Present</p>
                </div>
                </div>

                <div class="flex justify-between items-center border-b-2 py-4">
                <div>
                    <h3 class="font-bold text-lg">Internet Activism</h3>
                    <p class="text-gray-600">Lead Developer</p>
                    <p>Created digital humanitarian tools. Housed 🏠 100k Ukranian refugees with ukrainetakeshelter.com and developed proxynow.org to protect privacy and combat censorship.</p>
                </div>
                <div class="text-right">
                    <p class="text-sm text-gray-500">San Francisco, CA</p>
                    <p class="text-sm text-gray-500">Jan 2023 - Jun 2023</p>
                </div>
                </div>

                <div class="flex justify-between items-center border-b-2 py-4">
                <div>
                    <h3 class="font-bold text-lg">BitTorrent</h3>
                    <p class="text-gray-600">Associate Software Engineer</p>
                    <p>BitTorrent is the world's most popular torrenting client, with over 2 billion total users. I worked on the uTorrent client.</p>
                </div>
                <div class="text-right">
                    <p class="text-sm text-gray-500">San Francisco, CA</p>
                    <p class="text-sm text-gray-500">Jun 2021 - Jan 2023</p>
                </div>
                </div>

                <div class="flex justify-between items-center border-b-2 py-4">
                <div>
                    <h3 class="font-bold text-lg">ASDRP</h3>
                    <p class="text-gray-600">Researcher</p>
                    <p>Led ML platform creation for drug discovery 🧬 and got research published in The Journal of Emerging Investigators.</p>
                </div>
                <div class="text-right">
                    <p class="text-sm text-gray-500">Fremont, CA</p>
                    <p class="text-sm text-gray-500">Jun 2021 - Jan 2023</p>
                </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Experience;