"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import { colors, fonts } from "@/lib/styles";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section-height section-padding flex flex-col justify-center relative overflow-hidden pb-0 md:pb-0 lg:pb-0">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 w-full"
          >
            <Image
              src="/sober-logic-logo.png"
              alt="Sober Logic Logo"
              width={600}
              height={200}
              className="object-contain w-full max-w-md"
            />
          </motion.div>

          <h1 
            className="text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: fonts.heading }}
          >
            The Future of{" "}
            <span className="gradient-text">Recovery</span>
          </h1>

          <p 
            className="text-xl lg:text-2xl font-light"
            style={{ color: colors.slateGray }}
          >
            Clinically inspired. Behaviorally intelligent. Recovery that follows you.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative mx-auto w-[300px] h-[600px]">
            <div 
              className="absolute inset-0 rounded-[3rem] blur-3xl"
              style={{ 
                background: `linear-gradient(to bottom, ${colors.recoveryBlue}33, ${colors.softLavender}33)` 
              }}
            />
            
            <div 
              className="relative rounded-[3rem] p-4 h-full border"
              style={{ 
                backgroundColor: colors.graphiteOverlay,
                borderColor: 'rgba(255,255,255,0.1)' 
              }}
            >
              <div 
                className="rounded-[2.5rem] h-full flex flex-col items-center justify-center p-8"
                style={{ backgroundColor: colors.charcoalBlack }}
              >
                
                <div className="space-y-4 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="card-glass p-4 text-sm"
                  >
                    <div 
                      className="font-semibold mb-1"
                      style={{ color: colors.recoveryBlue }}
                    >
                      🛰️ Geofence System Armed
                    </div>
                    <div 
                      className="text-xs"
                      style={{ color: colors.slateGray }}
                    >
                      Real-time zone detection is active
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="card-glass p-4 text-sm"
                    style={{ borderColor: `${colors.alertOrange}80` }}
                  >
                    <div 
                      className="font-semibold mb-1"
                      style={{ color: colors.alertOrange }}
                    >
                      ⚠️ Entering Danger Zone
                    </div>
                    <div 
                      className="text-xs"
                      style={{ color: colors.slateGray }}
                    >
                      Risk location confirmed — preparing intervention
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="card-glass p-4 text-sm"
                  >
                    <div 
                      className="font-semibold mb-1"
                      style={{ color: colors.progressGreen }}
                    >
                      🗣️ SMS Audio Message Sent
                    </div>
                    <div 
                      className="text-xs"
                      style={{ color: colors.slateGray }}
                    >
                      Motivational support triggered on entry
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: colors.recoveryBlue }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: colors.softLavender }}
      />
    </section>
  );
}