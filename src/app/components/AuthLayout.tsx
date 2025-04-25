import Head from "next/head";
import { ReactNode } from "react";
import LogoComponent from "../logoComponent";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>ورود | ایران اکسچنج</title>
      </Head>
      <div className="flex px-6 justify-center min-h-[80vh] items-center ">
        {/* Background برای دسکتاپ */}
        <div className="hidden md:block fixed inset-0  -z-10"></div>
        
        {/* کارت اصلی با پدینگ بیشتر */}
        <div className="w-full max-w-sm md:w-[480px] md:min-h-[430px]  md:bg-base-20/50 rounded-xl text-right rtl relative ">
          {/* لایه اضافی برای پدینگ داخلی */}
          <div className="p-6 md:p-8"> {/* افزایش پدینگ در دسکتاپ */}
            <div className="flex justify-center items-center mb-8 md:mb-12"> {/* فاصله بیشتر */}
              <LogoComponent />
            </div>
            
            {children}
          </div>
        </div>
      </div>
    </>
  );
}