"use client";

import { motion } from "framer-motion";
import { 
  Building2, Scale, Church, Users, 
  Handshake, Home, CheckCircle, Broom,
  Lightbulb, Unlock
} from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const segments = [
  {
    icon: "🏥",
    segment: "Private Rehabs (Self-Pay)",
    description: "Alumni relapse prevention & aftercare program",
    buyers: "Program Directors",
    funding: "Self-pay, internal facility budget"
  },
  {
    icon: "⚖️",
    segment: "Court Diversion / Probation",
    description: "Mandated behavioral compliance check-ins",
    buyers: "Case Managers, DA Offices",
    funding: "Government/county grants, DOJ diversion"
  },
  {
    icon: "⛪",
    segment: "Churches & Faith-Based Orgs",
    description: "CR-style accountability + spiritual support",
    buyers: "Pastors, Ministry Leads",
    funding: "Tithes, donor funds, faith-based grants"
  },
  {
    icon: "🅰️",
    segment: "AA / NA / Al-Anon Chapters",
    description: "Anonymous streak tracking, sponsor tools",
    buyers: "Chapter Coordinators",
    funding: "Member support, group contributions"
  },
  {
    icon: "🤝",
    segment: "Nonprofits & Coalitions",
    description: "Grant-backed recovery initiatives",
    buyers: "Executive Directors",
    funding: "SAMHSA, state grants, philanthropic funds"
  },
  {
    icon: "🏦",
    segment: "Reentry & Housing Programs",
    description: "Behavior tracking for parolees, residents",
    buyers: "Case/Housing Managers",
    funding: "Reentry program grants, transitional housing"
  }
];

const buyerOverview = [
  {
    icon: "🏥",
    segment: "Private Rehabs (Self-Pay)",
    marketSize: "~28,900 facilities; 1.46M+ clients/year",
    differentiator: "Wallet pass-based relapse alerts; gamified badges",
    replaces: "Manual alumni follow-up, disconnected EHRs",
    benefits: "Increase re-engagement; offer premium aftercare model"
  },
  {
    icon: "⚖️",
    segment: "Court Diversion / Probation",
    marketSize: "~3.7M adults under supervision (US)",
    differentiator: "No GPS; behavior signals via SMS + Wallet tech",
    replaces: "Ankle monitors, missed check-ins, paper logs",
    benefits: "Cut admin time, align with grants, reduce recidivism"
  },
  {
    icon: "⛪",
    segment: "Churches & Faith-Based Orgs",
    marketSize: "Thousands of ministries nationwide",
    differentiator: "Faith toggles; daily SMS devotionals; sponsor support",
    replaces: "Printed chips, sporadic leader texts",
    benefits: "Spiritual continuity; tech-free engagement"
  },
  {
    icon: "🅰️",
    segment: "AA / NA / Al-Anon Chapters",
    marketSize: "2M+ AA members in U.S.",
    differentiator: "Anonymous streak tracking; SMS-based clean time logs",
    replaces: "Chip coins, ad-hoc texts from sponsors",
    benefits: "Lightweight system that enhances existing programs"
  },
  {
    icon: "🤝",
    segment: "Nonprofits & Coalitions",
    marketSize: "~14,700 recovery-based organizations",
    differentiator: "Crisis flows, multilingual SMS, dashboard visibility",
    replaces: "Paper mood logs, unscalable manual efforts",
    benefits: "Reportable outcomes, less burnout, grant-readiness"
  },
  {
    icon: "🏦",
    segment: "Reentry & Housing Programs",
    marketSize: "~600K prison releases/year; 7,000+ programs",
    differentiator: "Wallet alerts w/o GPS; behavior logging by SMS",
    replaces: "Delayed flags, intake failures, GPS tracking",
    benefits: "Early detection of relapse risk, improve housing KPIs"
  }
];

