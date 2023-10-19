import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit:EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#379683",
      },
      headerTintColor: "#000",
      title: "BLOGS",
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <AntDesign name="plussquareo" size={30} color="black" />
        </TouchableOpacity>
      ),
    }),
  }
);

const AppContainer = createAppContainer(navigator);

const App = () => {
  return (
    <BlogProvider>
      <AppContainer />
    </BlogProvider>
  );
};

export default App;
