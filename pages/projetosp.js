import Head from 'next/head'
import Link from 'next/link'

export default function Techstack() {
    return (
      <div className="container">
        <Head>
          <title>Tech Stack</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <h1 className="title">
                <a href="/index"><img src="/NEW2.png" alt="NEW Logo"/>NEW</a> 
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
        <img src="/pesoIdeal.png" alt="projeto1"/>
        <img src="/validadorCpf.png" alt="projeto2"/>
        </main>
        <style jsx>{`
        .container {
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
          justify-content: center;
          align-items: center; 
        }

        header img{
            margin-top: 1rem;
            height: 1em;
        }

        Link{
          margin-right: 3rem;
          margin-left: 3rem;
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
          height: 15rem;
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
          color: #000000f;
          text-decoration: none;
          margin-right: 2rem;
          margin-left: 2rem;
        }

        .paginas a:hover{
          text-decoration: none;
          color: #00005b;
        }

        .paginas {
          margin-right: 2rem;
          line-height: 0;
          font-size: 2rem;
          text-align: center;
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