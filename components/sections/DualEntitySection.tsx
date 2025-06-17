"use client";

import { motion } from "framer-motion";
import { colors } from "@/lib/styles";
import { useState } from "react";

const entities = [
  {
    id: "forprofit",
    name: "Sober Logic Inc.",
    type: "For-Profit Software Company",
    icon: "💼",
    color: colors.recoveryBlue,
    features: [
      {
        title: "Assets & Control",
        items: [
          "Owns all IP, code, and branding",
          "Licenses tech to foundation",
          "Retains equity for founders",
          "Can be sold independently"
        ]
      },
      {
        title: "Revenue Streams",
        items: [
          "Licensing fees from foundation",
          "Direct B2B subscriptions",
          "Enterprise contracts",
          "White-label partnerships"
        ]
      }
    ]
  },
  {
    id: "nonprofit",
    name: "Sober Logic Foundation",
    type: "501(c)(3) Nonprofit",
    icon: "🎯",
    color: "#10B981",
    features: [
      {
        title: "Mission & Operations",
        items: [
          "Public-facing programs",
          "Receives grants & donations",
          "Partners with churches/courts",
          "Conducts clinical research"
        ]
      },
      {
        title: "Funding Sources",
        items: [
          "Tax-deductible donations",
          "Federal/state grants",
          "Corporate sponsorships",
          "CPT billing partnerships"
        ]
      }
    ]
  }
];

const benefits = [
  {
    icon: "💰",
    title: "Tax Advantages",
    points: [
      "IP donations (tax deductible)",
      "Family HSAs funded",
      "403(b) retirement accounts",
      "Health insurance coverage"
    ]
  },
  {
    icon: "🏆",
    title: "Strategic Control",
    points: [
      "Retain software company equity",
      "Mission continues post-exit",
      "Family employment options",
      "Board seat flexibility"
    ]
  },
  {
    icon: "🚀",
    title: "Exit Flexibility",
    points: [
      "Sell tech company independently",
      "Foundation ensures legacy",
      "Multiple liquidity paths",
      "Investor-friendly structure"
    ]
  }
];

const advantages = [
  { icon: "✅", text: "Courts trust nonprofits" },
  { icon: "✅", text: "Grants fund growth" },
  { icon: "✅", text: "Tax-efficient structure" },
  { icon: "✅", text: "Liability protection" },
  { icon: "✅", text: "Mission permanence" },
  { icon: "✅", text: "Multiple exit options" },
  { icon: "✅", text: "Community credibility" },
  { icon: "✅", text: "Scalable impact" },
  { icon: "✅", text: "Investor-friendly" }
];

