import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroImageBackground } from '../components/HeroComponent';
import { FeaturesImages } from '../components/FeatureSection';
import { GetInTouch } from '../components/ContactUsComponent';
import { FaqSimple } from '../components/FAQComponent';


export default function HomePage() {
  return (
    <>
      <HeroImageBackground />
      <FeaturesImages
        supTitle="Caracteristicas"
        description="Sabes que tan 'pura' es tu agua gracias a los filtros que tiene tu dispensador de agua?"
        data={[
          {
            image: '/images/accountants.svg',
            title: 'Informacion',
            description: 'te da informacion tiempo real de la calidad del agua que estas usando para multiples cosas dentro y fuera de tu casa o oficina',
          },
          {
            image: '/images/auditors.svg',
            title: 'Cuidado',
            description: 'Te mantiene seguro al momento de ingerir agua, muchas veces no tenemos un cuidado especifico o no sabemos si mi dispensador de agua ya requiere cambio',
          },
          {
            image: '../images/lawyer.svg',
            title: 'info',
            description: 'idk texto extra.',
          },
        ]}
      />
      <FaqSimple/>
      <GetInTouch/>
    </>
  );
}
