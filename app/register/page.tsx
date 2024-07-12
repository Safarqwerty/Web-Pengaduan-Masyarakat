"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [nik, setNik] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleNikChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNik(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("NIK:", nik);
    console.log("Phone:", phone);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white p-8 shadow-md rounded-lg border-t-4 border-[#E1AD3F]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nama
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Masukkan nama Anda"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Masukkan username Anda"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nik" className="block text-gray-700 font-bold mb-2">
            NIK
          </label>
          <input
            type="number"
            id="nik"
            value={nik}
            onChange={handleNikChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Masukkan NIK Anda"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Nomor HP
          </label>
          <input
            type="number"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Masukkan nomor HP Anda"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Masukkan password Anda"
          />
        </div>
        <Button type="button" title="Daftar" variant="btn_green2" />
        <hr className="border-1 bg-slate-500 w-full my-6" />
        <p className="mt-4 text-center text-sm text-gray-600">
          {"Sudah punya akun? "}
          <Link href="/login" className="font-semibold text-[#E1AD3F]">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
