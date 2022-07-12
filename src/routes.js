const { addNoteHandler, getAllNotesHandler, getNoteByIdHander, editNoteByHandler, deleteNoteByIdHandler } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHander
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByHandler
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler
  }
]

module.exports = routes
