"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Users, Calendar, DollarSign } from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const growthTracks = {
  low: {
    name: "Low",
    icon: "🔹",
    data: [
      { year: "Year 1", licenses: 2000, monthlyRevenue: 118000, annualRevenue: 1416000 },
      { year: "Year 2", licenses: 4300, monthlyRevenue: 253700, annualRevenue: 3044400 },
      { year: "Year 3", licenses: 6995, monthlyRevenue: 412705, annualRevenue: 4952460 }
    ],
    salesNeeded: [
      {
        year: "Year 1",
        data: [
          { avgLicenses: 30, totalSales: 67, monthlySales: 6 },
          { avgLicenses: 60, totalSales: 34, monthlySales: 3 },
          { avgLicenses: 90, totalSales: 23, monthlySales: 2 }
        ]
      },
      {
        year: "Year 2",
        data: [
          { avgLicenses: 30, totalSales: 144, monthlySales: 12 },
          { avgLicenses: 60, totalSales: 72, monthlySales: 6 },
          { avgLicenses: 90, totalSales: 48, monthlySales: 4 }
        ]
      },
      {
        year: "Year 3",
        data: [
          { avgLicenses: 30, totalSales: 234, monthlySales: 20 },
          { avgLicenses: 60, totalSales: 117, monthlySales: 10 },
          { avgLicenses: 90, totalSales: 78, monthlySales: 7 }
        ]
      }
    ]
  },
  medium: {
    name: "Medium",
    icon: "🔸",
    data: [
      { year: "Year 1", licenses: 3000, monthlyRevenue: 177000, annualRevenue: 2124000 },
      { year: "Year 2", licenses: 6450, monthlyRevenue: 380550, annualRevenue: 4566600 },
      { year: "Year 3", licenses: 10492, monthlyRevenue: 619028, annualRevenue: 7428336 }
    ],
    salesNeeded: [
      {
        year: "Year 1",
        data: [
          { avgLicenses: 30, totalSales: 117, monthlySales: 10 },
          { avgLicenses: 60, totalSales: 59, monthlySales: 5 },
          { avgLicenses: 90, totalSales: 39, monthlySales: 4 }
        ]
      },
      {
        year: "Year 2",
        data: [
          { avgLicenses: 30, totalSales: 250, monthlySales: 21 },
          { avgLicenses: 60, totalSales: 125, monthlySales: 11 },
          { avgLicenses: 90, totalSales: 84, monthlySales: 7 }
        ]
      },
      {
        year: "Year 3",
        data: [
          { avgLicenses: 30, totalSales: 400, monthlySales: 34 },
          { avgLicenses: 60, totalSales: 200, monthlySales: 17 },
          { avgLicenses: 90, totalSales: 134, monthlySales: 12 }
        ]
      }
    ]
  },
  high: {
    name: "High",
    icon: "🔺",
    data: [
      { year: "Year 1", licenses: 4000, monthlyRevenue: 236000, annualRevenue: 2832000 },
      { year: "Year 2", licenses: 8600, monthlyRevenue: 507400, annualRevenue: 6088800 },
      { year: "Year 3", licenses: 13990, monthlyRevenue: 825410, annualRevenue: 9904920 }
    ],
    salesNeeded: [
      {
        year: "Year 1",
        data: [
          { avgLicenses: 30, totalSales: 167, monthlySales: 14 },
          { avgLicenses: 60, totalSales: 84, monthlySales: 7 },
          { avgLicenses: 90, totalSales: 56, monthlySales: 5 }
        ]
      },
      {
        year: "Year 2",
        data: [
          { avgLicenses: 30, totalSales: 400, monthlySales: 34 },
          { avgLicenses: 60, totalSales: 200, monthlySales: 17 },
          { avgLicenses: 90, totalSales: 134, monthlySales: 12 }
        ]
      },
      {
        year: "Year 3",
        data: [
          { avgLicenses: 30, totalSales: 667, monthlySales: 56 },
          { avgLicenses: 60, totalSales: 334, monthlySales: 28 },
          { avgLicenses: 90, totalSales: 223, monthlySales: 19 }
        ]
      }
    ]
  }
};

