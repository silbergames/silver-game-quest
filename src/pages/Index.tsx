import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Cpu, Gamepad2, Wrench, BookOpen, Trophy, Zap, Award, Users, Headphones, ShieldCheck } from "lucide-react";
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

      {/* New Detailed Sections with Tabs */}
      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="benefits" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="benefits">Diferenciais</TabsTrigger>
            <TabsTrigger value="stats">Números</TabsTrigger>
            <TabsTrigger value="support">Suporte</TabsTrigger>
          </TabsList>

          <TabsContent value="benefits" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Por que escolher a Silber Games?</h2>
              <p className="text-muted-foreground">Vantagens exclusivas para você</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-primary/20 hover:border-primary transition-all">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">Produtos Originais</h3>
                  <p className="text-sm text-muted-foreground">
                    100% originais com garantia do fabricante
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:border-primary transition-all">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">Entrega Rápida</h3>
                  <p className="text-sm text-muted-foreground">
                    Receba seus produtos em até 48h
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:border-primary transition-all">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">Compra Segura</h3>
                  <p className="text-sm text-muted-foreground">
                    Pagamento 100% seguro e protegido
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:border-primary transition-all">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">Comunidade Ativa</h3>
                  <p className="text-sm text-muted-foreground">
                    Faça parte da nossa comunidade gamer
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Nossa História em Números</h2>
              <p className="text-muted-foreground">Resultados que comprovam nossa excelência</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-muted-foreground font-medium">Produtos em Estoque</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  1000+
                </div>
                <div className="text-muted-foreground font-medium">Clientes Satisfeitos</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  20+
                </div>
                <div className="text-muted-foreground font-medium">PCs na Game House</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-muted-foreground font-medium">Disponibilidade Corujão</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="support">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Suporte Completo</h2>
              <p className="text-muted-foreground">Estamos aqui para ajudar você</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <Headphones className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Atendimento Especializado</h3>
                  <p className="text-sm text-muted-foreground">
                    Nossa equipe está pronta para tirar todas as suas dúvidas
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <Wrench className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Assistência Técnica</h3>
                  <p className="text-sm text-muted-foreground">
                    Manutenção e suporte técnico especializado
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Material Educativo</h3>
                  <p className="text-sm text-muted-foreground">
                    Cursos e e-books para você se tornar expert
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
