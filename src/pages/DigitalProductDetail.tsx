import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Download, CheckCircle2, Play } from "lucide-react";
import { digitalProductsData } from "@/data/digitalProducts";
import { useToast } from "@/hooks/use-toast";

const DigitalProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const product = digitalProductsData.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Produto não encontrado</h1>
          <Link to="/produtos-digitais">
            <Button>Voltar para Produtos Digitais</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handlePurchase = () => {
    toast({
      title: "Produto adicionado!",
      description: "O produto foi adicionado ao seu carrinho.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <Link to="/produtos-digitais" className="text-primary hover:underline mb-4 inline-block">
          ← Voltar para Produtos Digitais
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant={product.type === "course" ? "default" : "secondary"}>
                  {product.type === "course" ? "Curso em Vídeo" : "E-book Digital"}
                </Badge>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating ? "fill-primary text-primary" : "text-muted"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({product.rating}.0)
                  </span>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{product.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>{product.students} alunos</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">Sobre</TabsTrigger>
                <TabsTrigger value="content">Conteúdo</TabsTrigger>
                <TabsTrigger value="video">Prévia</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Descrição Completa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.longDescription}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>O que você vai receber</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="content">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {product.type === "course" ? "Aulas do Curso" : "Capítulos do E-book"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.chapters.map((chapter, index) => (
                        <li key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                            {index + 1}
                          </div>
                          <span>{chapter}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="video">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      Vídeo de Apresentação
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={product.videoUrl}
                        title={product.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-primary shadow-glow">
              <CardContent className="p-6 space-y-6">
                <div className="text-center">
                  <div className="h-32 w-32 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <product.icon className="h-16 w-16 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    R$ {product.price.toFixed(2)}
                  </div>
                  <p className="text-sm text-muted-foreground">Pagamento único</p>
                </div>

                <Button onClick={handlePurchase} size="lg" className="w-full shadow-glow">
                  Adquirir Agora
                </Button>

                <div className="space-y-3 pt-4 border-t">
                  <h3 className="font-semibold">Este produto inclui:</h3>
                  <ul className="space-y-2 text-sm">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t text-center text-sm text-muted-foreground">
                  <p>Garantia de 30 dias</p>
                  <p className="mt-1">Suporte via email</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DigitalProductDetail;
