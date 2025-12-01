// src/pages/Pricing.jsx
import React from 'react';

export default function PricingPage() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow bg-glow-1" aria-hidden="true" />
      <div className="bg-glow bg-glow-2" aria-hidden="true" />

      <main className="main small-top pricing-page" >
        {/* HERO */}
        <section className="pricing-hero">
          <div className="pricing-badge">
            <span className="badge-dot badge-dot--pricing" />
            PIANI &amp; LICENZE
          </div>

          <h1 className="pricing-hero-title">RACESENSE PRICING</h1>

          <p className="pricing-hero-subtitle">
            LIVE per il timing eventi, COACHING per gli allenamenti dei piloti.
          </p>
          <p className="pricing-hero-note">Tutti i prezzi sono IVA esclusa.</p>
        </section>

        {/* GRID LIVE / COACHING */}
                {/* GRID LIVE / COACHING / PULSE */}
        <section className="pricing-grid">
          {/* LIVE */}
          <article className="pricing-card premium-card">
            <header className="premium-head">
              <div className="premium-pill premium-pill--live">
                <span className="pill-dot" />
                LIVE TIMING
              </div>
              <span className="premium-tag">Autodromi · Eventi</span>
            </header>

            <h2 className="premium-title">
              RACESENSE <span className="accent-live">LIVE</span>
            </h2>

            {/* PREZZI */}
            <div className="premium-prices">
              <div className="premium-price-box">
                <span className="pp-label">Dispositivo</span>
                <span className="pp-value">€ 250</span>
                <span className="pp-meta">una tantum</span>
              </div>
              <div className="premium-price-box">
                <span className="pp-label">Piattaforma</span>
                <span className="pp-value">€ 40</span>
                <span className="pp-meta">dispositivo / mese</span>
              </div>
            </div>

            {/* BLOCCHI FUNZIONI */}
            <div className="premium-sections">
              <div className="premium-section">
                <h3><span>●</span> Realtime Visuals</h3>
                <p>
                  Mappa, posizioni, tempi e sorpassi in diretta con classifica aggiornata
                  in live stile formula 1, porta la professionalità nel tuo evento.
                </p>
              </div>

              <div className="premium-section">
                <h3><span>●</span> Sessione Gara &amp; Contenuti</h3>
                <p>
                  Sync video–telemetria per post–edit, salvataggio sessione
                  completa, condivisione sui social e grafiche broadcast integrate.
                </p>
              </div>

              <div className="premium-section">
                <h3><span>●</span> Social &amp; Pulse</h3>
                <p>
                  Collegamento della sessione gara al profilo pilota tramite la piattaforma social Racesense Pulse.
                </p>
              </div>
            </div>
            <p className="pricing-footnote">Perfetto da 20 a 200 dispositivi.</p>
          </article>

          {/* COACHING */}
          <article className="pricing-card premium-card">
            <header className="premium-head">
              <div className="premium-pill premium-pill--coach">
                <span className="pill-dot" />
                ANALYTICS PRO
              </div>
              <span className="premium-tag">Academy · Piloti</span>
            </header>

            <h2 className="premium-title">
              RACESENSE <span className="accent-coach">COACH</span>
            </h2>

            {/* PREZZO */}
            <div className="premium-prices single">
              <div className="premium-price-box big">
                <span className="pp-label">Dispositivo</span>
                <span className="pp-value">€ 180</span>
                <span className="pp-meta">una tantum</span>
              </div>
            </div>

            {/* BLOCCHI */}
            <div className="premium-sections">
              <div className="premium-section">
                <h3><span>●</span> Dati raccolti</h3>
                <p>
                  Stessi dati del LIVE: traiettorie, velocità, frenate e riferimento
                  curva–per–curva. Sessioni salvate per confronti nel tempo.
                </p>
              </div>

              <div className="premium-section">
                <h3><span>●</span> Analisi post–giro</h3>
                <p>
                  Analisi completa dopo ogni stint su smartphone: ritmo, giri migliori,
                  consistenza e punti chiave dove migliorare.
                </p>
              </div>

              <div className="premium-section">
                <h3><span>●</span> Racesense Pulse</h3>
                <p>
                  App stile Strava per piloti: pubblicazione risultati, feed delle gare
                  e condivisione sessioni con coach &amp; compagni.
                </p>
              </div>
            </div>

            <p className="pricing-footnote">
              Nessun abbonamento obbligatorio.
            </p>
          </article>

          {/* PULSE */}
          <article className="pricing-card premium-card">
            <header className="premium-head">
              <div className="premium-pill premium-pill--pulse">
                <span className="pill-dot" />
                PULSE APP
              </div>
              {/* <span className="premium-tag">Piloti · Community · Statistiche</span> */}
            </header>

            <h2 className="premium-title">
              RACESENSE <span className="accent-pulse">PULSE</span>
            </h2>

            {/* PREZZI FREE + PREMIUM */}
            <div className="premium-prices">
              <div className="premium-price-box">
                <span className="pp-label">Free</span>
                <span className="pp-value">€ 0</span>
                <span className="pp-meta">uso gratuito</span>
              </div>
              <div className="premium-price-box pulse-premium">
                <span className="pp-label">Premium</span>
                <span className="pp-value">€ 5</span>
                <span className="pp-meta">/ mese </span>
              </div>
            </div>

            {/* BLOCCHI PULSE */}
            <div className="premium-sections">
              <div className="premium-section">
                <h3><span>●</span> Social &amp; Community</h3>
                <p>
                  App in stile Strava per piloti: pubblica i tuoi tempi, segui altri driver,
                  scala classifiche e racconta le tue gare.
                </p>
              </div>

              <div className="premium-section">
                <h3><span>●</span> Analytics Premium</h3>
                <p>
                  Con il piano Premium vedi grafici avanzati: velocità, frenate, traiettorie,
                  settori, trend e statistiche dettagliate per ogni sessione.
                </p>
              </div>

              <div className="premium-section">
                <h3><span>●</span> Integrazione Racesense</h3>
                <p>
                  Le sessioni da LIVE e COACHING vengono importate automaticamente: tutti i dati
                  in un’unica app, sempre pronti da analizzare e condividere.
                </p>
              </div>
            </div>

            <p className="pricing-footnote">
              Puoi iniziare gratis e passare al piano Premium.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
