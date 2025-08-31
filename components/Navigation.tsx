"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Cloud className="w-8 h-8 text-sky-600" />
            <span className="font-bold text-xl text-storm-900">イキイキレコード</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/vision" className="text-storm-700 hover:text-sky-600 transition-colors">想い</Link>
            <Link href="/experience" className="text-storm-700 hover:text-sky-600 transition-colors">体験</Link>
            <Link href="/features" className="text-storm-700 hover:text-sky-600 transition-colors">機能</Link>
            <Link href="/pricing" className="text-storm-700 hover:text-sky-600 transition-colors">価格</Link>
            <Link href="/stories" className="text-storm-700 hover:text-sky-600 transition-colors">物語</Link>
            <Link href="/faq" className="text-storm-700 hover:text-sky-600 transition-colors">FAQ</Link>
          </div>

          <Button 
            asChild
            className="bg-gradient-to-r from-sky-600 to-sun-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
          >
            <Link href="/contact">一緒に未来を作ろうぞ</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}