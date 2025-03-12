// app/api/patients/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

interface PatientData {
  name: string;
  birthDate: string;
  email: string;
}

export async function POST(request: Request) {
  const { name, birthDate, email } = (await request.json()) as PatientData;
  try {
    const patient = await prisma.patient.create({
      data: {
        name,
        birthDate: new Date(birthDate),
        email,
      },
    });
    return NextResponse.json(patient, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: `Error adding patient: ${(error as Error).message}` }, { status: 500 });
  }
}