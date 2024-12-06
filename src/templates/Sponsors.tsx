import data from 'content.json';
import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section title={data.sponsorsTitle} description={data.sponsorsDescription}>
    <div className="grid grid-cols-3 gap-4">
      {data.sponsors.map((sponsor, index) => (
        <div
          key={index}
          className="flex h-56 items-center border-2 border-gray-300 p-3"
        >
          <a href={sponsor.href} target="_blank">
            <Image
              src={sponsor.image}
              alt={sponsor.alt}
              width={260}
              height={224}
            />
          </a>
        </div>
      ))}
    </div>
  </Section>
);

export { Sponsors };
