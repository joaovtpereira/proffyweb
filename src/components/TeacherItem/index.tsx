import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/54077296?s=460&u=78314b2c3a3a213708566fdf74793e0129246105&v=4" alt="João Vitor Pereira" />
        <div>
          <strong>João Vitor Pereira</strong>
          <span>Programação Web</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias web do momento.
        <br /><br />
        Apaixonado por ensinar e ajudar crianças a desenvolverem seus próprios sites, abrindo postar para que em um futuro próxima, tais crianças sejam o futuro da nossa área.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;