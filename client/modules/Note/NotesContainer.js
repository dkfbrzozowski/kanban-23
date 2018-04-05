import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNoteRequest, updateNoteRequest, editNote } from '../Note/NoteActions';

const mapDispatchToProps = {
  editNote,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
};

export default connect(null, mapDispatchToProps)(Notes);
