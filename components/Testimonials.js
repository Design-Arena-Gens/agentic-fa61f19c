import styles from '@/styles/Home.module.css';

const testimonials = [
  {
    name: 'Наталья, Москва',
    rating: '5.0',
    text: 'Лучший шашлык, который когда-либо заказывали домой! Даже гарниры приехали горячими, а соусы — восторг.',
  },
  {
    name: 'Алексей, Одинцово',
    rating: '4.9',
    text: 'Курьер приехал за 25 минут, упаковано идеально. Мясо сочное, чувствуется, что маринад натуральный.',
  },
  {
    name: 'Ирина, Химки',
    rating: '5.0',
    text: 'Заказываем каждую пятницу. Всегда стабильно, никаких сюрпризов. И бонусы копятся очень быстро!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h2 className={styles.sectionTitle}>Что говорят наши гости</h2>
      <p className={styles.sectionSubtitle}>
        97% клиентов возвращаются за повторным заказом. Мы слышим каждого и радуемся вместе с вами.
      </p>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className={styles.testimonialCard}>
            <p>“{testimonial.text}”</p>
            <div className={styles.testimonialAuthor}>
              <span>{testimonial.name}</span>
              <span className={styles.rating}>★ {testimonial.rating}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

