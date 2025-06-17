"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Smartphone, MapPin, Circle, AlertCircle, 
  RefreshCw, Play, Pause, ChevronRight,
  ChevronUp, ChevronDown, Shield, Battery,
  BarChart3, MessageSquare, Wifi, Lock,
  Globe, Crosshair, Radar, Target, Download,
  Bell, Search, Zap, Activity, Users, CheckCircle
} from "lucide-react";
import { colors, fonts } from "@/lib/styles";

const steps = [
  {
    id: 1,
    title: "App Download & Quick Setup",
    description: "User downloads Sober Logic from the App Store and creates their recovery profile in under 60 seconds.",
    icon: "📱"
  },
  {
    id: 2,
    title: "Permission Activation",
    description: "App requests background location and notification permissions — the only setup required for 24/7 protection.",
    icon: "🔐"
  },
  {
    id: 3,
    title: "Precision Location Lock",
    description: "High-accuracy GPS pinpoints the user's exact position within 10 meters using satellite and cellular triangulation.",
    icon: "📍"
  },
  {
    id: 4,
    title: "Danger Zone Discovery",
    description: "Google Places API instantly identifies all bars, liquor stores, and gambling venues within a 2-mile radius.",
    icon: "🔍"
  },
  {
    id: 5,
    title: "Smart Geofence Deployment",
    description: "Up to 20 invisible geofences are placed around the highest-risk locations, creating a protective detection grid.",
    icon: "🛡️"
  },
  {
    id: 6,
    title: "Background Detection Trigger",
    description: "When user enters any danger zone, the geofence fires instantly — even with the app completely closed.",
    icon: "⚡"
  },
  {
    id: 7,
    title: "Multi-Channel Intervention",
    description: "Personalized SMS and push notifications deploy within seconds, using AI-crafted messages based on user's recovery stage.",
    icon: "💬"
  },
  {
    id: 8,
    title: "Intelligent Response Engine",
    description: "System logs the event, updates risk score, and suggests immediate coping actions: call sponsor, find meeting, or activate crisis support.",
    icon: "🧠"
  },
  {
    id: 9,
    title: "Care Team Alerts",
    description: "Sponsors, counselors, or family (if authorized) receive real-time notifications to provide human support when AI isn't enough.",
    icon: "👥"
  }
];

