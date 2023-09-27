const express = require("express");
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require("../controllers/transactionCtrl");

//router object
const router = express.Router();

//routes
//add an transaction
router.post('/add-transaction',addTransaction)

//edit an transaction
router.post('/edit-transaction',editTransaction)

//delete an transaction
router.post('/delete-transaction',deleteTransaction)

//get an transaction
router.post('/get-transaction',getAllTransaction)


module.exports=router