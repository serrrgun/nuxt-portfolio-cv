const {model, Schema} = require('mongoose')


const projectSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  text: {
    type: String,
    require: true
  },
  autor: {
    type: String,
    require: true
  },
  linkProject: {
    type: String,
    require: true
  },
  linkGithub: {
    type: String,
    require: true
  },
  listTehnology: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  prevImage: [String],
  desktopImage: [String],
  mobileImage: [String]
})

module.exports = model('projects', projectSchema)
