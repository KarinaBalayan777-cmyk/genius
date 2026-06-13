import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { href: "#about", label: "\u0544\u0565\u0580 \u0574\u0561\u057D\u056B\u0576" },
  { href: "#programs", label: "\u053E\u0580\u0561\u0563\u0580\u0565\u0580" },
  { href: "#activities", label: "\u0533\u0578\u0580\u056E\u0578\u0582\u0576\u0565\u0578\u0582\u0569\u0575\u0578\u0582\u0576" },
  { href: "#safety", label: "\u0531\u0576\u057E\u057F\u0561\u0576\u0563\u0578\u0582\u0569\u0575\u0578\u0582\u0576" },
  { href: "#team", label: "\u0544\u0565\u0580 \u0569\u056B\u0574\u0568" },
  { href: "#contact", label: "\u053F\u0561\u057A" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Genius School" className="h-12 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
            <Link to="/admin">
              <button className="gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                {"\u0544\u0578\u0582\u057F\u0584"}
              </button>
            </Link>
          </div>

          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 space-y-3 bg-card/95 backdrop-blur-md rounded-b-2xl px-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-2 px-3 text-foreground/70 hover:text-primary font-medium rounded-lg hover:bg-muted transition-colors"
              >
                {n.label}
              </a>
            ))}
            <Link to="/admin" onClick={() => setOpen(false)}>
              <button className="gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full w-full mt-2">
                {"\u0544\u0578\u0582\u057F\u0584"}
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
