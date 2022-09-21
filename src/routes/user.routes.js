const { Router } = require('express')
const {
  getUsers,
  getUserDetails,
  updateUserDetails,
  updateStatus,
  deleteUser,
  createUser,
} = require('../controllers/user.controller')
const { isUser, isAdmin } = require('../utils/protected')

const router = Router()

//api: url/course/__

//Subscription
router.post('/create', createUser)
router.post('/', getUsers)
router.get('/:id', getUserDetails)
router.put('/update/:id', isUser, updateUserDetails)
router.put('/update-status/:id', isAdmin, updateStatus)
router.post('/delete/:id', isAdmin, deleteUser)

module.exports = router
