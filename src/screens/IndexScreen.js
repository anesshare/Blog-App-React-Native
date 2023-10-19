import React, { useContext } from "react";
import { Button, Text, View, FlatList, TouchableOpacity } from "react-native";
import { BlogContext, deleteBlogPost } from "../context/BlogContext"; // Corrected import path
import { Feather } from '@expo/vector-icons';
import { Btn, BtnText, Container, Header, Post } from "./css";

const IndexScreen = ({navigation}) => {
  const { state,deleteBlogPost } = useContext(BlogContext);

  return (
    <Container>
      <FlatList
      style={{
        width:'100%',
      }}
        data={state}
        keyExtractor={(BlogPost) => BlogPost.title}
        renderItem={({ item }) => {
          return (
          <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}><Post>
            <Header>{item.title}</Header>
            <Text>{item.content}</Text>
            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
            <Feather name="trash-2" size={24} color="black" />
            </TouchableOpacity>
          </Post></TouchableOpacity>);
        }}
      />
    </Container>
  );
};
export default IndexScreen;
