import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { phone } = await request.json();

  const username = "Alitabatabaei";
  const password = "Ali13811381";
  const footer = "تست";

  const response = await fetch("http://smspanel.Trez.ir/AutoSendCode.ashx", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      Username: username,
      Password: password,
      Mobile: phone,
      Footer: footer || '',
    }),
  });

  const text = await response.text();

  if (!isNaN(Number(text)) && Number(text) > 2000) {
    return NextResponse.json({ success: true, message: "کد ارسال شد." });
  } else {
    return NextResponse.json({ success: false, message: "ارسال پیامک ناموفق بود." }, { status: 500 });
  }
}
