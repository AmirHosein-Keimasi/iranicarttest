"use client";

import AuthLayout from "@/app/components/AuthLayout";
import FloatingInput from "@/app/components/FloatingInput";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/app/hooks/useLoginMutation";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const { mutate, isLoading, error, data } = useLoginMutation();
  const router = useRouter();

  const handleLogin = () => {
    const isValid = /^09\d{9}$/.test(phone);
    if (!isValid) {
      alert("شماره موبایل معتبر نیست.");
      return;
    }

    mutate(phone, {
      onSuccess: (data) => {
        console.log("Login Success:", data);
        // مثلا ذخیره در localStorage یا رفتن به صفحه بعد:
        // localStorage.setItem("token", data.token || "");
        router.push("/verify-code");
      },
      onError: (err) => {
        console.error("Login Error:", err);
      },
    });
  };

  return (
    <AuthLayout>
      <div className="flex justify-start gap-1 text-sm font-semibold mb-6 text-Base-100">
        <span className="cursor-pointer">ثبت‌نام</span>
        <span className="">|</span>
        <span className="font-bold cursor-pointer">ورود</span>
      </div>

      <p className="text-sm text-base-80 mb-2">سلام!</p>
      <p className="text-sm text-base-80 mb-2">لطفاً شماره موبایل خود را وارد کنید.</p>

      <FloatingInput
        label="شماره موبایل"
        type="tel"
        variant="primary"
        className="mt-4"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        onClick={handleLogin}
        disabled={isLoading}
        className="w-full mt-6 bg-primary-100 text-primary-20 text-Base-0 py-2 rounded-lg text-sm hover:bg-primary-80 transition"
      >
        {isLoading ? "در حال ارسال..." : "ورود"}
      </button>

      {error && <p className="text-xs mt-2 text-error-100">خطایی رخ داد. لطفاً دوباره تلاش کنید.</p>}
      {data?.message && <p className="text-xs mt-2 text-success-100">{data.message}</p>}
    </AuthLayout>
  );
}