export default function ImpactTierSection() {
  const [selectedTrack, setSelectedTrack] = useState<'low' | 'medium' | 'high'>('medium');
  const currentTrack = growthTracks[selectedTrack];

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
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
            Sober Logic Impact Tier Forecast – $59/Month Pricing Channel
          </h2>
          <p 
            className="text-xl"
            style={{ color: colors.slateGray }}
          >
            Toggle between Low / Medium / High Growth Tracks
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
          {Object.entries(growthTracks).map(([key, track]) => (
            <button
              key={key}
              onClick={() => setSelectedTrack(key as 'low' | 'medium' | 'high')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedTrack === key
                  ? 'bg-recovery-blue text-white'
                  : 'bg-graphite-overlay text-slate-gray hover:bg-graphite-overlay/80'
              }`}
              style={{
                backgroundColor: selectedTrack === key ? colors.recoveryBlue : colors.graphiteOverlay,
                color: selectedTrack === key ? colors.white : colors.slateGray
              }}
            >
              <span className="text-xl">{track.icon}</span>
              {track.name}
            </button>
          ))}
        </motion.div>

        {/* Revenue & License Overview Table */}
        <motion.div
          key={selectedTrack}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-glass p-6"
        >
          <h3 
            className="text-2xl font-bold mb-6 flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <DollarSign className="w-6 h-6" style={{ color: colors.progressGreen }} />
            Revenue & License Overview
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr 
                  className="border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <th className="text-left p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Year</th>
                  <th className="text-right p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Licenses</th>
                  <th className="text-right p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Monthly Revenue</th>
                  <th className="text-right p-4 text-sm font-semibold" style={{ color: colors.slateGray }}>Annual Revenue</th>
                </tr>
              </thead>
              <tbody>
                {currentTrack.data.map((row, index) => (
                  <motion.tr
                    key={row.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <td className="p-4 font-semibold">{row.year}</td>
                    <td className="p-4 text-right" style={{ color: colors.white }}>
                      {formatNumber(row.licenses)}
                    </td>
                    <td className="p-4 text-right" style={{ color: colors.recoveryBlue }}>
                      {formatCurrency(row.monthlyRevenue)}
                    </td>
                    <td 
                      className="p-4 text-right font-bold text-lg"
                      style={{ color: index === 2 ? colors.progressGreen : colors.white }}
                    >
                      {formatCurrency(row.annualRevenue)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Sales Needed Breakdown */}
        <motion.div
          key={`${selectedTrack}-sales`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 
            className="text-2xl font-bold flex items-center gap-2"
            style={{ fontFamily: fonts.heading }}
          >
            <Users className="w-6 h-6" style={{ color: colors.recoveryBlue }} />
            Sales Needed Breakdown
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {currentTrack.salesNeeded.map((yearData, yearIndex) => (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: yearIndex * 0.1 }}
                className="card-glass p-6"
              >
                <h4 
                  className="text-lg font-bold mb-4 flex items-center gap-2"
                  style={{ fontFamily: fonts.heading }}
                >
                  <Calendar className="w-5 h-5" style={{ color: colors.softLavender }} />
                  📅 {yearData.year}
                </h4>
                
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                      <th className="text-left pb-2" style={{ color: colors.slateGray }}>
                        Avg Licenses<br/>per Sale
                      </th>
                      <th className="text-center pb-2" style={{ color: colors.slateGray }}>
                        Total Sales<br/>Needed
                      </th>
                      <th className="text-right pb-2" style={{ color: colors.slateGray }}>
                        Monthly<br/>Sales
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearData.data.map((row, index) => (
                      <tr 
                        key={index}
                        className="border-b"
                        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                      >
                        <td className="py-2 font-semibold">{row.avgLicenses}</td>
                        <td className="py-2 text-center" style={{ color: colors.white }}>
                          {row.totalSales}
                        </td>
                        <td className="py-2 text-right font-semibold" style={{ color: colors.recoveryBlue }}>
                          {row.monthlySales}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}