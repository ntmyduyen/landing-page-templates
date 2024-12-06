import data from 'content.json';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {data.menu.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={data.heroTitle}
        description={data.heroDescription}
        button={
          <Link href={data.heroButtonHref}>
            <Button xl>{data.heroButtonLabel}</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
