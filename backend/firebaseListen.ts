import database from "./firebaseInit";
import { ref, onValue} from "firebase/database";

// Use these for each data point
const reference = ref(database, '/nodelocation');
onValue(reference, (snapshot) => {
  const data = snapshot.val();
  //fuction that does stuff with the data;
});

// we need onValue which will cover initial startup of app and all ongoing data refreshes

// we need delete which will delete data when we no longer need it