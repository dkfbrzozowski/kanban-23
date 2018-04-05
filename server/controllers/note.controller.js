import Note from '../models/note';
import Lane from '../models/lane';
import uuid from 'uuid';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function addNote(req, res) {
  const { note, laneId } = req.body;

  if (!note || !note.task || !laneId) {
    res.status(400).end();
  }

  const newNote = new Note({
    task: note.task,
  });

  newNote.id = uuid();
  newNote.laneId = laneId;
  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({ id: laneId })
      .then(lane => {
        lane.notes.push(saved);
        return lane.save();
      })
      .then(() => {
        res.json(saved);
      });
  });
}

export function deleteNote(req, res) {
  Note.findOneAndRemove({ id: req.params.noteId }).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }

    Lane.findOne({ id: note.laneId })
      .then(lane => {
        const notesFilterredArray = lane.notes.filter(singleNote => singleNote.id !== req.params.noteId);
        lane.update({ notes: notesFilterredArray }, (error) => {
          if (error) {
            res.status(500).send(error);
          }
          res.status(200).end();
        });
      });
  });
}

export function updateNote(req, res) {
  if (!req.body.task) {
    res.status(403).end();
  }

  Note.findOne({ id: req.params.noteId })
    .then(note => {
      note.update({ task: req.body.task }, (err) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).end();
      });
    });
}
