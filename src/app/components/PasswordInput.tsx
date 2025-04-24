"use client";
import MingcuteEye2Line from "@/icons/MingcuteEye2Line";
import MingcuteEyeCloseLine from "@/icons/MingcuteEyeCloseLine";
import React, { InputHTMLAttributes, forwardRef, useState } from "react";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  variant?: "primary" | "secondary";
  showStrengthMeter?: boolean;
  strengthLevels?: {
    weak: string;
    medium: string;
    strong: string;
  };
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      label,
      error,
      variant = "primary",
      className = "",
      showStrengthMeter = false,
      strengthLevels = {
        weak: "ضعیف",
        medium: "متوسط",
        strong: "قوی",
      },
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    // کلاس‌های پایه
    const baseClasses = `block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm border appearance-none focus:outline-none focus:ring-0 peer ${className}`;

    // کلاس‌های واریانت
    const variantClasses = {
      primary: "text-base-100 border-base-60 focus:border-primary-100",
      secondary: "text-base-100 border-base-60 focus:border-base-80",
    };

    // کلاس‌های لیبل
    const labelVariantClasses = {
      primary: "peer-focus:text-primary-100",
      secondary: "peer-focus:text-base-80",
    };

    // کلاس‌های خطا
    const errorClasses = "border-error-100 focus:border-error-80";

    // محاسبه قدرت پسورد
    const calculateStrength = (pass: string) => {
      if (!pass) return 0;
      let strength = 0;
      if (pass.length > 5) strength += 1;
      if (pass.length > 8) strength += 1;
      if (/[A-Z]/.test(pass)) strength += 1;
      if (/[0-9]/.test(pass)) strength += 1;
      if (/[^A-Za-z0-9]/.test(pass)) strength += 1;
      return Math.min(strength, 5);
    };

    const strength =
      showStrengthMeter && typeof props.value === "string"
        ? calculateStrength(props.value)
        : 0;

    return (
      <div className="relative">
        <div className="relative">
          {/* فیلد ورودی پسورد */}
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={`${baseClasses} ${variantClasses[variant]} ${
              error ? errorClasses : ""
            } pr-10`}
            placeholder=" "
            value={props.value}
            onChange={props.onChange}
            {...props}
          />

          {/* دکمه نمایش/مخفی کردن پسورد */}
          <button
            type="button"
            className="absolute inset-y-0 left-0 flex items-center pl-3 text-base-60 hover:text-base-100 transition-colors"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "مخفی کردن پسورد" : "نمایش پسورد"}
          >
            {showPassword ? (
              <MingcuteEyeCloseLine className="h-5 w-5" />
            ) : (
              <MingcuteEye2Line className="h-5 w-5" />
            )}
          </button>

          {/* لیبل شناور */}
          <label
            className={`absolute text-sm text-base-60 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 ${labelVariantClasses[variant]} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
          >
            {label}
          </label>
        </div>

        {/* نشانگر قدرت پسورد */}
        {showStrengthMeter && props.value && (
          <div className="my-4">
            <div className="flex gap-1 h-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-full ${
                    i < strength
                      ? i < 2
                        ? "bg-error-100"
                        : i < 4
                        ? "bg-warning-100"
                        : "bg-success-100"
                      : "bg-base-20"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs mt-1 text-base-60">
              {strength < 2
                ? strengthLevels.weak
                : strength < 4
                ? strengthLevels.medium
                : strengthLevels.strong}
            </p>
          </div>
        )}

        {/* نمایش خطا */}
        {error && <p className="mt-1 text-xs text-error-100">{error}</p>}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
