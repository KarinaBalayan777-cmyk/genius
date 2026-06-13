import { Heart, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              👩‍🏫 {"\u0544\u0565\u0580 \u0569\u056B\u0574\u0568"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {"\u054D\u0580\u057F\u0561\u0581\u0561\u057E \u0587 \u0583\u0578\u0580\u0571\u0561\u057C\u0578\u0582 \u0574\u0561\u057D\u0576\u0561\u0563\u0565\u057F\u0576\u0565\u0580"}
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-4xl mx-auto card-elevated p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Genius {"\u0574\u0561\u0576\u056F\u0561\u057A\u0561\u0580\u057F\u0565\u0566\u056B \u0569\u056B\u0574\u0568 \u0562\u0561\u0572\u056F\u0561\u0581\u0561\u056E \u0567 \u057D\u0580\u057F\u0561\u0581\u0561\u057E \u0587 \u0583\u0578\u0580\u0571\u0561\u057C\u0578\u0582 \u0574\u0561\u057D\u0576\u0561\u0563\u0565\u057F\u0576\u0565\u0580\u056B\u0581, \u0578\u057E\u0584\u0565\u0580 \u0561\u0574\u0565\u0576 \u0585\u0580 \u0561\u0577\u056D\u0561\u057F\u0578\u0582\u0574 \u0565\u0576 \u0565\u0580\u0565\u056D\u0561\u0576\u0565\u0580\u056B \u0566\u0561\u0580\u0563\u0561\u0581\u0574\u0561\u0576 \u0587 \u0565\u0580\u057B\u0561\u0576\u056F\u0578\u0582\u0569\u0575\u0561\u0576 \u0570\u0561\u0574\u0561\u0580\u0589"}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Heart, label: "\u054D\u056B\u0580\u0578\u057E \u0574\u0578\u057F\u0565\u0581\u0578\u0582\u0574" },
                { icon: Users, label: "\u0539\u056B\u0574\u0561\u0575\u056B\u0576 \u0561\u0577\u056D\u0561\u057F\u0561\u0576\u0584" },
                { icon: Award, label: "\u0553\u0578\u0580\u0571\u0561\u057C\u0578\u0582 \u056F\u0561\u0564\u0580\u0565\u0580" },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <f.icon className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium text-foreground text-center">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TeamSection;
