import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd4LB9tQ06S3CAngHTD5x-WOBYokh2a-4",
  authDomain: "projectyohanes-fad45.firebaseapp.com",
  projectId: "projectyohanes-fad45",
  storageBucket: "projectyohanes-fad45.appspot.com",
  messagingSenderId: "450114891459",
  appId: "1:450114891459:web:49459bdfa2bb85b00d7c76",
};
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;
// {endDate: '20 jan', Zodiac: 'Capricorn', startDate: '22 des'}Zodiac: "Capricorn"endDate: "20 jan"startDate: "22 des"[[Prototype]]: Object
// Card.js:17 {endDate: '20 april', Zodiac: 'Aries', startDate: '22 march'}
// Card.js:17 {startDate: '21 jan', Zodiac: 'aquarius', endDate: '19 Feb'}
