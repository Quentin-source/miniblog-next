//Setup
import Head from "next/head";

//Components
import Card from "../../components/Card/Card.jsx";

//Styles
import styles from "../../styles/Blog.module.scss";

export default function Blog(props) {
    console.log(props.posts);
    
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
  );
}

export async function getStaticProps() {
    const data = await fetch("http://localhost/wp-server/wp-json/wp/v2/posts");
    const posts = await data.json();
    return {
      props: {
        posts,
      },
    };
  }
  
