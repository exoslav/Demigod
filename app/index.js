import express from 'express'
import * as admin from "firebase-admin";
import * as serviceAccount from './service-account.json'

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://demigod-3bd86.firebaseio.com"
});

const db = defaultApp.database()
const auth = defaultApp.auth()
const app = express()

app.get('/', (req, res) => {
	res.send('homepage')
})

app.get('/test', (req, res) => {
	res.send('test page')
})

app.listen(3000, () => console.log('app is running on port :3000'))