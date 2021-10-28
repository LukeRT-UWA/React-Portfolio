import React from 'react';
import Cards from '../Cards'

const projects = [
  {
    id: 1,
    name: "Project 2",
    description: "MVC Project",
    subtitle: "Joke categorisation/review app",
    deployedLink: "https://project2lukert.herokuapp.com/",
    repoLink: "https://github.com/LukeRT-UWA/Am-I-a-Joke-to-you.",
    image: "../assets/images/Project2.jpg"
  },
  {
    id: 2,
    name: "Project 1",
    description: "API Fetch App",
    subtitle: "Joke categorisation/review app",
    deployedLink: "https://project2lukert.herokuapp.com/",
    repoLink: "https://github.com/LukeRT-UWA/Am-I-a-Joke-to-you.",
    image: "../assets/images/image-1.jpg"
  },
  {
    id: 3,
    name: "Weather APP",
    description: "Weather foreccast application",
    subtitle: "API Fetch",
    deployedLink: "https://project2lukert.herokuapp.com/",
    repoLink: "https://github.com/LukeRT-UWA/Am-I-a-Joke-to-you.",
    image: "../assets/images/image-2.jpg"
  },
  {
    id: 4,
    name: "Daily Planner App",
    description: "Save hourly tasks",
    subtitle: "Local Storage",
    deployedLink: "https://project2lukert.herokuapp.com/",
    repoLink: "https://github.com/LukeRT-UWA/Am-I-a-Joke-to-you.",
    image: "../assets/images/image-3.jpg"
  },
  {
    id: 5,
    name: "Quiz App",
    description: "JavaScript quiz application",
    subtitle: "Javascript",
    deployedLink: "https://project2lukert.herokuapp.com/",
    repoLink: "https://github.com/LukeRT-UWA/Am-I-a-Joke-to-you.",
    image: "../assets/images/image-4.jpg"
  },
  {
    id: 6,
    name: "Password generator",
    description: "Allows 4 types of characters",
    subtitle: "Javascript",
    deployedLink: "https://project2lukert.herokuapp.com/",
    repoLink: "https://github.com/LukeRT-UWA/Am-I-a-Joke-to-you.",
    image: "../assets/images/image-5.jpg"
  }
];

export default function Portfolio() {
  return (
    <div className = "w-50 mx-auto">
      <h1 className ="pb-4 pt-2">Portfolio</h1>
<Cards projects={projects} />
    </div>
  );
}

