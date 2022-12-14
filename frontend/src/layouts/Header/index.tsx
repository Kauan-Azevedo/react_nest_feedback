import React from "react";
import style from "./header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <h2>Feedbacks</h2>
      <nav>
        <ul>
          <li>
            <a href="/" className={style["link"]}>
              Home
            </a>
          </li>
          <li>
            <a className={style["link"]} href="/feedbacks">
              Feedbacks
            </a>
          </li>
          <li>
            <a className={style["link"]} href="/feedbacks/adicionar">
              Adicionar Feedback
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
