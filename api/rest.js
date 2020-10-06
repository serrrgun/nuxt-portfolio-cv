const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport-strategy')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI, {
  //useUnifiedTopology: true,
  useNewUrlParser: true,
  //useCreateIndex: true,
  useFindAndModify: true,
})
  .then(() => console.log('MongoDB connect...'))
  .catch(() => console.log('MongoDB disconnect...'))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// app.all("/getJSON", (req, res) => {
//   res.json({ data: "data" })
// })

//console.log('UserCreate___rest')
// app.use('/api/auth', authRoutes)
// app.use('/api/project', projectRoutes)
//console.log(listEndpoints(app))
//console.log(authRoutes.toString());
//console.log(listEndpoints(app))
module.exports = app


