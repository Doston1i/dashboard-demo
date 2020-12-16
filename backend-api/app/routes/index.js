const express = require("express");
const router = express.Router();
const user = require("../controllers/users");
const student = require("../controllers/students");
//User controller 
router.post("/users", user.create);
router.get("/users", user.findAll);
router.get("/users/:id", user.findOne);
router.put("/users/:id", user.update);
router.delete("/users/:id", user.delete);
router.post("/usersAuth", user.findByUsernameAndPassword);

//Student controller 
router.post("/student", student.create);
router.get("/student", student.findAll);
router.get("/student/:id", student.findOne);
router.put("/student/:id", student.update);
router.delete("/student/:id", student.delete);
router.get("/studentChart/:grade", student.findAllBarChart);
router.get("/studentChartIds/:grade", student.findIdByGrade);


module.exports = router;
