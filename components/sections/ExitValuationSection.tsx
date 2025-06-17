"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, DollarSign, Target, Sparkles } from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const valuationData = {
  low: {
    name: "Low Growth",
    icon: "🔹",
    year3ARR: 19214796, // Sum of Year 3 annual revenue from all tiers
    multiples: [
      { multiple: 6, value: 115288776, color: colors.slateGray, label: "Baseline SaaS" },
      { multiple: 8, value: 153718368, color: colors.recoveryBlue, label: "Niche Dominant" },
      { multiple: 12, value: 230577552, color: colors.alertOrange, label: "Health SaaS", highlight: true },
      { multiple: 16, value: 307436736, color: "#DC2626", label: "Clinical-Grade", highlight: true },
      { multiple: 20, value: 384295920, color: colors.softLavender, label: "Digital Therapeutics" }
    ]
  },
  medium: {
    name: "Medium Growth",
    icon: "🔸",
    year3ARR: 32722656, // Sum of Year 3 annual revenue from all tiers
    multiples: [
      { multiple: 6, value: 196335936, color: colors.slateGray, label: "Baseline SaaS" },
      { multiple: 8, value: 261781248, color: colors.recoveryBlue, label: "Niche Dominant" },
      { multiple: 12, value: 392671872, color: colors.alertOrange, label: "Health SaaS", highlight: true },
      { multiple: 16, value: 523562496, color: "#DC2626", label: "Clinical-Grade", highlight: true },
      { multiple: 20, value: 654453120, color: colors.softLavender, label: "Digital Therapeutics" }
    ]
  },
  high: {
    name: "High Growth",
    icon: "🔺",
    year3ARR: 48803636, // Sum of Year 3 annual revenue from all tiers
    multiples: [
      { multiple: 6, value: 292821816, color: colors.slateGray, label: "Baseline SaaS" },
      { multiple: 8, value: 390429088, color: colors.recoveryBlue, label: "Niche Dominant" },
      { multiple: 12, value: 585643632, color: colors.alertOrange, label: "Health SaaS", highlight: true },
      { multiple: 16, value: 780858176, color: "#DC2626", label: "Clinical-Grade", highlight: true },
      { multiple: 20, value: 976072720, color: colors.softLavender, label: "Digital Therapeutics" }
    ]
  }
};

export default function ExitValuationSection() {
  const [selectedTrack, setSelectedTrack] = useState<'low' | 'medium' | 'high'>('medium');
  const currentData = valuationData[selectedTrack];

  const formatCurrency = (num: number) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatARR = (num: number) => {
    return `$${(num / 1000000).toFixed(2)}M`;
  };

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
            Revenue → Valuation: What Sober Logic Could Be Worth at Exit
          </h2>
          <p 
            className="text-lg"
            style={{ color: colors.slateGray }}
          >
            Powered by Annual Recurring Revenue (ARR) × Exit Multiples
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4"
        >
          {Object.entries(valuationData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setSelectedTrack(key as 'low' | 'medium' | 'high')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2`}
              style={{
                backgroundColor: selectedTrack === key ? colors.recoveryBlue : colors.graphiteOverlay,
                color: selectedTrack === key ? colors.white : colors.slateGray
              }}
            >
              <span className="text-xl">{data.icon}</span>
              {data.name}
            </button>
          ))}
        </motion.div>

        {/* Year 3 ARR Display */}
        <motion.div
          key={`${selectedTrack}-arr`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="card-glass p-8 inline-block">
            <div className="flex items-center gap-4">
              <Target className="w-8 h-8" style={{ color: colors.progressGreen }} />
              <div>
                <p className="text-sm" style={{ color: colors.slateGray }}>Year 3 Annual Recurring Revenue</p>
                <h3 
                  className="text-5xl font-bold"
                  style={{ fontFamily: fonts.heading, color: colors.white }}
                >
                  {formatARR(currentData.year3ARR)}
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Valuation Range Table */}
        <motion.div
          key={`${selectedTrack}-valuation`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-glass p-8"
        >
          <h3 
            className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <DollarSign className="w-6 h-6" style={{ color: colors.progressGreen }} />
            Valuation Range Based on Exit Multiple
          </h3>
          
          <div className="space-y-4">
            {currentData.multiples.map((item, index) => (
              <motion.div
                key={item.multiple}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`grid grid-cols-12 gap-4 items-center p-4 rounded-lg ${
                  item.highlight ? 'ring-2' : ''
                }`}
                style={{
                  backgroundColor: item.highlight ? `${item.color}11` : 'transparent',
                  borderColor: item.highlight ? item.color : 'transparent'
                }}
              >
                <div className="col-span-2 text-center">
                  <div 
                    className="text-2xl font-bold"
                    style={{ color: item.color }}
                  >
                    {item.multiple}×
                  </div>
                </div>
                
                <div className="col-span-4">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm" style={{ color: colors.slateGray }}>
                      {item.label}
                    </span>
                  </div>
                </div>
                
                <div className="col-span-6 text-right">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      delay: 0.5 + index * 0.1,
                      stiffness: 200
                    }}
                    className="inline-block"
                  >
                    <span 
                      className="text-3xl font-bold"
                      style={{ color: colors.white }}
                    >
                      {formatCurrency(item.value)}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Realistic Range Highlight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" 
              style={{ backgroundColor: `${colors.recoveryBlue}22` }}
            >
              <Sparkles className="w-5 h-5" style={{ color: colors.recoveryBlue }} />
              <span className="text-sm font-semibold" style={{ color: colors.white }}>
                Sober Logic's Realistic Target: 12× – 16× Multiple
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 text-center"
        >
          <div className="card-glass p-6">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold mb-2">Conservative Exit</h4>
            <p className="text-sm" style={{ color: colors.slateGray }}>
              8× ARR = {formatCurrency(currentData.multiples[1].value)}
            </p>
          </div>
          
          <div className="card-glass p-6" style={{ borderColor: colors.recoveryBlue }}>
            <div className="text-2xl mb-2">🚀</div>
            <h4 className="font-semibold mb-2">Target Exit</h4>
            <p className="text-sm" style={{ color: colors.slateGray }}>
              12–16× ARR = {formatCurrency(currentData.multiples[2].value)}–{formatCurrency(currentData.multiples[3].value)}
            </p>
          </div>
          
          <div className="card-glass p-6">
            <div className="text-2xl mb-2">💎</div>
            <h4 className="font-semibold mb-2">Optimal Exit</h4>
            <p className="text-sm" style={{ color: colors.slateGray }}>
              20× ARR = {formatCurrency(currentData.multiples[4].value)}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}