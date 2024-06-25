const express = require('express')
const router = express.Router()
const  { addTodoListData , getAllData , deleteToDoListData, updateToDoListData} = require('../controllers/contoller')

router.get('/', getAllData)
router.post('/add', addTodoListData)
router.post('/delete',deleteToDoListData)
router.post('/update',updateToDoListData)
module.exports = router