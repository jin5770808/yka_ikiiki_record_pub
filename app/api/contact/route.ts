import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const contactData = await request.json();
  
  // Simulate form processing
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In production, this would send to Slack webhook or save to database
  console.log('Contact form submission:', contactData);
  
  return NextResponse.json({
    success: true,
    message: "お問い合わせを承りました。2営業日以内にご連絡いたします。"
  });
}