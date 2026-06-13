import { motion } from "framer-motion";

const shapes = [
  { size: 200, color: "hsl(153 60% 28% / 0.08)", x: "10%", y: "20%", duration: 18 },
  { size: 150, color: "hsl(38 85% 58% / 0.08)", x: "80%", y: "10%", duration: 22 },
  { size: 120, color: "hsl(153 60% 28% / 0.06)", x: "70%", y: "70%", duration: 20 },
  { size: 180, color: "hsl(38 85% 58% / 0.06)", x: "15%", y: "75%", duration: 25 },
  { size: 100, color: "hsl(120 45% 38% / 0.07)", x: "50%", y: "40%", duration: 16 },
];

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: s.size,
            height: s.size,
            background: s.color,
            left: s.x,
            top: s.y,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
