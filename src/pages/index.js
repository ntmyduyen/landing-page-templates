import Head from "next/head";
import { FeatureSection } from "@/components/sections/FeatureSection";
import {
  Header,
  HeroSection,
  TestimonialSection,
  FaqSection,
  Footer,
  PricingSection,
  LargeFeatureSection,
  CtaSection,
} from "../components/sections";

import data from "../../content.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Header
        logo={{
          href: data.headerLogoHref,
          src: data.headerLogoSrc,
          alt: data.headerLogoAlt,
        }}
        links={data.headerLinks}
        buttons={data.headerButtons}
      />
      <HeroSection
        id="home"
        badge={{
          href: data.heroBadgeHref,
          icon: "tabler:arrow-right",
          label: data.heroBadgeLabel,
        }}
        title={data.headerTitle}
        description={data.headerDescription}
        buttons={data.heroButtons}
        image={{
          src: data.heroThumbnail,
          alt: "Hero section",
          className: "w-full h-auto",
        }}
        clientsLabel={data.heroClientsLabel}
        clients={data.clients}
      />
      <FeatureSection
        id="features"
        title={data.featuresTitle}
        description={data.featuresDescription}
        features={data.featuresContents}
      />
      <LargeFeatureSection
        id="feature1"
        title={data.feature1Title}
        description={data.feature1Description}
        list={data.feature1List}
        image={{
          src: data.feature1ImageSrc,
          alt: "Image",
          className:
            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <LargeFeatureSection
        id="feature2"
        reverse={true}
        title={data.feature2Title}
        description={data.feature2Description}
        list={data.feature2List}
        image={{
          src: data.feature2ImageSrc,
          alt: "Image",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <PricingSection
        id="pricing"
        title={data.pricingTitle}
        description={data.pricingDescription}
        badge={{
          leading: true,
          icon: "tabler:credit-card",
          label: data.pricingBadge,
        }}
        pricing={data.pricing}
      />
      <TestimonialSection
        id="testimonials"
        title={data.testimonialTitle}
        description={data.testimonialDescription}
        badge={{
          leading: true,
          icon: "tabler:heart",
          label: data.testimonialBadge,
        }}
        testimonials={data.testimonials}
        button={{
          icon: "tabler:brand-x",
          label: data.testimonialButtonLabel,
          href: data.testimonialButtonHref,
          color: "white",
        }}
      />
      <FaqSection
        id="faqs"
        title={data.faqTitle}
        description={data.faqDescription}
        buttons={[
          {
            label: data.faqButtonLabel,
            href: data.faqButtonHref,
            color: "primary",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        faqs={data.faqs}
      />
      <CtaSection
        id="cta"
        title={data.ctaTitle}
        description={data.ctaDescription}
        buttons={[
          {
            label: data.ctaButtonLabel,
            href: data.ctaButtonHref,
            color: "dark",
          },
        ]}
      />
      <Footer
        id="footer"
        copyright={data.footerCopyright}
        logo={data.footerLogo}
        social={data.footerSocial}
        links={data.footerLinks}
      />
    </>
  );
}
