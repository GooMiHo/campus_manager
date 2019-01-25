import axios from 'axios'

// action
const GOT_STUDENTS = 'GOT_STUDENTS'
const DELETE_STUDENT = 'REMOVE_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'

// action creator
const gotStudents = students => ({
  type: GOT_STUDENTS,
  students
})

export const removeStudent = id => ({
  type: DELETE_STUDENT,
  id
})

const addStudent = student => ({
  type: ADD_STUDENT,
  student
})

// thunk creator
export const fetchStudents = userId => {
  return async dispatch => {
    //const {data: students} = await axios.get(`/api/students/${userId}`)
    const {data: students} = await axios.get(`/api/students/${userId}`)
    dispatch(gotStudents(students))
  }
}

export const makeStudent = (student, userId) => {
  return async dispatch => {
    const {data: newStudent} = await axios.post(
      `/api/students/${userId}/student`,
      student
    )
    newStudent.userId = userId
    dispatch(addStudent(newStudent))
  }
}

// sub-reducer
const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return [...state, action.student]
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.id)
    case GOT_STUDENTS:
      return action.students
    default:
      return state
  }
}

export default studentsReducer
