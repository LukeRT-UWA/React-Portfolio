import React from 'react';

const styles = {
  cardWidthStyle: {
    width: '18rem'
  }
}

const projects = [
  {
    id: 1,
    name: "Milk",
    description: true,
    deployedLink: "www.",
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

function List(props) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {props.projects.map(item => (
      <div className="card m-2" style={styles.cardWidthStyle} key={item.id}>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="card-link">Deployed</a>
        <a href="#" className="card-link">Github Repo</a>
      </div>
      </div>

      ))}
    </div>
    
  );
}

export default function About() {
  return (
    <div className = "w-50 mx-auto">
      <h1 className ="pb-4 pt-2">Portfolio</h1>
<List projects={projects} />
    </div>
  );
}

