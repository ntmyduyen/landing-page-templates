import data from 'content.json';
import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title={data.bannerTitle}
      subtitle={data.bannerSubTitle}
      button={
        <Link href={data.bannerButtonHref}>
          <Button>{data.bannerButtonLabel}</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
