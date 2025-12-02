import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Vocabulaire Thématique',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Apprenez le vocabulaire organisé par thèmes pratiques : famille, nourriture, 
        couleurs, nombres et bien plus. Chaque thème contient les mots essentiels 
        pour communiquer efficacement.
      </>
    ),
  },
  {
    title: 'Prononciation Audio',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Chaque mot est accompagné de sa transcription phonétique (IPA pour l'anglais, 
        pinyin pour le chinois) et de liens audio pour perfectionner votre prononciation.
      </>
    ),
  },
  {
    title: 'Ressources Complémentaires',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Découvrez des liens vers des ressources externes et des vidéos YouTube 
        sélectionnées pour approfondir votre apprentissage de chaque thème.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

