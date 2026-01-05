"use client";

import { motion } from "framer-motion";
import { 
  BarChart, Bar, ResponsiveContainer, Tooltip, 
  AreaChart, Area, PieChart, Pie, Cell, XAxis 
} from "recharts";

// Data structures reflecting the visual style of your reference image
const globalNeedData = [
  { year: "2020", value: 2000 },
  { year: "2021", value: 6000 },
  { year: "2022", value: 11000 },
  { year: "2023", value: 13000 },
  { year: "2024", value: 14000 },
];

const villageOperationData = [
  { name: "2020", villages: 4 },
  { name: "2022", villages: 8 },
  { name: "2024", villages: 12 },
];

const waterGenerationData = [
  { name: "Generated", value: 18 },
  { name: "Goal", value: 12 },
];

const COLORS = ["#73C2FB", "#D1E9FF"]; // Light Blue and Sky Blue

export default function ImpactStats({ id }) {
  return (
    <section 
      className="relative w-full py-24 px-6 md:px-16 bg-gradient-to-b from-white via-[#EAF6FF] to-[#2C3D4F]" 
      id={id}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0B1C2D] mb-20">Our Global Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          
          {/* Column 1: Global Need */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <p className="text-sm font-semibold text-gray-500 mb-4">Global Need Data</p>
            <div className="h-40 w-full mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={globalNeedData}>
                  <defs>
                    <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#73C2FB" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#73C2FB" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="year" hide />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#73C2FB" 
                    fill="url(#colorArea)" 
                    strokeWidth={2} 
                    animationDuration={2000} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-4">14,000</h3>
            <p className="text-gray-600 leading-relaxed">
              Villages globally identified as requiring urgent water intervention.
            </p>
          </motion.div>

          {/* Column 2: Operating Systems */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <p className="text-sm font-semibold text-gray-500 mb-4">Implementation Data</p>
            <div className="h-40 w-full mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={villageOperationData}>
                  <Bar 
                    dataKey="villages" 
                    fill="#0B1C2D" 
                    radius={[2, 2, 0, 0]} 
                    barSize={40}
                    animationDuration={1500} 
                  />
                  <Tooltip cursor={{fill: 'transparent'}} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-4">12 Villages</h3>
            <p className="text-gray-600 leading-relaxed">
              Currently operating Automated Ice Reservoir (AIR) systems across high-altitude regions.
            </p>
          </motion.div>

          {/* Column 3: Water Generation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col"
          >
            <p className="text-sm font-semibold text-gray-500 mb-4">Water Generation</p>
            <div className="h-40 w-full mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={waterGenerationData}
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={2}
                    dataKey="value"
                    animationDuration={1500}
                  >
                    {waterGenerationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-4">18M+ Litres</h3>
            <p className="text-gray-600 leading-relaxed">
              Water generated during the last implementation cycle, meeting seasonal demand gaps.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}