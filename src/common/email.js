// const function = require ('firebase-Function');                          
// const admin = require('firebase-admin');        
// admin.initializeApp(function.config().firebase)                                       const SENDGRID_API_KEY = function.config()sendgrid.key   const sgMail = require('@sendgrid/mail');      
// sgMail.setApiKey(SENDGRID_API_KEY);                                  
// exports.firestoreEmail = function.firestore.document('user/{userid}/flolowers/{followerid}').onCreate(event=>{ => {
//     const userId = e.params.userId;
//     const db = admin.firestore()
//     return db.collection('users').doc(userId)
// }