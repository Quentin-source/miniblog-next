//Setup
import Head from "next/head";
import Image from "next/image";

//Libraries
import { v4 as uuidv4 } from "uuid";

//Components
import Card from "../../components/Card/Card.jsx";

//Styles
import styles from "../../styles/User.module.scss";

export default function Post(props) {
  console.log(props);
  const { user, slug } = props;

  return (
    <>
      <Head>
        <title>Mini Blog Next.js | User | {slug}</title>
        <meta
          name="description"
          content="Just a little blog for Web Developper"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header>
          <h1 className={styles.title}>Bienvenue sur code.io</h1>
          <p>{"Détails d'un utilisateur"}</p>
        </header>
        <main className={styles.main}>
          <Card
            key={uuidv4()}
            className={styles.card}
            content={`${user[0].description}`}
            title={`${user[0].name}`}
            more="Retour"
            url="/user"
          >
                <Image
                    src={`https://via.placeholder.com/150x150/000000/FFFFFF?text=${user[0].name}+avatar`}
                    height="150"
                    width="150"
                    layout="fixed"
                    alt="User avatar"
                  />
          </Card>
        </main>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const datas = await fetch(`http://localhost/wp-server/wp-json/wp/v2/users`);
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
    `http://localhost/wp-server/wp-json/wp/v2/users?slug=${slug}`
  );
  const user = await data.json();
  return {
    props: {
      user,
      slug,
    },
  };
}
