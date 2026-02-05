import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

        {/* Accent bars */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 hidden lg:flex gap-2 opacity-30">
          <div className="w-2 h-32 bg-steel-light rounded-full" />
          <div className="w-2 h-48 bg-gradient-to-b from-accent to-primary rounded-full" />
          <div className="w-2 h-24 bg-primary rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Atendimento personalizado</span>
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
              inovar
            </span>
            {" "}sua van?
          </h2>
          <p className="text-lg text-steel-light mb-10 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nosso sistema de automação 
            pode facilitar o dia a dia dos seus passageiros e motoristas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5519989429972" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="tel:+5519989429972">
              <Button 
                variant="outline" 
                size="xl" 
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-secondary"
              >
                <Phone className="w-5 h-5" />
                (19) 98942-9972
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
