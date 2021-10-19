import React from "react";

const styles = {
    cardStyle: {
      width: '18rem',
      height: '240px'
    },
  }

export default function Cards(props) {
    return (
      <div className="row g-4 gap-3">
        {props.projects.map(item => (
        <div className="card ps-0 pe-0" style={styles.cardStyle} key={item.id}>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">{item.description}</p>
          
        </div>
        <div className="card-footer">
            <a href="#" className="card-link">Deployed</a>
            <a href="#" className="card-link">Github Repo</a>
          </div>
        </div>
        ))}
      </div>
      
    );
  }