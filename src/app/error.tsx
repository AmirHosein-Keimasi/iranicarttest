"use client";

import { ReactElement } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props): ReactElement {
  return (
    <div className="grid grid-cols-[auto,auto] grid-rows-[auto,auto,auto] place-content-center gap-x-20 gap-y-12 mb-12 min-h-full">
      <div className="row-[1]">
        <div className="text-[var(--font-size-h3)] font-bold">
          مشکل پیش آمده!
        </div>
        <h1 className="text-[var(--font-size-h1)] mb-8">
          یک خطای غیرمنتظره رخ داده است.
        </h1>
        <p>
          با عرض پوزش، لطفاً با تیم پشتیبانی سایت{" "}
          <span className="font-semibold"></span> تماس بگیرید.
        </p>
      </div>
      <div className="row-[1]">
        {/* <Image src={errorImage} alt="" width={250} className="object-contain" /> */}
      </div>
      <div className="col-span-2 row-[2] mt-4">
        <button
          onClick={reset}
          className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)] px-8 py-2 rounded-[var(--radius-md)] font-black text-base cursor-pointer"
        >
          تلاش مجدد
        </button>
      </div>
      <div className="col-span-2 row-[3] w-full min-w-full">
        <details>
          <summary className="cursor-pointer">لاگ خطا</summary>
          <pre dir="ltr" className="overflow-auto max-h-48">
            {error.stack}
          </pre>
        </details>
      </div>
    </div>
  );
}
