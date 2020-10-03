const Project = require('../models/project.model')

module.exports.create = async (req, res) => {
  console.log('запрос пошел.....')
  const project = new Project({
    title: req.body.title,
    text: req.body.text,
    autor: req.body.autor,
    linkProject: req.body.linkProject,
    linkGithub: req.body.linkGithub,
    imageUrl: `/${req.file.filename}`,
  })

  try {
    console.log(project)
    await project.save(err => {
      if (err) console.log(err);
      else {
        console.log('Запись сохранена!!!')
      }
    })
    console.log(project)
    res.status(201).json(project)
  } catch (e) {
    res.status(500).json(e)
    console.log('База не приняла')
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const projects = await Project.find().sort({date: - 1})
    res.json(projects)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Project.findById(req.params.id).exec((error, project) => {
      res.json(project)
    })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  const $set = {
    text: req.body.text
  }
  try {
    const project = await Project.findOneAndUpdate({
      _id: req.params.id
    }, {$set}, {new: true})
    res.json(project)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Project.deleteOne({_id: req.params.id})
    res.json({message: 'Пост удален'})
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.addView = async (req, res) => {
  const $set = {
    views: ++req.body.views
  }
  try {
    await Project.findOneAndUpdate({_id: req.params.id}, {$set})
    res.status(204).json()
  } catch (e) {
    res.status(500).json(e)
  }
}
