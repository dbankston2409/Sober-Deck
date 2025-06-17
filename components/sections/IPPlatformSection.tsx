"use client";

import { motion } from "framer-motion";
import { 
  Rocket, Shield, Building2, DollarSign, 
  Target, Globe, Lock, Zap, Award,
  Briefcase, Heart, Scale, Users, Clock, BarChart3
} from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const industryOpportunities = [
  { industry: "Criminal Justice", useCase: "Monitor parolees near prohibited zones (bars, victims' homes)", urgency: "HIGH" },
  { industry: "Eldercare/Dementia", useCase: "Alert when seniors wander outside safe zones", urgency: "HIGH" },
  { industry: "Child Safety", useCase: "Notify parents when kids enter/exit school, home, practice", urgency: "HIGH" },
  { industry: "Employee Safety", useCase: "Verify lone workers reach job sites safely", urgency: "MEDIUM" },
  { industry: "Retail/QSR", useCase: "Trigger promotions when VIP customers are nearby", urgency: "MEDIUM" },
  { industry: "Campus Security", useCase: "Alert security when banned individuals enter campus", urgency: "HIGH" },
  { industry: "Healthcare", useCase: "Track patient arrivals for appointments/procedures", urgency: "MEDIUM" },
  { industry: "Event Management", useCase: "VIP arrival notifications, crowd flow analytics", urgency: "LOW" },
  { industry: "Fleet/Logistics", useCase: "Driver check-ins at delivery locations without GPS drain", urgency: "MEDIUM" },
  { industry: "Fitness/Wellness", useCase: "Auto check-in at gym, trigger workout plans", urgency: "LOW" },
  { industry: "Tourism/Hospitality", useCase: "Self-guided tours, automatic hotel check-ins", urgency: "LOW" },
  { industry: "Public Transit", useCase: "Contactless fare validation via Wallet pass", urgency: "MEDIUM" },
  { industry: "Government/Military", useCase: "Base access verification, secure zone monitoring", urgency: "HIGH" },
  { industry: "Insurance", useCase: "Verify safe driving routes, home security checks", urgency: "MEDIUM" },
  { industry: "Banking/Finance", useCase: "Branch arrival for appointments, ATM security zones", urgency: "LOW" },
  { industry: "Real Estate", useCase: "Property showing tracking, open house analytics", urgency: "LOW" },
  { industry: "Education", useCase: "Student attendance, campus zone restrictions", urgency: "MEDIUM" },
  { industry: "Behavioral Health", useCase: "Monitor therapy attendance, crisis zone avoidance", urgency: "HIGH" },
  { industry: "Court Systems", useCase: "Restraining order enforcement, courthouse check-ins", urgency: "HIGH" },
  { industry: "Faith Organizations", useCase: "Member engagement tracking, ministry outreach", urgency: "LOW" }
];

const commercializationPathways = [
  { model: "SaaS Per-Seat License", description: "$X per user/month for branded platform access with full tracking, intervention, and admin dashboard", icon: Users },
  { model: "Enterprise API Integration", description: "Annual contracts for secure API access to location detection, risk scoring, and behavioral triggers", icon: Building2 },
  { model: "Vertical Exclusivity Deals", description: "Exclusive rights within high-value sectors (e.g., criminal justice, addiction recovery, eldercare)", icon: Shield },
  { model: "Transaction-Based Fees", description: "Micro-fees for each confirmed danger zone entry or triggered intervention", icon: DollarSign },
  { model: "Joint Ventures / Spin-offs", description: "Launch industry-specific subsidiaries using your core engine and IP with enterprise partners", icon: Rocket },
  { model: "Data Licensing & Risk Analytics", description: "Offer anonymized behavioral trend insights to clinics, insurers, or research orgs under strict compliance", icon: BarChart3 }
];

