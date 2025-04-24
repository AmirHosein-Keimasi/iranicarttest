import Head from "next/head";
import { ReactNode } from "react";
import LogoComponent from "../logoComponent";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>ورود | ایران اکسچنج</title>
      </Head>
      <div className="flex px-6  justify-center min-h-[80vh] bg-Base-20 pt-30">
        {" "}
        <div className="w-full max-w-sm   rounded-xl  text-right rtl">
          <div className="flex justify-center items-center mb-11">
            <LogoComponent/>
          </div>

          {children}
        </div>
      </div>
    </>
  );
}
