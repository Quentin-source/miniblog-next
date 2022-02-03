//Setup
import Link from "next/link";

//Styles
import styles from "./Card.module.scss";
import propTypes from "prop-types";

const Card = ({ title, content, more, url, className, ...props }) => {
  return (
    <div className={`${styles.main} ${className}`}>
      <header>
        {props.children}
        <h1 className={styles.title}>{title}</h1>
      </header>
      <p className={styles.content}>{content}</p>
      <div className={styles.more}>
        {
          <Link href={url}>
            <a>{more}</a>
          </Link>
        }
      </div>
    </div>
  );
};

Card.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  more: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
};

export default Card;

//{ title, image, content, more, url, className}
