import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Heart, Star, Shield, Sparkles } from "lucide-react";

const arm = (...codes: number[]) => String.fromCharCode(...codes);

const defaultFeatures = [
  { icon: Heart, key: "feature1", defaultLabel: arm(0x054D, 0x056B, 0x0580, 0x0578, 0x057E, 0x20, 0x0574, 0x056B, 0x057B, 0x0561, 0x057E, 0x0561, 0x0575, 0x0580) },
  { icon: Star, key: "feature2", defaultLabel: arm(0x0555, 0x0580, 0x0561, 0x056F, 0x0575, 0x0561, 0x056C, 0x20, 0x056F, 0x0580, 0x0569, 0x0578, 0x0582, 0x0569, 0x0575, 0x0578, 0x0582, 0x0576) },
  { icon: Shield, key: "feature3", defaultLabel: arm(0x0531, 0x0576, 0x057E, 0x057F, 0x0561, 0x0576, 0x0563, 0x20, 0x057A, 0x0561, 0x0575, 0x0574, 0x0561, 0x0576, 0x0576, 0x0565, 0x0580) },
  { icon: Sparkles, key: "feature4", defaultLabel: arm(0x054D, 0x057F, 0x0565, 0x0572, 0x056E, 0x0561, 0x0563, 0x0578, 0x0580, 0x056E, 0x0578, 0x0582, 0x0569, 0x0575, 0x0578, 0x0582, 0x0576) },
];

interface AboutSectionProps {
  content?: Record<string, string>;
}

const AboutSection = ({ content }: AboutSectionProps) => {
  const text1 = content?.text1 || "";
  const text2 = content?.text2 || "";

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              🌱 {arm(0x0544, 0x0565, 0x0580, 0x20, 0x0574, 0x0561, 0x057D, 0x056B, 0x0576)}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Genius {arm(0x0574, 0x0561, 0x0576, 0x056F, 0x0561, 0x057A, 0x0561, 0x0580, 0x057F, 0x0565, 0x0566, 0x0568, 0x20, 0x056F, 0x0580, 0x0569, 0x0561, 0x056F, 0x0561, 0x0576, 0x20, 0x0574, 0x056B, 0x057B, 0x0561, 0x057E, 0x0561, 0x0575, 0x0580, 0x20, 0x0567)}
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.15}>
            <div className="card-elevated p-8 md:p-12 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
              {text1 && (
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 relative z-10">
                  {text1}
                </p>
              )}
              {text2 && (
                <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                  {text2}
                </p>
              )}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {defaultFeatures.map((f, i) => (
              <AnimatedSection key={i} delay={0.2 + i * 0.1}>
                <motion.div
                  className="card-elevated p-5 text-center group cursor-default"
                  whileHover={{ y: -5, boxShadow: "0 12px 30px -8px hsl(153 60% 28% / 0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <f.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{content?.[f.key] || f.defaultLabel}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
