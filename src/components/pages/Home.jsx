import Card from 'components/UI/Card';
import styles from './Home.module.scss';
import avatar from 'assets/img/avatar.jpeg';
import { Tilt } from 'react-tilt';

const Home = () => {
  const cardLink = [
    {
      id: 1,
      title: 'TikTok',
      link: 'https://www.tiktok.com/',
      img: 'tiktok',
    },
    {
      id: 2,
      title: 'Донат підтримка',
      link: '#',
      img: 'tiktok',
    },
    {
      id: 3,
      title: 'Discord',
      link: 'https://discord.com/',
      img: 'tiktok',
    },
    {
      id: 4,
      title: 'twitch',
      link: 'https://www.twitch.tv/',
      img: 'tiktok',
    },
  ];
  return (
    <>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.wrapper__top}>
              <div className={styles['wrapper__top-ava']}>
                <img src={avatar} alt="Avatar" />
              </div>
              <h1 className={styles['wrapper__top-title']}>Tobirama|Valorant</h1>
              <h4 className={styles['wrapper__top-subtitle']}>Ком'юніті з Valorant</h4>
            </div>
            <div className={styles.wrapper__content}>
              {cardLink.map((item) => (
                <Tilt key={item.id}>
                  <Card {...item} />
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
