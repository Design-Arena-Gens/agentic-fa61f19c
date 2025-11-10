import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const navItems = [
  { href: '#menu', label: 'Меню' },
  { href: '#delivery', label: 'Доставка' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#contact', label: 'Контакты' },
];

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(16px)',
        background: 'linear-gradient(120deg, rgba(255, 255, 255, 0.96), rgba(255, 240, 245, 0.92))',
        borderBottom: '1px solid rgba(255, 111, 97, 0.18)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 'min(1200px, 95vw)',
          margin: '0 auto',
          padding: '1.2rem 0',
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 800,
            fontSize: '1.35rem',
            letterSpacing: '-0.04em',
            color: '#b23a48',
            display: 'flex',
            gap: '0.6rem',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #ff7043, #ff3d00)',
              display: 'grid',
              placeItems: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.1rem',
            }}
            aria-hidden="true"
          >
            ШШ
          </span>
          Шашлык & Драйв
        </Link>
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: 'rgba(47, 12, 12, 0.72)',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'color 0.2s ease',
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#order"
            className={styles.primaryButton}
            style={{
              padding: '0.7rem 1.4rem',
              fontSize: '0.95rem',
              whiteSpace: 'nowrap',
            }}
          >
            Заказать
          </Link>
        </nav>
      </div>
    </header>
  );
}
