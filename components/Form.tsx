"use client";

import { useState } from "react";
import Button from "./Button";

function Form() {
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

      <div className="relative z-20 flex flex-1 flex-col xl:max-w-[520px]">
        <p className="lg:text-[#e8ae32] mb-2 font-medium text-lg">
          Ayo! isi pengaduan sesuai yang ingin kalian sampaikan
        </p>
        <hr className="border-0 h-1 bg-blue-500 w-24 mb-8" />
        <form
          onSubmit={handleSubmit}
          className="px-6 py-16 bg-white shadow-md rounded-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="imageInput"
              className="block text-gray-700 font-bold mb-2"
            >
              Pilih Gambar
            </label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="textInput"
              className="block text-gray-700 font-bold mb-2"
            >
              Isi Pengaduan
            </label>
            <textarea
              id="textInput"
              value={textInput}
              onChange={handleTextChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              rows={4}
              placeholder="Masukkan pengaduan Anda di sini"
            />
          </div>
          <Button type="button" title="Isi pengaduan" variant="btn_green2" />
        </form>
      </div>
    </section>
  );
}

export default Form;
