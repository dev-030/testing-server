const express = require('express');
const cors = require('cors');
var jwt = require('jsonwebtoken'); 
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true, // Allow credentials (cookies, etc.)
}));

app.use(cookieParser());



app.get('/', (req, res) => {
    res.send({message:'Hello World!'});
})

// app.post('/', (req, res) => {

//     console.log(req.body.email);

//     const { email } = req.body;
  
//     const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '15m' });
  
//     res.cookie('verificationToken', token, {
//       httpOnly: true, // Prevent access via JavaScript
//       secure: true, // Use HTTPS in production
//       sameSite: 'none',
//       maxAge: 15 * 60 * 1000, // Token expires in 15 minutes
//     });
  
//     res.status(201).json({ message: 'Sign-up successful. Verify your email.' });
// })


app.get('/validate-token/', (req, res) => {

    const token = req.cookies.verificationToken;

    if (token) {
      try {
        console.log(token)
        jwt.verify(token, 'your-secret-key');
        res.json({ message: 'Token is valid!' });
      } catch (err) {
        res.status(401).json({ message: 'Token is invalid!' });
      }
    }else{
        return res.status(401).json({ message: 'Unauthorized' });
    }
})


app.post('/verify-email/', (req, res) => {

    //  find the code in database using this email that you got from the token

    console.log(req.body.code);

    if (req.cookies.verificationToken && req.body.code) {
      try {
        const { email } = jwt.verify(req.cookies.verificationToken, 'your-secret-key');
        // res.json({ message: `email : ${email} and code : ${req.body.code}` });
        res
        .clearCookie('verificationToken')
        .status(200).json({ message: "Email verified successfully!" });
      } catch (err) {
        res.status(401).json({ message: 'Token is invalid!' });
      }
    }else{
        return res.status(401).json({ message: 'Unauthorized' });
    }
});



app.post('/auth/login/', (req, res) => {

    const { email } = req.body;
  
    const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '15m' });
  
    res.status(200).json({ accessToken: token });
})




app.post('/auth/register/', (req, res) => {

    const { email } = req.body;
  
    const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '15m' });
  
    res.cookie('verificationToken', token, {
      httpOnly: true, // Prevent access via JavaScript
      secure: true, // Use HTTPS in production
      sameSite: 'none',
      maxAge: 15 * 60 * 1000, // Token expires in 15 minutes
    });
  
    res.status(201).json({ message: 'Sign-up successful. Verify your email.' });
});
  

app.listen(process.env.PORT || 8080 , ()=> console.log('listening.....'))