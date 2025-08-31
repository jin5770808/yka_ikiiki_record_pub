"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    email: "",
    scale: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("お問い合わせありがとうございます！担当者より2営業日以内にご連絡いたします。");
    setIsSubmitting(false);
    setFormData({ name: "", school: "", email: "", scale: "", message: "" });
  };

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
              一緒に未来を<span className="text-sky-600">作ろう</span>！
            </motion.h1>
            <motion.p 
              className="text-xl text-storm-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              ご質問、デモのご依頼、導入のご相談など、お気軽にお問い合わせください。
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-8 shadow-[0_10px_30px_rgba(2,132,199,.12)]">
                  <h2 className="text-2xl font-bold text-storm-900 mb-6">お問い合わせ</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">お名前 *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="school">学校名 *</Label>
                        <Input
                          id="school"
                          required
                          value={formData.school}
                          onChange={(e) => setFormData({...formData, school: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="scale">導入規模</Label>
                      <Select value={formData.scale} onValueChange={(value) => setFormData({...formData, scale: value})}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">50名以下</SelectItem>
                          <SelectItem value="medium">51-200名</SelectItem>
                          <SelectItem value="large">201-500名</SelectItem>
                          <SelectItem value="xlarge">500名以上</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">ご相談内容</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="mt-1 min-h-[120px]"
                        placeholder="ご質問、デモのご希望、導入時期など、何でもお聞かせください"
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-sky-600 to-sun-600 text-white py-3 rounded-full text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        "送信中..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          送信する
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <Card className="p-6 bg-gradient-to-br from-sky-50 to-white">
                  <h3 className="text-xl font-bold text-storm-900 mb-4">お気軽にご相談ください</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-sky-600" />
                      <span className="text-storm-700">hello@ikiiki-record.jp</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-sky-600" />
                      <span className="text-storm-700">03-XXXX-XXXX</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-sky-600" />
                      <span className="text-storm-700">東京都渋谷区</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-sun-50 to-white">
                  <h3 className="text-xl font-bold text-storm-900 mb-4">導入までの流れ</h3>
                  <ol className="space-y-3 text-storm-700">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-sky-600 text-white rounded-full text-sm flex items-center justify-center">1</span>
                      <span>お問い合わせ・ヒアリング</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-sky-600 text-white rounded-full text-sm flex items-center justify-center">2</span>
                      <span>デモンストレーション</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-sky-600 text-white rounded-full text-sm flex items-center justify-center">3</span>
                      <span>試験導入・フィードバック</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-sky-600 text-white rounded-full text-sm flex items-center justify-center">4</span>
                      <span>本格運用開始</span>
                    </li>
                  </ol>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}