import styles from '@/styles/Home.module.css';

const menuItems = [
  {
    name: 'Сет «Традиционный Мангал»',
    description: 'Шашлык из свинины, курицы, люля-кебаб, овощи гриль, лаваш, соус наршараб.',
    price: '1450 ₽',
    badge: 'Хит недели',
  },
  {
    name: 'Говяжий премиум',
    description: 'Мраморная говядина сухого вызревания, маринованная в фирменном соусе.',
    price: '990 ₽',
    badge: 'Новинка',
  },
  {
    name: 'Куриный цыпленок на углях',
    description: 'Лёгкий маринад из йогурта, душистого перца и цитрусов – сочный и нежный.',
    price: '620 ₽',
  },
  {
    name: 'Гарнир «Восточный»',
    description: 'Стейк из баклажана, перец рататуй, томаты черри, соус мацони.',
    price: '360 ₽',
  },
  {
    name: 'Авторский лимонад «Пылающий гранат»',
    description: 'Гранат, мята, лайм и щепотка фирменных специй.',
    price: '240 ₽',
  },
  {
    name: 'Десерт «Тбилисский мёд»',
    description: 'Медовый торт с орехами и пряной карамелью.',
    price: '310 ₽',
  },
];

export default function MenuSection() {
  return (
    <section id="menu">
      <h2 className={styles.sectionTitle}>Меню для идеального вечера</h2>
      <p className={styles.sectionSubtitle}>
        Выбирайте сет для компании или создайте свой набор. Мы собираем заказы из самых свежих
        ингредиентов в пределах часа до доставки.
      </p>
      <div className={styles.menuGrid}>
        {menuItems.map((item) => (
          <article key={item.name} className={styles.menuCard}>
            <header style={{ display: 'grid', gap: '0.4rem' }}>
              <h3>{item.name}</h3>
              {item.badge && <span className={styles.menuTag}>{item.badge}</span>}
            </header>
            <p>{item.description}</p>
            <div className={styles.menuPrice}>
              <span>{item.price}</span>
              <a href="#order" className={styles.secondaryButton}>
                В корзину
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

