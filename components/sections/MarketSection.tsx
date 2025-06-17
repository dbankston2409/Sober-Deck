"use client";

import { motion } from "framer-motion";
import { 
  Building2, Scale, Church, Heart, 
  Stethoscope, Users, Home, Briefcase, Shield
} from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const markets = [
  {
    icon: Building2,
    title: "Private Rehabs",
    description: "Premium recovery centers seeking cutting-edge tools",
    color: `${colors.recoveryBlue}, ${colors.softLavender}`
  },
  {
    icon: Scale,
    title: "Court Programs",
    description: "Mandated treatment with accountability requirements",
    color: `${colors.alertOrange}, ${colors.recoveryBlue}`
  },
  {
    icon: Church,
    title: "Churches / Ministries",
    description: "Faith-based recovery communities",
    color: `${colors.softLavender}, ${colors.recoveryBlue}`
  },
  {
    icon: Heart,
    title: "Nonprofits",
    description: "Mission-driven organizations helping communities",
    color: `${colors.progressGreen}, ${colors.softLavender}`
  },
  {
    icon: Stethoscope,
    title: "SUD Outpatient Providers",
    description: "Clinical practices needing remote monitoring",
    color: `${colors.recoveryBlue}, ${colors.progressGreen}`
  },
  {
    icon: Users,
    title: "AA / NA Chapters",
    description: "12-step programs embracing technology",
    color: `${colors.softLavender}, ${colors.alertOrange}`
  },
  {
    icon: Home,
    title: "Medicaid Providers / Reentry Housing",
    description: "Supporting vulnerable populations",
    color: `${colors.alertOrange}, ${colors.progressGreen}`
  },
  {
    icon: Briefcase,
    title: "Corporate Sponsors",
    description: "Employee wellness programs and EAP partnerships",
    color: `${colors.recoveryBlue}, ${colors.progressGreen}`
  },
  {
    icon: Shield,
    title: "Veterans Affairs & Military Support Orgs",
    description: "Serving those who served with honor-based recovery",
    color: `${colors.alertOrange}, ${colors.recoveryBlue}`
  }
];

export default function MarketSection() {
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
          <h2 className="text-4xl lg:text-6xl font-bold" style={{ fontFamily: fonts.heading }}>
            B2B <span className="gradient-text">Market Fit</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className=""
            >
              <div className="card-glass p-8 h-full flex flex-col items-center text-center space-y-4 group cursor-pointer">
                <div className="p-4 rounded-full group-hover:scale-110 transition-transform" style={{ background: `linear-gradient(to bottom right, ${market.color})` }}>
                  <market.icon className="w-8 h-8" style={{ color: colors.white }} />
                </div>
                
                <h3 className="font-bold text-xl" style={{ fontFamily: fonts.heading }}>
                  {market.title}
                </h3>
                
                <p className="text-sm" style={{ color: colors.slateGray }}>
                  {market.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}