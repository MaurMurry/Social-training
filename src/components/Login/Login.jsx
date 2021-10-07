import React from "react";
import style from "./css moduls/Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../FormsControle/FormsControle";
import { maxLenghtCreater, required } from "../../Utils/Validators/validator";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

const maxLenght15 = maxLenghtCreater(15);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"profile"} />;
  }
  return (
    <div className={style.wrapper}>
      <h1 className={style.heading}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form className={style.forms} onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={style.inputLogin}
          validate={[required, maxLenght15]}
          placeholder={"Login"}
          name={"login"}
          component={Input}
        />
      </div>
      <div>
        <Field
          type={"password"}
          className={style.inputPassword}
          validate={[required, maxLenght15]}
          placeholder={"Password"}
          name={"password"}
          component={Input}
        />
      </div>
      <div className={style.checkboxWrapper}>
        <Field
          className={style.checkbox}
          type={"checkbox"}
          name={"rememberMe"}
          component={"input"}
        />
        Remember me
      </div>
      {props.error && (
        <div className={style.formSummeryError}>{props.error}</div>
      )}
      <div className={style.buttonWrapper}>
        <button className={style.button}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
