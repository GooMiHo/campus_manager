const User = require('./user')
const Campus = require('./campus')
const Student = require('./student')

Student.belongsTo(Campus)
Campus.hasMany(Student)

Student.belongsTo(User)
User.hasMany(Student)

Campus.belongsTo(User)
User.hasMany(Campus)

module.exports = {
  User,
  Campus,
  Student
}
