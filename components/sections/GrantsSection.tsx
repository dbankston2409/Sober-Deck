"use client";

import { motion } from "framer-motion";
import { colors } from "@/lib/styles";
import { useState } from "react";

const fundingChannels = [
  {
    id: "samhsa",
    name: "SAMHSA Grants",
    icon: "🏛️",
    color: "#059669",
    qualifications: [
      "Evidence-based recovery programs",
      "Peer support initiatives",
      "Technology-enabled treatment",
      "Rural/underserved populations"
    ],
    requirements: [
      "501(c)(3) status or partnership",
      "Clinical advisory board",
      "Outcome measurement plan",
      "Initial pilot data (6-12 months)"
    ],
    grantSize: "$150K - $3M",
    goal: "Fund 3-year national expansion with $1.5M annual grants"
  },
  {
    id: "doj",
    name: "DOJ / Justice Grants",
    icon: "⚖️",
    color: "#7C3AED",
    qualifications: [
      "Drug court partnerships",
      "Recidivism reduction tech",
      "Probation monitoring tools",
      "Reentry support programs"
    ],
    requirements: [
      "Court system LOIs",
      "Law enforcement partners",
      "Compliance tracking",
      "Security certifications"
    ],
    grantSize: "$250K - $2M",
    goal: "Secure $2M for statewide court system integration"
  },
  {
    id: "medicaid",
    name: "Medicaid Innovation",
    icon: "🏥",
    color: "#0891B2",
    qualifications: [
      "SUD treatment innovation",
      "Cost reduction models",
      "Outcome-based care",
      "Telehealth integration"
    ],
    requirements: [
      "State Medicaid partnership",
      "CPT code alignment",
      "ROI documentation",
      "HIPAA compliance"
    ],
    grantSize: "$500K - $5M",
    goal: "Pilot with 2 states, scale to $5M reimbursement model"
  },
  {
    id: "corporate",
    name: "Corporate / Philanthropic",
    icon: "💼",
    color: "#DC2626",
    qualifications: [
      "Workforce wellness programs",
      "Community impact initiatives",
      "ESG investment criteria",
      "Social innovation awards"
    ],
    requirements: [
      "Impact metrics dashboard",
      "Corporate partnerships",
      "PR/marketing materials",
      "Board connections"
    ],
    grantSize: "$100K - $1M",
    goal: "Build $2M annual corporate sponsorship portfolio"
  }
];

const summaryData = [
  { source: "Corporate", type: "Sponsorship", timeline: "Q1 2026", value: "$1.0M" },
  { source: "SAMHSA", type: "Federal Grant", timeline: "Q2 2026", value: "$1.5M" },
  { source: "DOJ", type: "Federal Grant", timeline: "Q3 2026", value: "$2.0M" },
  { source: "Medicaid", type: "State Innovation", timeline: "Q4 2026", value: "$2.5M" }
];

export default function GrantsSection() {
  const [activeTab, setActiveTab] = useState("samhsa");

  return (
    <section className="section-padding" style={{ backgroundColor: colors.background, paddingTop: '8rem' }}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: colors.white }}>
            🚀 Fast Track to Funding
          </h2>
          <p className="text-xl mb-8" style={{ color: colors.grayLight }}>
            Grants & Partnerships That Accelerate Impact
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
                background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(5, 150, 105, 0.1) 100%)`,
                border: `2px solid #059669`
              }}
            >
              <p className="text-lg italic" style={{ color: colors.white }}>
                "Sober Logic is uniquely positioned to attract millions in non-dilutive public funding."
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Funding Channel Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {fundingChannels.map((channel) => (
              <button
                key={channel.id}
                onClick={() => setActiveTab(channel.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === channel.id ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                }`}
                style={{
                  backgroundColor: activeTab === channel.id ? channel.color : colors.surface,
                  color: colors.white,
                  border: `2px solid ${channel.color}`
                }}
              >
                <span className="mr-2">{channel.icon}</span>
                {channel.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Channel Details */}
        {fundingChannels.map((channel) => (
          <motion.div
            key={channel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: activeTab === channel.id ? 1 : 0,
              y: activeTab === channel.id ? 0 : 20,
              display: activeTab === channel.id ? 'block' : 'none'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: colors.white }}>
                  <span className="mr-3">✅</span> We Qualify For
                </h3>
                <ul className="space-y-3">
                  {channel.qualifications.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-1" style={{ color: channel.color }}>•</span>
                      <span style={{ color: colors.grayLight }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: colors.white }}>
                  <span className="mr-3">📦</span> What's Needed
                </h3>
                <ul className="space-y-3">
                  {channel.requirements.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-1" style={{ color: channel.color }}>□</span>
                      <span style={{ color: colors.grayLight }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: colors.white }}>
                  <span className="mr-3">💰</span> Size of Grant
                </h3>
                <p className="text-3xl font-bold" style={{ color: channel.color }}>
                  {channel.grantSize}
                </p>
                <p className="mt-2" style={{ color: colors.grayLight }}>
                  Per funding cycle
                </p>
              </div>

              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: colors.white }}>
                  <span className="mr-3">🎯</span> Realistic Goal
                </h3>
                <p className="text-lg" style={{ color: colors.grayLight }}>
                  {channel.goal}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Summary Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card-glass p-8"
          style={{
            background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(5, 150, 105, 0.05) 100%)`
          }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.white }}>
            Funding Pipeline Summary
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4" style={{ color: colors.grayLight }}>Source</th>
                  <th className="text-left p-4" style={{ color: colors.grayLight }}>Type</th>
                  <th className="text-left p-4" style={{ color: colors.grayLight }}>Timeline</th>
                  <th className="text-right p-4" style={{ color: colors.grayLight }}>Realistic Annual Value</th>
                </tr>
              </thead>
              <tbody>
                {summaryData.map((row, i) => (
                  <tr key={i} className="border-t" style={{ borderColor: colors.border }}>
                    <td className="p-4">
                      <span className="font-semibold" style={{ color: colors.white }}>
                        {fundingChannels.find(c => c.name.includes(row.source))?.icon} {row.source}
                      </span>
                    </td>
                    <td className="p-4" style={{ color: colors.grayLight }}>{row.type}</td>
                    <td className="p-4" style={{ color: colors.grayLight }}>{row.timeline}</td>
                    <td className="p-4 text-right">
                      <span className="font-bold text-xl" style={{ color: colors.recoveryBlue }}>
                        {row.value}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2" style={{ borderColor: colors.recoveryBlue }}>
                  <td colSpan={3} className="p-4">
                    <span className="font-bold text-xl" style={{ color: colors.white }}>
                      Total Annual Non-Dilutive Funding
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="font-bold text-2xl" style={{ color: colors.recoveryBlue }}>
                      $7.0M
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glass p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2" style={{ color: colors.white }}>
                Strategic Alignment
              </h4>
              <p className="text-sm" style={{ color: colors.grayLight }}>
                Our dual-entity structure is designed specifically for grant eligibility
              </p>
            </div>
            
            <div className="card-glass p-6">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="text-xl font-semibold mb-2" style={{ color: colors.white }}>
                Non-Dilutive Growth
              </h4>
              <p className="text-sm" style={{ color: colors.grayLight }}>
                $7M annual funding without giving up equity
              </p>
            </div>
            
            <div className="card-glass p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold mb-2" style={{ color: colors.white }}>
                Accelerated Scale
              </h4>
              <p className="text-sm" style={{ color: colors.grayLight }}>
                Public funding enables 3x faster market penetration
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}