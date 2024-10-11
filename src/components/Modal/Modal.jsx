import { useEffect, useRef, useState } from "react";
import css from "./Modal.module.css";

/*
Методи життєвого циклу:

1. Реакція на монтування компоненти

  useEffect(() => {
    console.log("Modal has Mounted");
  }, [])

  для чого використовують:
    - надсилання мережевих запитів одразу після рендеру компоненти
    - навішувати слухачі подіїї (addEventListener), або запускати таймери/інтервали(setTimeout|setInterval)
    - считати дані з localStorage

2. Реакція на розмонтування компоненти

  useEffect(() => {
    console.log("Modal has Mounted");

    return () => {
      console.log("Modal was Unmounted");
    }
  }, [])

  для чого використовують:
    - відміняти мережеві запити перед тим, як компонента буде видалена
    - прибрати слухачі подіїї (removeEventListener), або очистити таймери/інтервали(clearTimeout|clearInterval)

3. Реакція на монтування компонети та її оновлення

  useEffect(() => {
    console.log(`Current count value - ${count}`);
  }, [count]);

  для чого використовують:
    - синхронізувати дані зі стейту з локальним сховищем
    - після зміни стейту надсилаються мережеві запити з оновленим значенням стейту
    - виконання якихось побічних функцій(Запиту на сервіс аналітики)

*/

const Modal = ({ onCloseModal }) => {
  const [count, setCount] = useState(() => {
    const val = localStorage.getItem("countValue");
    const parsedVal = JSON.parse(val) ?? 0;

    return parsedVal;
  });
  const textRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onCloseModal]);

  useEffect(() => {
    const stringifiedValue = JSON.stringify(count);
    localStorage.setItem("countValue", stringifiedValue);
  }, [count]);

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    if(!inputRef.current) return;

    inputRef.current.focus();
  }, [])

  return (
    <div onClick={onBackdropClick} className={css.backdrop}>
      <div className={css.modal}>
        <button onClick={onCloseModal} className={css.closeBtn} type="button">
          ❌
        </button>
        <h2>Additional bar info</h2>
        <input type="text" ref={inputRef} />
        <p ref={textRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut
          tempore sapiente ea? Alias, rerum dolore nesciunt error nostrum porro!
        </p>
        <button
          onClick={() => {
            setCount(count + 1);
            inputRef.current.focus();
          }}
          type="button"
        >
          Click to increment: {count}
        </button>
      </div>
    </div>
  );
};

export default Modal;
