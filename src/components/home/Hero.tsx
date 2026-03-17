import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Award, Star, ChevronRight } from "lucide-react";

const stats = [
  { icon: Shield, value: "12", label: "Meses de Garantia", suffix: "" },
  { icon: Zap, value: "3-4", label: "Seg. de Abertura", suffix: "s" },
  { icon: Award, value: "500", label: "Vans Automatizadas", suffix: "+" },
  { icon: Star, value: "4.9", label: "Avaliação Média", suffix: "★" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/5 rounded-full blur-[150px]" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${10 + (i * 4.5)}%`,
              top: `${15 + ((i * 3.7) % 70)}%`,
              animation: `float ${3 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 px-5 py-2.5 rounded-full group hover:bg-cyan-500/15 transition-all duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
              </span>
              <span className="text-cyan-300 text-sm font-semibold tracking-wide">Tecnologia de Automação Premium</span>
              <ChevronRight className="w-4 h-4 text-cyan-500 group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white">
                Transforme sua
                <br />
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400">
                    Porta de Van
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4C50 1.5 100 1 150 2C200 3 250 4 298 2" stroke="url(#paint0)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="paint0" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />
                em Automática
              </h1>
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                Sistema inteligente que abre e fecha a porta da sua van com precisão, praticidade e máxima segurança. Instalação profissional e garantia total.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/produtos">
                <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600" />
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative text-white">Ver Produtos</span>
                  <ArrowRight className="relative w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.5)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </Link>

              <a href="https://wa.me/5519989429972" target="_blank" rel="noopener noreferrer">
                <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base border border-slate-600 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105">
                  💬 Falar com Especialista
                </button>
              </a>
            </div>

            {/* Trust Line */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-2">
                {["J", "M", "C", "A", "R"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: `hsl(${180 + i * 20}, 70%, 40%)` }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-400">
                <span className="text-white font-semibold">+500 clientes</span> confiam em nosso sistema
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL — premium glass card */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 to-blue-600/10 blur-3xl scale-110" />

            {/* Main glass card */}
            <div className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl p-8 overflow-hidden">
              {/* Card top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              {/* Van icon center */}
              <div className="flex flex-col items-center justify-center py-8 gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl scale-150" />
                  <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center text-8xl">
                    🚐
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-xl">Automatiza Pro</p>
                  <p className="text-cyan-400 text-sm mt-1">Porta Motorizada Inteligente</p>
                </div>
              </div>

              {/* Feature pills */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  { icon: "⚡", label: "Abertura em 3s" },
                  { icon: "🛡️", label: "Anti-esmagamento" },
                  { icon: "📱", label: "Controle remoto" },
                  { icon: "🔧", label: "Fácil instalação" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group cursor-default"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-slate-300 text-xs font-medium group-hover:text-cyan-300 transition-colors">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Live indicator */}
              <div className="mt-6 flex items-center justify-between bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">Sistema Ativo</span>
                </div>
                <span className="text-slate-400 text-xs">Sensor funcionando</span>
              </div>

              {/* Card bottom decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 shadow-2xl shadow-cyan-500/25 hover:scale-110 transition-transform duration-300">
              <div className="text-white text-center">
                <p className="text-2xl font-black">12m</p>
                <p className="text-xs text-cyan-200 font-medium">Garantia</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-sm border border-yellow-500/30 rounded-2xl px-4 py-3 shadow-2xl hover:scale-110 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <div>
                  <p className="text-white text-sm font-bold">4.9/5.0</p>
                  <p className="text-slate-400 text-xs">500+ avaliações</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-cyan-500/30 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-black text-2xl leading-none">
                      {stat.value}<span className="text-cyan-400">{stat.suffix}</span>
                    </p>
                    <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
        </div>
        <span className="text-slate-500 text-xs">Role para baixo</span>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
