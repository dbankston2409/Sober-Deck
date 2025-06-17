"use client";

import { motion } from "framer-motion";
import { 
  Shield, Smartphone, MapPin, Brain, 
  MessageSquare, Activity, Lock, Award,
  FileText, Copyright, Sparkles
} from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const patentableInventions = [
  {
    icon: Shield,
    title: "Passive Danger Zone Detection Engine",
    description: "Detects entry into high-risk locations using native geofencing and GPS bursts, all in the background — no user input required.",
    color: colors.recoveryBlue
  },
  {
    icon: MapPin,
    title: "Burst-Based GPS Confirmation System",
    description: "Verifies whether a user is actually inside a danger zone (not just near it) by initiating a precise GPS tracking burst after geofence entry.",
    color: colors.alertOrange
  },
  {
    icon: Brain,
    title: "Behavioral Risk Scoring Engine",
    description: "Relapse risk calculated from mood logs, cravings, zone visits, and time-decay — used to trigger just-in-time interventions.",
    color: colors.progressGreen
  },
  {
    icon: MessageSquare,
    title: "Multi-Modal AI Intervention Delivery",
    description: "SMS, push, and real-time audio (via ElevenLabs) deliver context-aware messages based on risk level, behavior, and location.",
    color: colors.softLavender
  },
  {
    icon: Activity,
    title: "Danger Zone Rotation Logic",
    description: "Manages a live pool of 20 geofences, dynamically replacing them based on user movement and profile — solving OS limitations intelligently.",
    color: colors.recoveryBlue
  },
  {
    icon: Brain,
    title: "Adaptive Recovery Track Selector",
    description: "Routes users through CBT, 12-Step, or Faith-based modules based on behavioral patterns, usage signals, and live risk data.",
    color: colors.progressGreen
  }
];

const patentClaims = [
  "Hybrid trigger system: geofence initiates, GPS confirms presence",
  "Danger zone cataloging via 3rd-party data (e.g. Google Places)",
  "Burst-based verification to minimize battery drain and false positives",
  "Intervention engine activated only upon confirmed entry + behavioral risk",
  "Fully background-capable, runs even when app is closed"
];

const ipProtections = [
  {
    icon: FileText,
    title: "Utility Patents",
    description: "System and method claims (pending)",
    emoji: "✔️"
  },
  {
    icon: Award,
    title: "Trademarks",
    description: "Sober Logic™, Temptation Zone™, Recovery Radar™, Safe Zone™, etc.",
    emoji: "✔️"
  },
  {
    icon: Copyright,
    title: "Copyrights",
    description: "Audio messages, badge visuals, recovery scripts, micro-missions",
    emoji: "✔️"
  }
];

export default function IPStrategySection() {
  return (
    <section className="section-height section-padding flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full space-y-12">
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
            Protecting Our Innovation: The IP Behind Sober Logic
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.slateGray }}
          >
            Novel, patentable inventions that create a defensible competitive moat
          </p>
        </motion.div>

        {/* Patentable Inventions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 
            className="text-2xl font-bold mb-6 flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <Shield className="w-6 h-6" style={{ color: colors.recoveryBlue }} />
            📌 Patentable Inventions
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patentableInventions.map((invention, index) => (
              <motion.div
                key={invention.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-glass p-6 space-y-4"
              >
                <div 
                  className="p-3 rounded-lg inline-block"
                  style={{ backgroundColor: `${invention.color}22` }}
                >
                  <invention.icon 
                    className="w-6 h-6"
                    style={{ color: invention.color }}
                  />
                </div>
                
                <h4 className="font-bold text-lg">{invention.title}</h4>
                
                <p 
                  className="text-sm"
                  style={{ color: colors.slateGray }}
                >
                  {invention.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Patent Example */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-8 lg:p-10"
          style={{ 
            borderColor: colors.progressGreen,
            background: `linear-gradient(135deg, ${colors.graphiteOverlay}cc, ${colors.progressGreen}11)`
          }}
        >
          <h3 
            className="text-2xl font-bold mb-6 flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <Brain className="w-6 h-6" style={{ color: colors.progressGreen }} />
            🧠 Core Patent Example – Passive Relapse Detection & Precision Triggering
          </h3>
          
          <div className="bg-black/20 rounded-lg p-6 mb-6">
            <h4 
              className="text-xl font-semibold mb-4"
              style={{ color: colors.white }}
            >
              "System and Method for Detecting Behavioral Risk via Compound Geofence and GPS-Confirmed Location Triggers"
            </h4>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold mb-3" style={{ color: colors.recoveryBlue }}>
                  Claims to include:
                </p>
                <ul className="space-y-2">
                  {patentClaims.map((claim, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span style={{ color: colors.progressGreen }}>•</span>
                      <span className="text-sm" style={{ color: colors.slateGray }}>
                        {claim}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-4 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <p className="text-sm italic" style={{ color: colors.white }}>
                  This is a next-gen behavioral sensing system — fusing geolocation, behavioral intelligence, and multi-channel intervention into a seamless mobile experience.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Additional IP Protections */}
        <div className="grid md:grid-cols-3 gap-6">
          {ipProtections.map((protection, index) => (
            <motion.div
              key={protection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-6 text-center space-y-4"
            >
              <div className="flex justify-center">
                <div 
                  className="p-4 rounded-full"
                  style={{ backgroundColor: `${colors.recoveryBlue}22` }}
                >
                  <protection.icon 
                    className="w-8 h-8"
                    style={{ color: colors.recoveryBlue }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl">{protection.emoji}</span>
                  <h4 
                    className="text-xl font-bold"
                    style={{ fontFamily: fonts.heading }}
                  >
                    {protection.title}
                  </h4>
                </div>
                <p 
                  className="text-sm"
                  style={{ color: colors.slateGray }}
                >
                  {protection.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* IP Moat Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-8 text-center"
          style={{ 
            borderColor: colors.softLavender,
            background: `linear-gradient(135deg, ${colors.graphiteOverlay}cc, ${colors.softLavender}11)`
          }}
        >
          <Sparkles 
            className="w-12 h-12 mx-auto mb-4"
            style={{ color: colors.softLavender }}
          />
          
          <h3 
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: fonts.heading, color: colors.white }}
          >
            This Isn't Just an App — It's a Platform with Defensible Infrastructure
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {[
              "Unique behavioral logic engine",
              "Court and clinic integration potential",
              "Patent-pending mobile sensing technology",
              "Clinical and B2B CPT billing structures"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <Lock 
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: colors.softLavender }}
                />
                <span className="text-sm" style={{ color: colors.white }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}