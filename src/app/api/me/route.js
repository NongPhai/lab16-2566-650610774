import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Norapat Chindasoon",
    studentId: "650610774",
  });
};
