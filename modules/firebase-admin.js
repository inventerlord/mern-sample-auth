const admin = require('firebase-admin');
const serviceAccount = require('../pavf-10c83-firebase-adminsdk-6idm2-86efbc68e4.json');
const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
module.exports = firebaseAdmin;