export default function DualEntitySection() {
  const [activeEntity, setActiveEntity] = useState("forprofit");

  return (
    <section className="section-padding" style={{ backgroundColor: colors.background }}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: colors.white }}>
            🏗️ Dual-Entity Strategic Structure
          </h2>
          <p className="text-xl mb-8" style={{ color: colors.grayLight }}>
            Maximizing Mission Impact While Preserving Equity Value
          </p>
          
          {/* Quote Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <div 
              className="card-glass px-8 py-6"
              style={{
                background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(51, 102, 255, 0.1) 100%)`,
                border: `2px solid ${colors.recoveryBlue}`
              }}
            >
              <p className="text-lg italic" style={{ color: colors.white }}>
                "The best of both worlds: nonprofit trust with for-profit efficiency."
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Entity Toggle Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {entities.map((entity) => (
              <button
                key={entity.id}
                onClick={() => setActiveEntity(entity.id)}
                className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                  activeEntity === entity.id ? 'opacity-100 scale-105' : 'opacity-70 hover:opacity-90'
                }`}
                style={{
                  backgroundColor: activeEntity === entity.id ? entity.color : colors.surface,
                  color: colors.white,
                  border: `2px solid ${entity.color}`,
                  transform: activeEntity === entity.id ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <span className="text-2xl mr-3">{entity.icon}</span>
                <span className="text-lg">{entity.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Entity Details */}
        {entities.map((entity) => (
          <motion.div
            key={entity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: activeEntity === entity.id ? 1 : 0,
              y: activeEntity === entity.id ? 0 : 20,
              display: activeEntity === entity.id ? 'block' : 'none'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2" style={{ color: entity.color }}>
                  {entity.type}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {entity.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * i }}
                    className="card-glass p-8"
                    style={{
                      background: `linear-gradient(135deg, ${colors.surface} 0%, ${entity.color}15 100%)`,
                      border: `1px solid ${entity.color}40`
                    }}
                  >
                    <h4 className="text-xl font-bold mb-6 flex items-center" style={{ color: colors.white }}>
                      <span className="mr-3" style={{ color: entity.color }}>•</span>
                      {feature.title}
                    </h4>
                    <ul className="space-y-3">
                      {feature.items.map((item, j) => (
                        <li key={j} className="flex items-start">
                          <span className="mr-3 mt-1" style={{ color: entity.color }}>→</span>
                          <span style={{ color: colors.grayLight }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Visual Relationship Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="card-glass p-8" style={{ background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(51, 102, 255, 0.05) 100%)` }}>
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.white }}>
              How They Work Together
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-5xl mb-4">💼</div>
                <h4 className="text-lg font-semibold mb-2" style={{ color: colors.recoveryBlue }}>
                  Sober Logic Inc.
                </h4>
                <p className="text-sm" style={{ color: colors.grayLight }}>
                  Licenses software to foundation
                </p>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <span style={{ color: colors.recoveryBlue }}>→</span>
                  <span className="text-sm" style={{ color: colors.grayLight }}>Software License</span>
                  <span style={{ color: colors.recoveryBlue }}>→</span>
                </div>
                <div className="text-3xl">🤝</div>
                <div className="flex items-center gap-2">
                  <span style={{ color: "#10B981" }}>←</span>
                  <span className="text-sm" style={{ color: colors.grayLight }}>Royalty Fees</span>
                  <span style={{ color: "#10B981" }}>←</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-lg font-semibold mb-2" style={{ color: "#10B981" }}>
                  Sober Logic Foundation
                </h4>
                <p className="text-sm" style={{ color: colors.grayLight }}>
                  Runs programs & receives grants
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Owner Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.white }}>
            Owner Benefits & Strategic Advantages
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="card-glass p-6"
              >
                <div className="text-3xl mb-4 text-center">{benefit.icon}</div>
                <h4 className="text-xl font-semibold mb-4 text-center" style={{ color: colors.white }}>
                  {benefit.title}
                </h4>
                <ul className="space-y-2">
                  {benefit.points.map((point, j) => (
                    <li key={j} className="flex items-start">
                      <span className="mr-2 mt-1" style={{ color: colors.recoveryBlue }}>•</span>
                      <span className="text-sm" style={{ color: colors.grayLight }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card-glass p-8 mb-16"
          style={{
            background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(16, 185, 129, 0.05) 100%)`
          }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.white }}>
            Why This Structure Wins
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {advantages.map((advantage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className="flex items-center"
              >
                <span className="mr-3 text-xl" style={{ color: "#10B981" }}>{advantage.icon}</span>
                <span style={{ color: colors.grayLight }}>{advantage.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card-glass p-6">
              <div className="text-3xl mb-3">🏗️</div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: colors.white }}>
                Builds Trust
              </h4>
              <p className="text-sm" style={{ color: colors.grayLight }}>
                Courts prefer nonprofits
              </p>
            </div>
            
            <div className="card-glass p-6">
              <div className="text-3xl mb-3">💎</div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: colors.white }}>
                Unlocks Funding
              </h4>
              <p className="text-sm" style={{ color: colors.grayLight }}>
                Grants & donations flow
              </p>
            </div>
            
            <div className="card-glass p-6">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: colors.white }}>
                Preserves Value
              </h4>
              <p className="text-sm" style={{ color: colors.grayLight }}>
                Keep equity intact
              </p>
            </div>
            
            <div className="card-glass p-6">
              <div className="text-3xl mb-3">♾️</div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: colors.white }}>
                Ensures Legacy
              </h4>
              <p className="text-sm" style={{ color: colors.grayLight }}>
                Mission continues forever
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}