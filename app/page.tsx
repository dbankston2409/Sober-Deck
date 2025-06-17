import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import PassBuilderFlowSection from "@/components/sections/PassBuilderFlowSection";
import MarketSection from "@/components/sections/MarketSection";
import NoInsuranceSection from "@/components/sections/NoInsuranceSection";
import InsuranceSection from "@/components/sections/InsuranceSection";
import ImpactTierSection from "@/components/sections/ImpactTierSection";
import StandardTierSection from "@/components/sections/StandardTierSection";
import ClinicalTierSection from "@/components/sections/ClinicalTierSection";
import RevenueBreakdownSection from "@/components/sections/RevenueBreakdownSection";
import ExitMultipleSection from "@/components/sections/ExitMultipleSection";
import ExitValuationSection from "@/components/sections/ExitValuationSection";
import DualEntitySection from "@/components/sections/DualEntitySection";
import GrantsSection from "@/components/sections/GrantsSection";
import OpportunitySection from "@/components/sections/OpportunitySection";
import WhyNowSection from "@/components/sections/WhyNowSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PassBuilderFlowSection />
      <MarketSection />
      <NoInsuranceSection />
      <InsuranceSection />
      <ImpactTierSection />
      <StandardTierSection />
      <ClinicalTierSection />
      <RevenueBreakdownSection />
      <ExitMultipleSection />
      <ExitValuationSection />
      <DualEntitySection />
      <GrantsSection />
      <WhyNowSection />
      <FooterSection />
    </main>
  );
}