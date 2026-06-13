import { Palette, Music, MessageCircle, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const arm = (...codes: number[]) => String.fromCharCode(...codes);

interface ActivitiesSectionProps {
  content?: Record<string, string>;
}

const ActivitiesSection = ({ content }: ActivitiesSectionProps) => {
  // Parse comma-separated activities from DB or use defaults
  const dbItems = content?.description?.split(",").map(s => s.trim()).filter(Boolean) || [];

  const defaultActivities = [
    { icon: Palette, title: arm(0x0546, 0x056F, 0x0561, 0x0580, 0x0579, 0x0578, 0x0582, 0x0569, 0x0575, 0x0578, 0x0582, 0x0576, 0x20, 0x0587, 0x20, 0x0571, 0x0565, 0x057C, 0x0561, 0x0580, 0x057E, 0x0565, 0x057D, 0x057F), color: "from-accent to-accent/70" },
    { icon: Music, title: arm(0x0535, 0x0580, 0x0561, 0x056A, 0x0577, 0x057F, 0x0578, 0x0582, 0x0569, 0x0575, 0x0578, 0x0582, 0x0576, 0x20, 0x0587, 0x20, 0x057A, 0x0561, 0x0580), color: "from-primary to-primary/70" },
    { icon: MessageCircle, title: arm(0x053C, 0x0578, 0x0563, 0x0578, 0x057A, 0x0565, 0x0564, 0x0561, 0x056F, 0x0561, 0x0576, 0x20, 0x0561, 0x0577, 0x056D, 0x0561, 0x057F, 0x0561, 0x0576, 0x0584), color: "from-primary/80 to-accent/60" },
    { icon: Gamepad2, title: arm(0x053D, 0x0561, 0x0572, 0x0561, 0x0575, 0x056B, 0x0576, 0x20, 0x0578, 0x0582, 0x057D, 0x0578, 0x0582, 0x0581, 0x0578, 0x0582, 0x0574), color: "from-accent/80 to-primary/60" },
  ];

  const icons = [Palette, Music, MessageCircle, Gamepad2];
  const colors = ["from-accent to-accent/70", "from-primary to-primary/70", "from-primary/80 to-accent/60", "from-accent/80 to-primary/60"];

  const activities = dbItems.length > 0
    ? dbItems.map((title, i) => ({
        icon: icons[i % icons.length],
        title,
        color: colors[i % colors.length],
      }))
    : defaultActivities;

  return (
    <section id="activities" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              🎨 {arm(0x0544, 0x0565, 0x0580, 0x20, 0x0563, 0x0578, 0x0580, 0x056E, 0x0578, 0x0582, 0x0576, 0x0565, 0x0578, 0x0582, 0x0569, 0x0575, 0x0578, 0x0582, 0x0576, 0x0568)}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              {arm(0x054D, 0x057F, 0x0565, 0x0572, 0x056E, 0x0561, 0x0563, 0x0578, 0x0580, 0x056E, 0x0561, 0x056F, 0x0561, 0x0576, 0x20, 0x0587, 0x20, 0x0566, 0x0561, 0x0580, 0x0563, 0x0561, 0x0581, 0x0576, 0x0578, 0x0572, 0x20, 0x0574, 0x056B, 0x057B, 0x0561, 0x057E, 0x0561, 0x0575, 0x0580)}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((a, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                className="card-elevated p-8 text-center group cursor-default relative overflow-hidden"
                whileHover={{ y: -8, boxShadow: "0 16px 36px -8px hsl(153 60% 28% / 0.12)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center mx-auto mb-5`}
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <a.icon className="h-9 w-9 text-primary-foreground" />
                </motion.div>
                <h3 className="font-bold text-foreground text-lg">{a.title}</h3>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
