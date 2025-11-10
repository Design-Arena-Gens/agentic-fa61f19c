import Head from 'next/head';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import DeliverySteps from '@/components/DeliverySteps';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Шашлык &amp; Драйв — доставка авторского шашлыка</title>
        <meta
          name="description"
          content="Сочные шашлыки на углях с доставкой за 29 минут. Фермерское мясо, фирменные соусы и программа лояльности."
        />
        <meta property="og:title" content="Шашлык &amp; Драйв — доставка авторского шашлыка" />
        <meta
          property="og:description"
          content="Попробуйте ресторанный шашлык дома. Закажите сет или соберите свой набор — привезём горячим!"
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1588165612440-b0e3cf507574?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <MenuSection />
        <DeliverySteps />
        <Testimonials />
        <CallToAction />
      </main>
      <footer className={styles.footer}>
        <strong>Шашлык &amp; Драйв</strong> · Работаем ежедневно с 11:00 до 23:00 · Доставляем по
        Москве, Одинцово и Химкам
      </footer>
    </div>
  );
}
