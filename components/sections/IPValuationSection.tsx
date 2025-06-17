"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, Handshake, FileText, Building2,
  DollarSign, Shield, Target, Award, Sparkles
} from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const exitMultipleFactors = [
  { factor: "Barriers to entry", impact: "Competitors can't copy your core tech or delivery model" },
  { factor: "Exclusive ownership", impact: "You own the method of delivery (e.g., Wallet Pass behavior badges)" },
  { factor: "Licensing potential", impact: "Others may pay to use your patent-protected systems" },
  { factor: "Legal moat", impact: "Reduces risk of commoditization or VC-funded clone apps" }
];

const strategyBuyers = [
  { buyer: "Optum, Teladoc, Headspace, etc.", reason: "Acquire patents to block competitors, integrate into care stack, or avoid legal risk from clones" },
  { buyer: "Private Equity", reason: "Values IP in NPV models to project stable, defensible growth" },
  { buyer: "Payers/Gov Contracts", reason: "Prefer proprietary systems for long-term deployment at scale" }
];

const licensingStrategies = [
  { strategy: "White-label license", example: "Sell your badge/geofence engine to state agencies, rehab chains, or EHR providers" },
  { strategy: "Per-seat logic license", example: "License your relapse scoring system or badge logic to other platforms for $x/user" },
  { strategy: "Affiliate / compliance partnerships", example: "Courts, Medicaid MCOs, reentry orgs can pay for secure verification via Wallet pass tech" }
];

const governmentPrograms = [
  "SAMHSA behavioral health innovation grants",
  "DOJ and state-level justice diversion funds",
  "Medicaid Section 1115 or 1915 waivers",
  "NIH digital health pilots for addiction and recovery"
];

const ipBenefits = [
  { icon: "🚀", label: "Higher valuation", benefit: "Moves us into the 12–20× exit category" },
  { icon: "💸", label: "New revenue", benefit: "License the Wallet Pass system to courts, clinics, ministries" },
  { icon: "🛡️", label: "Strong moat", benefit: "Competitors can't replicate our passive geofence + badge logic" },
  { icon: "🎯", label: "Acquisition target", benefit: "Attractive to health giants, EHR systems, and public-sector integrators" },
  { icon: "🧾", label: "Grant magnet", benefit: "IP-backed systems are prioritized for funding and pilots" }
];

export default function IPValuationSection() {
  return (
    <section className="section-height section-padding flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h2 
            className="text-4xl lg:text-5xl font-bold flex items-center justify-center gap-3"
            style={{ fontFamily: fonts.heading }}
          >
            <span className="text-4xl">💰</span>
            What IP Means for Valuation
          </h2>
        </motion.div>

        {/* 1. Higher Exit Multiples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-8 space-y-6"
        >
          <h3 
            className="text-2xl font-bold flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <TrendingUp className="w-6 h-6" style={{ color: colors.progressGreen }} />
            📈 1. Higher Exit Multiples
          </h3>
          
          <p className="text-lg flex items-start gap-2">
            <span className="text-2xl">💡</span>
            <span>Investors and acquirers pay higher ARR multiples for IP-backed companies because:</span>
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Factor</th>
                  <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Impact</th>
                </tr>
              </thead>
              <tbody>
                {exitMultipleFactors.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <td className="p-4 font-semibold">{item.factor}</td>
                    <td className="p-4 text-sm" style={{ color: colors.slateGray }}>{item.impact}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-4 p-4 rounded-lg"
            style={{ backgroundColor: `${colors.progressGreen}22` }}
          >
            <p className="flex items-start gap-2">
              <span className="text-2xl">💥</span>
              <span className="text-sm">
                A strong IP portfolio can bump you from a 6× to a 12–20× ARR multiple, especially in clinical or payer-facing deals.
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* 2. Valuable in M&A */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-8 space-y-6"
        >
          <h3 
            className="text-2xl font-bold flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <Handshake className="w-6 h-6" style={{ color: colors.recoveryBlue }} />
            🤝 2. Valuable in M&A and Strategic Buyouts
          </h3>
          
          <div className="space-y-4">
            {strategyBuyers.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid md:grid-cols-3 gap-4 p-4 rounded-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              >
                <div className="font-semibold">{item.buyer}</div>
                <div className="md:col-span-2 text-sm" style={{ color: colors.slateGray }}>
                  {item.reason}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3. IP Licensing Revenue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-8 space-y-6"
        >
          <h3 
            className="text-2xl font-bold flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <FileText className="w-6 h-6" style={{ color: colors.softLavender }} />
            📜 3. IP Licensing Revenue
          </h3>
          
          <p className="text-lg flex items-start gap-2">
            <span className="text-2xl">🧠</span>
            <span>Your IP can generate revenue directly, beyond product sales.</span>
          </p>
          
          <div className="space-y-3">
            {licensingStrategies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-l-4 pl-4"
                style={{ borderColor: colors.softLavender }}
              >
                <div className="font-semibold mb-1">{item.strategy}</div>
                <div className="text-sm" style={{ color: colors.slateGray }}>{item.example}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. Grant & Government Leverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-8 space-y-6"
        >
          <h3 
            className="text-2xl font-bold flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <Building2 className="w-6 h-6" style={{ color: colors.alertOrange }} />
            🏛️ 4. Grant & Government Leverage
          </h3>
          
          <p className="text-lg">
            Federal agencies favor IP-backed platforms when awarding grants or pilot contracts:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {governmentPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                <Award className="w-5 h-5 flex-shrink-0" style={{ color: colors.alertOrange }} />
                <span className="text-sm">{program}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5. Fundraising Leverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-8 space-y-6"
        >
          <h3 
            className="text-2xl font-bold flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <DollarSign className="w-6 h-6" style={{ color: colors.progressGreen }} />
            💵 5. Fundraising Leverage
          </h3>
          
          <p className="text-lg">
            IP strengthens investor confidence and increases deal value:
          </p>
          
          <ul className="space-y-3">
            {[
              "Defensible valuation math (you're not just a \"features\" app)",
              "Premium share pricing justified by legal protection",
              "Preferred by strategic investors and family offices who want lasting defensibility"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.progressGreen }} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Summary Callout Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-8"
          style={{ 
            borderColor: colors.recoveryBlue,
            background: `linear-gradient(135deg, ${colors.graphiteOverlay}cc, ${colors.recoveryBlue}11)`
          }}
        >
          <h3 
            className="text-2xl font-bold mb-6 flex items-center justify-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <Sparkles className="w-6 h-6" style={{ color: colors.recoveryBlue }} />
            🧠 How IP Boosts Sober Logic's Business
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-3xl mb-2">{benefit.icon}</div>
                <h4 className="font-semibold text-lg">{benefit.label}</h4>
                <p className="text-sm" style={{ color: colors.slateGray }}>
                  {benefit.benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}