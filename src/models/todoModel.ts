import mongoose from 'mongoose'

const todoSchema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  description: {
    type: String,
    required: [false, 'You skipped']
  },
  isDone: {
    type: Boolean,
    default: false
  },
}, { timestamps: true })

const TodoList = mongoose.model('TodoList', todoSchema)

export default TodoList
