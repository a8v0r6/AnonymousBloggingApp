import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { firebaseDatabase } from "../../firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import BlogItem from "./components/BlogItem";

const List = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const subscriber = onSnapshot(collection(firebaseDatabase, "Blogs"), (snapshot) => {
      const updatedData = [];
      snapshot.forEach((doc) => {
        updatedData.push({ id: doc.id, ...doc.data() });
      });
      setBlogs(updatedData);
    });

    return () => subscriber();
  }, []);

  return (
    <View>
      <FlatList
        data={blogs}
        renderItem={({ item }) => (
          <BlogItem title={item.title} author={item.author} body={item.body} postId={item.id} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default List;
