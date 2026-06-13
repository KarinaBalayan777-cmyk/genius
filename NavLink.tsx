import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const arm = (...codes: number[]) => String.fromCharCode(...codes);

interface ContactSectionProps {
  content?: Record<string, string>;
}

const ContactSection = ({ content }: ContactSectionProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(arm(0x0546, 0x0561, 0x0574, 0x0561, 0x056F, 0x0568, 0x20, 0x0570, 0x0561, 0x057B, 0x0578, 0x0572, 0x0578, 0x0582, 0x0569, 0x0575, 0x0561, 0x0574, 0x0562, 0x20, 0x0578, 0x0582, 0x0572, 0x0561, 0x0580, 0x056F, 0x057E, 0x0565, 0x0581));
    setName("");
    setPhone("");
    setMessage("");
  };

  const contactInfo = [
    { icon: MapPin, label: arm(0x0540, 0x0561, 0x057D, 0x0581, 0x0565), value: content?.address || "" },
    { icon: Phone, label: arm(0x0540, 0x0565, 0x057C, 0x0561, 0x056D, 0x0578, 0x057D), value: content?.phone || "" },
    { icon: Mail, label: arm(0x0537, 0x056C, 0x002E, 0x20, 0x0583, 0x0578, 0x057D, 0x057F), value: content?.email || "" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              📞 {arm(0x053F, 0x0561, 0x057A, 0x20, 0x0574, 0x0565, 0x0566, 0x20, 0x0570, 0x0565, 0x057F)}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              {arm(0x0534, 0x056B, 0x0574, 0x0565, 0x0584, 0x20, 0x0574, 0x0565, 0x0566, 0x20, 0x0570, 0x0561, 0x0580, 0x0581, 0x0565, 0x0580, 0x056B, 0x20, 0x0570, 0x0561, 0x0574, 0x0561, 0x0580)}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="space-y-5">
              {contactInfo.map((c, i) => (
                <motion.div
                  key={i}
                  className="card-elevated p-5 flex items-center gap-4"
                  whileHover={{ x: 5, boxShadow: "0 8px 24px -6px hsl(153 60% 28% / 0.12)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <c.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{c.label}</p>
                    <p className="font-semibold text-foreground">{c.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="card-elevated p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              <h3 className="text-lg font-bold text-foreground mb-5">
                {arm(0x0533, 0x0580, 0x0565, 0x0584, 0x20, 0x0574, 0x0565, 0x0566)}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder={arm(0x0531, 0x0576, 0x0578, 0x0582, 0x0576, 0x20, 0x0561, 0x0566, 0x0563, 0x0561, 0x0576, 0x0578, 0x0582, 0x0576)}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted/60 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
                <input
                  type="tel"
                  placeholder={arm(0x0540, 0x0565, 0x057C, 0x0561, 0x056D, 0x0578, 0x057D, 0x0561, 0x0570, 0x0561, 0x0574, 0x0561, 0x0580)}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted/60 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
                <textarea
                  placeholder={arm(0x0541, 0x0565, 0x0580, 0x20, 0x0570, 0x0561, 0x0572, 0x0578, 0x0580, 0x0564, 0x0561, 0x0563, 0x0580, 0x0578, 0x0582, 0x0569, 0x0575, 0x0578, 0x0582, 0x0576, 0x0568)}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted/60 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                />
                <motion.button
                  type="submit"
                  className="w-full gradient-primary text-primary-foreground font-semibold py-3.5 rounded-full"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px hsl(153 60% 28% / 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {arm(0x0548, 0x0582, 0x0572, 0x0561, 0x0580, 0x056F, 0x0565, 0x056C)}
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
