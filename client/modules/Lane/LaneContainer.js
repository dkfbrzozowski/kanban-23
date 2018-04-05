import { connect } from 'react-redux';
import Lane from './Lane';
import { updateLaneRequest, editLane, deleteLaneRequest } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => {
    return {
      laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
    };
};

const mapDispatchToProps = {
    editLane,
    deleteLane: deleteLaneRequest,
    updateLane: updateLaneRequest,
    addNote: createNoteRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lane);
