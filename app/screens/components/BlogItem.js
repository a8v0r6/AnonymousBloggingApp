import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BlogItem = ({ title, author, body, postId }) => {
  const navigation = useNavigation();
  const handleSinglePost = (postId) => {
    navigation.navigate("Post", { postId });
  };

  return (
    <TouchableOpacity
      key={postId}
      onPress={() => {
        handleSinglePost(postId);
      }}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </TouchableOpacity>
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

export default BlogItem;
