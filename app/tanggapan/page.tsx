"use client";

import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import WordLimit from "@/components/WordLimit";
import { useState } from "react";

function Tanggapan() {
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

  const [textInput, setTextInput] = useState("");
  const [imageInput, setImageInput] = useState<File | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageInput(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Text input:", textInput);
    console.log("Image input:", imageInput);
  };

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col h-screen xl:max-w-[520px]">
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
          <Button
            type="button"
            title="Detail"
            variant="btn_white_text"
          />
        </div>
      </div>
    </section>
  );
}

export default Tanggapan;
