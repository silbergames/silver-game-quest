import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Truck, Shield, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState("");

  const product = {
    id: 1,
    name: "RTX 4090 24GB GDDR6X",
    brand: "NVIDIA",
    price: 12999.99,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800",
    rating: 5,
    reviews: 127,
    stock: 15,
    description:
      "A placa de vídeo mais poderosa do mercado. Ideal para jogos em 4K, ray tracing avançado e trabalhos profissionais de renderização.",
    specs: [
      { label: "CUDA Cores", value: "16384" },
      { label: "Memória", value: "24GB GDDR6X" },
      { label: "Interface", value: "384-bit" },
      { label: "Clock Base", value: "2.23 GHz" },
      { label: "Clock Boost", value: "2.52 GHz" },
      { label: "TDP", value: "450W" },
      { label: "Conectores", value: "3x DisplayPort 1.4a, 1x HDMI 2.1" },
      { label: "Dimensões", value: "304 x 137 x 61 mm" },
    ],
  };

  const reviews = [
    {
      author: "João Silva",
      rating: 5,
      date: "15/01/2025",
      comment: "Placa excepcional! Roda tudo no ultra em 4K sem esforço.",
    },
    {
      author: "Maria Santos",
      rating: 5,
      date: "10/01/2025",
      comment: "Perfeita para renderização. Reduziu meu tempo de trabalho pela metade!",
    },
    {
      author: "Pedro Costa",
      rating: 4,
      date: "05/01/2025",
      comment: "Ótima placa, mas esquenta bastante. Certifique-se de ter um bom cooler.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden border border-border bg-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden border border-border bg-card cursor-pointer hover:border-primary transition-colors"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{product.brand}</Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < product.rating
                          ? "fill-primary text-primary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.reviews} avaliações
                </span>
              </div>
            </div>

            <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>

            <p className="text-muted-foreground text-lg">{product.description}</p>

            {/* Stock */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-green-500 font-medium">
                {product.stock} unidades em estoque
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <label className="font-medium">Quantidade:</label>
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Shipping */}
            <Card>
              <CardContent className="p-4">
                <label className="font-medium mb-2 block">Calcular Frete:</label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                  />
                  <Button variant="secondary">Calcular</Button>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-3">
              <Button size="lg" className="flex-1 shadow-glow">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
              <Button size="lg" variant="secondary">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">Frete Grátis Sul/Sudeste</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Garantia de 3 Anos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="specs" className="mb-12">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="specs">Especificações</TabsTrigger>
            <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            <TabsTrigger value="video">Vídeo</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specs" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b border-border pb-2"
                    >
                      <span className="font-medium">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-bold">{review.author}</p>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-primary text-primary"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="video" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Vídeo do produto em breve</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
