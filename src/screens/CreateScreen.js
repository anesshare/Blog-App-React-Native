import React, { useContext, useState } from "react";
import { Text, View, TextInput } from "react-native";
import { Btn, BtnText, CreateContainer, Input, TextControl } from "./css";
import { BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const blogContext = useContext(BlogContext);

  return (
    <CreateContainer>
      <TextControl>Enter Title:</TextControl>
      <Input value={title} onChangeText={(text) => setTitle(text)}></Input>
      <TextControl>Enter Content:</TextControl>
      <Input value={content} onChangeText={(text) => setContent(text)}></Input>
    <Btn onPress={() => {blogContext.AddBlogPost({ title, content });navigation.navigate('Index')}}>
        <BtnText>SAVE</BtnText>
      </Btn>
    </CreateContainer>
  );
};

export default CreateScreen;
