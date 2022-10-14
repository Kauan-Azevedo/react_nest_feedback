import React from "react";
import head from "./header.module.css";

export function Header() {
  return (
    <header className={head.header}>
      <h2>Lorem</h2>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Todos</a>
          </li>
          <li>
            <a href="">Adicionar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
