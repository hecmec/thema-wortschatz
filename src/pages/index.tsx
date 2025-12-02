import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/english/greetings">
            <Translate
              id="homepage.startEnglishButton"
              description="The button text to start learning English">
              Commencer l'Anglais 🇬🇧
            </Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/chinese/survival-phrases">
            <Translate
              id="homepage.startChineseButton"
              description="The button text to start learning Chinese">
              Commencer le Chinois 🇨🇳
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Apprenez l'anglais et le chinois avec des listes de vocabulaire thématique organisées pour les francophones">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

