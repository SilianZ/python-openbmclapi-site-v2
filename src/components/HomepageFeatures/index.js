import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '轻易上手',
    description: (
      <>
        为了更快地开发和部署，我们准备了文档以及 Docker 镜像，
        同时也搭建了相应的镜像站来加快访问速度。
      </>
    ),
  },
  {
    title: '可拓展化',
    description: (
      <>
        我们提供了插件拓展功能，你可以为 python-openbmclapi
        编写自己的插件。
      </>
    ),
  },
  {
    title: '轻量化',
    description: (
      <>
        基于 Python 强大的语言功能，编写出来的 python-openbmclapi
        可以减小空间和内存的占用。
      </>
    )
  }

];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
