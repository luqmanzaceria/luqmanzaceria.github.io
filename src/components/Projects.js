import React from 'react';
import Card from './ProjectCard';
import wall_extraction from '../images/wall_extraction.png';
import blogging_platform from '../images/blogging_platform.jpg'
import ml_dd from '../images/ml_dd.png';
import todo_list from '../images/todo_list.png';
import drug_screening from '../images/drug_screening.png';
import superchat from '../images/superchat.png';

const Projects = () => {
    return (
        <div id="projects" class='pt-16'>
            <h2 class='text-3xl font-light px-8 sm:px-16 md:px-32'>Projects</h2>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4 pl-20">
                    <Card 
                        imageUrl={wall_extraction}
                        title="Wall Extraction"
                        descContent={["This research developed and refined methods for extracting wall structures from floor plans. I utilized a combination of image processing and deep learning techniques such as convolutional neural networks. Also wrote scripts to convert an SVG to a CSV of coordinates, and remove text from image with Keras OCR and OpenCV. ", <br></br>,<br></br>,<a class="underline hover:text-blue-500" href="https://docs.google.com/document/d/1wbfK_XH7AajhcG8SI49yNQ3K9OObylgzdTga0ah8xfA/edit?usp=sharing">Research Summary</a>,", ",<a class="underline hover:text-blue-500" href="https://github.com/luqmanzaceria/ucsc-research/tree/main/cv-floorplan">Code</a>]}
                    />
                    <Card 
                        imageUrl={blogging_platform}
                        title="Blogging App"
                        descContent={["Microblogging CRUD App.",<br></br>,<br></br>,"Features: user authentication, commenting, liking.",<br></br>,<br></br>,"Built with: Python, Flask, SQLAlchemy",<br></br>,<br></br>,<a class='underline hover:text-blue-500' href="https://github.com/luqmanzaceria/blogging-app/">Code</a>]}
                    />
                    <Card 
                        imageUrl={ml_dd}
                        title="ML Drug Discovery"
                        descContent={["Machine learning platform for drug discovery and medicinal molecule evaluation. The platform screened medicinal molecules, generated novel compounds, and analyzed retro-synthesis processes. Conducted investigation on accuracy of molecular descriptors for identifying structure-activity relationships of NNRTIs.",<br></br>,<br></br>,<a class="underline hover:text-blue-500" href='https://docs.google.com/presentation/d/1EwbyktaEj4lg0EiYavcYviTDdG3NMky-8p2joHc3SaM/edit?usp=sharing'>Slides</a>,", ",<a class='underline hover:text-blue-500' href='https://docs.google.com/presentation/d/1QZEGBMsyOP5j8iSO6bXyL-KB52SUfb1r/edit?usp=sharing&ouid=107176839436513288211&rtpof=true&sd=true'>Poster</a>,", ",<a class="underline hover:text-blue-500" href="https://emerginginvestigators.org/articles/21-098">Paper</a>,<br></br>,<br></br>,"Built with: Python, TensorFlow"]}
                    />
                    <Card 
                        imageUrl={todo_list}
                        title="To Do List"
                        descContent={["Simple CRUD To Do List app",<br></br>,<br></br>,<a class="underline hover:text-blue-500" href='https://github.com/luqmanzaceria/to-do-list'>Code</a>,<br></br>,<br></br>,"Built with: PostgreSQL, Express, React, Node"]}
                    />
                    <Card 
                        imageUrl={drug_screening}
                        title="Drug Screening"
                        descContent={["Automated drug screening platform with scripts that dock ligands using AutoDock Vina, convert ligands to .pdbqt format, and find similar molecules using PubChem. Platform used to find natural alternatives to benzodiazepines. Won Switch Therapeutics Chemistry Award",<br></br>,<br></br>,<a class="underline hover:text-blue-500" href="https://docs.google.com/document/d/13HOoCmQBLsHjqZVZDAkMPe0q1ehFVgZDjRBoze0ZXSc/edit?usp=sharing">Abstract</a>,", ",<a class="underline hover:text-blue-500" href='https://docs.google.com/presentation/d/1It_nbeR16Tvwn-Pefxy38FdERyfExKJGkdHmmrWg2Do/edit?usp=sharing'>Presentation</a>,", ",<a class="underline hover:text-blue-500" href='https://github.com/luqmanzaceria/ligand-docking-script'>Code</a>,<br></br>,<br></br>,"Built with: Python"]}
                    />
                    <Card 
                        imageUrl={superchat}
                        title="SuperChat"
                        descContent={["Single-group superchat app built with React and Firebase", <br></br>,<br></br>,<a class="underline hover:text-blue-500" href="https://convo-d7181.web.app/">Live Demo</a>,", ",<a class="underline hover:text-blue-500" href="https://github.com/luqmanzaceria/superchat">Code</a>]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
