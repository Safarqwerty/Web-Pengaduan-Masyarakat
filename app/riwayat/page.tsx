import Button from "@/components/Button";
import WordLimit from "@/components/WordLimit";

function Riwayat() {
  const longText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, optio?
      Sunt in possimus rerum explicabo modi. Temporibus pariatur
      voluptatum earum at, molestias ab repellat ipsum doloribus
      laudantium consequatur aliquid voluptas quasi blanditiis rem illum
      excepturi dicta vitae. Sequi distinctio molestiae unde repudiandae
      labore eaque nam dicta ipsa nihil natus. Culpa repudiandae vel
      impedit cupiditate. Laborum libero odit quae dolorum vero corrupti
      consequatur tempore explicabo itaque quisquam et omnis animi odio
      maiores, molestiae molestias aspernatur voluptates ut consequuntur
      eos voluptas provident asperiores qui. Labore in beatae iusto
      delectus fugiat, ad cumque itaque doloremque, accusamus vero animi
      sequi quo nihil. Suscipit, aliquam.`;

  return (
    <section className="max-container padding-container h-screen flex flex-col gap-20 md:gap-28 lg:py-10 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:max-w-[600px]">
        <p className="lg:text-[#e8ae32] mb-2 font-semibold text-lg">
          Riwayat Pengaduan Anda
        </p>
        <hr className="border-0 h-1 bg-blue-500 w-24 mb-8" />
        <div className="px-6 py-10 bg-white shadow-md rounded-lg">
          <div className="flex items-center mb-4">
            <div className="flex-1">
              <p className="text-lg text-[#e8ae32] font-medium">
                Tanggapan - 2024-07-11
              </p>
              <hr className="border-1 bg-slate-500 w-full my-6" />
              <div className="flex">
                <img
                  src="pattern.png"
                  alt="Pattern"
                  className="w-28 h-28 rounded-md object-cover mr-4"
                />
                <div className="flex-1">
                  <WordLimit text={longText} limit={50} />
                </div>
              </div>
              <hr className="border-1 bg-slate-500 w-full my-6" />
              <div className="flex justify-end">
                <Button
                  type="button"
                  title="Lihat Tanggapan"
                  variant="btn_white_text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Riwayat;
