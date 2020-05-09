import Head from 'next/head'
import Link from 'next/link'

export default function About() {
    return (
      <div className="container">
        <Head>
          <title>Sobre</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <h1 className="title">
                <a href="/index"><img src="/NEW2.png" alt="NEW Logo"/> 
                NEW</a> 
            </h1>
          <h2>
            <table className="paginas">
              <ul>
                  <a href="/">Home page</a>
                  <a href="/techstack">Tech Stack</a>
                  <a href="/blog">Blog</a>
                  <a href="/about">Sobre</a>
              </ul>
            </table>
          </h2>
        </header>
        <main>
          <h1>Grupo NEW</h1>
          <p>Esse blog tem como objetivo de criar um portfólio de cada integrante do grupo.</p>

          <h2>Natália Kahori Kaneshima</h2>
          <img src="/natalia.jpg" alt="natalia"/>
          <p>Meu nome é Natalia Kahori Kaneshima,18, aluna do curso de Ciência da Computação da UniFil (Centro Universitário da Filadélfia, Londrina). Atualmente estou no 2º ano (3 período) do curso. Tenho hobbies como cozinhar.</p>

          <h2>Rebeca Emi Ito</h2>
          <img src="/emi.jpeg" alt="emi"/>
          <p>Meu nome é Rebeca Emi Ito, 19, aluna do curso de Ciência da Computação da UniFil (Centro Universitário da Filadélfia, Londrina). Atualmente estou no 2º ano (3 período) do curso. Estou atuando como estagiária na Escola Megumi como Professora de Tecnologia (turing), onde eu auxilio as professoras e os alunos (2º ao 5º ano do Fundamental) a mexerem com programação e sou professora de Mangá (oficina de desenho da Escola Megumi). Tenho hobbie como artista(tradicional e digital), fazer webcomics e escritora. Futuramente, pretendo criar meu próprio site, onde vou colocar meus projetos, tais como jogos (códigos, disigner de personagem e levels, e OST), comics e artes.</p>

          <h2>Wellington Joji Endo</h2>
          <img src="/joje.jpg" alt="joji"/>
          <p>Meu nome é Wellington Joji Endo, 20 anos, aluno do curso de Ciência da Computação da UniFil (Centro Universitário da Filadélfia, Londrina). Atualmente estou no 2° Ano no 3° Período. Tenho alguns hobbies como escritor(onde que escrevo sentimentos em textos), faço academia(não por estética e sim por saúde). Posteriormente, penso em ir na área de games, meu desejo é ser roteirista de games ou um Redator.</p>
        https://github.com/NataliaKaneshima
        https://github.com/RebecaEmiIto
        https://github.com/Endo99
        </main>
        <style jsx>{`
        h1{
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        p{
          padding: 0 12rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 1.4rem;
          color: #7CFC00;
        }

        .container {
          background: url('tecnologia2.jpg') 0 0;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: 100% 100%;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        header{
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
        }

        header img{
            margin-top: 1rem;
            height: 1em;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main img{
          margin-top: 1rem;
          height: 20rem;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover{
          text-decoration: none;
          color: #00008b;
        }
        
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .paginas a {
          color: #F5F5F5;
          text-decoration: none;
          margin-right: 3rem;
          margin-left: 3rem;
        }

        .paginas a:hover{
          margin-right: 3rem;
          margin-left: 3rem;
          text-decoration: none;
          color: #F0FFFF;
        }

        .paginas a:active{
          margin-right: 3rem;
          margin-left: 3rem;
          text-decoration: none;
          color: #ADD8E6;
        }

        .paginas {
          margin-right: 3rem;
          line-height: 0;
          font-size: 2rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

         .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
      
        </div>
    )
}