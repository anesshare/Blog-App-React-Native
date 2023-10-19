import styled from 'styled-components';

export const Post = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 100px;
background-color: #379683;
padding-left: 10px;
padding-right: 10px;
`
export const Header =styled.Text`
font-size: 18px;
`
export const Container = styled.View`
background-color: #05386B;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`
export const Btn = styled.TouchableOpacity` 
  background-color: #EDF5E1;
  padding: 10px 20px;
  border-radius: 5px; 
  color: black;
  align-items:center;
  justify-content: center;
  padding: 20px;
  width: 200px;
`;
export const BtnText = styled.Text`
  color: black;
  font-size: 16px;
`;
export const TextControl = styled.Text`
font-size: 25px;
color: white;
`
export const Input = styled.TextInput`
border-bottom-width: 1px;
border-bottom-color: white;
background-color:  #379683;
width: 100%;
padding: 20px;
font-size: 20px;
color: black;
margin-bottom: 20px;
`
export const CreateContainer = styled.View`
background-color: #05386B;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100%;
`
export const SSCont = styled.View`
background-color: #05386B;
height: 100%;
`