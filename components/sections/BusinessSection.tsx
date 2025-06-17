"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Calendar } from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const pricingTiers = {
  "Private Rehabs": [
    { users: "50", price: "$4,950", perUser: "$99" },
    { users: "100", price: "$8,900", perUser: "$89" },
    { users: "200+", price: "Custom", perUser: "$79" }
  ],
  "Court Programs": [
    { users: "100", price: "$7,900", perUser: "$79" },
    { users: "250", price: "$17,250", perUser: "$69" },
    { users: "500+", price: "Custom", perUser: "$59" }
  ],
  "Nonprofits": [
    { users: "25", price: "$1,975", perUser: "$79" },
    { users: "50", price: "$3,450", perUser: "$69" },
    { users: "100+", price: "Custom", perUser: "$59" }
  ]
};

const cptCodes = [
  { code: "99457", description: "Remote monitoring, first 20 min", rate: "$50-120" },
  { code: "99458", description: "Remote monitoring, additional 20 min", rate: "$40-80" },
  { code: "99091", description: "Collection/interpretation of data", rate: "$50-80" },
  { code: "G2012", description: "Virtual check-in", rate: "$15-25" }
];

const milestones = [
  { year: "Year 1", users: "1,000", mrr: "$89K", color: colors.recoveryBlue },
  { year: "Year 2", users: "5,000", mrr: "$395K", color: colors.softLavender },
  { year: "Year 3", users: "15,000", mrr: "$1.05M", color: colors.progressGreen }
];

export default function BusinessSection() {
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
          <h2 
            className="text-4xl lg:text-6xl font-bold"
            style={{ fontFamily: fonts.heading }}
          >
            Business Model & <span className="gradient-text">Growth Plan</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 
              className="text-2xl font-bold mb-6 text-center"
              style={{ fontFamily: fonts.heading }}
            >
              Per-User Pricing by Vertical
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {Object.entries(pricingTiers).map(([vertical, tiers], vIndex) => (
                <motion.div
                  key={vertical}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: vIndex * 0.1 }}
                  className="card-glass p-6 space-y-4"
                >
                  <h4 
                    className="font-bold text-lg"
                    style={{ fontFamily: fonts.heading, color: colors.recoveryBlue }}
                  >
                    {vertical}
                  </h4>
                  <div className="space-y-3">
                    {tiers.map((tier, index) => (
                      <div 
                        key={index} 
                        className="flex justify-between items-center py-2 border-b last:border-0"
                        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                      >
                        <span style={{ color: colors.slateGray }}>{tier.users} users</span>
                        <div className="text-right">
                          <span className="font-bold" style={{ color: colors.white }}>{tier.price}</span>
                          <span className="text-xs block" style={{ color: colors.slateGray }}>{tier.perUser}/user</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="card-glass p-6 space-y-4">
              <h3 
                className="text-xl font-bold flex items-center gap-2"
                style={{ fontFamily: fonts.heading }}
              >
                <DollarSign className="w-6 h-6" style={{ color: colors.recoveryBlue }} />
                CPT Billing Codes
              </h3>
              <div className="space-y-3">
                {cptCodes.map((code, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-start py-2 border-b last:border-0"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <div>
                      <span className="font-mono font-bold" style={{ color: colors.recoveryBlue }}>{code.code}</span>
                      <p className="text-xs mt-1" style={{ color: colors.slateGray }}>{code.description}</p>
                    </div>
                    <span className="font-semibold" style={{ color: colors.progressGreen }}>{code.rate}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-6 space-y-4">
              <h3 
                className="text-xl font-bold flex items-center gap-2"
                style={{ fontFamily: fonts.heading }}
              >
                <TrendingUp className="w-6 h-6" style={{ color: colors.progressGreen }} />
                Cost-Benefit Analysis
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span style={{ color: colors.slateGray }}>Sober Logic Cost</span>
                  <span className="text-2xl font-bold" style={{ color: colors.recoveryBlue }}>$129/mo</span>
                </div>
                <div className="text-center py-2">
                  <span style={{ color: colors.slateGray }}>vs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: colors.slateGray }}>Average Relapse Cost</span>
                  <span className="text-2xl font-bold" style={{ color: colors.alertOrange }}>$10,000</span>
                </div>
                <div 
                  className="pt-4 border-t"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <p className="text-sm font-semibold" style={{ color: colors.progressGreen }}>
                    77.5x ROI on relapse prevention
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-glass p-8"
          >
            <h3 
              className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2"
              style={{ fontFamily: fonts.heading }}
            >
              <Calendar className="w-6 h-6" style={{ color: colors.softLavender }} />
              3-Year Growth Trajectory
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center space-y-2"
                >
                  <div className="text-4xl font-bold" style={{ color: milestone.color }}>
                    {milestone.mrr}
                  </div>
                  <div className="text-lg font-semibold">{milestone.year}</div>
                  <div style={{ color: colors.slateGray }}>{milestone.users} users</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p 
            className="text-2xl"
            style={{ fontFamily: fonts.heading, color: colors.slateGray }}
          >
            Sober Logic is the recovery <span style={{ color: colors.white }}>infrastructure layer</span> — 
            for everyone apps can't reach.
          </p>
        </motion.div>
      </div>
    </section>
  );
}