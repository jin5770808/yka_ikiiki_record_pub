"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import PricingPlanner from "@/components/PricingPlanner";
import CalloutCTA from "@/components/CalloutCTA";

export default function PricingPage() {
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
              学校規模に合わせた<span className="text-sky-600">適正価格</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-storm-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              小さな学校から大きな学校まで。みなさんの状況に応じた最適なプランをご用意。
            </motion.p>
          </div>
        </section>

        <PricingPlanner />
        <CalloutCTA />
      </main>
    </div>
  );
}