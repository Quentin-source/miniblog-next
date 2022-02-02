//Setup
import Head from "next/head";
import Image from "next/image";

//Libraries
import { v4 as uuidv4 } from "uuid";

//Components
import Card from "../../components/Card/Card.jsx";

//Styles
import styles from "../../styles/User.module.scss";

export default function User(props) {
  console.log(props.users);
  const users = props.users;
  return (
    <>
      <Head>
        <title>Mini Blog Next.js | User</title>
        <meta
          name="description"
          content="Just a little blog for Web Developper"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header>
          <h1 className={styles.title}>Bienvenue sur code.io</h1>
          <p>Liste des utilisateurs</p>
        </header>
        <main className={styles.main}>
          {users.map((user) => (
            <Card
              key={uuidv4()}
              className={styles.card}
              title={`${user.name.replace(/<[^>]*>/g, "")}`}
              content={`${user.description
                .replace(/<[^>]*>/g, "")
                .substring(0, 30)} ...`}
              more="Lire plus ..."
              url="/"
            >
              <Image
                src={`https://via.placeholder.com/50x50?text=${user.name}+avatar`}
                height="50"
                width="50"
                layout='fixed'
                alt="User avatar"
              />
            </Card>
          ))}
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "http://localhost/wp-server/wp-json/wp/v2/users?per_page=4"
  );
  const users = await data.json();
  return {
    props: {
      users,
    },
  };
}
