import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Acompanhe pela Twitch</>,
    imageUrl: 'img/undraw_press_play_bx2d_red.svg',
    description: (
      <>
        Participe com a gente na <a href="https://www.twitch.tv/javadevzone" target="_blank">Twitch</a> acompanhando cursos ou desenvolvendo algum projeto open source.
      </>
    ),
    btnUrl: 'https://www.twitch.tv/javadevzone',
    btnDesc: 'Go Twitch'
  },
  {
    title: <>Somos Collabcode</>,
    imageUrl: 'img/undraw_friends_online_klj6_red.svg',
    description: (
      <>
        Fazemos parte da <bold>
          <a href="https://collabcode.training/" target="_blank">Collabcode</a>
        </bold>, uma comunidade focada na troca de conhecimentos, onde cada um contribui como pode e ajuda o próximo para que todos alcancem seus objetivos e realizem seus sonhos..
      </>
    ),
    btnUrl: 'https://collabcode.training/',
    btnDesc: 'Go Collabcode'
  },
];

function Feature({imageUrl, title, description, btnUrl, btnDesc}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
      <div className="text--center">
<a className={classnames('button button--outline button--secondary button--lg')} href={btnUrl} target="_blank">{btnDesc}</a>
      </div>
      
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
