"use client";

import { motion } from "framer-motion";
import { 
  Brain, MapPin, MessageSquare, Gamepad2, 
  Phone, Shield, BarChart3, Map 
} from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const pillars = [
  {
    icon: MapPin,
    title: "Geofencing & Danger Zones",
    description: "Passive app-based detection of danger zones that triggers support the moment a user enters a high-risk area.",
    tag: "Real-Time Triggered",
    color: `${colors.softLavender}, ${colors.recoveryBlue}`
  },
  {
    icon: Brain,
    title: "Therapeutic Engine",
    description: "CBT, 12-Step, Narrative, and Faith-based approaches integrated seamlessly",
    tag: "Multi-Modal",
    color: `${colors.recoveryBlue}, ${colors.softLavender}`
  },
  {
    icon: MessageSquare,
    title: "Behavioral Nudges & Audio",
    description: "Timely interventions with motivational audio clips delivered via SMS",
    tag: "SMS-Only",
    color: `${colors.recoveryBlue}, ${colors.progressGreen}`
  },
  {
    icon: Phone,
    title: "Low-Barrier Recovery Support",
    description: "App-enabled or SMS-based tracking of cravings, mood, and progress streaks.",
    tag: "Hybrid Support",
    color: `${colors.progressGreen}, ${colors.recoveryBlue}`
  },
  {
    icon: Gamepad2,
    title: "Dynamic Recovery Badges",
    description: "Real-time, app-based milestone badges that evolve with each user's streaks, progress, and recovery wins",
    tag: "Engaging",
    color: `${colors.softLavender}, ${colors.alertOrange}`
  },
  {
    icon: Shield,
    title: "Crisis Access Tools",
    description: "1-tap suicide hotline and sponsor contact for immediate support",
    tag: "24/7 Support",
    color: `${colors.alertOrange}, ${colors.recoveryBlue}`
  },
  {
    icon: BarChart3,
    title: "Risk Scoring & Admin Triage",
    description: "Smart algorithms identify who needs help most urgently",
    tag: "AI-Powered",
    color: `${colors.recoveryBlue}, ${colors.softLavender}`
  },
  {
    icon: Map,
    title: "Safe Space Finder",
    description: "Locate AA meetings, churches, and rehab centers nearby",
    tag: "Community",
    color: `${colors.progressGreen}, ${colors.softLavender}`
  }
];

export default function SolutionSection() {
  return (
    <section className="section-height section-padding flex flex-col justify-center pt-8 md:pt-12 lg:pt-16">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl lg:text-6xl font-bold" style={{ fontFamily: fonts.heading }}>
            Our Solution: <span className="gradient-text">Sober Logic</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card-glass p-6 space-y-4 group"
            >
              <div className="p-3 rounded-lg inline-block" style={{ background: `linear-gradient(to bottom right, ${pillar.color})` }}>
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="font-bold text-xl" style={{ fontFamily: fonts.heading }}>
                {pillar.title}
              </h3>
              
              <p className="text-sm" style={{ color: colors.slateGray }}>
                {pillar.description}
              </p>
              
              <div className="inline-block">
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: colors.recoveryBlue }}>
                  {pillar.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl" style={{ fontFamily: fonts.heading, color: colors.slateGray }}>
            Recovery that <span style={{ color: colors.white }}>listens</span>. 
            That <span style={{ color: colors.white }}>adapts</span>. 
            That <span style={{ color: colors.white }}>acts</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}