import React, { useContext } from "react";
import { Text } from "react-native";
import { BlogContext } from "../context/BlogContext";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { CreateContainer, SSCont, TextControl } from "./css";

const ShowScreen = ({navigation}) =>{
    const {state}= useContext(BlogContext)
    const BlogPost = state.find((BlogPost)=>BlogPost.id == navigation.getParam('id'))
    return(
        <SSCont>
        <TextControl>-{BlogPost.title}-</TextControl>
        <TextControl>{BlogPost.content}</TextControl>
        </SSCont>
        )
}
ShowScreen.navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:navigation.getParam('id')})}>
          <FontAwesome5 name="edit" size={24} color="black" />         
        </TouchableOpacity>
      ),
    };
  };
  



export default ShowScreen;