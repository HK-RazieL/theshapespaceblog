const initState = {
  posts: [
    {id: "1", title: "test1", content: "This is a test1 post"},
    {id: "2", title: "test2", content: "This is a test2 post"},
    {id: "3", title: "test3", content: "This is a test3 post"},
  ]
}

const postReducer = (state = initState, action) => {
  switch(action.type) {
    case "CREATE_POST": 
      console.log("created post");
      return state;
    case "CREATE_POST_ERROR":
      console.log("create post error");
      return state;
    case "DELETE_POST":
      console.log("deleted post");
      return state;
    case "DELETE_POST_ERROR":
      console.log("delete post error");
      return state;
    default:
      return state;
  }
}

export default postReducer;