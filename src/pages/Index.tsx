import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Cpu, Gamepad2, Wrench, BookOpen, Trophy, Zap } from "lucide-react";
import heroImage from "@/assets/hero-gaming-pc.jpg";
import gameHouseImage from "@/assets/game-house.jpg";
import pcPartsImage from "@/assets/pc-parts.jpg";

const Index = () => {
  const services = [
    {
      icon: Cpu,
      title: "Peças e Componentes",
      description: "Catálogo completo com as melhores marcas de hardware do mercado. Placas de vídeo, processadores, memórias RAM e muito mais.",
      link: "/produtos",
      buttonText: "Ver Ofertas",
      image: pcPartsImage,
    },
    {
      icon: Gamepad2,
      title: "Game House",
      description: "Computadores de alta performance para sua melhor experiência gamer. Jogue sozinho ou com amigos em nosso espaço dedicado. Aproveite o Corujão!",
      link: "/game-house",
      buttonText: "Saiba Mais",
      image: gameHouseImage,
    },
    {
      icon: Trophy,
      title: "Eventos & Aniversários",
      description: "Transforme seu evento em uma experiência gamer inesquecível. Personalize computadores e periféricos para festas e campeonatos.",
      link: "/game-house/eventos",
      buttonText: "Reservar Data",
    },
    {
      icon: Wrench,
      title: "Assessoria de Montagem",
      description: "Quer montar um PC gamer mas não sabe por onde começar? Nossa equipe especializada te ajuda a escolher as peças ideais para seu orçamento.",
      link: "/servicos/assessoria",
      buttonText: "Consultoria",
    },
    {
      icon: Zap,
      title: "Assistência Técnica",
      description: "Montando seu PC ou precisa de upgrade? Oferecemos todo suporte técnico, instalação de componentes e manutenção especializada.",
      link: "/servicos/assistencia",
      buttonText: "Assistência Técnica",
    },
    {
      icon: BookOpen,
      title: "Produtos Digitais",
      description: "Aprenda com nossos cursos especializados e e-books sobre montagem, otimização e manutenção de PCs gamers.",
      link: "/produtos-digitais",
      buttonText: "Explorar",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 z-10" />
        <img
          src={heroImage}
          alt="Gaming PC Setup"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        
        <div className="container relative z-20 mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bem-vindo à{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Silber Games
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Sua loja completa de hardware, montagem de PCs e experiências gamer. 
              Do componente ao setup dos sonhos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/produtos">
                <Button size="lg" className="shadow-glow">
                  Ver Produtos
                </Button>
              </Link>
              <Link to="/game-house">
                <Button size="lg" variant="secondary">
                  Conhecer Game House
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa para sua experiência gamer perfeita
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {service.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="mb-4 h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:animate-glow">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 min-h-[4rem]">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <Button className="w-full group-hover:shadow-glow transition-all">
                    {service.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Produtos</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <div className="text-muted-foreground">Clientes</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                20+
              </div>
              <div className="text-muted-foreground">PCs de Alto Desempenho</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Corujão Disponível</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
