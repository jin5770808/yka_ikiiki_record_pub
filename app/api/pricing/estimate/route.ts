import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { teachers, students, plan } = await request.json();
  
  const basePrices = {
    light: 500,
    standard: 3000, 
    advanced: 20000
  };
  
  const teacherMultiplier = plan === "light" ? 1 : Math.ceil(teachers / 10);
  const basePrice = basePrices[plan as keyof typeof basePrices] || basePrices.standard;
  const monthlyPrice = basePrice * teacherMultiplier;
  const annualPrice = monthlyPrice * 12 * 0.9; // 10% annual discount
  
  return NextResponse.json({
    monthly: monthlyPrice,
    annual: Math.floor(annualPrice),
    savings: Math.floor(monthlyPrice * 12 - annualPrice),
    breakdown: {
      basePrice,
      teacherMultiplier,
      studentCount: students
    }
  });
}