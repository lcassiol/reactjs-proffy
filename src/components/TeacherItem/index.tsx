import React from "react";
import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/9991290?s=460&u=6db226f1e1caa2fef63c08e5c88b73a883d45b14&v=4"
          alt="cassio carvalho"
        />
        <div>
          <strong>Cassio Carvalho</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        jsaljdsajldjkajd askjdlasjdkajs jsaljdsajldjkajd
        <br /> <br />
        jsaljdsajldjkajd askjdlasjdkajs jsaljdsajldjkajd askjdlasjdkajs
        jsaljdsajldjkajd askjdlasjdkajs jsaljdsajldjkajd askjdlasjdkajs
        jsaljdsajldjkajd askjdlasjdkajs jsaljdsajldjkajd askjdlasjdkajs
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
