import React from "react";

const About = () => {
  return (
    <>
      <meta charset="UTF-8"></meta>
      <div id="about" class="flex flex-col pt-24">
        <h2 class="text-3xl font-light px-8 sm:px-16 md:px-32 pb-8">
          About Me
        </h2>
        <p class="px-14 sm:px-28 md:px-40 pt-4 text-lg">
          Hey there! 👋 I'm a computer science student at the UC Santa Cruz
          Baskin School of Engineering.
        </p>
        <p class="px-14 sm:px-28 md:px-40 pt-4 text-lg">
          My expertise and academic focus lies in artificial intelligence. I'm
          actively engaged in undergraduate research 🔬 at the UCSC Computer
          Vision Lab 👀, focusing on indoor navigation solutions such as wall extraction and
          floorplan vectorization with the application of convolutional neural
          networks and image processing. I am also a tutor for Applied Discrete Mathematics as well as
          Machine Learning.
        </p>
        <p class="px-14 sm:px-28 md:px-40 pt-4 text-lg">
          My previous professional experience includes a role as a full-stack
          developer at Internet Activism, where I developed web applications for
          humanitarian initiatives ⛑️. Before that, I contributed as a software
          engineer 👨‍💻 at BitTorrent, working on the uTorrent client.
        </p>
        <p class="px-14 sm:px-28 md:px-40 pt-4 text-lg">
          I'm open to new challenges and opportunities in software engineering
          and research 🧐. You can find my contact details below! Don't hesitate
          to get in touch if you have questions, share similar interests, or are
          aware of any opportunities that align with my skills.
        </p>
      </div>
    </>
  );
};

export default About;
