import { ShieldCheck, Heart, Utensils, Eye } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const arm = (...codes: number[]) => String.fromCharCode(...codes);

const safetyFeatures = [
  { icon: ShieldCheck, label: arm(0x0531, 0x0576, 0x057E, 0x057F, 0x0561, 0x0576, 0x0563, 0x0578, 0x0582, 0x0569, 0x0575, 0x0578, 0x0582, 0x0576) },
  { icon: Heart, label: arm(0x0531, 0x057C, 0x0578, 0x0572, 0x057B, 0x0578, 0x0582, 0x0569, 0x0575, 0x0578, 0x0582, 0x0576) },
  { icon: Utensils, label: arm(0x0543, 0x056B, 0x0577, 0x057F, 0x20, 0x057D, 0x0576, 0x0578, 0x0582, 0x0576, 0x0564) },
  { icon: Eye, label: arm(0x0531, 0x0576, 0x0570, 0x0561, 0x057F, 0x0561, 0x056F, 0x0561, 0x0576, 0x20, 0x0574, 0x0578, 0x057F, 0x0565, 0x0581, 0x0578, 0x0582, 0x0574) },
];

interface SafetySectionProps {
  content?: Record<string, string>;
}

const SafetySection = ({ content }: SafetySectionProps) => {
  const description = content?.description || "";

  return (
    <section id="safety" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              🛡️ {arm(0x0531, 0x0576, 0x057E, 0x057F, 0x0561, 0x0576, 0x0563, 0x0578, 0x0582, 0x0569, 0x0575, 0x0578, 0x0582, 0x0576)}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {arm(0x0531, 0x0576, 0x057E, 0x057F, 0x0561, 0x0576, 0x0563, 0x0578, 0x0582, 0x0569, 0x0575, 0x0578, 0x0582, 0x0576, 0x20, 0x0587, 0x20, 0x0570, 0x0578, 0x0563, 0x0561, 0x057F, 0x0561, 0x0580, 0x0578, 0x0582, 0x0569, 0x0575, 0x0578, 0x0582, 0x0576)}
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.15}>
            <div className="card-elevated p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
              {description && (
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 relative z-10">
                  {description}
                </p>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {safetyFeatures.map((f, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 group"
                    whileHover={{ scale: 1.05, backgroundColor: "hsl(153 60% 28% / 0.08)" }}
                  >
                    <f.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground text-center">{f.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
