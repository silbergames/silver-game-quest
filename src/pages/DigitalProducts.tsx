import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Star, Download, Headphones } from "lucide-react";
import { digitalProductsData } from "@/data/digitalProducts";

const DigitalProducts = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["ebook", "course"]);
  const [priceRange, setPriceRange] = useState<string>("all");

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const filteredProducts = digitalProductsData.filter(product => {
    const typeMatch = selectedTypes.includes(product.type);
    let priceMatch = true;

    if (priceRange === "low") {
      priceMatch = product.price < 50;
    } else if (priceRange === "medium") {
      priceMatch = product.price >= 50 && product.price < 150;
    } else if (priceRange === "high") {
      priceMatch = product.price >= 150;
    }

    return typeMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filtros</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Tipo de Produto</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="ebook"
                        checked={selectedTypes.includes("ebook")}
                        onCheckedChange={() => toggleType("ebook")}
                      />
                      <Label htmlFor="ebook" className="cursor-pointer">E-books</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="course"
                        checked={selectedTypes.includes("course")}
                        onCheckedChange={() => toggleType("course")}
                      />
                      <Label htmlFor="course" className="cursor-pointer">Cursos</Label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Faixa de Preço</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setPriceRange("all")}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        priceRange === "all" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      Todos
                    </button>
                    <button
                      onClick={() => setPriceRange("low")}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        priceRange === "low" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      Até R$ 50
                    </button>
                    <button
                      onClick={() => setPriceRange("medium")}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        priceRange === "medium" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      R$ 50 - R$ 150
                    </button>
                    <button
                      onClick={() => setPriceRange("high")}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        priceRange === "high" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      Acima de R$ 150
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="flex-1">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">
                Produtos <span className="bg-gradient-primary bg-clip-text text-transparent">Digitais</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Aprenda com nossos especialistas através de cursos e e-books exclusivos
              </p>
              <p className="text-muted-foreground mt-2">{filteredProducts.length} produtos encontrados</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="border-border hover:border-primary transition-all hover:shadow-glow overflow-hidden">
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
                          <Star key={i} className={`h-4 w-4 ${i < product.rating ? "fill-primary text-primary" : "text-muted"}`} />
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
                  <CardFooter className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <Link to={`/produtos-digitais/${product.id}`}>
                      <Button className="shadow-glow">Ver Detalhes</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <section className="py-16 border-t border-border mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que escolher nossos produtos?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">Conteúdo de Qualidade</h3>
              <p className="text-sm text-muted-foreground">Material criado por especialistas com anos de experiência</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Download className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">Acesso Vitalício</h3>
              <p className="text-sm text-muted-foreground">Compre uma vez e tenha acesso para sempre ao conteúdo</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Headphones className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">Suporte Dedicado</h3>
              <p className="text-sm text-muted-foreground">Tire suas dúvidas diretamente com nossos instrutores</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DigitalProducts;
