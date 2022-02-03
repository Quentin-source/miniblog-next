//Setup
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//Libraries
import { v4 as uuidv4 } from "uuid";

//Components
import Card from "../../components/Card/Card.jsx";

//Styles
import styles from "../../styles/Users.module.scss";

export default function User(props) {
  console.log(props.users);
  const onHoverHandler = (e) => {
    console.log(e);
  };
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
            <Link href={`/user/${user.slug}`} passHref key={uuidv4()}>
              <div>
                <Card
                  onclick={onHoverHandler}
                  onClick={() => console.log("hello")}
                  className={styles.card}
                  title={`${user.name.replace(/<[^>]*>/g, "")}`}
                  content={`${user.description
                    .replace(/<[^>]*>/g, "")
                    .substring(0, 30)} ...`}
                  more="Lire plus ..."
                  url={`/user/${user.slug}`}
                >
                  <Image
                    src={`https://via.placeholder.com/60x60/000000/FFFFFF?text=${user.name}+avatar`}
                    height="60"
                    width="60"
                    layout="fixed"
                    alt="User avatar"
                  />
                </Card>
              </div>
            </Link>
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
