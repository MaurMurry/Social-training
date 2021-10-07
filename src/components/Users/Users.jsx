import React from "react";
import { NavLink } from "react-router-dom";
import { followAPI } from "../../API/Api";
import style from "./css moduls/Users.module.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div className={style.wrapper}>
            <div>
              <NavLink to={`profile/${u.id}`}>
                <img className={style.avatar} src={u.photoURL} alt="avatar" />
              </NavLink>
            </div>
            <div className={style.textUser}>
              <div>{u.name}</div>
              <div>{u.discription}</div>
              <div>
                {u.country}, {u.city}
              </div>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followFetching}
                  className={`${style.followedButton} ${style.unfollow}`}
                  onClick={() => {
                    props.acceptingUnfollowed(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={`${style.followedButton} ${style.follow}`}
                  disabled={props.followFetching}
                  onClick={() => {
                    props.acceptingFollowed(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <button className={style.getUserButton} onClick={props.getUsers}>
        Get Users
      </button>
    </div>
  );
};

export default Users;
