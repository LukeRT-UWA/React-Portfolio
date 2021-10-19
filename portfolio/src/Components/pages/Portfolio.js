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
    purchased: true
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false
  },
  {
    id: 6,
    name: "Juice",
    purchased: true
  }
];

function List(props) {
  return (
    <div className="card-deck">
      {props.projects.map(item => (
      <div className="card" style={styles.cardWidthStyle} key={item.id}>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
      </div>

      ))}
    </div>
    
  );
}

export default function About() {
  return (
    <div>
      <h1>Portfolio</h1>
<List projects={projects} />
    </div>
  );
}

