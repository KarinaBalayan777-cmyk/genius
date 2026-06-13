@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@300;400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 60 30% 98%;
    --foreground: 160 40% 12%;

    --card: 0 0% 100%;
    --card-foreground: 160 40% 12%;

    --popover: 0 0% 100%;
    --popover-foreground: 160 40% 12%;

    --primary: 153 60% 28%;
    --primary-foreground: 60 30% 98%;

    --secondary: 45 70% 92%;
    --secondary-foreground: 160 40% 12%;

    --muted: 100 15% 93%;
    --muted-foreground: 160 10% 42%;

    --accent: 38 85% 58%;
    --accent-foreground: 30 60% 15%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 120 15% 88%;
    --input: 120 15% 88%;
    --ring: 153 60% 28%;

    --radius: 1rem;

    --sidebar-background: 120 20% 96%;
    --sidebar-foreground: 160 40% 12%;
    --sidebar-primary: 153 60% 28%;
    --sidebar-primary-foreground: 60 30% 98%;
    --sidebar-accent: 120 25% 92%;
    --sidebar-accent-foreground: 160 40% 12%;
    --sidebar-border: 120 15% 88%;
    --sidebar-ring: 153 60% 28%;
  }

  .dark {
    --background: 160 30% 6%;
    --foreground: 60 20% 93%;
    --card: 160 25% 10%;
    --card-foreground: 60 20% 93%;
    --popover: 160 25% 10%;
    --popover-foreground: 60 20% 93%;
    --primary: 153 55% 38%;
    --primary-foreground: 0 0% 100%;
    --secondary: 45 30% 20%;
    --secondary-foreground: 60 20% 93%;
    --muted: 160 15% 16%;
    --muted-foreground: 120 10% 60%;
    --accent: 38 70% 45%;
    --accent-foreground: 30 50% 10%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 160 15% 18%;
    --input: 160 15% 18%;
    --ring: 153 55% 38%;
    --sidebar-background: 160 25% 8%;
    --sidebar-foreground: 60 20% 93%;
    --sidebar-primary: 153 55% 38%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 160 20% 14%;
    --sidebar-accent-foreground: 60 20% 93%;
    --sidebar-border: 160 15% 18%;
    --sidebar-ring: 153 55% 38%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Noto Sans Armenian', sans-serif;
  }
}

@layer components {
  .section-padding {
    @apply py-20 md:py-28;
  }

  .gradient-primary {
    background: linear-gradient(135deg, hsl(153 60% 28%), hsl(120 45% 38%));
  }

  .gradient-warm {
    background: linear-gradient(135deg, hsl(38 85% 58%), hsl(25 80% 55%));
  }

  .card-elevated {
    @apply bg-card rounded-2xl;
    box-shadow: 0 4px 24px -6px hsl(153 60% 28% / 0.1);
  }

  .text-balance {
    text-wrap: balance;
  }
}

@layer utilities {
  .animate-fade-up {
    animation: fadeUp 0.7s ease-out forwards;
  }

  .animate-fade-up-delay-1 {
    animation: fadeUp 0.7s ease-out 0.15s forwards;
    opacity: 0;
  }

  .animate-fade-up-delay-2 {
    animation: fadeUp 0.7s ease-out 0.3s forwards;
    opacity: 0;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
