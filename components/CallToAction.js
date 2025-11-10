import { useState } from 'react';
import styles from '@/styles/Home.module.css';

export default function CallToAction() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 6000);
    if (name) {
      const toast = document.createElement('div');
      toast.textContent = `Спасибо, ${name}! Мы свяжемся с вами в ближайшее время.`;
      Object.assign(toast.style, toastStyle);
      document.body.appendChild(toast);
      requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translate(-50%, 0)';
      });
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, -12px)';
        setTimeout(() => toast.remove(), 400);
      }, 3500);
    }
  };

  return (
    <section id="order" className={styles.cta}>
      <h2>Готовы к ароматному вечеру?</h2>
      <p>
        Заполните форму и наш менеджер перезвонит в течение 3 минут, чтобы подтвердить заказ и
        уточнить детали доставки.
      </p>
      <form
        id="contact"
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          width: '100%',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          required
          style={inputStyle}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          required
          pattern="\\+?[0-9\\s\\-]{7,}"
          style={inputStyle}
        />
        <select name="set" defaultValue="Сет «Традиционный Мангал»" style={inputStyle}>
          <option>Сет «Традиционный Мангал»</option>
          <option>Говяжий премиум</option>
          <option>Куриный цыпленок на углях</option>
          <option>Гарнир «Восточный»</option>
          <option>Нужна консультация</option>
        </select>
        <textarea
          name="comment"
          rows={3}
          placeholder="Комментарий к заказу (необязательно)"
          style={{ ...inputStyle, gridColumn: '1 / -1', resize: 'vertical' }}
        />
        <div className={styles.ctaActions}>
          <button type="submit" className={styles.primaryButton}>
            Жду звонка
          </button>
          <a href="tel:+79991234567" className={styles.secondaryButton}>
            Позвонить самому
          </a>
        </div>
      </form>
      {submitted && (
        <strong style={{ color: '#b23a48' }}>
          Заявка отправлена! Ожидайте звонка менеджера в течение нескольких минут.
        </strong>
      )}
      <small style={{ color: 'rgba(47, 12, 12, 0.55)' }}>
        Мы не передаём данные третьим лицам. После подтверждения вы получите SMS с статусом доставки.
      </small>
    </section>
  );
}

const inputStyle = {
  padding: '0.9rem 1.1rem',
  borderRadius: '14px',
  border: '1px solid rgba(255, 111, 97, 0.35)',
  background: 'rgba(255, 255, 255, 0.92)',
  color: '#2f0c0c',
  fontSize: '1rem',
  fontWeight: 500,
  boxShadow: '0 12px 25px rgba(223, 128, 96, 0.18)',
  transition: 'border 0.2s ease, box-shadow 0.2s ease',
};

const toastStyle = {
  position: 'fixed',
  left: '50%',
  bottom: '48px',
  transform: 'translate(-50%, 16px)',
  opacity: '0',
  padding: '1rem 1.6rem',
  background: 'linear-gradient(135deg, rgba(255, 111, 97, 0.95), rgba(255, 82, 82, 0.95))',
  color: '#fff',
  borderRadius: '16px',
  fontWeight: 600,
  boxShadow: '0 20px 45px rgba(255, 105, 97, 0.35)',
  transition: 'opacity 0.3s ease, transform 0.3s ease',
  zIndex: 100,
};

