const {Student, Campus} = require('../../db/models')
const studentRouter = require('express').Router()

// GET path '/api/students'
studentRouter.get('/:userId', async (req, res, next) => {
  const userId = req.params.userId
  try {
    const students = await Student.findAll({
      where: {userId: userId},
      include: [{model: Campus, include: [{all: true}]}]
    })
    res.json(students)
  } catch (err) {
    next(err)
  }
})

// GET path '/api/students/student/:id'
studentRouter.get('/:userId', async (req, res, next) => {
  try {
    const id = req.params.id
    const student = await Student.findOne({
      where: {id: id},
      include: [{model: Campus, include: [{all: true}]}]
    })
    res.json(student)
  } catch (err) {
    next(err)
  }
})

// GET path '/api/students/student'
studentRouter.post('/:userId/student', async (req, res, next) => {
  console.log('req.body ', req.body)
  try {
    const userId = req.params.userId
    const student = req.body
    student.userId = userId
    const newStudent = await Student.create(student) //maybe add some if statements to prevent submission without required fields
    res.status(201).json(newStudent)
  } catch (err) {
    next(err)
  }
})

studentRouter.delete('/:userId/student/:id', (req, res, next) => {
  try {
    const id = req.params.id
    Student.destroy({where: {id: id}})
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

studentRouter.put('/:userId/student/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const [numberOfEffectedRows, result] = await Student.update(req.body, {
      where: {id: id},
      returning: true,
      plain: true
    })
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = studentRouter
