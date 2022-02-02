//Setup
import Link from "next/link";

//Styles
import styles from "./Card.module.scss";
import propTypes from "prop-types";

const Card = ({ title, content, more, url, className }) => {
  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
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
