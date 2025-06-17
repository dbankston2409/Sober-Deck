"use client";

import { motion } from "framer-motion";
import { RefreshCw, Users, AlertTriangle, Scale } from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const stats = [
  { 
    icon: RefreshCw, 
    value: "85%", 
    label: "relapse rate", 
    color: colors.alertOrange 
  },
  { 
    icon: Users, 
    value: "1 in 10", 
    label: "gets continued care", 
    color: colors.slateGray 
  },
  { 
    icon: Scale, 
    value: "47%", 
    label: "of inmates meet SUD criteria", 
    color: colors.alertOrange 
  },
  { 
    icon: AlertTriangle, 
    value: "49M", 
    label: "Americans w/ SUD", 
    color: colors.recoveryBlue 
  },
  { 
    icon: Users, 
    value: "2M+", 
    label: "in AA today", 
    color: colors.progressGreen 
  },
];

export default function ProblemSection() {
  return (
    <section className="section-height section-padding flex flex-col justify-center pb-0 md:pb-0 lg:pb-0">
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
            Relapse doesn't mean <span style={{ color: colors.alertOrange }}>failure</span>.
            <br />
            It means they were <span className="gradient-text">alone</span>.
          </h2>
          
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.slateGray }}
          >
            Traditional apps track clean days. They don't intervene, adapt, or act.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="card-glass p-6 text-center space-y-4"
            >
              <stat.icon 
                className="w-10 h-10 mx-auto"
                style={{ color: stat.color }}
              />
              <div 
                className="text-3xl font-bold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <p 
                className="text-sm"
                style={{ color: colors.slateGray }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="card-glass p-8 lg:p-12">
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
              {["Trigger", "Craving", "Silence", "Relapse", "Shame", "Isolation"].map((step, index) => (
                <div key={index} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div 
                      className="p-4 rounded-full mb-2"
                      style={{ backgroundColor: `${colors.alertOrange}33` }}
                    >
                      <div 
                        className="w-16 h-16 flex items-center justify-center font-bold"
                        style={{ color: colors.alertOrange }}
                      >
                        {step}
                      </div>
                    </div>
                  </motion.div>
                  {index < 5 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.1 }}
                      className="w-8 lg:w-16 h-0.5 mx-2"
                      style={{ backgroundColor: `${colors.alertOrange}80` }}
                    />
                  )}
                </div>
              ))}
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="text-center mt-8 text-lg"
              style={{ color: colors.slateGray }}
            >
              🔐 This is the loop we're here to break.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}