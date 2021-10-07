const ALL_ACTION = {
  UPDATE_NEW_MESSAGE: "UPDATE-NEW-MESSAGE",
  SEND_MESSAGE: "SEND-MESSAGE",
};

let dialogsData = {
  contactsUser: [
    {
      name: "Lisa",
      avatar:
        "https://i.pinimg.com/736x/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg",
    },
    {
      name: "Fready",
      avatar:
        "https://birds-piggies.ru/uploads/posts/2016-12/1482931343_avatarki-angry-birds-1.jpg",
    },
    {
      name: "Bonny",
      avatar:
        "https://sun9-39.userapi.com/s/v1/ig2/8aqATIMGN_0ucbrpPT2w9-Od9s4_R-28vuF1rs263b_AnT8lBidXi9Tp1qazfob7TONkocJPt4t4cK1Z6ZOpdx3e.jpg?size=200x0&quality=96&crop=35,35,1002,1009&ava=1",
    },
  ],

  userChat: [
    {
      id: 1,
      other: false,
      message:
        "awdawwwwwwwwwwwwwwwwwwwwwwwwww loremweadasssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    },
    {
      id: 2,
      other: true,
      message: "Privet bro",
    },
    {
      id: 3,
      other: false,
      message: "Privet bro",
    },
    {
      id: 4,
      other: true,
      message: "Privet bro",
    },
    {
      id: 5,
      other: true,
      message: "How are you?",
    },
    {
      id: 6,
      other: false,
      message: "I'm fine, thanks.",
    },
  ],
};

const dialogsReducer = (data = dialogsData, action) => {
  switch (action.type) {
    case ALL_ACTION.SEND_MESSAGE:
      let newMessage = {
        id: data.userChat.length + 1,
        other: false,
        message: action.text,
      };
      return {
        ...data,
        userChat: [...data.userChat, newMessage],
      };

    default:
      return data;
  }
};

export const onClickSendMessage = (text) => {
  return {
    type: ALL_ACTION.SEND_MESSAGE,
    text: text,
  };
};

export default dialogsReducer;
