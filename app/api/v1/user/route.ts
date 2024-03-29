import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const users: User[] = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const response: User = await request.json();

  const savedUser = await prisma.user.create({
    data: {
      email: response.email,
      name: response.name,
    },
  });

  return NextResponse.json(savedUser);
}
