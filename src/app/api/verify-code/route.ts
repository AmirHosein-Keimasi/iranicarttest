import { NextResponse } from "next/server";

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
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, message: "کد وارد شده صحیح نیست." }, { status: 400 });
  }
}
