import styles from './Card.module.scss';

const Card = ({ title, link, img }) => {
  return (
    <div className={styles.root}>
      <a className={styles.root__link} href={link}>
        <img className={styles.root__img} src={require(`assets/img/${img}.png`)} alt="Link image" />
        <h6 className={styles.root__title}>{title}</h6>
      </a>
    </div>
  );
};

export default Card;
