import { Baby, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const arm = (...codes: number[]) => String.fromCharCode(...codes);

interface ProgramsSectionProps {
  content?: Record<string, string>;
}

const ProgramsSection = ({ content }: ProgramsSectionProps) => {
  const parseItems = (text: string | undefined): string[] => {
    if (!text) return [];
    return text.split("\n").map(s => s.trim()).filter(Boolean);
  };

  const programs = [
    {
      icon: Baby,
      emoji: "\uD83D\uDC76",
      title: arm(0x0553, 0x0578, 0x0584, 0x0580, 0x056B, 0x056F, 0x20, 0x056D, 0x0578, 0x0582, 0x0574, 0x0562),
      age: "2\u20133 " + arm(0x057F, 0x0561, 0x0580, 0x0565, 0x056F, 0x0561, 0x0576),
      color: "from-accent/20 to-accent/5",
      items: parseItems(content?.small_group),
    },
    {
      icon: BookOpen,
      emoji: "\uD83E\uDDD2",
      title: arm(0x0544, 0x056B, 0x057B, 0x056B, 0x0576, 0x20, 0x056D, 0x0578, 0x0582, 0x0574, 0x0562),
      age: "3\u20135 " + arm(0x057F, 0x0561, 0x0580, 0x0565, 0x056F, 0x0561, 0x0576),
      color: "from-primary/20 to-primary/5",
      items: parseItems(content?.middle_group),
    },
    {
      icon: GraduationCap,
      emoji: "\uD83C\uDF93",
      title: arm(0x0531, 0x057E, 0x0561, 0x0563, 0x20, 0x056D, 0x0578, 0x0582, 0x0574, 0x0562),
      age: "5\u20136 " + arm(0x057F, 0x0561, 0x0580, 0x0565, 0x056F, 0x0561, 0x0576),
      color: "from-primary/15 to-accent/10",
      items: parseItems(content?.senior_group),
    },
  ];

  return (
    <section id="programs" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              📚 {arm(0x053E, 0x0580, 0x0561, 0x0563, 0x0580, 0x0565, 0x0580)}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              {arm(0x054F, 0x0561, 0x0580, 0x056B, 0x0584, 0x0561, 0x0575, 0x056B, 0x0576, 0x20, 0x056E, 0x0580, 0x0561, 0x0563, 0x0580, 0x0565, 0x0580)}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                className="card-elevated p-8 relative overflow-hidden group h-full"
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px hsl(153 60% 28% / 0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${p.color} rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{p.emoji}</div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{p.title}</h3>
                  <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-5">
                    {p.age}
                  </span>
                  {p.items.length > 0 && (
                    <ul className="space-y-3">
                      {p.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-muted-foreground">
                          <span className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
