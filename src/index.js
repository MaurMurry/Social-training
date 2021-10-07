import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

const renderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderTree();
store.subscribe(() => {
  let state = store.getState();
  renderTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let obg = {
  users: [
    {
      id: 1,
      fullName: "Harry",
      photoURL:
        "https://4tololo.ru/sites/default/files/images/20150107165431.jpg?itok=qQ3pFxnO",
      followed: false,
      discription: "I work in a factory! I don't like my job!",
      country: "France",
      city: "Limoges",
    },
    {
      id: 2,
      fullName: "Sally",
      photoURL:
        "https://www.meme-arsenal.com/memes/588e6dd2fc07831400c09b69249d6ade.jpg",
      followed: false,
      discription: "I'm search the love in here! ",
      country: "Germany",
      city: "Birlin",
    },
    {
      id: 3,
      fullName: "Bob",
      photoURL:
        "https://skype-messengers.ru/wp-content/uploads/2019/03/user.png",
      followed: false,
      discription: "I dream to become an engineer!",
      country: "USA",
      city: "Los-Angelis",
    },
    {
      id: 4,
      fullName: "Frank",
      photoURL: "https://www.blast.hk/attachments/68493/",
      followed: false,
      discription: "Your grandmother!",
      country: "Russian",
      city: "Moscow",
    },
    {
      id: 5,
      fullName: "Machel",
      photoURL:
        "https://games.mail.ru/pre_xl_resize/hotbox/content_files/gallery/2020/12/11/74cbc80bf27b42fc9db919d9cb008aa6.jpg",
      followed: false,
      discription: "I street hool!",
      country: "UK",
      city: "London",
    },
    {
      id: 6,
      fullName: "Poly",
      photoURL: "https://i.imgur.com/rVaHVT4.jpeg",
      followed: false,
      discription: "I student on a finance managment in Polish!",
      country: "Polish",
      city: "Wroclow",
    },
    {
      id: 7,
      fullName: "Linda",
      photoURL:
        "http://pm1.narvii.com/7303/19cabf3a1c19c4a2b052eae917a4ffc9241a7bb4r1-437-459v2_uhq.jpg",
      followed: false,
      discription: "I woman!",
      country: "Russian",
      city: "Krasnodar",
    },
    {
      id: 8,
      fullName: "Sveta",
      photoURL:
        "https://steampunker.ru/uploads/images/00/09/44/2010/12/27/72df10.jpg",
      followed: false,
      discription: "I coder!",
      country: "Ukraine",
      city: "Kiev",
    },
    {
      id: 9,
      fullName: "Dima",
      photoURL:
        "https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg",
      followed: false,
      discription: "I cool coder!",
      country: "Ukraine",
      city: "Kiev",
    },
    {
      id: 10,
      fullName: "Machel",
      photoURL:
        "https://dota-blog.ru/wp-content/uploads/2020/01/i13682662188.jpg",
      followed: false,
      discription: "I street hool!",
      country: "UK",
      city: "London",
    },
    {
      id: 11,
      fullName: "Mayor",
      photoURL:
        "https://shutniki.club/wp-content/uploads/2020/04/Ava_krasnogo_cveta_1_05184541.jpg",
      followed: false,
      discription: "I learn JS! I junior JS",
      country: "Poland",
      city: "Lodz",
    },
    {
      id: 12,
      fullName: "Oleg",
      photoURL:
        "https://thumbs.dreamstime.com/b/%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D1%84%D0%B5%D1%80%D0%BC%D0%B5%D1%80%D0%B0-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%B6%D0%B5-%D1%84%D0%BE%D0%BD%D0%B5-%D0%B1%D0%B5%D0%B6%D0%B5%D0%B2%D0%BE%D0%B9-184240181.jpg",
      followed: false,
      discription: "I'd like a own farm!",
      country: "Ukraine",
      city: "Cherson",
    },
  ],
};