export default function NoInsuranceSection() {
  return (
    <section className="section-height section-padding flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Unlock className="w-8 h-8" style={{ color: colors.recoveryBlue }} />
            <h2 
              className="text-4xl lg:text-6xl font-bold"
              style={{ fontFamily: fonts.heading }}
            >
              No Insurance Required
            </h2>
          </div>
          
          <p 
            className="text-xl max-w-4xl mx-auto"
            style={{ color: colors.slateGray }}
          >
            These markets can activate Sober Logic immediately through donations, program budgets, grants, or direct payments — no clinical license or payer integration needed.
          </p>
        </motion.div>

        {/* First Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: fonts.heading }}
          >
            🔓 A. NO Insurance Billing Required
          </h3>
          
          <div className="overflow-x-auto">
            <div className="card-glass p-1 min-w-[800px]">
              <table className="w-full">
                <thead>
                  <tr 
                    className="border-b"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Segment</th>
                    <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Description</th>
                    <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Common Buyers</th>
                    <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Funding Source</th>
                  </tr>
                </thead>
                <tbody>
                  {segments.map((segment, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b hover:bg-white/5 transition-colors"
                      style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{segment.icon}</span>
                          <span className="font-medium text-sm">{segment.segment}</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm" style={{ color: colors.slateGray }}>
                        {segment.description}
                      </td>
                      <td className="p-4 text-sm" style={{ color: colors.white }}>
                        {segment.buyers}
                      </td>
                      <td className="p-4 text-sm" style={{ color: colors.slateGray }}>
                        {segment.funding}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-6"
          >
            <p className="text-lg flex items-center justify-center gap-2">
              <span className="text-2xl">💡</span>
              <span style={{ color: colors.white }}>
                All of these segments can be activated immediately — no CPT billing, no delays, no red tape.
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Second Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: fonts.heading }}
          >
            🔍 Segmented B2B Buyer Overview with Differentiation (NO INSURANCE)
          </h3>
          
          <div className="overflow-x-auto">
            <div className="card-glass p-1 min-w-[1000px]">
              <table className="w-full">
                <thead>
                  <tr 
                    className="border-b"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Segment</th>
                    <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Market Size</th>
                    <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>
                      What Sets Sober Logic Apart ✅
                    </th>
                    <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>
                      What We Replace 🧹
                    </th>
                    <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>
                      Benefits to Buyer 💡
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {buyerOverview.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b hover:bg-white/5 transition-colors"
                      style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{item.icon}</span>
                          <span className="font-medium text-sm">{item.segment}</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm" style={{ color: colors.slateGray }}>
                        {item.marketSize}
                      </td>
                      <td className="p-4 text-sm" style={{ color: colors.progressGreen }}>
                        {item.differentiator}
                      </td>
                      <td className="p-4 text-sm" style={{ color: colors.alertOrange }}>
                        {item.replaces}
                      </td>
                      <td className="p-4 text-sm" style={{ color: colors.recoveryBlue }}>
                        {item.benefits}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* TAM/SAM/SOM Market Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 
            className="text-2xl font-bold mb-6 text-center"
            style={{ fontFamily: fonts.heading }}
          >
            🧩 No Insurance Billing Market
          </h3>
          
          <div className="card-glass p-6">
            <table className="w-full">
              <thead>
                <tr 
                  className="border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Tier</th>
                  <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Segment Description</th>
                  <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Market Size Estimate</th>
                  <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                >
                  <td className="p-4 font-bold" style={{ color: colors.recoveryBlue }}>TAM</td>
                  <td className="p-4 text-sm">U.S. adults engaged in recovery outside clinical care</td>
                  <td className="p-4 text-2xl font-bold" style={{ color: colors.white }}>~12M+</td>
                  <td className="p-4 text-sm" style={{ color: colors.slateGray }}>Includes AA/NA, faith-based, court diversion, parolees</td>
                </motion.tr>
                
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                >
                  <td className="p-4 font-bold" style={{ color: colors.softLavender }}>SAM</td>
                  <td className="p-4 text-sm">Organizations with funding but no CPT billing</td>
                  <td className="p-4 text-2xl font-bold" style={{ color: colors.white }}>~4–6M</td>
                  <td className="p-4 text-sm" style={{ color: colors.slateGray }}>Nonprofits, churches, coalitions, reentry housing, self-pay rehabs</td>
                </motion.tr>
                
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <td className="p-4 font-bold" style={{ color: colors.progressGreen }}>SOM (3–5 yrs)</td>
                  <td className="p-4 text-sm">Realistic early adopters via B2B partnerships</td>
                  <td className="p-4 text-2xl font-bold" style={{ color: colors.white }}>300K–500K</td>
                  <td className="p-4 text-sm" style={{ color: colors.slateGray }}>AA chapters, CR groups, justice orgs, donor-backed nonprofits</td>
                </motion.tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-8 text-center mt-12"
          style={{ borderColor: colors.recoveryBlue }}
        >
          <h4 
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: fonts.heading, color: colors.recoveryBlue }}
          >
            Speed of Activation
          </h4>
          <p className="text-lg" style={{ color: colors.white }}>
            No insurance hurdles. No clinical licensing. No integration delays.
          </p>
          <p className="text-lg mt-2" style={{ color: colors.slateGray }}>
            These segments can start using Sober Logic <span style={{ color: colors.progressGreen }}>tomorrow</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}