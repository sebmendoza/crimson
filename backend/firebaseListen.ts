import { db} from "./firebaseInit";
import { child, ref, onChildAdded, DatabaseReference, Database, get, DataSnapshot } from "firebase/database";
import { baseDataPoint, buttonDataPoint, knobDataPoint, dialDataPoint, switchDataPoint, action, emotion } from "./packetStructure";
import { useObject } from "react-firebase-hooks/database"


const reference = ref(db, "/device/");
const [snapshot, loading, error] = useObject(reference);






















// export class DisplayData {
//   constructor(snapshot: DataSnapshot, db: Database) {
//     this.m_snapshot = snapshot;
//     this.m_db = db;

//     get(child(ref(db), "/device/")).then((snapshot) => {
//       if (snapshot.exists()) {
//         this.displayData();
//       } else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
    
//   }

//   public displayData(): string {
//     console.log(this.m_snapshot);
//     return "done";
//   }

//   private m_snapshot: DataSnapshot;
//   private m_db: Database;
// }

// // class SensorListeners {
  
// //   constructor(db: Database, node: string) {
// //     this.m_db = db
// //     this.m_node = node;
// //     this.m_ref = ref(this.m_db, this.m_node)
// //   };
  
// //   public startListen() {
// //     onChildAdded(this.m_ref, (data) => {
// //       data.val()
// //       printData(data);
// //     });
// //   };

// //   private m_db: Database;
// //   private m_node: string;
// //   private m_ref: DatabaseReference;
// // }