//Setup
import Head from "next/head";
import Image from "next/image";

//Components
import Card from "../components/Card/Card";

//Styles
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mini Blog Next.js</title>
        <meta
          name="description"
          content="Just a little blog for Web Developper"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header>
          <h1 className={styles.title}>Bienvenue sur code.io</h1>
          <p>Le blog communautaire des afficionados de dévelopement Web</p>
        </header>
        <main className={styles.main}>
          <Card
            className={styles.card}
            content="chaque auteur essaie de vous apporter le meilleur de lui même"
            title="Lisez les articles"
            more="visitez le blog"
            url="/blog"
          />
          <Card
            className={styles.card}
            content="Faites vous des amis"
            title="Liste des membres"
            more="Parcourir les utilisateurs"
            url="/user"
          />
        </main>
      </div>
    </>
  );
}
