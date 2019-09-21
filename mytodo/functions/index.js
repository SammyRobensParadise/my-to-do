const functions = require('firebase-functions');
const cors = require('cors')({
  origin: true
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
  cors(req,res, async() =>{
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/messages').push({original: original});
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
  })
  });
exports.validateInitialUser = functions.firestore
.document('users')
.onCreate((snap,context) => {
  const uploadedData = snap.data()
})


