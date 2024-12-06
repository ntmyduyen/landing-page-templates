import data from 'content.json';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title={data.verticalFeaturesTitle}
    description={data.verticalFeaturesDescription}
  >
    {data.verticalFeatures.map((feature, index) => (
      <VerticalFeatureRow
        key={index}
        title={feature.title}
        description={feature.description}
        image={feature.image}
        imageAlt={feature.imageAlt}
        reverse={index % 2 === 1}
      />
    ))}
  </Section>
);

export { VerticalFeatures };
