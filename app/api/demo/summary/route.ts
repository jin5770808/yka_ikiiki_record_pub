import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { mood, tags } = await request.json();
  
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock AI response based on input
  const weather = mood > 80 ? "energetic" : mood > 60 ? "sunny" : mood > 40 ? "cloudy" : "stormy";
  
  const quotes = {
    energetic: "君の情熱が、クラスを照らす",
    sunny: "今日の笑顔が、明日の力になる", 
    cloudy: "雲の隙間から、光が差し込む",
    stormy: "雨の日も、成長の種を蒔いている"
  };
  
  const analysis = {
    energetic: "高い意欲と集中力が発揮されています",
    sunny: "積極的な学習姿勢が表れています",
    cloudy: "安定した取り組みが継続されています", 
    stormy: "困難に向き合う姿勢が見えます"
  };

  return NextResponse.json({
    weather,
    quote: quotes[weather as keyof typeof quotes],
    analysis: analysis[weather as keyof typeof analysis],
    confidence: Math.floor(Math.random() * 20) + 80,
    timestamp: new Date().toISOString()
  });
}