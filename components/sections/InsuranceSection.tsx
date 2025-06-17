"use client";

import { motion } from "framer-motion";
import { 
  Shield, DollarSign, FileText, TrendingUp,
  CheckCircle, Activity, Lock
} from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const cptSegments = [
  {
    icon: "🧑‍⚕️",
    segment: "MAT Clinics & Recovery Providers",
    description: "Craving tracking, relapse flagging, digital CBT",
    buyers: "Medical Directors, Counselors",
    cptCodes: "99457, 98978, 99484"
  },
  {
    icon: "🏨",
    segment: "Inpatient & Residential Rehabs",
    description: "In-program digital therapy + post-discharge tracking",
    buyers: "Clinical Directors, Case Mgrs",
    cptCodes: "98978, 99490"
  },
  {
    icon: "🧠",
    segment: "Telehealth Behavioral Health",
    description: "Integrated SMS tools for SUD/mental health clients",
    buyers: "Digital Health Platforms",
    cptCodes: "99457, 99458"
  },
  {
    icon: "🏥",
    segment: "Integrated Health Systems",
    description: "Dual-diagnosis support + care coordination",
    buyers: "Behavioral Health Depts",
    cptCodes: "99484, 99490"
  }
];

const marketOpportunity = [
  {
    icon: "🧑‍⚕️",
    segment: "MAT Clinics & Recovery Providers",
    marketSize: "~1.4M active clients across U.S.; $150–$300/month",
    differentiator: "Real-time SMS mood/craving logs; pass-triggered interventions",
    replaces: "Manual logs, non-billable check-ins",
    benefits: "Boost CPT claims, reduce missed crises, log engagement"
  },
  {
    icon: "🏨",
    segment: "Inpatient & Residential Rehabs",
    marketSize: "~28,900 facilities; high clinical billing potential",
    differentiator: "Discharge-to-home support; passive relapse flags via Wallet",
    replaces: "Paper aftercare plans, unread app alerts",
    benefits: "Improve post-care ROI, reduce relapse-linked readmits"
  },
  {
    icon: "🧠",
    segment: "Telehealth Behavioral Health",
    marketSize: "1,000s of providers; scalable digital-first delivery",
    differentiator: "Plug-in SMS module; no app install; CPT ready",
    replaces: "Costly in-house dev, low adherence apps",
    benefits: "Fast CPT monetization, better low-tech patient reach"
  },
  {
    icon: "🏥",
    segment: "Integrated Health Systems",
    marketSize: "100s of health orgs; high dual-diagnosis population",
    differentiator: "Seamless logs for co-occurring care; passive support layer",
    replaces: "EHR notes only, no real-time triggers",
    benefits: "Maximize value-based care metrics; improve engagement"
  }
];

const cptCodesList = [
  { code: "99457 / 99458", description: "Remote behavioral intervention (e.g., SMS logging, crisis triage)" },
  { code: "99484", description: "Behavioral health integration" },
  { code: "98978", description: "Remote CBT monitoring" },
  { code: "99490", description: "Chronic care management (esp. for dual-diagnosis clients)" }
];

export default function InsuranceSection() {
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
            <Lock className="w-8 h-8" style={{ color: colors.recoveryBlue }} />
            <h2 
              className="text-4xl lg:text-6xl font-bold"
              style={{ fontFamily: fonts.heading }}
            >
              CPT / Insurance Billing Required
            </h2>
          </div>
          
          <p 
            className="text-xl max-w-4xl mx-auto"
            style={{ color: colors.slateGray }}
          >
            These markets require CPT billing, clinical integration, or licensed provider oversight. However, the monthly revenue per user is significantly higher, and these partners already bill similar codes.
          </p>
        </motion.div>

        {/* CPT Codes Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-6 space-y-4"
        >
          <h4 
            className="text-lg font-bold mb-4 flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <FileText className="w-5 h-5" style={{ color: colors.progressGreen }} />
            ✅ CPT codes to reference:
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {cptCodesList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-3"
              >
                <span 
                  className="font-mono font-bold whitespace-nowrap"
                  style={{ color: colors.recoveryBlue }}
                >
                  {item.code}
                </span>
                <span className="text-sm" style={{ color: colors.slateGray }}>
                  – {item.description}
                </span>
              </motion.div>
            ))}
          </div>
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
            1️⃣ CPT Billing Market Segments Overview
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
                    <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>CPT Codes Used</th>
                  </tr>
                </thead>
                <tbody>
                  {cptSegments.map((segment, index) => (
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
                      <td className="p-4">
                        <span 
                          className="text-sm font-mono"
                          style={{ color: colors.recoveryBlue }}
                        >
                          {segment.cptCodes}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
            2️⃣ CPT Market Opportunity & Differentiation Table
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
                    <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Market Size & Billing Value</th>
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
                  {marketOpportunity.map((item, index) => (
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
            🏥 Insurance Billing Market
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
                  <td className="p-4 text-sm">Adults with SUD covered by Medicaid/insurance</td>
                  <td className="p-4 text-2xl font-bold" style={{ color: colors.white }}>~18–22M</td>
                  <td className="p-4 text-sm" style={{ color: colors.slateGray }}>Includes MAT clinics, IOPs, dual-diagnosis, teletherapy users</td>
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
                  <td className="p-4 text-sm">CPT-capable provider networks</td>
                  <td className="p-4 text-2xl font-bold" style={{ color: colors.white }}>~6–8M</td>
                  <td className="p-4 text-sm" style={{ color: colors.slateGray }}>Providers with licensed staff to bill 99457, 98978, 99484</td>
                </motion.tr>
                
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <td className="p-4 font-bold" style={{ color: colors.progressGreen }}>SOM (3–5 yrs)</td>
                  <td className="p-4 text-sm">Realistic adoption through billing integration</td>
                  <td className="p-4 text-2xl font-bold" style={{ color: colors.white }}>250K–400K</td>
                  <td className="p-4 text-sm" style={{ color: colors.slateGray }}>MAT clinics, residential rehabs, digital health platforms</td>
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
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          <div 
            className="card-glass p-6 text-center"
            style={{ borderColor: colors.progressGreen }}
          >
            <DollarSign 
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: colors.progressGreen }}
            />
            <h4 
              className="text-xl font-bold mb-2"
              style={{ fontFamily: fonts.heading }}
            >
              Higher Revenue Potential
            </h4>
            <p style={{ color: colors.slateGray }}>
              CPT billing enables <span style={{ color: colors.white }}>$150-$300</span> per user per month
            </p>
          </div>
          
          <div 
            className="card-glass p-6 text-center"
            style={{ borderColor: colors.recoveryBlue }}
          >
            <Activity 
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: colors.recoveryBlue }}
            />
            <h4 
              className="text-xl font-bold mb-2"
              style={{ fontFamily: fonts.heading }}
            >
              Clinical Integration Ready
            </h4>
            <p style={{ color: colors.slateGray }}>
              Seamlessly integrates with existing <span style={{ color: colors.white }}>clinical workflows</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}