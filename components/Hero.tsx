import Button from "./Button";

function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:max-w-[520px]">
        <h1 className="bold-52 lg:bold-88">Pengaduan Masyarakat</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Website pengaduan masyarakat ini digunakan untuk menyampaikan
          pengaduan yang ingin masyarakat sampaikan.
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row my-11">
          <Button type="button" title="Isi pengaduan" variant="btn_green" />
          <Button
            type="button"
            title="history pengaduan"
            variant="btn_white_text"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
