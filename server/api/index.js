const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/students', require('./routes/student_routes'))
router.use('/campuses', require('./routes/campus_routes'))

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
