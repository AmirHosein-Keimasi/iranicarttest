import AuthLayout from "@/app/components/AuthLayout";
import FloatingInput from "@/app/components/FloatingInput";
import Head from "next/head";

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="flex justify-start gap-1 text-sm font-semibold mb-6 text-Base-100">
        <span className=" cursor-pointer">ثبت‌نام</span>
        <span className="">|</span>
        <span className=" font-bold cursor-pointer">ورود</span>
      </div>
      <p className="text-sm text-base-80 mb-2">سلام!</p>
      <p className="text-sm text-base-80 mb-2">
        لطفاً شماره موبایل خود را وارد کنید.
      </p>

      <FloatingInput
        label="شماره موبایل"
        type="tel"
        variant="primary"
        className="mt-4"
      />

      <button className="w-full mt-6 bg-primary-100 text-primary-20 text-Base-0 py-2 rounded-lg text-sm hover:bg-primary-80 transition">
        ورود
      </button>
    </AuthLayout>
  );
}
