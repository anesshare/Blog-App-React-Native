import React, { useContext, useState, useEffect } from "react";
import { Text } from "react-native";
import { BlogContext } from "../context/BlogContext";
import { Btn, BtnText, CreateContainer, Input, TextControl } from "./css";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, EditBlogPost } = useContext(BlogContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const blogPost = state.find((blogPost) => blogPost.id === id);
    if (blogPost) {
      setTitle(blogPost.title);
      setContent(blogPost.content);
    }
  }, [state, navigation]);

  return (
    <CreateContainer>
      <TextControl>Enter new title:</TextControl>
      <Input value={title} onChangeText={(newTitle) => setTitle(newTitle)}></Input>
      <TextControl>Enter new content:</TextControl>
      <Input value={content} onChangeText={(newContent) => setContent(newContent)}></Input>
      <Btn onPress={() => EditBlogPost({ id, title, content }, navigation.navigate('Index'))}>

        <BtnText>SAVE</BtnText>
      </Btn>
    </CreateContainer>
  );
};

EditScreen.navigationOptions = {
  headerRight: () => null,
};

export default EditScreen;
