import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDD98PQntRSDt7wWp2ufdhiNF6XEzFBQWA",
	authDomain: "project-app-20121.firebaseapp.com",
	databaseURL: "https://project-app-20121.firebaseio.com",
	projectId: "project-app-20121",
	storageBucket: "project-app-20121.appspot.com",
	messagingSenderId: "971388483876"
};
firebase.initializeApp(config);
firebase.firestore().settings({
	timestampsInSnapshots: true
});

export default firebase;