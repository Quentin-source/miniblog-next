//Setup
import Head from "next/head";

//Libraries
import { v4 as uuidv4 } from "uuid";

//Components
import Card from "../../components/Card/Card.jsx";

//Styles
import styles from "../../styles/Blog.module.scss";

export default function Blog(props) {
  console.log(props.posts);
  const posts = props.posts;
  return (
    <>
      <Head>
        <title>Mini Blog Next.js | Blog</title>
        <meta
          name="description"
          content="Just a little blog for Web Developper"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header>
          <h1 className={styles.title}>Bienvenue sur code.io</h1>
          <p>Liste des publications</p>
        </header>
        <main className={styles.main}>
          {posts.map((post) => (
            <Card
              key={uuidv4()}
              className={styles.card}
              content={`${post.excerpt.rendered
                .replace(/<[^>]*>/g, "")
                .substring(0, 30)} ...`}
              title={`${post.title.rendered.replace(/<[^>]*>/g, "")}`}
              more="Lire plus ..."
              url={`/blog/${post.slug}`}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch("http://localhost/wp-server/wp-json/wp/v2/posts?per_page=6");
  const posts = await data.json();
  return {
    props: {
      posts,
    },
  };
}
