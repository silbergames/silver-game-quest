import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wrench, Zap, CheckCircle2 } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Nossos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Serviços
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Do planejamento à manutenção, estamos com você em cada etapa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Assessoria */}
          <Card className="border-primary/20 hover:border-primary transition-all hover:shadow-glow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Wrench className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-center text-2xl">
                Assessoria de Montagem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center">
                Você quer montar um PC gamer, mas não sabe por onde começar? Nossa equipe
                especializada te ajuda a escolher as peças ideais.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Análise do seu orçamento e necessidades</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Indicação de componentes compatíveis e otimizados
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Orientação sobre melhor custo-benefício</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Suporte via WhatsApp durante a compra</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">A partir de</p>
                  <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    R$ 199,00
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Consultoria completa</p>
                </div>
              </div>

              <Link to="/servicos/assessoria" className="block">
                <Button className="w-full shadow-glow">Solicitar Assessoria</Button>
              </Link>

              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Vídeo explicativo</p>
              </div>
            </CardContent>
          </Card>

          {/* Assistência */}
          <Card className="border-primary/20 hover:border-primary transition-all hover:shadow-glow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-center text-2xl">
                Assistência Técnica
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center">
                Montando seu PC ou quer dar upgrade? Todo suporte técnico que você
                precisa para deixar seu setup perfeito.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Montagem completa do seu PC</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Instalação de componentes e upgrades</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Diagnóstico e reparo de peças</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Otimização e configuração de sistema</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-card border border-border rounded-lg p-3 flex justify-between items-center">
                  <span className="text-sm">Montagem Completa</span>
                  <span className="font-bold text-primary">R$ 299,00</span>
                </div>
                <div className="bg-card border border-border rounded-lg p-3 flex justify-between items-center">
                  <span className="text-sm">Instalação de Componente</span>
                  <span className="font-bold text-primary">R$ 99,00</span>
                </div>
                <div className="bg-card border border-border rounded-lg p-3 flex justify-between items-center">
                  <span className="text-sm">Diagnóstico</span>
                  <span className="font-bold text-primary">R$ 79,00</span>
                </div>
              </div>

              <Link to="/servicos/assistencia" className="block">
                <Button className="w-full shadow-glow">Agendar Serviço</Button>
              </Link>

              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Vídeo explicativo</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
