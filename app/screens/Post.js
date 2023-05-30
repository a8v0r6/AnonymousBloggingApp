import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getBlogByID } from "./service/ApiService";

const Post = ({ route }) => {
  const { postId } = route.params;
  const [blog, setBlog] = useState({ title: "", author: "", body: "" });

  useEffect(() => {
    const getSingleBlog = async () => {
      let blogData = { title: "", author: "", body: "" };
      try {
        blogData = await getBlogByID(postId);
      } catch (error) {
        console.log(error);
      }
      setBlog(blogData);
    };

    getSingleBlog();
  }, [postId]);

  return (
    <View>
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.author}>{blog.author}</Text>
      <Text style={styles.body}>{blog.body}</Text>
    </View>
  );
};

const styles = {
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  author: {
    fontSize: 12,
    marginBottom: 3,
    color: "gray",
  },
  body: {
    fontSize: 14,
    marginBottom: 5,
  },
};

export default Post;
