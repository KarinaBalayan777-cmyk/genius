import logo from "@/assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="gradient-primary py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt="Genius School" className="h-10 w-auto brightness-0 invert" />
          </motion.div>
          <div className="flex gap-6 text-primary-foreground/70 text-sm">
            {[
              { href: "#about", label: "\u0544\u0565\u0580 \u0574\u0561\u057D\u056B\u0576" },
              { href: "#programs", label: "\u053E\u0580\u0561\u0563\u0580\u0565\u0580" },
              { href: "#contact", label: "\u053F\u0561\u057A" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="hover:text-primary-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Genius School
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
