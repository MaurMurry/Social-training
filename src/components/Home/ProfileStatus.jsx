import react from "react";
import { usersAPI } from "../../API/Api";
import style from "./css moduls/ProfileStatus.module.css";

class ProfileStatus extends react.Component {
  statusInputRef = react.createRef();

  state = {
    editMode: false,
    status: this.props.user.discription,
  };
  onEditMode() {
    this.setState({
      editMode: true,
    });
  }
  offEditMode() {
    this.setState({
      editMode: false,
    });
    usersAPI.updateStatus(this.props.user.id, this.state.status);
  }
  saveStatus() {
    this.state.status = this.statusInputRef.current.value;
    this.props.setStatus(this.statusInputRef.current.value);
  }

  componentDidUpdate(prevStatus, newStatus) {
    console.warn("Max length 65");
    if (prevStatus !== newStatus) {
      this.state.status = this.props.user.discription;
    }
  }

  render() {
    return (
      <>
        <div>
          {!this.state.editMode && (
            <div className={style.status}>
              <span onDoubleClick={this.onEditMode.bind(this)}>
                {this.state.status}
              </span>
            </div>
          )}
          {this.state.editMode && (
            <div>
              <input
                className={style.inputStatus}
                ref={this.statusInputRef}
                autoFocus
                onBlur={this.offEditMode.bind(this)}
                onChange={this.saveStatus.bind(this)}
                value={this.state.status}
              />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default ProfileStatus;
