import * as firebase from "firebase";
// import firestore from "firebase/firestore";

// const settings = (timestampsInSnapshots: true);

const config = {
  apiKey: "AIzaSyCeP3OzJgYlmNyfN0roLQqUXDMl5rTK2OQ",
  authDomain: "fbcrud-baa64.firebaseapp.com",
  databaseURL: "https://fbcrud-baa64.firebaseio.com",
  projectId: "fbcrud-baa64",
  storageBucket: "fbcrud-baa64.appspot.com",
  messagingSenderId: "330067597228",
  appId: "1:330067597228:web:bbd9cf984b68a4a0d04c09",
  measurementId: "G-TLPBFH4ZLM"
};
firebase.initializeApp(config);

// firebase.firestore().settings(settings);

export default firebase;
