import Image from 'next/image';
import styles from '@/styles/Home.module.css';

const bonusList = [
  'Маринуем мясо только в фермерских специях',
  'Доставляем горячим за 29 минут',
  'Дарим фирменный соус к каждому сету',
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Шашлык ресторанного уровня с доставкой домой</h1>
        <p>
          Мы обжариваем мясо на живом угле прямо перед отправкой курьеру. Сочные
          шампуры, фирменные соусы и свежие гарниры – попробуйте вкус настоящего
          Кавказа без ожидания в кафе.
        </p>
        <div className={styles.heroActions}>
          <a href="#order" className={styles.primaryButton}>
            Сделать заказ
          </a>
          <a href="#menu" className={styles.secondaryButton}>
            Посмотреть меню
          </a>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 55px rgba(223, 128, 96, 0.32)',
            minHeight: '320px',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1588165612440-b0e3cf507574?auto=format&fit=crop&w=900&q=80"
            alt="Шашлык на мангале"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 420px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {bonusList.map((text) => (
          <article key={text} className={styles.heroHighlight}>
            <div className={styles.badge}>🔥</div>
            <span>{text}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

