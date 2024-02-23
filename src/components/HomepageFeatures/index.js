import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Github',
    Svg: require('@site/static/img/github.svg').default,
    description: (
      <>
        Use github pages para desplegar esta pagina web, a traves de mi cuenta
        se creo una rama llamada gh-pages el cual se usara al momento del despliegue.
      </>
    ),
  },
  {
    title: 'Docusaurus',
    Svg: require('@site/static/img/docusaurus.svg').default,
    description: (
      <>
        Docusaurus fue utilizado ya que implementa todo un esquema completo de web estatica,
        con la cual se tiene una base para usar.
      </>
    ),
  },
  {
    title: 'React',
    Svg: require('@site/static/img/React.svg').default,
    description: (
      <>
        En este caso React viene integrado directamente con docusaurus, lo que es un puntazo al momento de
        organizarce y reutilizar codigo. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
