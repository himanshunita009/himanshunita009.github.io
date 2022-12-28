const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
router.post('/',(req,res) => {
    const data = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'testmysoftware.in@gmail.com',
            pass: 'xknmnhrdgwwomsuq'
        }
    });
     const mailOptions = {
        from : 'testmysoftware.in@gmail.com',
        to: 'testmysoftware.in@gmail.com',
        subject: data.subject,
        text: ` 
            Name : ${data.name}
            Email: ${data.email}
            Query: ${data.description}
        `
     };
    
     transporter.sendMail(mailOptions,(error,info) => {
        if(error)
            res.send('0');
        else        
            res.send('1');
     });
});

module.exports = router;