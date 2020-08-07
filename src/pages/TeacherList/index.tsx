import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  );
};

export default TeacherList;
