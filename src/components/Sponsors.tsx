import data from "@/content.json";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        {data.sponsorTitle}
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {data.sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <img src={icon} alt={name} className="w-12" />
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
