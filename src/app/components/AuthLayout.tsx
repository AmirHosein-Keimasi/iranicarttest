import Head from "next/head";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>ورود | ایران اکسچنج</title>
      </Head>
      <div className="flex px-6  justify-center min-h-[80vh] bg-Base-20 pt-30">
        {" "}
        <div className="w-full max-w-sm  bg-Base-0 rounded-xl  text-right rtl">
          <div className="flex justify-center items-center mb-11">
            <div className="w-7 h-7   ">
              <img
                src="/icons/mainicon.svg"
                alt="ایران اکسچنج"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-lg px-1 font-extrabold text-Base-100">
              ایران اکسچنج
            </h1>
          </div>

          {children}
        </div>
      </div>
    </>
  );
}
