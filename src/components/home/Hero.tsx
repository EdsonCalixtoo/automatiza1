import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-b from-white via-cyan-50 to-white">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Large gradient blobs */}
        <div className="absolute top-0 right-0 w-1/2 h-2/3 bg-gradient-to-bl from-cyan-600/40 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(90deg, #06b6d4 1px, transparent 1px), linear-gradient(#06b6d4 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-gray-900 space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-3 bg-cyan-100/60 backdrop-blur-sm px-5 py-3 rounded-full text-sm border border-cyan-300/50">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
              <span className="text-cyan-700 font-semibold">Tecnologia de ponta em automação</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transforme sua
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-500">
                Porta de Van
              </span>
              em Automática
            </h1>
            
            <p className="text-xl text-gray-700 max-w-xl leading-relaxed font-light">
              Sistema inteligente de automação que abre e fecha a porta da sua van 
              com praticidade e segurança. Instalação profissional e garantia de 12 meses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/produtos">
                <Button 
                  size="xl" 
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white group shadow-lg hover:shadow-xl transition-all"
                >
                  Ver Produtos
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="https://wa.me/5519989429972" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="xl" 
                  variant="outline" 
                  className="w-full sm:w-auto border-cyan-300 text-cyan-700 hover:bg-cyan-50"
                >
                  Falar com Especialista
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-12 border-t border-cyan-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-3xl text-cyan-700">12</p>
                  <p className="text-sm text-gray-600">Meses de Garantia</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-3xl text-cyan-700">3-4s</p>
                  <p className="text-sm text-gray-600">Tempo de Abertura</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-3xl text-cyan-700">500+</p>
                  <p className="text-sm text-gray-600">Vans Automatizadas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:flex items-center justify-center perspective">
            <div className="relative w-full max-w-lg">
              {/* Animated background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-cyan-400/10 rounded-3xl blur-2xl animate-pulse-slow" />
              
              {/* Main container */}
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-200/50 shadow-2xl overflow-hidden flex items-center justify-center p-8">
                {/* Inner decoration */}
                <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full blur-xl opacity-10" />
                
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-6">🚐</div>
                  <p className="text-gray-600 font-medium">Sistema de Automação</p>
                  <p className="text-gray-500 text-sm mt-2">Porta Motorizada Inteligente</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
