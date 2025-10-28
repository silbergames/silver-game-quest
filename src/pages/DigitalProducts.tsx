import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, PlayCircle, Star, Download } from "lucide-react";

const DigitalProducts = () => {
  const products = [
    {
      type: "ebook",
      title: "Guia Completo de Montagem de PC Gamer",
      description:
        "Aprenda do zero como montar seu PC gamer. Inclui lista de componentes, passo a passo detalhado e dicas de otimização.",
      price: 49.9,
      rating: 5,
      students: 342,
      icon: BookOpen,
    },
    {
      type: "course",
      title: "Curso: Manutenção e Upgrade de PCs",
      description:
        "Curso completo em vídeo sobre manutenção preventiva, diagnóstico de problemas e upgrade de componentes.",
      price: 149.9,
      rating: 5,
      students: 128,
      icon: PlayCircle,
    },
    {
      type: "ebook",
      title: "E-book: Otimização de Performance",
      description:
        "Técnicas avançadas para extrair o máximo desempenho do seu hardware em jogos e aplicações.",
      price: 39.9,
      rating: 4,
      students: 215,
      icon: BookOpen,
    },
    {
      type: "course",
      title: "Overclock Seguro: Do Básico ao Avançado",
      description:
        "Aprenda a fazer overclock de forma segura em processadores e placas de vídeo para ganhar mais FPS.",
      price: 199.9,
      rating: 5,
      students: 89,
      icon: PlayCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Produtos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Digitais
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprenda com nossos especialistas através de cursos e e-books exclusivos
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary transition-all hover:shadow-glow overflow-hidden"
            >
              <div className="h-48 bg-gradient-card flex items-center justify-center">
                <product.icon className="h-20 w-20 text-primary" />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant={product.type === "course" ? "default" : "secondary"}>
                    {product.type === "course" ? "Curso" : "E-book"}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Download className="h-4 w-4" />
                  <span>{product.students} alunos</span>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between pt-0">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  R$ {product.price.toFixed(2)}
                </div>
                <Button className="shadow-glow">Adquirir Agora</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <section className="mt-20 bg-card border border-border rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Por que escolher nossos produtos digitais?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">Conteúdo de Qualidade</h3>
              <p className="text-sm text-muted-foreground">
                Material criado por especialistas com anos de experiência
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Download className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">Acesso Vitalício</h3>
              <p className="text-sm text-muted-foreground">
                Compre uma vez e tenha acesso para sempre ao conteúdo
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <PlayCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">Suporte Dedicado</h3>
              <p className="text-sm text-muted-foreground">
                Tire suas dúvidas diretamente com nossos instrutores
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DigitalProducts;
