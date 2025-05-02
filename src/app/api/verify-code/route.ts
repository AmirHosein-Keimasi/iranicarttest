import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";


export async function POST(request: Request) {
  const { phone, code } = await request.json();

  const username = "Alitabatabaei";
  const password = "Ali13811381";

  const response = await fetch("http://smspanel.Trez.ir/CheckSendCode.ashx", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      Username: username,
      Password: password,
      Mobile: phone,
      Code: code,
    }),
  });

  const text = await response.text();

  if (text.toLowerCase().includes("true")) {
    const token = jwt.sign({ phone }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    const cookie = await cookies(); // منتظر می‌مونیم تا کوکی‌ها برگردن
    cookie.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 روز
    });

    return NextResponse.json({
      success: true,
      token: token // ارسال توکن در پاسخ
    });
      } else {
    return NextResponse.json(
      { success: false, message: "کد وارد شده صحیح نیست." },
      { status: 400 }
    );
  }
}