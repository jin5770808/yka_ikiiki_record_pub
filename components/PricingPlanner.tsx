"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Check, Calculator } from "lucide-react";
import { copy } from "@/lib/copy";

const plans = [
  {
    id: "light",
    name: "Light",
    basePrice: copy.pricing.light.price,
    note: copy.pricing.light.note,
    features: ["基本記録機能", "週次レポート", "メール通知"]
  },
  {
    id: "standard", 
    name: "Standard",
    basePrice: copy.pricing.standard.price,
    note: copy.pricing.standard.note,
    features: ["全機能利用", "リアルタイム分析", "保護者連携", "カスタムタグ"]
  },
  {
    id: "advanced",
    name: "Advanced", 
    basePrice: copy.pricing.advanced.price,
    note: copy.pricing.advanced.note,
    features: ["企業機能", "API連携無制限", "専用サポート", "カスタム開発"]
  }
];

export default function PricingPlanner() {
  const [teachers, setTeachers] = useState(5);
  const [students, setStudents] = useState(150);
  const [selectedPlan, setSelectedPlan] = useState("standard");

  const calculatePrice = (planId: string) => {
    const plan = plans.find(p => p.id === planId);
    if (!plan) return 0;
    
    const teacherMultiplier = planId === "light" ? 1 : Math.ceil(teachers / 10);
    return plan.basePrice * teacherMultiplier;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-storm-900 mb-4">
            あなたの学校に最適なプランを
          </h2>
          <p className="text-lg text-storm-600">
            学校規模に応じて、最適な料金プランをご提案します
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 lg:col-span-1">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-storm-900 flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-sky-600" />
                規模を入力
              </h3>
              
              <div>
                <Label htmlFor="teachers">教員数</Label>
                <Input
                  id="teachers"
                  type="number"
                  value={teachers}
                  onChange={(e) => setTeachers(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="students">生徒数</Label>
                <Input
                  id="students"
                  type="number" 
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="mt-1"
                />
              </div>

              <div className="pt-4 border-t border-sky-200">
                <p className="text-sm text-storm-600">
                  入力いただいた情報をもとに、最適なプランを右側に表示しています
                </p>
              </div>
            </div>
          </Card>

          <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const isRecommended = plan.id === selectedPlan;
              const price = calculatePrice(plan.id);
              
              return (
                <motion.div
                  key={plan.id}
                  whileHover={{ scale: 1.02 }}
                  className={`relative cursor-pointer`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <Card className={`p-6 h-full transition-all duration-300 ${
                    isRecommended 
                      ? "border-sky-600 shadow-[0_10px_30px_rgba(2,132,199,.2)]" 
                      : "hover:border-sky-300"
                  }`}>
                    {isRecommended && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sky-600">
                        おすすめ
                      </Badge>
                    )}
                    
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-storm-900">{plan.name}</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-sky-600">¥{price.toLocaleString()}</span>
                        <span className="text-storm-500">/月</span>
                      </div>
                      <p className="text-sm text-storm-600 mt-1">{plan.note}</p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-storm-700">
                          <Check className="w-4 h-4 text-leaf-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full rounded-full ${
                        isRecommended 
                          ? "bg-sky-600 hover:bg-sky-700" 
                          : "bg-storm-100 text-storm-700 hover:bg-storm-200"
                      }`}
                    >
                      詳細を見る
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}