const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const myJsonTeams = require('./data/teams.json');


// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original
exports.importTeams = functions.https.onRequest(async (req, res) => {
    const teams = myJsonTeams.teams;

    console.log(teams);
    const writeResult = await admin.firestore().collection('messages').add({team: teams[0]});
    
    res.json({result: `Message with ID: ${writeResult.id} added.`});
});

