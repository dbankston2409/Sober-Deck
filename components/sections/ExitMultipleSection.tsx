"use client";

import { motion } from "framer-motion";
import { TrendingUp, Activity, Shield, Brain, Sparkles } from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const valuationTiers = [
  {
    icon: "🟢",
    iconComponent: TrendingUp,
    name: "Baseline SaaS",
    multiplier: "4× – 6× ARR",
    description: "Low-churn, functional SaaS with solid retention but no market leadership or unique moat",
    color: colors.slateGray,
    bgGradient: "from-gray-800 to-gray-700"
  },
  {
    icon: "🔵",
    iconComponent: Shield,
    name: "Niche Dominant SaaS",
    multiplier: "6× – 8× ARR",
    description: "Category winner in a specific vertical (e.g., court compliance, church recovery tools)",
    color: colors.recoveryBlue,
    bgGradient: "from-blue-900 to-blue-800"
  },
  {
    icon: "🟠",
    iconComponent: Activity,
    name: "Health SaaS / Hybrid Billing",
    multiplier: "8× – 12× ARR",
    description: "CPT-ready, grant-backed B2B systems with behavioral outcomes and user engagement data",
    color: colors.alertOrange,
    bgGradient: "from-orange-900 to-orange-800",
    highlight: true
  },
  {
    icon: "🔴",
    iconComponent: Brain,
    name: "Clinical-Grade + CPT/B2B Contracts",
    multiplier: "12× – 16× ARR",
    description: "Licensed provider billing, integrated dashboards, HIPAA security, medical-grade tools",
    color: "#DC2626",
    bgGradient: "from-red-900 to-red-800",
    highlight: true
  },
  {
    icon: "🟣",
    iconComponent: Sparkles,
    name: "Digital Therapeutics / Behavioral Infrastructure",
    multiplier: "16× – 20× ARR",
    description: "National footprint, payer billing, FDA-level reliability, multi-channel revenue layers",
    color: colors.softLavender,
    bgGradient: "from-purple-900 to-purple-800",
    potential: true
  }
];

export default function ExitMultipleSection() {
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
            className="text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: fonts.heading }}
          >
            Understanding Exit Multiples: What Drives Valuation in SaaS + Health Tech
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.slateGray }}
          >
            SaaS companies are valued based on Annual Recurring Revenue (ARR) multiples that reflect their market position, growth potential, and defensibility
          </p>
        </motion.div>

        {/* Valuation Tiers - Pyramid Layout */}
        <div className="space-y-4">
          {valuationTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div 
                className={`card-glass p-6 lg:p-8 ${
                  tier.highlight ? 'ring-2 ring-recovery-blue' : ''
                } ${tier.potential ? 'ring-2 ring-soft-lavender ring-opacity-50' : ''}`}
                style={{
                  background: tier.highlight || tier.potential
                    ? `linear-gradient(135deg, ${colors.graphiteOverlay}cc, ${
                        tier.highlight ? colors.recoveryBlue : colors.softLavender
                      }11)`
                    : undefined
                }}
              >
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  {/* Icon and Tier Name */}
                  <div className="lg:col-span-3 flex items-center gap-4">
                    <div className="text-4xl">{tier.icon}</div>
                    <div>
                      <h3 
                        className="text-xl font-bold"
                        style={{ fontFamily: fonts.heading }}
                      >
                        {tier.name}
                      </h3>
                    </div>
                  </div>

                  {/* Multiplier */}
                  <div className="lg:col-span-3 text-center lg:text-left">
                    <div 
                      className="text-2xl font-bold"
                      style={{ color: tier.highlight ? colors.recoveryBlue : tier.color }}
                    >
                      {tier.multiplier}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-6">
                    <p 
                      className="text-sm lg:text-base"
                      style={{ color: colors.slateGray }}
                    >
                      {tier.description}
                    </p>
                  </div>
                </div>

                {/* Highlight Labels */}
                {tier.highlight && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute -right-2 -top-2"
                  >
                    <div 
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ 
                        backgroundColor: colors.recoveryBlue,
                        color: colors.white 
                      }}
                    >
                      Current Target
                    </div>
                  </motion.div>
                )}
                
                {tier.potential && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute -right-2 -top-2"
                  >
                    <div 
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ 
                        backgroundColor: colors.softLavender,
                        color: colors.white 
                      }}
                    >
                      Future Potential
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sober Logic Exit Potential Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <div 
            className="card-glass p-8 lg:p-10 text-center"
            style={{ 
              borderColor: colors.progressGreen,
              background: `linear-gradient(135deg, ${colors.graphiteOverlay}cc, ${colors.progressGreen}11)`
            }}
          >
            <h3 
              className="text-3xl font-bold mb-6 flex items-center justify-center gap-3"
              style={{ fontFamily: fonts.heading }}
            >
              <Brain className="w-8 h-8" style={{ color: colors.progressGreen }} />
              Sober Logic Exit Potential
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <div className="text-3xl">💡</div>
                <div className="text-lg font-semibold" style={{ color: colors.white }}>
                  12× – 16× ARR
                </div>
                <p className="text-sm" style={{ color: colors.slateGray }}>
                  for CPT-billed clinical contracts
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <div className="text-3xl">💡</div>
                <div className="text-lg font-semibold" style={{ color: colors.white }}>
                  8× – 12× ARR
                </div>
                <p className="text-sm" style={{ color: colors.slateGray }}>
                  for grant-funded & embedded recovery ecosystems
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <div className="text-3xl">💥</div>
                <div className="text-lg font-semibold" style={{ color: colors.white }}>
                  16× – 20× ARR
                </div>
                <p className="text-sm" style={{ color: colors.slateGray }}>
                  potential if integrated with federal court systems, state Medicaid programs, or behavioral payer networks
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}