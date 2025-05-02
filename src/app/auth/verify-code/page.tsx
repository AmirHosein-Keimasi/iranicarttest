"use client";

import AuthLayout from "@/app/components/AuthLayout";
import FloatingInput from "@/app/components/FloatingInput";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function VerifyPage() {
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const phoneFromUrl = params.get("phone");
    if (phoneFromUrl) setPhone(phoneFromUrl);
  }, []);

  const handleVerify = async () => {
    if (!code || !phone) {
      setError("شماره یا کد وارد نشده است.");
      toast.error(error, {
        position: "bottom-right",
      });

      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, code }),
      });

      const result = await res.json();

      if (result.success && result.token) {
        localStorage.setItem("token", result.token);
        toast.success("ورود با موفقیت انجام شد ", {
          position: "bottom-right",
        });
        router.push("/dashboard");
      }
    } catch (e) {
      setError("خطا در ارتباط با سرور.");
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
        <span className="cursor-pointer">رمز عبور را وارد کنید.</span>
      </div>
      <p className="text-sm text-base-80 mb-2">
        {`کد تایید برای شماره ${phone} ارسال شد`}
      </p>

      <FloatingInput
        label="کد تایید"
        type="text"
        variant="primary"
        className="mt-4"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        onClick={handleVerify}
        disabled={isLoading}
        className="w-full mt-6 bg-primary-100 text-primary-20 text-Base-0 py-2 rounded-lg text-sm hover:bg-primary-80 transition"
      >
        {isLoading ? "در حال بررسی..." : "تایید"}
      </button>

      {error && <p className="text-xs mt-2 text-error-100">{error}</p>}
    </AuthLayout>
  );
}
