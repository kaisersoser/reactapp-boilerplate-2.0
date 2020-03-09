import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9TYVG0WCzzOKgLOxI5ERfWx5TEzDOUIo",
    authDomain: "expense-app-65eae.firebaseapp.com",
    databaseURL: "https://expense-app-65eae.firebaseio.com",
    projectId: "expense-app-65eae",
    storageBucket: "expense-app-65eae.appspot.com",
    messagingSenderId: "566969486829",
    appId: "1:566969486829:web:1226615d0a35fb6d8babe4",
    measurementId: "G-764M1LK8B9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

// Changing and subscrbing
database.ref('expenses')
        .on('value', (snapshot) => {
            let expenses=[];
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            console.log(expenses);
        });

// Removing
database.ref('expenses')
        .on('child_removed', (snapshot)=>{
            console.log(snapshot.key, snapshot.val());
        });

// Changing
database.ref('expenses')
        .on('child_changed', (snapshot)=>{
            console.log(snapshot.key, snapshot.val());
        });

// Changing
database.ref('expenses')
        .on('child_added', (snapshot)=>{
            console.log(snapshot.key, snapshot.val());
        });
        
// database.ref('expenses')
//         .once('value')
//         .then((snapshot) => {
//             const expenses = [];

//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });
//         });


// const updatedExpenses=expenses.map((expense)=>{
//     return {
//         description: expense.description,
//         amount: expense.amount,
//         createdAt: expense.createdAt,
//         note: expense.note
//     }
// });

// updatedExpenses.forEach((expense)=>{
//     database.ref('expenses').push(expense);
// });

// const subscribeType = 'value';
// let data = null;
// const onSubscribeToDB = database.ref().on(subscribeType, (snapshot) => {
//     data = snapshot.val()
//     console.log(`${data.bio.name} is ${data.bio.age} and lives in ${data.location.city}, ${data.location.country}`);
// }, (err) => {
//     console.log('Error while subscribing to database:', err);
// });

// setTimeout(() => {
//     database.ref().set({
//         bio: {
//             name: 'Charles Vogt',
//             age: 46,
//             isMarried: true,
//             stressLevel: 6
//         },
//         location: {
//             city: 'Courbevoie',
//             country: 'France'
//         }
//     }).then(() => {
//         console.log('Data saved.');
//     }).catch((err) => {
//         console.log('Error: ', err);
//     });
// }, 5000);

//database.ref().off(subscribeType, onSubscribeToDB);


// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((err) => {
//     console.log('Error fetching data', err);
// });


//   database.ref().update({
//       bio: {
//           name: 'Olubumi Vogt',
//           age: '46'
//         },
//       location: {
//         city: 'Courbevoie',
//         postalCode: '92400',
//         country: 'France'
//       },
//       employment: {
//           company: 'SAP France',
//           role: 'Product Expert'
//       }
//   });

//   database.ref().update({
//       'bio/stressLevel': 8.5,
//       'employment/role': 'Product Expert',
//       'employment/company': 'Amazon'
//   });


//   database.ref('attributes').set({
//       height: '196cm',
//       weight: '130kg'
//   }).then(()=> {
//       console.log('Data updated.')
//   }).catch((err)=>{
//       console.log('Error: ',err);
//   });

// database.ref('bio/isMarried')
//     .remove()
//     .then(()=>{
//         console.log('Remove succeeded.')
//     })
//     .catch((err)=>{
//         console.log('Error: ',err)
//     });

// Removing data using null
// database.ref('bio/isMarried').set(null);
