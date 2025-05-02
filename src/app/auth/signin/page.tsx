"use client";

import AuthLayout from "@/app/components/AuthLayout";
import FloatingInput from "@/app/components/FloatingInput";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleLogin = async () => {
    const isValid = /^09\d{9}$/.test(phone);
    if (!isValid) {
      toast.error("شماره موبایل معتبر نیست.", {
        position: "bottom-right",
      });
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const result = await res.json();
      setData(result);

      if (result.success) {
        toast.success("کد تایید با موفقیت ارسال شد.", {
          position: "bottom-right",
        });
        router.push(`/auth/verify-code?phone=${encodeURIComponent(phone)}`);
      } else {
        setError(result.message || "خطایی رخ داد.");
        toast.error(error, {
          position: "bottom-right",
        });
      }
    } catch (e) {
      setError("خطا در برقراری ارتباط با سرور.");
      toast.error(error, {
        position: "bottom-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="flex justify-start gap-1 text-sm font-semibold mb-6 text-Base-100">
        <span className="">ثبت‌نام</span>
        <span className="">|</span>
        <span className="font-bold ">ورود</span>
      </div>

      <p className="text-sm text-base-80 mb-2">سلام!</p>
      <p className="text-sm text-base-80 mb-2">
        لطفاً شماره موبایل خود را وارد کنید.
      </p>

      <FloatingInput
        label="شماره موبایل"
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

      {error && (
        <p className="text-xs mt-2 text-error-100">
          خطایی رخ داد. لطفاً دوباره تلاش کنید.
        </p>
      )}
      {/* {data?.message && (
        <p className="text-xs mt-2 text-success-100">{data.message}</p>
      )} */}
    </AuthLayout>
  );
}
