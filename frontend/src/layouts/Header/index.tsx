import React from "react";
import style from "./header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <h2>Lorem</h2>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/feedbacks">Feedbacks</a>
          </li>
          <li>
            <a href="#adicionar">Adicionar Feedback</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
