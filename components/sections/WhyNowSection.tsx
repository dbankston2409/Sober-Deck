"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, Lock, Globe, Building2, 
  DollarSign, FileText, Settings 
} from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const reasons = [
  {
    icon: TrendingUp,
    emoji: "📊",
    title: "Medical SaaS",
    description: "Operating in the fastest-growing category in healthtech — $44B and accelerating."
  },
  {
    icon: Lock,
    emoji: "🔒",
    title: "Patentable, Licensable IP",
    description: "Behavioral logic + passive zone system create defensible moats no competitor can replicate."
  },
  {
    icon: Globe,
    emoji: "🌍",
    title: "Massive Market Need",
    description: "46M Americans struggle with addiction — existing tools reach less than 8% effectively."
  },
  {
    icon: Building2,
    emoji: "🏛️",
    title: "Foundation-Backed Impact",
    description: "Nonprofit arm ensures free access for those in crisis while boosting our fundability."
  },
  {
    icon: DollarSign,
    emoji: "💸",
    title: "Fundable + Scalable",
    description: "Eligible for $10M+ in federal grants; licensable from single clinics to entire states."
  },
  {
    icon: FileText,
    emoji: "🧾",
    title: "Built for Wealth Creation",
    description: "Dual-entity structure: tax-efficient, asset-protected, optimized for generational returns."
  },
  {
    icon: Settings,
    emoji: "⚙️",
    title: "Execution-Ready Team",
    description: "Lean, proven team with system built, tested, validated — ready to scale nationally today."
  }
];

export default function WhyNowSection() {
  return (
    <section className="section-height section-padding flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full space-y-12">
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
            <span className="text-4xl">🧭</span> The Opportunity You've Been Waiting For
          </h2>
        </motion.div>

        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 group"
            >
              <motion.div 
                className="flex-shrink-0 text-3xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {reason.emoji}
              </motion.div>
              
              <div className="flex-1">
                <h3 
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: fonts.heading, color: colors.white }}
                >
                  {reason.title}
                </h3>
                <p 
                  className="text-lg"
                  style={{ color: colors.slateGray }}
                >
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center space-y-4"
        >
          <p 
            className="text-2xl font-bold"
            style={{ color: colors.white }}
          >
            The infrastructure is built. The need is urgent. The time is now.
          </p>
          <p 
            className="text-3xl font-bold"
            style={{ 
              background: `linear-gradient(to right, ${colors.recoveryBlue}, ${colors.progressGreen})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Welcome to Sober Logic.
          </p>
        </motion.div>

      </div>
    </section>
  );
}