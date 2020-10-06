const path = require('path')
const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    console.log('Тело запроса', req.files)
    cb(null, path.resolve(__dirname, '../..', 'static'))
  },
  filename(req, file, cb) {
    cb(null, `${moment().format('DDMMYYYY-HHmmss_SSS')}-${file.originalname}`)
  },
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true)
    console.log('Uploading file.............', file.mimetype, req.filename)
  } else {
    cb(null, false)
  }
}

module.exports = multer({
  storage, fileFilter, limits: {fileSize: 1024 * 1024 * 5}
})
