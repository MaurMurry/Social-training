import react from "react";
import style from "./FormControle.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  console.warn("Refactoring this peace, need create ControleForm");
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <textarea
        className={hasError && style.textareaError}
        {...input}
        {...props}
      />
      {hasError && <span className={style.spanError}>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  console.warn("Refactoring this peace, need create ControleForm");
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <input className={hasError && style.inputError} {...input} {...props} />
      {hasError && <span className={style.spanError}>{meta.error}</span>}
    </div>
  );
};
