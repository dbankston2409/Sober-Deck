"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { DollarSign, TrendingUp, PieChart } from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const revenueData = {
  low: {
    tiers: [
      { name: "$59 Tier", revenue: 9410000, percentage: 30.7, color: "#3366FF" },
      { name: "$79 Tier", revenue: 7370000, percentage: 24.0, color: "#FF9500" },
      { name: "$149 Tier", revenue: 13890000, percentage: 45.3, color: "#00B57A" }
    ],
    total: 30670000
  },
  medium: {
    tiers: [
      { name: "$59 Tier", revenue: 14119000, percentage: 35.6, color: "#3366FF" },
      { name: "$79 Tier", revenue: 14736660, percentage: 37.2, color: "#FF9500" },
      { name: "$149 Tier", revenue: 27794460, percentage: 70.2, color: "#00B57A" }
    ],
    total: 39600000
  },
  high: {
    tiers: [
      { name: "$59 Tier", revenue: 18825720, percentage: 28.7, color: "#3366FF" },
      { name: "$79 Tier", revenue: 22104516, percentage: 33.7, color: "#FF9500" },
      { name: "$149 Tier", revenue: 41690796, percentage: 63.6, color: "#00B57A" }
    ],
    total: 65600000
  }
};

export default function RevenueBreakdownSection() {
  const [selectedTrack, setSelectedTrack] = useState<'low' | 'medium' | 'high'>('medium');
  const currentData = revenueData[selectedTrack];

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatMillions = (num: number) => {
    return `$${(num / 1000000).toFixed(1)}M`;
  };

  // Calculate rotation for pie segments
  let cumulativePercentage = 0;
  const pieSegments = currentData.tiers.map((tier) => {
    const startAngle = cumulativePercentage * 3.6; // Convert percentage to degrees
    cumulativePercentage += tier.percentage;
    return {
      ...tier,
      startAngle,
      endAngle: cumulativePercentage * 3.6
    };
  });

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
            Revenue Breakdown by Sales Channel (3-Year Projection)
          </h2>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4"
        >
          {[
            { key: 'low', name: 'Low Growth', icon: '🔹' },
            { key: 'medium', name: 'Medium Growth', icon: '🔸' },
            { key: 'high', name: 'High Growth', icon: '🔺' }
          ].map((track) => (
            <button
              key={track.key}
              onClick={() => setSelectedTrack(track.key as 'low' | 'medium' | 'high')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2`}
              style={{
                backgroundColor: selectedTrack === track.key ? colors.recoveryBlue : colors.graphiteOverlay,
                color: selectedTrack === track.key ? colors.white : colors.slateGray
              }}
            >
              <span className="text-xl">{track.icon}</span>
              {track.name}
            </button>
          ))}
        </motion.div>

        {/* Pie Chart and Revenue Breakdown */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <motion.div
            key={selectedTrack}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative mx-auto"
          >
            <div className="relative w-80 h-80">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full transform -rotate-90"
              >
                {pieSegments.map((segment, index) => {
                  const radius = 80;
                  const circumference = 2 * Math.PI * radius;
                  const strokeDasharray = `${(segment.percentage / 100) * circumference} ${circumference}`;
                  const strokeDashoffset = -(segment.startAngle / 360) * circumference;

                  return (
                    <motion.circle
                      key={segment.name}
                      cx="100"
                      cy="100"
                      r={radius}
                      fill="none"
                      stroke={segment.color}
                      strokeWidth="40"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      initial={{ strokeDasharray: "0 1000" }}
                      animate={{ strokeDasharray }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  );
                })}
              </svg>
              
              {/* Center Total */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <PieChart className="w-8 h-8 mb-2" style={{ color: colors.slateGray }} />
                <div className="text-3xl font-bold" style={{ color: colors.white }}>
                  {formatMillions(currentData.total)}
                </div>
                <div className="text-sm" style={{ color: colors.slateGray }}>
                  Total Revenue
                </div>
              </div>
            </div>
          </motion.div>

          {/* Revenue Table */}
          <motion.div
            key={`${selectedTrack}-table`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: fonts.heading }}
            >
              3-Year Revenue by Tier
            </h3>
            
            {currentData.tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-glass p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: tier.color }}
                  />
                  <div>
                    <div className="font-semibold text-lg">{tier.name}</div>
                    <div className="text-sm" style={{ color: colors.slateGray }}>
                      {tier.percentage.toFixed(1)}% of total
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold" style={{ color: colors.white }}>
                    {formatMillions(tier.revenue)}
                  </div>
                  <div className="text-xs" style={{ color: colors.slateGray }}>
                    {formatCurrency(tier.revenue)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Total Revenue Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-2 pt-8"
        >
          <div className="flex items-center justify-center gap-3">
            <DollarSign className="w-8 h-8" style={{ color: colors.progressGreen }} />
            <h3 
              className="text-3xl font-bold"
              style={{ fontFamily: fonts.heading, color: colors.white }}
            >
              Total 3-Year Projected Revenue: {formatCurrency(currentData.total)}
            </h3>
          </div>
          <p className="text-lg" style={{ color: colors.slateGray }}>
            Based on selected growth scenario
          </p>
        </motion.div>
      </div>
    </section>
  );
}