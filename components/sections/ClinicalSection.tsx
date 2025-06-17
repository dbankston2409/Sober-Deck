"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const comparisonData = [
  // User Experience
  { feature: "Badge System", soberLogic: true, reset: false },
  { feature: "Passive Geofence Detection (App Req.)", soberLogic: true, reset: false },
  { feature: "GPS Confirmation Burst", soberLogic: true, reset: false },
  { feature: "Danger Zone Rotation Engine", soberLogic: true, reset: false },
  { feature: "Hybrid App + SMS Support", soberLogic: true, reset: false },
  { feature: "Wallet Pass Integration (Legacy)", soberLogic: true, reset: false },
  { feature: "Audio Motivational Clips", soberLogic: true, reset: false },
  { feature: "Faith-Ready Content", soberLogic: true, reset: false },
  // Crisis & Support
  { feature: "Crisis Hotline Access", soberLogic: true, reset: true },
  { feature: "Sponsor Contact Shortcut", soberLogic: true, reset: false },
  { feature: "AI-Powered Risk Scoring", soberLogic: true, reset: false },
  { feature: "Admin Dashboard & Real-Time Logs", soberLogic: true, reset: true },
  // Clinical Content
  { feature: "CBT Modules", soberLogic: true, reset: true },
  { feature: "12-Step Integration", soberLogic: true, reset: true },
  { feature: "Narrative Therapy", soberLogic: true, reset: false },
  { feature: "Community Finder (AA, Church, Rehab)", soberLogic: true, reset: false },
  // Technical Features
  { feature: "Offline Functionality", soberLogic: true, reset: false },
  { feature: "Multi-Language Support", soberLogic: true, reset: false },
  { feature: "HIPAA Compliant", soberLogic: true, reset: true },
];

export default function ClinicalSection() {
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
            Clinical Foundation + <span className="gradient-text">Technology Backbone</span>
          </h2>
          
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.slateGray }}
          >
            Recovery Backed by Science — Delivered with Intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-card"
        >
          <div className="card-glass p-1">
            <table className="w-full">
              <thead>
                <tr 
                  className="border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <th 
                    className="text-left p-4 text-lg"
                    style={{ fontFamily: fonts.heading }}
                  >
                    Feature
                  </th>
                  <th 
                    className="text-center p-4 text-lg"
                    style={{ fontFamily: fonts.heading, color: colors.recoveryBlue }}
                  >
                    Sober Logic
                  </th>
                  <th 
                    className="text-center p-4 text-lg"
                    style={{ fontFamily: fonts.heading, color: colors.slateGray }}
                  >
                    reSET / reSET-O
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="border-b hover:bg-white/5 transition-colors"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <td className="p-4 text-sm">{row.feature}</td>
                    <td className="p-4 text-center">
                      <Check 
                        className="w-5 h-5 mx-auto"
                        style={{ color: colors.progressGreen }}
                      />
                    </td>
                    <td className="p-4 text-center">
                      {row.reset ? (
                        <Check 
                          className="w-5 h-5 mx-auto"
                          style={{ color: colors.progressGreen }}
                        />
                      ) : (
                        <X 
                          className="w-5 h-5 mx-auto"
                          style={{ color: colors.alertOrange }}
                        />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p 
            className="text-lg italic"
            style={{ color: colors.slateGray }}
          >
            Sober Logic is the first system that brings clinical logic into the real world—without the barriers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}