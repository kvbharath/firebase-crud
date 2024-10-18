const express = require("express");
const cors = require("cors");
const { User, db } = require("./config.js");
const {
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} = require("firebase/firestore");

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

app.post("/create", async (req, res) => {
  try {
    const data = req.body;
    await addDoc(User, data);
    res.send({ msg: "User created successfully" });
  } catch (error) {
    console.error("Error creating document: ", error);
    res.status(500).send({ msg: "Error creating user" });
  }
});

app.get("/", async (req, res) => {
  try {
    const snapshot = await getDocs(User);
    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.send(list);
  } catch (error) {
    console.error("Error getting document: ", error);
    res.status(500).send({ msg: "Error getting user" });
  }
});

app.post("/update", async (req, res) => {
  try {
    const id = req.body.id;
    // console.log("Before deleting id ", req.body);

    delete req.body.id;
    // console.log("After deleting id ", req.body);
    const userDoc = doc(db, "Users", id);
    await updateDoc(userDoc, req.body);

    res.send({ msg: "User updated successfully" });
  } catch (error) {
    console.error("Error updating document: ", error);
    res.status(500).send({ msg: "Error updating user" });
  }
});

app.post("/delete", async (req, res) => {
  try {
    const id = req.body.id;
    const UserDel = doc(db, "Users", id);

    // Delete the document
    await deleteDoc(UserDel);
    res.send({ msg: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting document: ", error);
    res.status(500).send({ msg: "Error Deleting user" });
  }
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
