export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection("posts").add({
      ...post,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_POST", post });
    }).catch((error) => {
      dispatch({ type: "CREATE_POST_ERROR", error});
    });
  }
};

export const deletePost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection("posts").doc(post).delete().then(() => {
      dispatch({ type: "DELETE_POST", post });
    }).catch((error) => {
      dispatch("DELETE_POST_ERROR", error);
    });
  }
}