import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Heart, Zap, Target, Rocket, Shield, Star, Clock, Award, Cpu, Wrench } from "lucide-react";
import Map from "@/components/Map";

const About = () => {
  const stats = [
    { label: "Anos no Mercado", value: "5+", icon: Trophy },
    { label: "Clientes Satisfeitos", value: "1000+", icon: Users },
    { label: "PCs Montados", value: "500+", icon: Zap },
    { label: "Taxa de Satisfação", value: "98%", icon: Heart },
  ];

  const values = [
    {
      title: "Qualidade",
      description: "Trabalhamos apenas com as melhores marcas e componentes do mercado.",
    },
    {
      title: "Transparência",
      description: "Preços justos e sem surpresas. Você sabe exatamente o que está comprando.",
    },
    {
      title: "Expertise",
      description: "Nossa equipe é formada por especialistas apaixonados por tecnologia.",
    },
    {
      title: "Atendimento",
      description: "Suporte completo antes, durante e depois da sua compra.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Silber Games
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais do que uma loja, somos uma comunidade apaixonada por tecnologia e games
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-primary/20 hover:border-primary transition-all hover:shadow-glow"
            >
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-gradient-primary flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-card py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Nossa História</h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                A Silber Games nasceu da paixão por tecnologia e games. Em 2019, começamos
                como uma pequena loja de componentes em Fortaleza-CE, atendendo gamers que buscavam peças
                de qualidade para seus setups.
              </p>
              <p>
                Ao longo dos anos, expandimos nossos serviços, criando a Game House para
                proporcionar experiências únicas aos nossos clientes, e oferecendo serviços
                completos de montagem e assistência técnica. Nossa missão sempre foi democratizar
                o acesso a hardware de qualidade e criar uma comunidade forte de gamers na região.
              </p>
              <p>
                Hoje, somos referência em hardware gaming no Ceará, atendendo desde entusiastas que
                estão montando seu primeiro PC até profissionais que precisam de
                configurações de alto desempenho. Nosso compromisso é oferecer não apenas produtos,
                mas conhecimento e suporte completo em todas as etapas.
              </p>
              <p>
                Com mais de 1000 clientes satisfeitos e 500 PCs montados, continuamos crescendo
                e inovando para oferecer sempre o melhor para a comunidade gamer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-primary/20 hover:border-primary transition-all hover:shadow-glow">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-muted-foreground">
                Proporcionar experiências gamers excepcionais através de produtos de qualidade,
                serviços especializados e uma comunidade acolhedora.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20 hover:border-primary transition-all hover:shadow-glow">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Rocket className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-muted-foreground">
                Ser a referência nacional em hardware gaming, expandindo nossa presença e
                mantendo o padrão de excelência que nos define.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20 hover:border-primary transition-all hover:shadow-glow">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-muted-foreground">
                Qualidade, transparência, expertise e atendimento excepcional são os pilares
                que sustentam cada decisão que tomamos.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-card py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Conquistas e Diferenciais</h2>
            <p className="text-xl text-muted-foreground">
              O que nos torna únicos no mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Produtos Originais</h3>
                <p className="text-sm text-muted-foreground">
                  100% de garantia de autenticidade em todos os nossos produtos
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Entrega Rápida</h3>
                <p className="text-sm text-muted-foreground">
                  Entrega expressa em Fortaleza e região metropolitana
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Certificações</h3>
                <p className="text-sm text-muted-foreground">
                  Técnicos certificados pelas principais fabricantes
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <Cpu className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Showroom Completo</h3>
                <p className="text-sm text-muted-foreground">
                  Espaço físico para você ver e testar os produtos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground">
            Soluções completas para gamers e entusiastas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="border-primary/20 hover:border-primary transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Cpu className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Montagem de PCs</h3>
                  <p className="text-sm text-muted-foreground">
                    Montamos seu PC gamer sob medida com os melhores componentes e configurações otimizadas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Wrench className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Assistência Técnica</h3>
                  <p className="text-sm text-muted-foreground">
                    Manutenção, upgrades e suporte técnico especializado para manter seu setup sempre no topo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Game House</h3>
                  <p className="text-sm text-muted-foreground">
                    Espaço dedicado com PCs de última geração para você jogar sozinho ou com amigos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Eventos & Campeonatos</h3>
                  <p className="text-sm text-muted-foreground">
                    Organizamos e sediamos eventos gamers, aniversários e campeonatos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
          <p className="text-xl text-muted-foreground">
            O que nos move e guia nossas decisões
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary transition-all hover:shadow-glow"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Location Map */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
          <p className="text-xl text-muted-foreground mb-2">
            Visite nossa loja em Fortaleza-CE
          </p>
          <div className="flex flex-col items-center gap-2">
            <Badge variant="secondary" className="text-base px-4 py-1">
              Fortaleza - Ceará, Brasil
            </Badge>
            <p className="text-sm text-muted-foreground">
              Atendimento de Segunda a Sábado, das 9h às 18h
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Map />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-bold mb-2">📍 Endereço</h3>
              <p className="text-sm text-muted-foreground">
                Fortaleza - CE<br />
                Brasil
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-bold mb-2">📞 Telefone</h3>
              <p className="text-sm text-muted-foreground">
                (85) 99999-9999<br />
                WhatsApp disponível
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-bold mb-2">✉️ E-mail</h3>
              <p className="text-sm text-muted-foreground">
                contato@silbergames.com<br />
                suporte@silbergames.com
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
