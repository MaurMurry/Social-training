import axios from "axios";

const setAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/",
  header: {
    "Content-type": "aplication/json; charset=UTF-8",
  },
});

export const loggedAPI = {
  setAuthData: () => {
    return setAxios.get("dataBaseLogged").then((res) => res.data);
  },
  login: (login, password, rememberMe = false) => {
    return setAxios.get(`registered?login=${login}`).then((res) => {
      console.warn("This place need refactoring. Use catch");
      if (res.data.length !== 0 && res.data[0].password === password) {
        const loggedUser = {
          resultCode: 0,
          messages: [],
          data: { id: res.data[0].id, login, password, rememberMe },
        };
        setAxios.put("dataBaseLogged", { ...loggedUser });
        return loggedUser;
      }
    });
  },
  logout: () => {
    const logoutedUser = {
      resultCode: 0,
      messages: [],
      data: { id: null, login: "not logged", password: null },
    };
    return setAxios.put("dataBaseLogged", { ...logoutedUser }).then((res) => {
      return logoutedUser;
    });
  },
};

export const usersAPI = {
  getUsers: (amount) => {
    return setAxios
      .get(`users?_page=1&_limit=${amount}`)
      .then((res) => res.data);
  },

  getUsersLenght: () => {
    return setAxios.get("users?id=lenght").then((res) => res.data);
  },

  updateStatus: (userID, text) => {
    return setAxios.get(`users?id=${userID}`).then((res) => {
      setAxios.put(`users/${userID}`, {
        ...res.data[0],
        discription: text,
      });
    });
  },

  renderUserInProfile: (userID) => {
    userID = !userID ? "loggedUser" : userID;
    return setAxios
      .get(`http://localhost:3000/users?id=${userID}`)
      .then((res) => {
        return res.data[0];
      });
  },
};

export const followAPI = {
  addFollow: (id) => {
    return setAxios.post(`followers?id=${id}`, {
      id: id,
    });
  },

  removeFollow: (id) => {
    return setAxios.delete(`followers/${id}`, {});
  },

  updateFollow: (id, action) => {
    return setAxios.get(`users/${id}`).then((res) => {
      setAxios.put(`users/${id}`, {
        ...res.data,
        followed: action,
      });
    });
  },
};
