import AuthLayout from "@/app/components/AuthLayout";
import PasswordFieldClient from "@/app/components/PasswordFieldClient";
import Link from "next/link";

export default function page() {
  return (
    <AuthLayout>
      <div className="flex justify-start gap-1 text-sm font-semibold mb-6 text-Base-100">
        <span className=" cursor-pointer">کد تایید را وارد کنید.</span>
      </div>

      <PasswordFieldClient className="mb-6" />
      <Link href={""} className="text-primary-100 text-sm mb-6 block">
        ورود با کد یکبارمصرف
      </Link>
      <Link href={""} className="text-primary-100 text-sm block">
        فراموشی رمز عبور
      </Link>
      <button className="w-full mt-6 bg-primary-100 text-primary-20 text-Base-0 py-2 rounded-lg text-sm hover:bg-primary-80 transition">
        ورود
      </button>
    </AuthLayout>
  );
}


