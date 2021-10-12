import db from '../Firebase';
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";

const addStaffData = async(name, idStaff ) => {
  try {
    const docRef = await addDoc(collection(db, "staff"), {
      name,
      idStaff
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getStaffData = async(id) => {
  let existStaff = false;
  const querySnapshot = await getDocs(collection(db, "staff"));
  querySnapshot.forEach((doc) => {
    console.log(` 1 id: ${doc.id} => data: ${doc.data()}`);
    const staffIdData = doc.data().idStaff;
    const staffNameData = doc.data().name;
    console.log('2' + staffIdData, staffNameData);
    if(id === staffIdData) {
      const currentIdStaff = doc.data().idStaff;
      const currentWaiter = doc.data().name;
      localStorage.setItem('staffId', JSON.stringify(currentIdStaff));
      localStorage.setItem('staffName', JSON.stringify(currentWaiter));
      existStaff = true
    }
  });
  return existStaff;
};

const addTablesData = async(itemCollections) => {
  const { table, client, idStaff, waiter, date, ordersList, total } = itemCollections;
  try {
    const docRef = await addDoc(collection(db, "tables"), {
      table,
      client,
      idStaff,
      waiter,
      date,
      ordersList,
      total
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getTablesData = () => (onSnapshot(collection(db, "tables"), (snapshot) => {
    const productsOrder = snapshot.docs.map((doc) =>({ ...doc.data(), id: doc.id }));
    console.log('getdata')
    console.log(productsOrder);
    return productsOrder
  }
));

export { getStaffData, addStaffData, addTablesData, getTablesData }
