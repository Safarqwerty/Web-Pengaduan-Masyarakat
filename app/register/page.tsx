"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";

interface FormData {
  nama: string;
  username: string;
  nik: number | string;
  phone: number | string;
  password: string;
}

function Register() {
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    username: "",
    nik: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.nama) {
      newErrors.nama = "Nama wajib diisi";
    }
    if (!formData.username) {
      newErrors.username = "Username wajib diisi";
    }
    if (!formData.nik) {
      newErrors.nik = "NIK wajib diisi";
    } else if (formData.nik.toString().length !== 16) {
      newErrors.nik = "NIK terdiri dari 16 digit angka";
    }
    if (!formData.phone) {
      newErrors.phone = "Nomor wajib diisi";
    } else if (formData.phone.toString().length > 13) {
      newErrors.phone = "Nomor maksimal 13 digit";
    }
    if (!formData.password) {
      newErrors.password = "Password wajib diisi";
    } else if (
      formData.password.length < 8 ||
      !/\d/.test(formData.password) ||
      !/[a-zA-Z]/.test(formData.password)
    ) {
      newErrors.password =
        "Password harus minimal 8 karakter dan mengandung huruf dan angka";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "nik" || name === "phone" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  const getLabel = (field: string) => {
    switch (field) {
      case "nama":
        return "Nama";
      case "nik":
        return "NIK";
      case "phone":
        return "Nomor";
      default:
        return field.charAt(0).toUpperCase() + field.slice(1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white p-8 shadow-md rounded-lg border-t-4 border-[#E1AD3F]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {(
          ["nama", "username", "nik", "phone", "password"] as Array<
            keyof FormData
          >
        ).map((field) => (
          <div key={field} className="mb-4">
            <label
              htmlFor={field}
              className="block text-gray-700 font-bold mb-2"
            >
              {getLabel(field)}
            </label>
            <input
              name={field}
              type={
                field === "password"
                  ? "password"
                  : field === "nik" || field === "phone"
                  ? "number"
                  : "text"
              }
              id={field}
              value={formData[field] === 0 ? "" : formData[field]}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                errors[field] ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200`}
              placeholder={`Masukkan ${getLabel(field)}`}
            />
            {errors[field] && (
              <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
            )}
          </div>
        ))}
        <Button type="submit" title="Daftar" variant="btn_green2" />
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
