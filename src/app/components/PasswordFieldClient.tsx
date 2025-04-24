
"use client";
import PasswordInput from "./PasswordInput";
import { useState } from "react";

export default function PasswordFieldClient({
  className = "",
  showStrengthMeter = true, 
}: {
  className?: string;
  showStrengthMeter?: boolean; 
}) {
  const [password, setPassword] = useState("");

  return (
    <PasswordInput
      className={className}
      label="کد تایید"
      variant="primary"
      showStrengthMeter={showStrengthMeter} 
      strengthLevels={{
        weak: "خیلی ضعیف",
        medium: "متوسط",
        strong: "خیلی قوی",
      }}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  );
}
