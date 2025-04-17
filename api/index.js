const express = require('express');
const cors = require('cors');
// var jwt = require('jsonwebtoken'); 
// const cookieParser = require('cookie-parser');
// const crypto = require('crypto');
// const bodyParser = require('body-parser');

const app = express();


app.use(cors({
  origin: ['http://localhost:3000', 'https://edcluster.vercel.app'],
  credentials: true, 
}));

// app.use(cookieParser());

// app.use(bodyParser.json());




// // -----socket io ----------
// const http = require('http');
// const server = http.createServer(app);

// const { Server } = require('socket.io');
// const { clear } = require('console');

// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:5173', // React frontend
//     credentials: true,
//   },
// });



// io.use((socket, next) => {
//   const token = socket.handshake.query.token;
//   console.log(token)
//   next()
// })


// io.on('connection', (socket) => {
//   console.log('A user connected:', socket.id);

//   socket.emit('message', 'Hello this is the socket connection!🟢');

//   const interval = setInterval(() => {
//     socket.emit("message", "Hello from server every 3 seconds");
//   }, 3000);

//   // Emit messages or handle events here
//   socket.on('disconnect', () => {
//       console.log('User disconnected:', socket.id);
//       clearInterval(interval);
//   });
// });
// // -----------------------



// const bunnyStreamApiKey = 'b90324ff-1d01-46a2-a13a7fa28a7b-a166-4c9e';
// const bunnyStreamLibraryId = '408740';


// Function to generate pre-signed URL
// const generatePreSignedUrl = async (fileKey) => {
//     const expires = Math.floor(Date.now() / 1000) + 3600; // 1 hour expiration
//     const signatureString = `${bunnyStreamLibraryId}${bunnyStreamApiKey}${expires}${fileKey}`;
//     const signature = crypto.createHash('sha256').update(signatureString).digest('hex');
// []
//     const url = `https://video.bunnycdn.com/library/${bunnyStreamLibraryId}/videos/${fileKey}?signature=${signature}&expires=${expires}`;
//     return url;
// };
  

// // API endpoint to get pre-signed URL[]
// app.post('/get-presigned-url', async (req, res) => {
//     try {
//       const fileKey = req.body.fileKey;
//       console.log(fileKey);
//       const preSignedUrl = await generatePreSignedUrl(fileKey);
//       console.log(preSignedUrl);
//       res.json({ preSignedUrl });
//     } catch (error) {
//       console.error('Error generating pre-signed URL:', error);
//       res.status(500).json({ message: 'Failed to generate pre-signed URL' });
//     }
// });
  

app.get('/test', (req, res) => {

  console.log("I got hit 🔴");

  res.cookie('test_cookie', '123450000', {
    httpOnly: true,      // not accessible from JS
    secure: true,        // only over HTTPS
    sameSite: 'none',    // allow cross-site cookies
  });
 
  res.send('Cookie set!');

})



app.get('/', (req, res) => {
    res.send({message:'Hello World!'});
})


// app.post('/', (req, res) => {

//   const token = req.headers.authorization;

//   console.log('Cookies:', token);

//   res.send({message:'Hello World!'});
// })



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


// app.get('/auth/validate-token/', (req, res) => {

//     const token = req.cookies.verificationToken;

//     if (token) {
//       try {
//         console.log(token)
//         jwt.verify(token, 'your-secret-key');
//         res.json({ message: 'Token is valid!' });
//       } catch (err) {
//         res.status(401).json({ message: 'Token is invalid!' });
//       }
//     }else{
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
// })


// app.post('/auth/verify-email/', (req, res) => {

//     //  find the code in database using this email that you got from the token

//     console.log(req.body.code);

//     if (req.cookies.verificationToken && req.body.code) {
//       try {
//         const { email } = jwt.verify(req.cookies.verificationToken, 'your-secret-key');
//         // res.json({ message: `email : ${email} and code : ${req.body.code}` });
//         res
//         .clearCookie('verificationToken')
//         .status(200).json({ message: "Email verified successfully!" });
//       } catch (err) {
//         res.status(401).json({ message: 'Token is invalid!' });
//       }
//     }else{
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
// });




// app.post('/auth/login/', (req, res) => {

//     const { email } = req.body;
  
//     const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '15m' });
  
//     res.status(200).json({ accessToken: token });
// })




// app.post('/auth/register/', (req, res) => {

//     const { email } = req.body;
  
//     const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '15m' });
  
//     res.cookie('verificationToken', token, {
//       httpOnly: true, // Prevent access via JavaScript
//       secure: true, // Use HTTPS in production
//       sameSite: 'none',
//       maxAge: 15 * 60 * 1000, // Token expires in 15 minutes
//     });
  
