const router = require('express').Router()
const {Campus, Student} = require('../db/models')
const User = require('../db/models/user')
const {backupCampuses, backupStudents} = require('./backUpData')

module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)

    backupCampuses.forEach(async campus => {
      campus.id = Number(`${user.id}${campus.id}`)
      campus.userId = user.id
      await Campus.create(campus)
    })

    backupStudents.forEach(async student => {
      student.id = Number(`${user.id}${student.id}`)
      student.campusId = Number(`${user.id}${student.campusId}`)
      student.userId = user.id
      await Student.create(student)
    })

    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
