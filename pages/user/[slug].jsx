//Setup
import Head from "next/head";

//Libraries
import { v4 as uuidv4 } from "uuid";

//Components
import Card from "../../components/Card/Card.jsx";

//Styles
import styles from "../../styles/Post.module.scss";

export default function Post(props) {
  console.log(props);
  const { post, slug } = props;

  return (
    <>
      <Head>
        <title>Mini Blog Next.js | {slug}</title>
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
            key={uuidv4()}
            className={styles.card}
            content={`${post[0].excerpt.rendered.replace(/<[^>]*>/g, "")}`}
            title={`${post[0].title.rendered.replace(/<[^>]*>/g, "")}`}
            more="Retour"
            url="/blog"
          />
        </main>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const datas = await fetch(`http://localhost/wp-server/wp-json/wp/v2/posts`);
  const results = await datas.json();
  const paths = results.map((path) => ({
    params: { slug: path.slug },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const data = await fetch(
    `http://localhost/wp-server/wp-json/wp/v2/posts?slug=${slug}`
  );
  const post = await data.json();
  return {
    props: {
      post,
      slug,
    },
  };
}
