const ALL_ACTION = {
  ADD_POST: "ADD-POST",
  UPDATE_NEW_POST: "UPDATE-NEW-POST",
  SET_USER_PROFILE: "SET-USER-PROFILE",
  SET_STATUS: "SET-STATUS",
  UPDATE_STATUS: "UPDATE-STATUS",
};

let profileData = {
  dataPosts: [
    {
      id: 3,
      photoURL: "https://cs16planet.ru/steam-avatars/images/avatar3219.jpg",
      name: "Frank",
      surname: "Hill",
      text: "I'm stuped",
    },
    {
      id: 2,
      photoURL: "https://cs16planet.ru/steam-avatars/images/avatar3219.jpg",
      name: "Frank",
      surname: "Hill",
      text: "I'd stuped",
    },
    {
      id: 1,
      photoURL: "https://cs16planet.ru/steam-avatars/images/avatar3219.jpg",
      name: "Frank",
      surname: "Hill",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, possimus iure quod laudantium doloribus, vero numquam magni quaerat quo dolorem consectetur atque corporis dignissimos amet, molestias ducimus porro velit voluptas!
          Voluptas beatae aperiam nisi. Et impedit accusantium deserunt delectus molestias illo? Sapiente quas, distinctio sunt odit qui obcaecati delectus velit voluptate ut, facere explicabo ab deserunt iusto harum beatae eos.
          Quisquam, dolores eius iste adipisci, magni aut in eligendi, enim pariatur nesciunt dolor. Odit amet nostrum voluptate fugiat est eveniet voluptas enim velit? Doloribus natus consequuntur fugit voluptatibus, consectetur porro.
          Ullam voluptatum totam quibusdam iure eligendi, consequatur amet? Porro assumenda cum aspernatur molestias aliquid aperiam deleniti, sunt fuga harum vitae corporis! Minus placeat atque sunt, ullam recusandae ad sint vero.
          Dolorum repudiandae nisi placeat beatae hic iste suscipit eligendi ullam iure doloribus, minus libero impedit necessitatibus quae! Placeat fuga libero distinctio quo non eos, provident quaerat, eum, recusandae quis maxime!
          Quaerat rerum quasi, vitae, reprehenderit ab voluptate, repellendus est adipisci aliquam dolore consequuntur magni minima? Fugiat vel est autem? Adipisci minus vitae magnam tempora rem repudiandae consequatur repellendus quae amet.
          Suscipit officia quam sed veniam delectus illum tempore tempora architecto atque voluptatibus quae quisquam, minima consectetur cum. Quaerat illum dignissimos veritatis possimus corporis reprehenderit porro, ipsum omnis! Beatae, adipisci aliquam.
          Sunt et quibusdam animi excepturi nulla deleniti perspiciatis, delectus assumenda est quae quis? Ut ipsa quae quisquam dolor excepturi odit dignissimos, praesentium accusamus tenetur fugit, ipsum, laboriosam voluptate ea repellendus?
          Accusantium ipsum esse magni maxime, ea repudiandae beatae, exercitationem consequuntur possimus necessitatibus laboriosam. Necessitatibus maxime vel repellat asperiores placeat possimus officia deleniti autem neque suscipit quidem voluptatum aliquam, est doloremque.
          Labore commodi a atque pariatur aperiam qui? Optio non iste sapiente similique, rem, dolorem aut consequuntur vero sed voluptatem est? Ullam iusto debitis, ducimus aspernatur commodi itaque nam quaerat quas.`,
    },
  ],
  profile: null,
};

const profileReducer = (data = profileData, action) => {
  switch (action.type) {
    case ALL_ACTION.ADD_POST:
      let newPost = {
        id: data.dataPosts.length + 1,
        name: data.profile.name,
        surname: data.profile.surname,
        photoURL: data.profile.photoURL,
        text: action.text,
      };
      return {
        ...data,
        dataPosts: [newPost, ...data.dataPosts],
      };

    case ALL_ACTION.SET_USER_PROFILE:
      return { ...data, profile: action.profile };

    case ALL_ACTION.SET_STATUS:
      return {
        ...data,
        profile: { ...data.profile, discription: action.text },
      };

    case ALL_ACTION.UPDATE_STATUS:
      return {
        ...data,
      };

    default:
      return data;
  }
};

export const addPost = (text) => {
  return {
    type: ALL_ACTION.ADD_POST,
    text: text,
  };
};

export const setStatus = (text) => {
  return {
    type: ALL_ACTION.SET_STATUS,
    text: text,
  };
};

export const updateStatus = () => {
  return {
    type: ALL_ACTION.UPDATE_STATUS,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: ALL_ACTION.SET_USER_PROFILE,
    profile: profile,
  };
};

export default profileReducer;
