import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBuLTDlcNZfBKCLLDZHQ5AumdCaQbJTpKY",
    authDomain: "degoalcoach.firebaseapp.com",
    databaseURL: "https://degoalcoach.firebaseio.com",
    projectId: "degoalcoach",
    storageBucket: "",
    messagingSenderId: "80531844975"
  };


export const   firebaseApp = firebase.initializeApp(config);
export  const goalRef = firebase.database() .ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');