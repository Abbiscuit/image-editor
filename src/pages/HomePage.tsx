import { useProducts } from '../lib/hooks/useProducts';

import styles from '../styles/HomePage.module.scss';

interface HomePageProps {}

const HomePage = (props: HomePageProps): JSX.Element => {
  const { products } = useProducts();

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>HomePage</h1>

      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.title} {p.isSale && `Sale Now`}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
