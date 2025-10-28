import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Clock, Moon, Calendar, Users, Gamepad2 } from "lucide-react";
import gameHouseImage from "@/assets/game-house.jpg";

const GameHouse = () => {
  const pricing = [
    {
      icon: Clock,
      title: "1 Hora",
      price: "R$ 15,00",
      description: "Perfeito para uma sessão rápida",
    },
    {
      icon: Clock,
      title: "2 Horas",
      price: "R$ 25,00",
      description: "Mais tempo para se divertir",
      popular: true,
    },
    {
      icon: Clock,
      title: "3 Horas",
      price: "R$ 35,00",
      description: "Maratona de jogos garantida",
    },
    {
      icon: Moon,
      title: "Corujão",
      price: "R$ 50,00",
      description: "23:00 até 6:00 - A noite toda",
      highlight: true,
    },
    {
      icon: Calendar,
      title: "Passe Mensal",
      price: "R$ 300,00",
      description: "Jogue quanto quiser o mês todo",
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60 z-10" />
        <img
          src={gameHouseImage}
          alt="Game House"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        
        <div className="container relative z-20 mx-auto px-4 py-24">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Game House{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Silber Games
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Computadores de última geração com os melhores periféricos. 
              Viva a melhor experiência gamer em nosso espaço dedicado!
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="border-primary/20 hover:border-primary transition-all hover:shadow-glow">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Gamepad2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">PCs de Alto Desempenho</h3>
              <p className="text-muted-foreground text-sm">
                Configurações top de linha para rodar qualquer jogo no máximo
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20 hover:border-primary transition-all hover:shadow-glow">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Ambiente Confortável</h3>
              <p className="text-muted-foreground text-sm">
                Cadeiras ergonômicas, ar-condicionado e iluminação RGB
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20 hover:border-primary transition-all hover:shadow-glow">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Moon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Corujão Especial</h3>
              <p className="text-muted-foreground text-sm">
                Jogue a noite toda com preço especial das 23h às 6h
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Pricing */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nossos Planos</h2>
          <p className="text-xl text-muted-foreground">
            Escolha o plano ideal para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {pricing.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all hover:shadow-glow ${
                plan.highlight ? "border-primary shadow-glow" : "border-border"
              } ${plan.popular ? "border-accent" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 text-xs font-bold rounded-bl-lg">
                  POPULAR
                </div>
              )}
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
              )}
              <CardHeader className="text-center pb-4">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-gradient-primary flex items-center justify-center">
                  <plan.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                  {plan.price}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/game-house/eventos">
            <Button size="lg" className="shadow-glow w-full sm:w-auto">
              Eventos e Aniversários
            </Button>
          </Link>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto">
            Reservar Horário
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-card py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Conheça Nossa Game House
            </h2>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Vídeo em breve</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameHouse;
