import { Button } from "./ui/button";

import data from "@/content.json";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">{data.ctaTitle}</h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            {data.ctaDescription}
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          {data.ctaButtons.map((button, index) => (
            <Button
              key={index}
              className="w-full md:mr-4 md:w-auto"
              onClick={button.href}
              variant={index === 0 ? "default" : "outline"}
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
