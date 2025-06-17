"use client";

import { motion } from "framer-motion";
import { colors } from "@/lib/styles";
import Image from "next/image";

export default function FooterSection() {
  return (
    <section 
      className="section-padding" 
      style={{ 
        backgroundColor: colors.background,
        paddingTop: '8rem',
        paddingBottom: '8rem'
      }}
    >
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            <div 
              className="absolute inset-0 blur-3xl opacity-20"
              style={{
                background: `radial-gradient(circle, ${colors.recoveryBlue} 0%, transparent 70%)`
              }}
            />
            <Image
              src="/sober-logic-logo.png"
              alt="Sober Logic"
              width={900}
              height={900}
              className="relative z-10"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(51, 102, 255, 0.3))'
              }}
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-2xl" style={{ color: colors.grayLight }}>
            Transforming behavioral recovery through technology
          </p>
        </motion.div>
      </div>
    </section>
  );
}