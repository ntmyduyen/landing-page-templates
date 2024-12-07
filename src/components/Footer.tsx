import data from "@/content.json";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <img src={data.logo} alt="" className="w-6" />
            {data.title}
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          {data.footerFollowUs.map((item, index) => (
            <div key={index}>
              <a
                rel="noreferrer noopener"
                href={item.href}
                className="opacity-60 hover:opacity-100"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          {data.menu.map((item, index) => (
            <div key={index}>
              <a
                rel="noreferrer noopener"
                href={item.href}
                className="opacity-60 hover:opacity-100"
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          {data.footerCommunity.map((item, index) => (
            <div key={index}>
              <a
                rel="noreferrer noopener"
                href={item.href}
                className="opacity-60 hover:opacity-100"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>{data.copyRight}</h3>
      </section>
    </footer>
  );
};
