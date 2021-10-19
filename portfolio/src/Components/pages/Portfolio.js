import React from 'react';
import Cards from '../Cards'

const projects = [
  {
    id: 1,
    name: "Milk",
    description: "this is a description",
    subtitle: "Subtitle",
    deployedLink: "https://project2lukert.herokuapp.com/",
    repoLink: "www."
  },
  {
    id: 2,
    name: "Eggs",
    description: true,
    deployedLink: "www.",
    repoLink: "www."
  },
  {
    id: 3,
    name: "Cheese",
    description: false,
    deployedLink: "www.",
    repoLink: "www."
  },
  {
    id: 4,
    name: "Cake Mix",
    description: false,
    deployedLink: "www.",
    repoLink: "www."
  },
  {
    id: 5,
    name: "Carrots",
    description: false,
    deployedLink: "www.",
    repoLink: "www."
  },
  {
    id: 6,
    name: "Juice",
    description: true,
    deployedLink: "www.",
    repoLink: "www."
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

