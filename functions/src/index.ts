const functions = require('firebase-functions')

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sendGridEmail = require('@sendgrid/mail')
const { convertIfPresent } = require('firebase-functions/lib/common/encoding')
const { default: axios } = require('axios')
sendGridEmail.setApiKey(SENDGRID_API_KEY)

exports.inviteStudentEmail = functions.firestore
  .document('watchlist/{user.uid}')
  .onCreate((event: any) => {
axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h');
    const emailTestData: { emailAddress: any; coin: any } = event.data()

  
    const msg = {
      to: emailTestData.emailAddress,
      from: 'noreply@juniortechbots.com',
      subject: 'Trending coin alert',
      templateId: '<enter your template id here>',
      dynamic_template_data: {
        
      }
      
    }

    return sendGridEmail
      .send(msg)
      .then(() => console.log('email sent'))
      .catch((error:any) => console.error(error.toString()))
  })