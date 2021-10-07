import React, { useState } from "react";
import { usersAPI } from "../../API/Api";
import style from "./css moduls/ProfileStatus.module.css";

const ProfileStatusHook = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.user.discription);

  const activateMode = () => {
    setEditMode(true);
  };

  const deactivateMode = () => {
    setEditMode(false);
    props.setStatus(status);
    usersAPI.updateStatus(props.user.id, status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      <div>
        {!editMode && (
          <div className={style.status}>
            <span onDoubleClick={activateMode}>
              {props.user.discription || "Your status..."}
            </span>
          </div>
        )}
        {editMode && (
          <div>
            <input
              className={style.inputStatus}
              onBlur={deactivateMode}
              autoFocus
              onChange={onStatusChange}
              value={status}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileStatusHook;
