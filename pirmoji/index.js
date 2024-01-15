import { app } from "./firebase.js";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore(app);
console.log(db);

const settingDoc = async () => {
  await setDoc(doc(db, "cars", "1"), {
    brand: "Toyota,",
    model: "Yaris",
    year: 2000,
    consumption: 1.6,
  })
    .then(() => {
      alert("added succesfully!");
    })
    .catch((error) => {
      console.log(error);
    });
};
// settingDoc();
//jei nenurodai id po cars, automatiskai sukiaria unikalu id
const addDocument = async () => {
  await addDoc(collection(db, "cars"), {
    brand: "Mersedez",
    model: "c63",
    year: 2012,
    consumption: 12,
  })
    .then(() => {
      alert("added succesfully!");
    })
    .catch((error) => {
      console.log(error);
    });
};
// addDocument();
//komentuoti butinai nes kuria vis nauja unikalu id su tapacia info

const getOne = async () => {
  const docSnap = await getDoc(doc(db, "cars", "GfSHlYJhezsMq3SR2iob"));
  console.log("Document data:", docSnap.data());
};
// getOne();

const getAll = async () => {
  let querrySnapshot = await getDocs(collection(db, "cars"));
  const array = [];
  querrySnapshot.forEach((el) => array.push(el.data()));
  console.log(array);
};
// getAll();

const update = async () => {
  await updateDoc(doc(db, "cars", "GfSHlYJhezsMq3SR2iob"), {
    model: "Q3",
    consumption: 5,
  })
    .then(() => {
      alert("added succesfully!");
    })
    .catch((error) => {
      console.log(error);
    });
};
// update();

const deletecar = async () => {
  await deleteDoc(doc(db, "cars", "GfSHlYJhezsMq3SR2iob"), {});
};
// deletecar();
