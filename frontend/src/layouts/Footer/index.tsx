import style from "./footer.module.css";

export function Footer() {
  return (
    <footer className={style.container}>
      <ul>
        <h2>Linguagens</h2>
        <li>
          <p>Typescript</p>
        </li>
        <li>
          <p>Javascript</p>
        </li>
      </ul>
      {/* <=============> */}
      <ul>
        <h2>Bibliotecas</h2>
        <li>
          <p>React</p>
        </li>
        <li>
          <p>Vite</p>
        </li>
      </ul>
      <ul>
        <h2>Frameworks</h2>
        <li>
          <p>NestJS</p>
        </li>
      </ul>
    </footer>
  );
}
