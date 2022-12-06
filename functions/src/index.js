// /* eslint-disable @typescript-eslint/no-var-requires */
// const functions = require('firebase-functions')
// const admin = require('firebase-admin')

// admin.initializeApp(functions.config().firebase)

// const SENDGRID_API_KEY = functions.config().sendgrid.key

// const sendGridEmail = require('@sendgrid/mail')



// sendGridEmail.setApiKey(SENDGRID_API_KEY)

// exports.inviteStudentEmail = functions.firestore
//   .document('watchlist/{user.uid}')
//   .onCreate((event) => {
//     const emailTestData = event.data()

  
//     const msg = {
//       to: emailTestData.emailAddress,
//       from: 'noreply@juniortechbots.com',
//       subject: 'Trending coin alert',
//       templateId: '<enter your template id here>',
//       dynamic_template_data: {
        
//       }
      
//     }

//     return sendGridEmail
//       .send(msg)
//       .then(() => console.log('email sent'))
//       .catch((error) => console.error(error.toString()))
//   })