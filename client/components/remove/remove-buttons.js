import axios from 'axios'

export const deleteCampusFunc = (id, deleteCampus) => {
  deleteCampus(id)
  axios.delete(`api/campuses/campus/${id}`)
}

export const deleteCampusFromCampusInfo = (id, deleteCampus, history) => {
  deleteCampus(id)
  axios.delete(`api/campuses/campus/${id}`)
  history.push('/campuses')
}

export const deleteStudentFunc = (id, deleteStudent, history) => {
  deleteStudent(id)
  axios.delete(`api/students/student/${id}`)
  if (history) history.push('/students')
}