const topIndustries = [
  { name: "Criminal Justice / Courts", reason: "Immediate need, grant funding available, regulatory support", icon: Scale },
  { name: "Eldercare / Memory Care", reason: "Aging population, insurance reimbursement potential", icon: Heart },
  { name: "Child Safety / Parenting", reason: "High emotional value, subscription-friendly market", icon: Users },
  { name: "Behavioral Health", reason: "Natural expansion from addiction, insurance coverage", icon: Heart },
  { name: "Government / Public Safety", reason: "Large contracts, long-term stability, compliance needs", icon: Building2 }
];

const strategicAdvantages = [
  { advantage: "Enterprise & B2B Expansion", description: "License to health systems, justice departments, MCOs" },
  { advantage: "Grant Magnet", description: "IP-backed proposals win federal innovation funding" },
  { advantage: "Acquisition Premium", description: "Strategic buyers pay 15-25× for platform IP vs 6-8× for apps" },
  { advantage: "Competitive Moat", description: "Competitors must license or build inferior workarounds" }
];

export default function IPPlatformSection() {
  return (
    <section className="section-height section-padding flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Header */}
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
            Beyond Addiction: A Multi-Industry Platform Technology
          </h2>
          <p 
            className="text-xl max-w-4xl mx-auto"
            style={{ color: colors.slateGray }}
          >
            Our compound GPS + geofence engine isn't just for recovery — it's a scalable, intelligent location-triggering system with behavioral logic built in, ready to serve 20+ high-impact industries.
          </p>
        </motion.div>

        {/* IP Summary Box */}
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
          <div className="flex items-start gap-4">
            <div 
              className="p-3 rounded-lg"
              style={{ backgroundColor: `${colors.recoveryBlue}22` }}
            >
              <Globe className="w-8 h-8" style={{ color: colors.recoveryBlue }} />
            </div>
            
            <div className="flex-1 space-y-4">
              <h3 
                className="text-2xl font-bold"
                style={{ fontFamily: fonts.heading }}
              >
                🔐 Core IP Asset: Real-Time Risk-Aware Geofence Intelligence System
              </h3>
              
              <p className="text-lg">
                <span className="font-semibold">What it does:</span> Passively detects user presence in high-risk or high-value locations using a hybrid of native geofencing, burst GPS confirmation, and behavioral scoring — without requiring the app to be open. Smart intervention logic routes responses automatically in real time.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  { label: "Runs Silently in Background", icon: "📱", detail: "Triggers even when app is closed — no user interaction required" },
                  { label: "Location + Behavior Linked", icon: "📍", detail: "Blends geofence entry with risk scoring to trigger smarter decisions" },
                  { label: "Battery & Privacy Optimized", icon: "🔋", detail: "Burst-based GPS limits drain while maintaining high accuracy" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 rounded-lg"
                    style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                  >
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <div className="font-semibold">{feature.label}</div>
                    <div className="text-sm" style={{ color: colors.slateGray }}>{feature.detail}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cross-Industry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 
            className="text-2xl font-bold flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <Target className="w-6 h-6" style={{ color: colors.progressGreen }} />
            🎯 Cross-Industry Opportunity Matrix
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Industry</th>
                  <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Use Case</th>
                  <th className="text-center p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Urgency</th>
                </tr>
              </thead>
              <tbody>
                {industryOpportunities.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index * 0.05, 0.5) }}
                    className="border-b hover:bg-white/5 transition-colors"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <td className="p-4 font-medium">{item.industry}</td>
                    <td className="p-4 text-sm" style={{ color: colors.slateGray }}>{item.useCase}</td>
                    <td className="p-4 text-center">
                      <span 
                        className="text-xs px-3 py-1 rounded-full font-semibold"
                        style={{ 
                          backgroundColor: item.urgency === 'HIGH' ? `${colors.alertOrange}22` : 
                                         item.urgency === 'MEDIUM' ? `${colors.progressGreen}22` : 
                                         `${colors.slateGray}22`,
                          color: item.urgency === 'HIGH' ? colors.alertOrange : 
                                item.urgency === 'MEDIUM' ? colors.progressGreen : 
                                colors.slateGray
                        }}
                      >
                        {item.urgency}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Defensibility Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-8 text-center"
          style={{ 
            borderColor: colors.alertOrange,
            background: `linear-gradient(135deg, ${colors.graphiteOverlay}cc, ${colors.alertOrange}11)`
          }}
        >
          <Lock className="w-12 h-12 mx-auto mb-4" style={{ color: colors.alertOrange }} />
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: fonts.heading }}
          >
            Why Competitors Can't Replicate This
          </h3>
          <p className="text-lg max-w-3xl mx-auto">
            Our patentable system blends native geofencing, GPS precision bursts, behavioral scoring, and real-time intervention routing into a single mobile flow. Reproducing this requires complex engineering, risks massive battery drain, and breaks user trust with constant permission prompts — making our approach uniquely scalable and defensible.
          </p>
        </motion.div>

        {/* Commercialization Pathways */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 
            className="text-2xl font-bold flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <DollarSign className="w-6 h-6" style={{ color: colors.progressGreen }} />
            💰 Commercialization Pathways
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercializationPathways.map((pathway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-glass p-6 space-y-4"
              >
                <div 
                  className="p-3 rounded-lg inline-block"
                  style={{ backgroundColor: `${colors.progressGreen}22` }}
                >
                  <pathway.icon 
                    className="w-6 h-6"
                    style={{ color: colors.progressGreen }}
                  />
                </div>
                
                <h4 className="font-bold text-lg">{pathway.model}</h4>
                
                <p 
                  className="text-sm"
                  style={{ color: colors.slateGray }}
                >
                  {pathway.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top 5 Industries */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 
            className="text-2xl font-bold flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <Award className="w-6 h-6" style={{ color: colors.softLavender }} />
            🏆 Top 5 Industries to License First
          </h3>
          
          <div className="space-y-4">
            {topIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg card-glass"
              >
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${colors.softLavender}22` }}
                >
                  <industry.icon 
                    className="w-6 h-6"
                    style={{ color: colors.softLavender }}
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{index + 1}. {industry.name}</h4>
                  <p className="text-sm" style={{ color: colors.slateGray }}>
                    {industry.reason}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Advantages */}
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
            className="text-2xl font-bold mb-6 flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <Briefcase className="w-6 h-6" style={{ color: colors.recoveryBlue }} />
            💼 Strategic Advantage for Sober Logic
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {strategicAdvantages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <Zap 
                  className="w-5 h-5 flex-shrink-0 mt-1"
                  style={{ color: colors.recoveryBlue }}
                />
                <div>
                  <h4 className="font-semibold mb-1">{item.advantage}</h4>
                  <p className="text-sm" style={{ color: colors.slateGray }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center pt-6 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <p className="text-lg">
              By owning this IP, Sober Logic can simultaneously:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {[
                "Dominate addiction recovery",
                "License to adjacent markets",
                "Attract strategic acquirers",
                "Win federal grants"
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${colors.recoveryBlue}22`,
                    color: colors.white
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Closing Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-10 text-center"
          style={{ 
            borderColor: colors.progressGreen,
            background: `linear-gradient(135deg, ${colors.graphiteOverlay}cc, ${colors.progressGreen}11)`
          }}
        >
          <Rocket 
            className="w-16 h-16 mx-auto mb-6"
            style={{ color: colors.progressGreen }}
          />
          
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: fonts.heading, color: colors.white }}
          >
            This is More Than a Feature — It's a Platform
          </h2>
          
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.white }}
          >
            While others build apps that react, we've built the system that understands — powering intelligent, real-world risk detection across industries with geofencing, GPS, and behavioral logic at the core.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <p 
              className="text-2xl font-bold"
              style={{ color: colors.progressGreen }}
            >
              The next $100M isn't in app installs — it's in becoming the infrastructure layer for real-world behavioral intelligence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}