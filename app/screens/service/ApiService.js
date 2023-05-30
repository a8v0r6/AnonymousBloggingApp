import { getDoc, addDoc, collection, doc } from "firebase/firestore";
import { firebaseDatabase } from "../../../firebaseConfig";
import { useState } from "react";

const saveBlog = async (blogData) => {
    const res = await addDoc(collection(firebaseDatabase, "Blogs"), blogData);
    return res;
};

const getBlogByID = async (postId) => {
    const docRef = doc(firebaseDatabase, "Blogs", postId);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

export {saveBlog, getBlogByID};


