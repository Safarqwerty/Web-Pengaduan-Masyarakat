import Button from "@/components/Button";
import WordLimit from "@/components/WordLimit";

function Tanggapan() {
  const longText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni ad minima sapiente explicabo, adipisci nemo odit excepturi exercitationem laborum tenetur qui cum at in nam maiores. At, illo? Iste quas modi, voluptas optio vero cumque in? Natus maiores atque ducimus nulla amet ea commodi eligendi autem beatae incidunt, provident inventore iste, accusantium sunt cumque rem aliquid voluptate quis ipsa fugit delectus blanditiis error? Voluptatibus obcaecati voluptas explicabo aspernatur tempora fuga atque facilis quos? Tenetur laboriosam natus, et asperiores eum iusto iste aliquam voluptate, odio excepturi necessitatibus ab aspernatur nam dolores magnam? Recusandae, autem! Suscipit ratione similique natus fugit eligendi.";

  return (
    <section className="max-container padding-container h-screen flex flex-col gap-20 md:gap-28 lg:py-10 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:max-w-[600px]">
        <p className="lg:text-[#e8ae32] mb-2 font-medium text-lg">
          Tanggapan Untuk Pengaduan Anda
        </p>
        <hr className="border-0 h-1 bg-blue-500 w-24 mb-8" />
        <div className="px-6 py-16 bg-white shadow-md rounded-lg">
          <p className="text-lg text-[#e8ae32] font-medium">
            Tanggapan - 2024-07-11
          </p>
          <hr className="border-1 bg-slate-500 w-full my-6" />
          <WordLimit text={longText} limit={50} />
          <hr className="border-1 bg-slate-500 w-full my-6" />
          <div className="flex justify-end">
            <Button type="button" title="Detail" variant="btn_white_text" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tanggapan;
