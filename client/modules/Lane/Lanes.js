import React, { PropTypes } from 'react';
import Lane from './LaneContainer.js';

// Import Style
import styles from './Lane.css';

const Lanes = ({ lanes }) => {
  return (
    <div className={styles.lanes}>{lanes.map(lane =>
      <Lane key={lane.id} lane={lane} />
    )}</div>
  );
};

Lanes.propTypes = {
  lanes: PropTypes.array,
};

export default Lanes;
