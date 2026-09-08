"use client";

import { useState } from "react";
import { Cpu, Code, Terminal, CheckCircle } from "./Icons";
import { soundFx } from "@/utils/soundEffects";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState("React.js");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend & Mobile" },
    { id: "cloud", label: "AWS & Serverless" },
    { id: "backend", label: "Backend & Databases" },
  ];

  const skills = [
    {
      name: "React.js",
      category: "frontend",
      level: "Expert",
      icon: "⚛️",
      codeSnippet: `// High-Performance React Component
import { useState, useEffect } from "react";

export function OrderList({ erpOrders }) {
  const [activeFilter, setActiveFilter] = useState("ALL");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {erpOrders.map(order => <OrderCard key={order.id} order={order} />)}
    </div>
  );
}`,
    },
    {
      name: "AWS Lambda",
      category: "cloud",
      level: "Advanced",
      icon: "⚡",
      codeSnippet: `// Serverless Lambda Function Handler
export const handler = async (event) => {
  const body = JSON.parse(event.body);
  const kotPayload = await createKotInvoice(body);
  return {
    statusCode: 200,
    body: JSON.stringify({ status: "SUCCESS", kotPayload })
  };
};`,
    },
    {
      name: "Node.js & Express",
      category: "backend",
      level: "Advanced",
      icon: "🚀",
      codeSnippet: `// Express RESTful API Router
import express from "express";
const router = express.Router();

router.post("/api/invoice/generate", async (req, res) => {
  const pdfBuffer = await renderInvoicePdf(req.body);
  res.setHeader("Content-Type", "application/pdf");
  res.send(pdfBuffer);
});`,
    },
    {
      name: "React Native",
      category: "frontend",
      level: "Advanced",
      icon: "📱",
      codeSnippet: `// React Native Mobile Delivery App
import { View, Text, TouchableOpacity } from "react-native";

export default function DeliveryScanScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity onPress={handleQrScan}>
        <Text>Verify QR Order Delivery</Text>
      </TouchableOpacity>
    </View>
  );
}`,
    },
    {
      name: "DynamoDB",
      category: "cloud",
      level: "Advanced",
      icon: "⚡",
      codeSnippet: `// AWS SDK v3 DynamoDB Query
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const command = new PutCommand({
  TableName: "ApsaraTheaterOrders",
  Item: { orderId: "ORD-9021", status: "KOT_PRINTED", total: 450 }
});
await docClient.send(command);`,
    },
    {
      name: "MongoDB",
      category: "backend",
      level: "Advanced",
      icon: "🍃",
      codeSnippet: `// Mongoose ERP Aggregation Pipeline
const salesReport = await Order.aggregate([
  { $match: { createdAt: { $gte: startDate } } },
  { $group: { _id: "$category", totalSales: { $sum: "$amount" } } }
]);`,
    },
    {
      name: "Redux & State",
      category: "frontend",
      level: "Advanced",
      icon: "🔄",
      codeSnippet: `// Redux Toolkit ERP Slice
import { createSlice } from "@reduxjs.toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], total: 0 },
  reducers: {
    addItem: (state, action) => { state.items.push(action.payload); }
  }
});`,
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      level: "Master",
      icon: "🟨",
      codeSnippet: `// Modern Async ES6 Workflow
const processBatchInvoices = async (orders) => {
  const results = await Promise.allSettled(
    orders.map(order => generateInvoicePDF(order))
  );
  return results.filter(r => r.status === "fulfilled");
};`,
    },
    {
      name: "API Gateway",
      category: "cloud",
      level: "Advanced",
      icon: "🌐",
      codeSnippet: `// OpenAPI 3.0 API Gateway Specs
paths:
  /kot/scan:
    post:
      x-amazon-apigateway-integration:
        uri: "arn:aws:apigateway:us-east-1:lambda:path/..."
        passthroughBehavior: "when_no_match"
        type: "aws_proxy"`,
    },
    {
      name: "Serverless Framework",
      category: "cloud",
      level: "Advanced",
      icon: "☁️",
      codeSnippet: `# serverless.yml Microservice Deployment
service: apsara-theater-backend
provider:
  name: aws
  runtime: nodejs20.x
  region: ap-south-1
functions:
  kotPrinter:
    handler: src/kot.handler
    events:
      - httpApi: 'POST /kot/print'`,
    },
    {
      name: "C / C++",
      category: "backend",
      level: "Proficient",
      icon: "⚙️",
      codeSnippet: `// C++ Data Structures & Algorithm Foundations
#include <iostream>
#include <vector>

int main() {
    std::cout << "Engineered @ TCE Madurai CSBS Degree" << std::endl;
    return 0;
}`,
    },
    {
      name: "Git & Postman",
      category: "backend",
      level: "Expert",
      icon: "📦",
      codeSnippet: `# Git CI/CD Automated Workflow
git checkout -b feature/kot-qr-verification
git commit -m "feat: Add QR code scanner handler for ERP"
git push origin feature/kot-qr-verification`,
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const activeSnippet =
    skills.find((s) => s.name === selectedSkill)?.codeSnippet ||
    skills[0].codeSnippet;

  return (
    <section id="skills" className="py-24 relative z-10 bg-[var(--bg-secondary)]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass-panel text-xs font-mono font-semibold text-[var(--accent-primary)] border border-[var(--border-card)]">
            <Cpu className="w-4 h-4" />
            <span>02 // TECHNICAL RADAR & WORKBENCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-[var(--text-main)]">
            Skills & <span className="accent-gradient-text">Live Code Workbench</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg font-sans">
            Click any technology below to inspect actual code architecture snippets and implementation patterns.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-slate-950 font-bold shadow-lg"
                  : "cyber-card text-[var(--text-muted)] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Skills Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredSkills.map((skill, idx) => (
              <button
                key={idx}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedSkill(skill.name);
                }}
                className={`cyber-card rounded-xl p-3.5 flex items-center gap-3 text-left transition-all group ${
                  selectedSkill === skill.name
                    ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 shadow-lg"
                    : "border-[var(--border-card)] hover:border-[var(--border-card-hover)]"
                }`}
              >
                <div className="text-xl p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-card)] shrink-0">
                  {skill.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold font-mono text-[var(--text-main)] truncate">
                    {skill.name}
                  </h4>
                  <span className="block text-[10px] font-mono text-[var(--accent-primary)] font-semibold mt-0.5">
                    {skill.level}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Live Code Inspector Panel */}
          <div className="lg:col-span-5 cyber-glass-panel rounded-2xl border border-[var(--border-card-hover)] shadow-2xl overflow-hidden font-mono">
            
            {/* Inspector Header */}
            <div className="px-4 py-3 bg-[var(--bg-secondary)] border-b border-[var(--border-card)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[var(--accent-primary)]" />
                <span className="text-xs font-bold text-[var(--text-main)]">
                  INSPECTING: {selectedSkill.toUpperCase()}
                </span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                VERIFIED CODE
              </span>
            </div>

            {/* Code Body */}
            <div className="p-4 bg-black/70 text-xs text-emerald-300 leading-relaxed overflow-x-auto min-h-[260px]">
              <pre>{activeSnippet}</pre>
            </div>

            {/* Inspector Footer */}
            <div className="p-3 bg-[var(--bg-secondary)] border-t border-[var(--border-card)] text-[11px] text-[var(--text-muted)] flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Production pattern deployed in Hariharasudhan's client projects.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
