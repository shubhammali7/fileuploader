const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    //multers disk storage settings
    destination: function (req, file, cb) {
        let destinationFolder = '../public/uploads/';


        cb(null, path.join(__dirname, destinationFolder));
    },
    filename: function (req, file, cb) {
        console.log(file);
        const datetimestamp = Date.now();
        cb(null, 'file-' + file.originalname.split('.')[0] + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});

module.exports = multer({
//multer settings
    storage: storage
});