// Visual components for each step
const StepVisuals = ({ step }: { step: number }) => {
  switch (step) {
    case 1:
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="relative flex items-center justify-center h-full"
        >
          <div className="relative">
            {/* iPhone with Sober Logic logo */}
            <div className="relative w-80 h-[650px]">
              {/* Phone body */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3.5rem] shadow-2xl">
                {/* Side buttons */}
                <div className="absolute left-0 top-32 w-1 h-8 bg-gray-700 rounded-r-sm" />
                <div className="absolute left-0 top-44 w-1 h-12 bg-gray-700 rounded-r-sm" />
                <div className="absolute left-0 top-60 w-1 h-12 bg-gray-700 rounded-r-sm" />
                <div className="absolute right-0 top-48 w-1 h-16 bg-gray-700 rounded-l-sm" />
                
                {/* Screen */}
                <div className="absolute inset-4 bg-black rounded-[3rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-between px-6 text-white text-xs">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-4 h-4" />
                      <Battery className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Screen content */}
                  <div className="h-full flex flex-col items-center justify-center px-8">
                    {/* Sober Logic Logo */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-8"
                    >
                      <Image
                        src="/sober-logic-logo.png"
                        alt="Sober Logic"
                        width={220}
                        height={80}
                        className="object-contain"
                      />
                    </motion.div>
                    
                    {/* Checkmark */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      className="w-24 h-24 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${colors.progressGreen}22` }}
                    >
                      <CheckCircle className="w-16 h-16" style={{ color: colors.progressGreen }} />
                    </motion.div>
                    
                    {/* Success text */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="text-white text-lg mt-6"
                    >
                      App Installed
                    </motion.p>
                  </div>
                  
                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full" />
                </div>
                
                {/* Notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      );

    case 2:
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="space-y-6">
            {/* Permission dialogs */}
            {[
              { icon: MapPin, text: "Allow location access", subtext: "Even when app is closed" },
              { icon: Bell, text: "Allow notifications", subtext: "For safety alerts" }
            ].map((permission, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.5 }}
                className="bg-white rounded-xl p-6 shadow-2xl w-80"
                style={{ color: colors.charcoalBlack }}
              >
                <div className="flex items-start gap-4">
                  <permission.icon className="w-8 h-8 mt-1" style={{ color: colors.recoveryBlue }} />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{permission.text}</h3>
                    <p className="text-sm opacity-70 mt-1">{permission.subtext}</p>
                    
                    <div className="flex gap-3 mt-4">
                      <button className="flex-1 py-2 rounded-lg bg-gray-200">
                        Don't Allow
                      </button>
                      <motion.button
                        className="flex-1 py-2 rounded-lg text-white flex items-center justify-center gap-2"
                        style={{ backgroundColor: colors.recoveryBlue }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Allow</span>
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.8 + i * 0.5 }}
                        >
                          <CheckCircle className="w-5 h-5" style={{ color: colors.alertOrange }} />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );

    case 3:
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="relative w-80 h-80">
            {/* Satellite beams converging */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={angle}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2"
                  style={{ 
                    transformOrigin: "bottom center",
                    rotate: `${angle}deg`
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                >
                  <div 
                    className="w-1 h-40"
                    style={{ 
                      background: `linear-gradient(to bottom, ${colors.recoveryBlue}00, ${colors.recoveryBlue}66)`
                    }}
                  />
                  <Wifi className="w-6 h-6 -mt-2 -ml-2.5" style={{ color: colors.recoveryBlue }} />
                </motion.div>
              </motion.div>
            ))}
            
            {/* 5m accuracy label */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2 }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full"
              style={{ backgroundColor: colors.progressGreen, color: colors.white }}
            >
              <span className="font-semibold">5m accuracy locked</span>
            </motion.div>
          </div>
        </motion.div>
      );

    case 4:
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="relative w-[500px] h-[500px]">
            {/* Map background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-900 opacity-20" />
            
            {/* Central user location */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-blue-500 rounded-full" />
            </div>
            
            {/* Search radar effect */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, ease: "linear", repeat: 2 }}
            >
              <div 
                className="absolute top-1/2 left-1/2 w-full h-1 origin-left"
                style={{ 
                  background: `linear-gradient(to right, ${colors.recoveryBlue}66, transparent)`,
                  transform: 'translateY(-50%)'
                }}
              />
            </motion.div>
            
            {/* Danger zones appearing */}
            {[
              { icon: "🍺", x: 150, y: 100, delay: 0.5 },
              { icon: "🥃", x: 350, y: 150, delay: 0.7 },
              { icon: "💉", x: 100, y: 300, delay: 0.9 },
              { icon: "🎰", x: 400, y: 250, delay: 1.1 },
              { icon: "🥃", x: 250, y: 350, delay: 1.3 },
              { icon: "🍺", x: 300, y: 100, delay: 1.5 },
              { icon: "💉", x: 180, y: 200, delay: 1.7 },
              { icon: "🎰", x: 380, y: 380, delay: 1.9 },
            ].map((place, i) => (
              <motion.div
                key={i}
                className="absolute flex flex-col items-center"
                style={{ left: place.x, top: place.y }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: place.delay,
                  type: "spring",
                  stiffness: 500
                }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: place.delay }}
                  className="text-2xl"
                >
                  {place.icon}
                </motion.div>
                <div className="w-1 h-1 bg-red-500 rounded-full mt-1" />
              </motion.div>
            ))}
            
            {/* API label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2"
            >
              <Search className="w-4 h-4" style={{ color: colors.alertOrange }} />
              <span className="text-sm font-semibold" style={{ color: colors.white }}>
                Google Places API: 1-20 risk zones found
              </span>
            </motion.div>
          </div>
        </motion.div>
      );

    case 5:
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="relative w-[500px] h-[500px]">
            {/* User at center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
            </div>
            
            {/* Geofences drawing and pulsing */}
            {[
              { x: 150, y: 100, delay: 0.2 },
              { x: 350, y: 150, delay: 0.3 },
              { x: 100, y: 300, delay: 0.4 },
              { x: 400, y: 250, delay: 0.5 },
              { x: 250, y: 350, delay: 0.6 },
              { x: 300, y: 100, delay: 0.7 },
              { x: 180, y: 200, delay: 0.8 },
              { x: 380, y: 380, delay: 0.9 },
            ].map((zone, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ 
                  left: zone.x, 
                  top: zone.y,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Circle drawing animation */}
                <motion.svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: zone.delay }}
                >
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={colors.alertOrange}
                    strokeWidth="2"
                    strokeDasharray="251"
                    initial={{ strokeDashoffset: 251 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 0.8, delay: zone.delay }}
                  />
                </motion.svg>
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 1,
                    delay: zone.delay + 0.8,
                    ease: "easeOut"
                  }}
                  style={{ backgroundColor: colors.alertOrange }}
                />
                
                {/* Fade to transparent */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: colors.alertOrange }}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ delay: zone.delay + 1.8, duration: 0.5 }}
                />
              </motion.div>
            ))}
            
            {/* Grid active label */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="px-6 py-3 rounded-full flex items-center gap-2"
                style={{ backgroundColor: colors.recoveryBlue, color: colors.white }}
              >
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Protection Grid Active</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      );

    case 6:
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="relative w-[400px] h-[400px]">
            {/* Geofence zone */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-48 h-48 rounded-full border-4"
                style={{ borderColor: colors.alertOrange }}
                animate={{ 
                  borderColor: [colors.alertOrange, colors.alertOrange, colors.alertOrange],
                }}
              />
            </div>
            
            {/* User dot moving into zone */}
            <motion.div
              className="absolute w-6 h-6 bg-blue-500 rounded-full z-10"
              initial={{ 
                left: 50,
                top: 200
              }}
              animate={{ 
                left: 200,
                top: 200
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Zone flashing red when entered */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <motion.div
                className="w-48 h-48 rounded-full"
                animate={{ 
                  backgroundColor: [`${colors.alertOrange}00`, `${colors.alertOrange}66`, `${colors.alertOrange}00`],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 0.5, repeat: 3 }}
              />
            </motion.div>
            
            {/* Lightning bolt */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              transition={{ delay: 2.5, type: "spring" }}
            >
              <Zap className="w-16 h-16" style={{ color: colors.alertOrange }} />
            </motion.div>
            
            {/* App closed indicator */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full" />
                <span className="text-sm" style={{ color: colors.slateGray }}>App closed</span>
              </div>
            </motion.div>
            
            {/* Detection alert */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="px-6 py-3 rounded-full font-bold"
                style={{ backgroundColor: colors.alertOrange, color: colors.white }}
              >
                DANGER ZONE DETECTED
              </div>
            </motion.div>
          </div>
        </motion.div>
      );

    case 7:
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="relative">
            {/* Phone mockup */}
            <div className="w-72 h-[500px] bg-gray-900 rounded-[3rem] p-4 relative">
              <div className="bg-black rounded-[2.5rem] h-full relative overflow-hidden">
                {/* Notification sliding down */}
                <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: 20 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute left-4 right-4 bg-white rounded-2xl p-4 shadow-2xl z-20"
                  style={{ top: 0 }}
                >
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                      <span>🛡️</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Sober Logic</h4>
                      <p className="text-sm text-gray-600">Hey John, we noticed you're near Sunset Bar...</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* SMS bubble */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-32 left-4 right-4"
                >
                  <div className="bg-blue-500 text-white p-4 rounded-2xl rounded-bl-none">
                    <p>"Remember why you started this journey. Your family believes in you. Want to call your sponsor?"</p>
                  </div>
                </motion.div>
                
                {/* Audio waveform */}
                <motion.div
                  className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-xs text-gray-400 mr-2">Audio:</span>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-blue-500 rounded-full"
                      animate={{ 
                        height: [8, 20, 8],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 0.8, 
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
            
            {/* AI label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
            >
              <span className="text-sm" style={{ color: colors.slateGray }}>
                AI-crafted for Stage 2 recovery
              </span>
            </motion.div>
          </div>
        </motion.div>
      );

    case 8:
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="space-y-6">
            {/* Risk meter */}
            <motion.div className="text-center">
              <h3 className="text-sm font-semibold mb-3" style={{ color: colors.slateGray }}>
                Risk Score Update
              </h3>
              <div className="relative w-64 h-8 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full"
                  initial={{ width: "40%" }}
                  animate={{ width: "75%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  style={{ 
                    background: `linear-gradient(to right, ${colors.progressGreen}, ${colors.alertOrange})`
                  }}
                />
                <motion.div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  HIGH
                </motion.div>
              </div>
            </motion.div>
            
            {/* Action buttons sliding in */}
            <motion.div className="space-y-3">
              {[
                { icon: "📞", text: "Call Sponsor", color: colors.recoveryBlue, delay: 1 },
                { icon: "📍", text: "Find Meeting", color: colors.progressGreen, delay: 1.2 },
                { icon: "🆘", text: "Get Help Now", color: colors.alertOrange, delay: 1.4 }
              ].map((action, i) => (
                <motion.button
                  key={i}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: action.delay }}
                  className="w-full p-4 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform"
                  style={{ backgroundColor: `${action.color}22`, border: `2px solid ${action.color}` }}
                >
                  <span className="text-2xl">{action.icon}</span>
                  <span className="font-semibold" style={{ color: action.color }}>
                    {action.text}
                  </span>
                  <ChevronRight className="w-5 h-5 ml-auto" style={{ color: action.color }} />
                </motion.button>
              ))}
            </motion.div>
            
            {/* Event logged indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-center"
            >
              <Activity className="w-5 h-5 inline mr-2" style={{ color: colors.progressGreen }} />
              <span className="text-sm" style={{ color: colors.slateGray }}>
                Event logged • Dashboard updated
              </span>
            </motion.div>
          </div>
        </motion.div>
      );

    case 9:
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="relative">
            {/* Multiple phones lighting up */}
            <div className="flex gap-8">
              {[
                { role: "Sponsor", icon: "👤", color: colors.recoveryBlue },
                { role: "Counselor", icon: "🩺", color: colors.progressGreen },
                { role: "Family", icon: "👨‍👩‍👧", color: colors.softLavender }
              ].map((person, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.3 }}
                  className="relative"
                >
                  <div className="w-32 h-56 bg-gray-900 rounded-3xl p-2">
                    <div className="bg-black rounded-2xl h-full relative overflow-hidden">
                      {/* Notification */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.3 }}
                        className="absolute top-4 left-2 right-2 bg-white rounded-lg p-3"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{person.icon}</span>
                          <span className="text-xs font-semibold text-gray-900">ALERT</span>
                        </div>
                        <p className="text-xs text-gray-600">John needs support</p>
                      </motion.div>
                      
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ 
                          duration: 1,
                          repeat: 3,
                          delay: 0.5 + i * 0.3
                        }}
                        style={{ 
                          backgroundColor: person.color,
                          filter: 'blur(20px)'
                        }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-center mt-2 text-sm" style={{ color: colors.slateGray }}>
                    {person.role}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Network lines connecting phones */}
            <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
              <motion.path
                d="M 80 100 Q 160 50 240 100"
                fill="none"
                stroke={colors.recoveryBlue}
                strokeWidth="2"
                strokeDasharray="5 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.path
                d="M 240 100 Q 320 50 400 100"
                fill="none"
                stroke={colors.progressGreen}
                strokeWidth="2"
                strokeDasharray="5 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
              />
            </svg>
            
            {/* Support network label */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
            >
              <div className="px-6 py-3 rounded-full flex items-center gap-2"
                style={{ backgroundColor: colors.white, color: colors.charcoalBlack }}
              >
                <Users className="w-5 h-5" />
                <span className="font-semibold">Support Network Activated</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      );

    default:
      return null;
  }
};

export default function PassBuilderFlowSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [stepOffset, setStepOffset] = useState(0);
  const stepsPerView = 4;
  const maxOffset = Math.max(0, steps.length - stepsPerView);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          const nextStep = prev >= 9 ? 1 : prev + 1;
          // Auto-scroll to show active step
          const stepIndex = nextStep - 1;
          if (stepIndex >= stepOffset + stepsPerView) {
            setStepOffset(Math.min(stepIndex - stepsPerView + 1, maxOffset));
          } else if (stepIndex < stepOffset) {
            setStepOffset(stepIndex);
          }
          return nextStep;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, stepOffset, maxOffset]);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    // Ensure clicked step is visible
    const stepIndex = stepId - 1;
    if (stepIndex >= stepOffset + stepsPerView) {
      setStepOffset(Math.min(stepIndex - stepsPerView + 1, maxOffset));
    } else if (stepIndex < stepOffset) {
      setStepOffset(stepIndex);
    }
  };

  const scrollUp = () => {
    setStepOffset(Math.max(0, stepOffset - 1));
  };

  const scrollDown = () => {
    setStepOffset(Math.min(maxOffset, stepOffset + 1));
  };

  return (
    <section className="section-height section-padding flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Header */}
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
            🛰️ Geofence Detection Process: Interactive Walkthrough
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.slateGray }}
          >
            See how our app silently monitors danger zones and triggers support when users need it most
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Steps */}
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 
                className="text-lg font-semibold"
                style={{ color: colors.slateGray }}
              >
                Process Steps
              </h3>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                style={{ 
                  backgroundColor: isAutoPlaying ? `${colors.progressGreen}22` : 'rgba(255,255,255,0.05)',
                  color: isAutoPlaying ? colors.progressGreen : colors.slateGray
                }}
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span className="text-sm">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span className="text-sm">Autoplay</span>
                  </>
                )}
              </button>
            </div>

            {/* Scroll Up Button */}
            {stepOffset > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={scrollUp}
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10 p-2 rounded-full transition-colors"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: colors.recoveryBlue
                }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                <ChevronUp className="w-5 h-5" />
              </motion.button>
            )}

            {/* Steps Container */}
            <div className="space-y-4 overflow-hidden" style={{ height: `${stepsPerView * 160}px` }}>
              <AnimatePresence mode="sync">
                {steps.slice(stepOffset, stepOffset + stepsPerView).map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onMouseEnter={() => !isAutoPlaying && setActiveStep(step.id)}
                    onClick={() => handleStepClick(step.id)}
                    className={`p-6 rounded-lg cursor-pointer transition-all ${
                      activeStep === step.id 
                        ? 'bg-white/10 border-2' 
                        : 'bg-white/5 border-2 border-transparent hover:bg-white/8'
                    }`}
                    style={{
                      borderColor: activeStep === step.id ? colors.recoveryBlue : 'transparent'
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{step.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 flex items-center gap-2">
                          <span 
                            className="text-sm"
                            style={{ color: activeStep === step.id ? colors.recoveryBlue : colors.slateGray }}
                          >
                            Step {step.id}
                          </span>
                          <ChevronRight 
                            className="w-4 h-4"
                            style={{ 
                              color: activeStep === step.id ? colors.recoveryBlue : colors.slateGray,
                              opacity: activeStep === step.id ? 1 : 0.5
                            }}
                          />
                        </h4>
                        <p className="font-medium">{step.title}</p>
                        <p 
                          className="text-sm mt-1"
                          style={{ color: colors.slateGray }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Scroll Down Button */}
            {stepOffset < maxOffset && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={scrollDown}
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10 p-2 rounded-full transition-colors"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: colors.recoveryBlue
                }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.button>
            )}

            {/* Step Indicator */}
            <div className="mt-12 text-center">
              <span className="text-sm" style={{ color: colors.slateGray }}>
                Showing {stepOffset + 1}-{Math.min(stepOffset + stepsPerView, steps.length)} of {steps.length} steps
              </span>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div 
              className="sticky top-8 h-[640px] rounded-2xl flex items-center justify-center overflow-hidden"
              style={{ 
                backgroundColor: colors.graphiteOverlay,
                border: `1px solid rgba(255,255,255,0.1)`
              }}
            >
              <AnimatePresence mode="wait">
                <StepVisuals key={activeStep} step={activeStep} />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Key Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-6 mt-32"
        >
          <div className="card-glass p-10 lg:p-12 max-w-4xl mx-auto">
            <h3 
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: fonts.heading }}
            >
              🎯 Key Differentiator
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: colors.white }}>
              <span className="font-bold">This entire process happens automatically in the background.</span> No app opening, no user input, no battery drain. Just invisible, intelligent protection that never sleeps — the most advanced behavioral detection system ever built for recovery.
            </p>
          </div>
        </motion.div>

        {/* Key Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-glass p-6 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div 
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${colors.recoveryBlue}22` }}
              >
                <Shield className="w-5 h-5" style={{ color: colors.recoveryBlue }} />
              </div>
              <h4 className="font-semibold text-lg">100% Background-Enabled</h4>
            </div>
            <p style={{ color: colors.slateGray }}>
              User doesn't need to open the app — protection runs silently 24/7
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-glass p-6 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div 
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${colors.progressGreen}22` }}
              >
                <BarChart3 className="w-5 h-5" style={{ color: colors.progressGreen }} />
              </div>
              <h4 className="font-semibold text-lg">Complete Data Logging</h4>
            </div>
            <p style={{ color: colors.slateGray }}>
              All data logged to Firebase for accountability, history, and triage
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-glass p-6 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div 
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${colors.alertOrange}22` }}
              >
                <MessageSquare className="w-5 h-5" style={{ color: colors.alertOrange }} />
              </div>
              <h4 className="font-semibold text-lg">Smart Fallback System</h4>
            </div>
            <p style={{ color: colors.slateGray }}>
              Fallback logic includes Twilio SMS if notifications are blocked
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-glass p-6 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div 
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${colors.softLavender}22` }}
              >
                <Battery className="w-5 h-5" style={{ color: colors.softLavender }} />
              </div>
              <h4 className="font-semibold text-lg">Ultra-Low Power</h4>
            </div>
            <p style={{ color: colors.slateGray }}>
              Extremely low power consumption — passive until triggered
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}