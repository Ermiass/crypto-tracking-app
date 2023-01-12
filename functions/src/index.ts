/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-explicit-any */

import admin = require('firebase-admin')

import functions = require('firebase-functions')

import sendGridEmail = require('@sendgrid/mail')
import { send } from 'process'
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios'

admin.initializeApp(functions.config().firebase)

const SENDGRID_API_KEY = functions.config().sendgrid.key



sendGridEmail.setApiKey(SENDGRID_API_KEY)

// exports.inviteStudentEmail = functions.firestore
//   .document('watchlist/{user.uid}')
//   .onCreate(async (event:any) => {
//     const emailTestData = event.data()

  
//     const msg:any = {
//       to: emailTestData.emailAddress,
//       from: 'noreply@juniortechbots.com',
//       subject: 'Trending coin alert',
//       dynamic_template_data: {
        
//       }
      
//     }

//     try {
//       await sendGridEmail
//         .send(msg)
//       return console.log('email sent')
//     } catch (error:any) {
//       return console.error(error.toString())
//     }
//   })
// eslint-disable-next-line import/prefer-default-export
export const inviteStudentEmail = functions.firestore
  .document('watchlist/{user.uid}')
  .onCreate((event:any) => {

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h');
    const emailTestData = event.data()


    const msg:any = {
      to: emailTestData.emailAddress,
      from: 'noreply@juniortechbots.com',
      subject: 'Trending coin alert',
      templateId: '<enter your template id here>',
      dynamic_template_data: {

      }

    }

    return send(msg)
      .then(() => console.log('email sent'))
      .catch((error:any) => console.error(error.toString()))
  })
// import { config, firestore } from 'firebase-functions'

// import { initializeApp } from 'firebase-admin'

// import { setApiKey, send } from '@sendgrid/mail'
// // import { default as axios } from 'axios'

// initializeApp(config().firebase)

// const SENDGRID_API_KEY = config().sendgrid.key

// setApiKey(SENDGRID_API_KEY)

// // eslint-disable-next-line import/prefer-default-export
// export const inviteStudentEmail = functions.firestore
//   .document('watchlist/{user.uid}')
//   .onCreate((event) => {
// axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h');
//     const emailTestData = event.data()


//     const msg:any = {
//       to: emailTestData.emailAddress,
//       from: 'noreply@juniortechbots.com',
//       subject: 'Trending coin alert',
//       templateId: '<enter your template id here>',
//       dynamic_template_data: {

//       }

//     }

//     return send(msg)
//       .then(() => console.log('email sent'))
//       .catch((error:any) => console.error(error.toString()))
//   })
