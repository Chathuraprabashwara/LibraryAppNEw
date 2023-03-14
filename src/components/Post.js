import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Post = ({ name, profilePic, message, image, timestamp }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profilePic} source={{ uri: profilePic }} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
        {image && <Image style={styles.image} source={{ uri: image }} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    marginRight: 5,
  },
  timestamp: {
    color: "#808080",
  },
  messageContainer: {
    marginTop: 10,
  },
  message: {
    fontSize: 16,
    lineHeight: 20,
  },
  image: {
    marginTop: 10,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default Post;
