const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const passport = require('passport')
//const cors = require('cors')
const passportStrategy = require('./middleware/passport-strategy')
// const authRoutes = require('./routes/auth.routes')
// const projectRoutes = require('./routes/project.routes')
const keys = require('./keys')
const app = express()
//const listEndpoints = require('express-list-endpoints')

// const corsOptions = {
//   origin: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   preflightContinue: true,
//   maxAge: 600,
// };
// app.options('*', cors(corsOptions))
// app.use(cors())

mongoose.connect(keys.MONGO_URI, {
  //useUnifiedTopology: true,
  //useNewUrlParser: true,
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


