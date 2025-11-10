import styles from '@/styles/Home.module.css';

const steps = [
  {
    title: 'Оформите заказ',
    description: 'Выберите сет или соберите свой набор. Можно указать пожелания по степени прожарки.',
  },
  {
    title: 'Обжариваем на углях',
    description: 'Мастер мангала начинает готовить сразу после подтверждения, чтобы шашлык доехал горячим.',
  },
  {
    title: 'Курьер в пути',
    description: 'Среднее время доставки — 29 минут. Отслеживайте курьера в реальном времени.',
  },
  {
    title: 'Подача на стол',
    description: 'Откройте коробку и наслаждайтесь. Не забудьте поделиться отзывом и получить бонусы.',
  },
];

export default function DeliverySteps() {
  return (
    <section id="delivery">
      <h2 className={styles.sectionTitle}>Доставка без компромиссов</h2>
      <p className={styles.sectionSubtitle}>
        Мы продумываем каждый шаг: от отбора мяса и контроля температуры до аккуратной упаковки и
        подарков постоянным гостям.
      </p>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <article key={step.title} className={styles.stepCard}>
            <span className={styles.stepNumber}>{`0${index + 1}`}</span>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

