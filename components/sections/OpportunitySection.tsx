"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { colors, fonts } from "@/lib/styles";

export default function OpportunitySection() {
  return (
    <section className="section-height section-padding flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center mb-6">
            <div 
              className="p-4 rounded-full"
              style={{ backgroundColor: `${colors.recoveryBlue}22` }}
            >
              <Compass className="w-12 h-12" style={{ color: colors.recoveryBlue }} />
            </div>
          </div>
          
          <h2 
            className="text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: fonts.heading }}
          >
            <span className="text-4xl">🧭</span> The Opportunity You've Been Waiting For
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
          style={{ color: colors.white, lineHeight: '1.8' }}
        >
          <p className="text-lg leading-relaxed mb-6">
            There are moments in the evolution of technology when the right solution emerges at precisely the right time. When market need, technical innovation, and human compassion converge into something that feels inevitable. This is one of those moments.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            In the medical SaaS landscape, we've watched companies build billion-dollar valuations on narrow slices of the behavioral health market. But they've all made the same mistake — they've built for the privileged few who have smartphones, data plans, and the cognitive bandwidth to manage another app. Meanwhile, tens of millions of Americans struggling with addiction are left behind, cycling through crisis after crisis, costing our healthcare system billions while human potential withers.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Sober Logic changes everything. We've built real infrastructure in this massive category — a platform that works through simple text messages and wallet passes, requiring no app downloads, no GPS permissions, no technical sophistication. Our patented geofence-based tracking system creates an entirely new class of passive behavioral monitoring that courts, clinics, ministries, and insurers can deploy without complex integrations. This isn't just software; it's a new standard for how recovery support should work.
          </p>

          <p className="text-lg leading-relaxed mb-6" style={{ color: colors.white }}>
            The market opportunity is staggering. Every rehab facility, every drug court, every outpatient clinic, every faith-based recovery program needs this. But here's what makes this special: our business model creates a virtuous cycle where institutional licenses directly subsidize free access for individuals in crisis. When a court system licenses our platform, we can immediately equip local shelters, reentry programs, and recovery ministries at no cost. We're building something where doing good amplifies the bottom line rather than competing with it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            From a financial perspective, this opportunity checks every box. We're grant-aligned with millions in government funding already earmarked for innovative addiction solutions. Our license-based revenue model scales elegantly from single facilities to entire state systems. The IP portfolio we're building — from our zone reconstruction algorithms to our behavioral trigger logic — creates lasting defensibility and licensing opportunities across adjacent markets. This is exactly the kind of platform that commands premium multiples in acquisition scenarios.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            But perhaps most compelling is how we've structured this for long-term wealth creation. Our dual-entity model optimizes for both impact and returns, with revenue flowing through structures designed for asset protection and tax efficiency. This isn't just about building a successful software company — it's about creating a generational wealth engine that compounds social good with financial returns.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            We've done the hard part. A small, elite team with deep technical and recovery sector expertise has built the system logic, validated the approach, and proven the model. The infrastructure is ready. The market is desperate for this solution. The funding pathways are clear. What we need now are aligned partners who understand that the best businesses of the next decade will be those that solve real human problems at scale.
          </p>

          <motion.p 
            className="text-xl leading-relaxed font-semibold text-center mt-12"
            style={{ color: colors.recoveryBlue }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            This is your invitation to join a movement that saves lives while building wealth. To back a platform that every mayor, every judge, every treatment center director will thank you for bringing to their community. To be part of proving that the most profitable businesses of our time will be those with the deepest purpose.
          </motion.p>

          <motion.p 
            className="text-2xl leading-relaxed font-bold text-center mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            The infrastructure is built. The need is urgent. The time is now.
          </motion.p>

          <motion.p 
            className="text-3xl leading-relaxed font-bold text-center mt-8"
            style={{ 
              background: `linear-gradient(to right, ${colors.recoveryBlue}, ${colors.progressGreen})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            Welcome to Sober Logic.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}