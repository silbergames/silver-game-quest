import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Heart, Zap } from "lucide-react";

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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                A Silber Games nasceu da paixão por tecnologia e games. Em 2019, começamos
                como uma pequena loja de componentes, atendendo gamers que buscavam peças
                de qualidade para seus setups.
              </p>
              <p>
                Ao longo dos anos, expandimos nossos serviços, criando a Game House para
                proporcionar experiências únicas aos nossos clientes, e oferecendo serviços
                completos de montagem e assistência técnica.
              </p>
              <p>
                Hoje, somos referência em hardware gaming, atendendo desde entusiastas que
                estão montando seu primeiro PC até profissionais que precisam de
                configurações de alto desempenho.
              </p>
            </div>
          </div>
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

      {/* Team Section */}
      <section className="bg-card py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-muted-foreground">
              Especialistas apaixonados por tecnologia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-square bg-gradient-card"></div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">Nome do Membro</h3>
                  <p className="text-sm text-muted-foreground mb-3">Cargo</p>
                  <p className="text-sm text-muted-foreground">
                    Especialista em hardware com mais de X anos de experiência.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
