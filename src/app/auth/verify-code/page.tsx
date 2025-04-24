// page.tsx
import AuthLayout from "@/app/components/AuthLayout";
import PasswordFieldClient from "@/app/components/PasswordFieldClient";
import Link from "next/link";

export default function Page() {
  return (
    <AuthLayout>
      <div className="flex justify-start gap-1 text-sm font-semibold mb-6 text-Base-100">
        <span className="cursor-pointer">رمز عبور را وارد کنید.</span>
      </div>
      <p className="text-sm text-base-80 mb-2">
        {`کد تایید برای شماره ${"۰۹۳۳۳۳۳۳۳۳۳"} ارسال شد`}
      </p>
      {/* ارسال showStrengthMeter={false} به PasswordFieldClient */}
      <PasswordFieldClient className="mb-6" showStrengthMeter={false} />
      <Link href={""} className="text-primary-100 text-sm ">
        میخواهم با رمز عبور وارد شوم.
      </Link>
      <button className="w-full mt-6 bg-primary-100 text-primary-20 text-Base-0 py-2 rounded-lg text-sm hover:bg-primary-80 transition">
        ورود
      </button>
    </AuthLayout>
  );
}
