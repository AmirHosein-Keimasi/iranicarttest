import { ReactElement } from "react";
import Image from "next/image";

export default function NotFound(): ReactElement {
  return (
    <div className="grid min-h-full place-content-center gap-8">
      <div className="text-center">
        <h1 className="inline-flex items-center text-h1 font-bold leading-h1">
          صفحه‌ی مورد نظر پیدا نشد!
        </h1>
        <p className="mt-4 text-base-60">
          با عرض پوزش، صفحه مورد نظر شما در{" "}
          <span className="text-primary-100"></span> پیدا نشد، لطفاً
          ماشین یا ویژگی مورد نظر خود را جستجو کنید.
        </p>
      </div>

      <div className="flex justify-center">
      </div>

    </div>
  );
}
