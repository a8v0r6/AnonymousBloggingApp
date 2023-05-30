import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { saveBlog } from "./service/ApiService";

const BlogForm = () => {
  const titleInputRef = useRef(null);
  const navigation = useNavigation();
  const [blogData, setBlogData] = useState({ title: "", author: "", body: "" });
  const [error, setError] = useState("")
  const handleBlogSubmit = async () => {
    let res;
    if(!blogData.title || !blogData.author || !blogData.title) {
      setError("Fields Cannot be empty")
    }
    else{
      try {
        res = await saveBlog(blogData);
      } catch (error) {
        console.log(error);
      }
      const postId = res.id;
      navigation.navigate("Post", {postId});
      setBlogData({ title: "", author: "", body: "" });
    }
  };

  useEffect(() => {
    titleInputRef.current.focus();
  },[]);

  return (
    <SafeAreaView>
      <View style={styles.fixToText}>
        <Button title="Cancel" onPress={()=>{navigation.navigate("Home")}}/>
        <Button type="submit" title="Post" onPress={handleBlogSubmit} />
      </View>
      
      <TextInput
        type="title"
        placeholder="Write a specific title"
        value={blogData.title}
        style={styles.titleInput}
        onChangeText={(text) => setBlogData({ ...blogData, title: text })}
        ref={titleInputRef}
      ></TextInput>
      <TextInput
        type="author"
        placeholder="Enter author name"
        value={blogData.author}
        style={styles.authorInput}
        onChangeText={(text) => setBlogData({ ...blogData, author: text })}
      ></TextInput>
      <TextInput
        type="body"
        placeholder="Feel free to speak your mind but keep it classy, no personal info and no secrets "
        value={blogData.body}
        style={styles.bodyInput}
        onChangeText={(text) => setBlogData({ ...blogData, body: text })}
      ></TextInput>
      {error && <Text style={styles.errorText}> {error}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  titleInput: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 50
  },
  authorInput: {
    fontSize: 16,
    margin: 5,
    color: "gray",
  },
  bodyInput: {
    fontSize: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 5,
  },
});

export default BlogForm;
