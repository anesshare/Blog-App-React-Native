import React, { useReducer, createContext } from "react";

const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'Delete_Blog':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'Add_Blog':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'Edit_Blog':
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return {
            ...blogPost,
            title: action.payload.title,
            content: action.payload.content,
          };
        }
        return blogPost;
      });
    default:
      return state;
  }
};

const AddBlogPost = (dispatch) => {
  return ({title,content}) => {
    dispatch({ type: "Add_Blog" , payload:{title:title, content:content}});
  };
};
const deleteBlogPost = (dispatch) =>{
  return (id)=>{
    dispatch({type:"Delete_Blog",payload:id})
  }
}
const EditBlogPost = (dispatch) => {
  return ({ id, title, content }) => {
    dispatch({ type: 'Edit_Blog', payload: { id, title, content } });
  };
};


const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, []);

  // Create an object to bind the action functions
  const actions = {
    AddBlogPost: AddBlogPost(dispatch),
    deleteBlogPost:deleteBlogPost(dispatch),
    EditBlogPost:EditBlogPost(dispatch)
  };

  return (
    <BlogContext.Provider value={{ state, ...actions }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider, BlogContext };
