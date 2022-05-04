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
        supTitle="Features"
        description="Mantine is a next-generation web application framework for building modern web applications."
        data={[
          {
            image: '/images/accountants.svg',
            title: 'Flexible',
            description: 'Mantein is built on top of React and React Native, and is designed to be flexible and easy to use.',
          },
          {
            image: '/images/auditors.svg',
            title: 'Scalable',
            description: 'Mantein is built on top of React and React Native, and is designed to be flexible and easy to use.',
          },
          {
            image: '../images/lawyer.svg',
            title: 'Secure',
            description: 'Mantein is built on top of React and React Native, and is designed to be flexible and easy to use.',
          },
        ]}
      />
      <FaqSimple/>
      <GetInTouch/>
    </>
  );
}
