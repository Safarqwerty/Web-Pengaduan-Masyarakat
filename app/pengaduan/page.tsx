"use client";

import Button from "@/components/Button";
import { useState } from "react";

function Pengaduan() {
  const [textInput, setTextInput] = useState("");
  const [imageInput, setImageInput] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setImageInput(selectedImage);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Text input:", textInput);
    console.log("Image input:", imageInput);
  };

  return (
    <section className="max-container padding-container h-screen flex flex-col gap-20 py-10 mb-24 md:gap-28 lg:py-10 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:max-w-[520px]">
        <p className="lg:text-[#e8ae32] mb-2 font-medium text-lg">
          Ayo! Isi Sampaikan Pengaduan Kalian
        </p>
        <hr className="border-0 h-1 bg-blue-500 w-24 mb-8" />
        <form
          onSubmit={handleSubmit}
          className="px-6 py-10 bg-white shadow-md rounded-lg"
        >
          <div className="mb-4">
            {imagePreview && (
              <div className="mb-4">
                <p className="block text-gray-700 font-bold mb-2">
                  Preview Gambar
                </p>
                <img
                  src={imagePreview}
                  alt="Preview Gambar"
                  className="w-full max-w-52 h-52 rounded-md"
                />
              </div>
            )}
            {!imagePreview && (
              <div className="mb-4">
                <p className="block text-gray-700 font-bold mb-2">
                  Preview Gambar
                </p>
                <div className="h-52 w-52 border border-gray-300 rounded-md flex items-center justify-center">
                  <span className="text-gray-400">
                    Pilih Gambar dulu
                  </span>
                </div>
              </div>
            )}
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
          <Button type="submit" title="Isi pengaduan" variant="btn_green2" />
        </form>
      </div>
    </section>
  );
}

export default Pengaduan;
