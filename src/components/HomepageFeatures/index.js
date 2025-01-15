import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Dokumentacja TAPI"
      description="Kompleksowa dokumentacja API TAPI.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Witamy w dokumentacji TAPI</h1>
          <p className="hero__subtitle">
            Znajdziesz tutaj wszystkie informacje potrzebne do korzystania z API TAPI.
          </p>
          <div className={styles.buttons}>
            <a
              className="button button--secondary button--lg"
              href="/docs/intro">
              Rozpocznij
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>Przejrzysta dokumentacja</h3>
                <p>
                  Skorzystaj z dobrze zorganizowanej dokumentacji, aby szybko rozpocząć pracę z TAPI.
                </p>
              </div>
              <div className="col col--4">
                <h3>Szczegóły endpointów</h3>
                <p>
                  Poznaj dostępne endpointy API z dokładnymi opisami i przykładami.
                </p>
              </div>
              <div className="col col--4">
                <h3>Przykłady kodu</h3>
                <p>
                  Obejrzyj gotowe fragmenty kodu w różnych językach programowania, aby przyspieszyć wdrożenie.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}