import { motion } from "framer-motion";
import heroImg from "@/assets/hero-kids.jpg";

interface HeroSectionProps {
  content?: Record<string, string>;
}

const HeroSection = ({ content }: HeroSectionProps) => {
  const title = content?.title || "Genius Kindergarten";
  const subtitle = content?.subtitle || "";
  const description = content?.description || "";

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={heroImg} alt="Genius Kindergarten" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 8 + i * 4,
              height: 8 + i * 4,
              background: `hsl(${i % 2 === 0 ? '38 85% 58%' : '153 60% 50%'} / ${0.3 + i * 0.05})`,
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20 - i * 5, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle && (
              <span className="inline-block bg-accent/20 backdrop-blur-sm text-accent border border-accent/30 text-sm font-semibold px-5 py-2 rounded-full mb-6">
                🌟 {subtitle}
              </span>
            )}
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {title.includes("Genius") ? (
              <>
                Genius{" "}
                <span className="text-accent">{title.replace("Genius", "").trim() || "Kindergarten"}</span>
              </>
            ) : (
              <span className="text-accent">{title}</span>
            )}
          </motion.h1>

          {description && (
            <motion.p
              className="text-primary-foreground/80 text-lg md:text-xl mt-6 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {description}
            </motion.p>
          )}

          <motion.div
            className="flex flex-wrap gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-base shadow-lg shadow-primary/30"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px hsl(153 60% 28% / 0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              {String.fromCharCode(0x053F, 0x0561, 0x057A, 0x20, 0x0574, 0x0565, 0x0566, 0x20, 0x0570, 0x0565, 0x057F)}
            </motion.a>
            <motion.a
              href="#programs"
              className="bg-primary-foreground/15 backdrop-blur-md text-primary-foreground font-semibold px-8 py-4 rounded-full text-base border border-primary-foreground/25"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.25)" }}
              whileTap={{ scale: 0.97 }}
            >
              {String.fromCharCode(0x053E, 0x0580, 0x0561, 0x0563, 0x0580, 0x0565, 0x0580)}
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-8 mt-12 pt-8 border-t border-primary-foreground/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {[
              { num: "100+", label: String.fromCharCode(0x0535, 0x0580, 0x0565, 0x056D, 0x0561) },
              { num: "10+", label: String.fromCharCode(0x0544, 0x0561, 0x057D, 0x0576, 0x0561, 0x0563, 0x0565, 0x057F) },
              { num: "5+", label: String.fromCharCode(0x054F, 0x0561, 0x0580, 0x056B, 0x20, 0x0583, 0x0578, 0x0580, 0x0571) },
            ].map((s, i) => (
              <div key={i}>
                <motion.p
                  className="text-2xl md:text-3xl font-bold text-accent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.15 }}
                >
                  {s.num}
                </motion.p>
                <p className="text-primary-foreground/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
