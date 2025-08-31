"use client";

import Navigation from "@/components/Navigation";
import OneMinuteInputDemo from "@/components/OneMinuteInputDemo";
import ExplainableAI from "@/components/ExplainableAI";
import CalloutCTA from "@/components/CalloutCTA";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-sky-100 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-storm-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              学びの天気を<span className="text-sky-600">体験</span>しよう
            </motion.h1>
            <motion.p 
              className="text-xl text-storm-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              実際の入力画面を使って、どのように学習記録が天気図に変わるかを体験してください。
            </motion.p>
          </div>
        </section>

        <OneMinuteInputDemo />
        <ExplainableAI />
        <CalloutCTA />
      </main>
    </div>
  );
}