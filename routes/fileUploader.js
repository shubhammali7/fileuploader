const router = require('express').Router();
const upload = require('../helpers/fileUploader').single('profilePic');
const EmployeeModel = require('../model/employeeSchema');

//Route To Render File Uploader
router.get('/upload', (req, res) => {
    res.render('fileUploader');
});

//Route To Upload File
router.post('/upload', async (req, res) => {
    upload(req, res, async (err) => {
        if (err)
            throw err;
        else {
            let newEmployee = req.body;
            newEmployee.profilePic = "uploads/" + req.file.filename;
            newEmployee = await new EmployeeModel(newEmployee).save();
            res.send({ message: "Employee Created Successfully..", employee: newEmployee });
        }
    });
});
module.exports = router;