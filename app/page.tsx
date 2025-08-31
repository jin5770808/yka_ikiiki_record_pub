import Navigation from "@/components/Navigation";
import HeroWeather from "@/components/HeroWeather";
import ToggleAudience from "@/components/ToggleAudience";
import OneMinuteInputDemo from "@/components/OneMinuteInputDemo";
import ExplainableAI from "@/components/ExplainableAI";
import PricingPlanner from "@/components/PricingPlanner";
import CalloutCTA from "@/components/CalloutCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HeroWeather />
        <ToggleAudience />
        <OneMinuteInputDemo />
        <ExplainableAI />
        <PricingPlanner />
        <CalloutCTA />
      </main>
    </div>
  );
}