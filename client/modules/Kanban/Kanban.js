import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';

import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';

const Kanban = (props) => (
  <div className={styles.appDiv} >
    <button className={styles.AddLane} onClick={() => props.createLane({ name: 'New lane' })}>Add lane</button>
    <Lanes lanes={props.lanes} />
  </div>
);

Kanban.need = [() => { return fetchLanes(); }];

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
  createLane: createLaneRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
