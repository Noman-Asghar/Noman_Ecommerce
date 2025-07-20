import React from "react";
import aboutImg from "/about.jpeg";
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const About = () => {
  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full py-2">
         {/* Typewriter Effect */}
                    <motion.h2 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2 }}
                      className="text-xl md:text-4xl py-3 font-bold italic text-orange-500"
                    >
                      <Typewriter
                        words={['About Me', "I'm Noman Asghar", "I'm MERN Stack Developer"]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1500}
                      />
                    </motion.h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hi, I'm <span className="font-semibold text-orange-500">Noman</span>,
            a passionate and detail-oriented MERN Stack Developer with a strong command
            over modern web technologies. I specialize in building dynamic, responsive,
            and scalable web applications using <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            With expertise in both front-end and back-end, I enjoy converting ideas into
            real-world applications. Clean code, smooth UI/UX, and robust APIs are my
            priorities. I'm a quick learner who loves solving real-world problems with tech.
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-black mb-2">
              💻 Tech Skills:
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Front-end:</strong> React.js, Redux, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+)</li>
              <li><strong>Back-end:</strong> Node.js, Express.js, MongoDB, REST APIs</li>
              <li><strong>Tools:</strong> Git, GitHub, VS Code, Postman, Firebase</li>
              <li><strong>Soft Skills:</strong> Teamwork, Communication, Time Management, Problem-Solving</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed italic">
            “I believe in writing code that not only works but is readable, reusable, and reliable.”
          </p>

          <p className="text-gray-800 mt-4">
            🔗 Let's connect and build something awesome together!
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={aboutImg}
            alt="About Noman"
            className="rounded-xl shadow-lg w-full max-w-md object-cover hover:scale-90 duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