//     res.status(201).json({ message: 'Sign-up successful. Verify your email.' });
// });
  

app.listen(process.env.PORT || 8080 , ()=> console.log('listening.....'))




// require("dotenv").config();

// const express = require("express");
// const passport = require("passport");
// const session = require("express-session");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;

// const app = express();

// app.use(
//   session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: "128461397836-dtp18s17ca29g9kpao492oebh348km64.apps.googleusercontent.com",
//       clientSecret: "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",
//       callbackURL: "http://localhost:3000/auth/google/callback",
//     },
//     (accessToken, refreshToken, profile, done) => {
//       return done(null, profile);
//     }
//   )
// );

// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));

// app.get("/", (req, res) => {
//   res.send("<a href='/auth/google'>Login with Google</a>");
// });

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/" }),
//   (req, res) => {
//     res.redirect("http://localhost:5173/");
//   }
// );

// app.get("/profile", (req, res) => {
//   res.send(`Welcome ${req.user.displayName}`);
// });

// app.get("/logout", (req, res) => {
//   req.logout(() => {
//     res.redirect("/");
//   });
// });

// app.listen(3000, () => {
//   console.log(`Server is running at port 3000`);
// });



// const express = require('express');
// const cors = require('cors');
// const fs = require('fs').promises;
// const path = require('path');
// const process = require('process');
// const {authenticate} = require('@google-cloud/local-auth');
// const {SpacesServiceClient} = require('@google-apps/meet').v2;
// const { auth } = require('google-auth-library');

// const app = express();
// app.use(express.json());
// app.use(cors({
//     origin: 'http://localhost:5173', // Your frontend URL
//     credentials: true
// }));

// const SCOPES = ['https://www.googleapis.com/auth/meetings.space.created'];
// const TOKEN_PATH = path.join(process.cwd(), 'token.json');
// const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');


// async function loadSavedCredentialsIfExist() {
//   try {
//     const content = await fs.readFile(TOKEN_PATH);
//     const credentials = JSON.parse(content);
//     return auth.fromJSON(credentials);
//   } catch (err) {
//     console.log(err);
//     return null;
//   }
// }

// async function saveCredentials(client) {
//   const content = await fs.readFile(CREDENTIALS_PATH);
//   const keys = JSON.parse(content);
//   const key = keys.installed || keys.web;
//   const payload = JSON.stringify({
//     type: 'authorized_user',
//     client_id: key.client_id,
//     client_secret: key.client_secret,
//     refresh_token: client.credentials.refresh_token,
//   });
//   await fs.writeFile(TOKEN_PATH, payload);
// }

// async function authorize() {
//   let client = await loadSavedCredentialsIfExist();
//   if (client) {
//     return client;
//   }
//   client = await authenticate({
//     scopes: SCOPES,
//     keyfilePath: CREDENTIALS_PATH,
//   });
//   if (client.credentials) {
//     await saveCredentials(client);
//   }
//   return client;
// }





// const credentials = {
//   client_email: 'your-service-account@project-id.iam.gserviceaccount.com',
//   private_key: '-----BEGIN PRIVATE KEY-----\nYour private key content here...\n-----END PRIVATE KEY-----\n',
//   // Include any other required fields from your credentials
// };

// const projectId = 'your-project-id';

// const meetClient = new SpacesServiceClient({
//   credentials: credentials,
//   projectId: projectId,
// });

// async function createSpace(authClient) {

//   // const meetClient = new SpacesServiceClient({
//   //   authClient: authClient
//   // });
  
//   // const request = {
//   //   space: {
//   //     displayName: "My Meeting", // Name of the meeting
//   //     spaceType: "SPACE_TYPE_MEETING", // Type of space (MEETING is for regular meets)
//   //     spaceDetails: {
//   //       meetingDetails: {
//   //         conferenceData: {
//   //           // Optional: Configure meeting parameters
//   //           entryPoints: [{
//   //             entryPointType: "VIDEO",
//   //             uri: "", // Will be auto-generated
//   //             label: "Meet"
//   //           }]
//   //         }
//   //       }
//   //     }
//   //   }
//   // };


//   const request = { };
//   const response = await meetClient.createSpace(request);

//   console.log(response);
//   // return response[0].meetingUri;
// }

// // New endpoint to create meet URL
// app.get('/meet', async (req, res) => {
//   try {
//     // const authClient = await authorize();
//     // const meetUrl = await createSpace(authClient);

//     const meetUrl = await createSpace();
//     console.log(meetUrl);
//     res.json({ meetUrl });
//   } catch (error) {
//     console.error('Error creating meet:', error);
//     res.status(500).json({ error: 'Failed to create meeting' });
//   }
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





