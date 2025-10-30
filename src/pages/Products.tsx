import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Placas de Vídeo", count: 45 },
    { name: "Processadores", count: 38 },
    { name: "Memória RAM", count: 52 },
    { name: "Placas-Mãe", count: 41 },
    { name: "SSDs", count: 63 },
    { name: "Fontes", count: 34 },
    { name: "Gabinetes", count: 29 },
    { name: "Coolers", count: 47 },
    { name: "Monitores", count: 56 },
    { name: "Teclados", count: 68 },
    { name: "Mouses", count: 72 },
    { name: "Headsets", count: 43 },
  ];

  const products = [
    {
      id: 1,
      name: "RTX 4090 24GB",
      brand: "NVIDIA",
      price: 12999.99,
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400",
      rating: 5,
      stock: true,
    },
    {
      id: 2,
      name: "Ryzen 9 7950X",
      brand: "AMD",
      price: 3499.99,
      image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400",
      rating: 5,
      stock: true,
    },
    {
      id: 3,
      name: "Corsair Vengeance 32GB DDR5",
      brand: "Corsair",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400",
      rating: 4,
      stock: true,
    },
    {
      id: 4,
      name: "Samsung 990 PRO 2TB",
      brand: "Samsung",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400",
      rating: 5,
      stock: true,
    },
    {
      id: 5,
      name: "ASUS ROG Strix Z790",
      brand: "ASUS",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
      rating: 5,
      stock: true,
    },
    {
      id: 6,
      name: "Corsair RM1000x 1000W",
      brand: "Corsair",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400",
      rating: 4,
      stock: true,
    },
    {
      id: 7,
      name: "Intel Core i9-13900K",
      brand: "Intel",
      price: 3899.99,
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400",
      rating: 5,
      stock: true,
    },
    {
      id: 8,
      name: "G.Skill Trident Z5 RGB 64GB",
      brand: "G.Skill",
      price: 1699.99,
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=400",
      rating: 5,
      stock: true,
    },
    {
      id: 9,
      name: "MSI MAG CoreLiquid 360R",
      brand: "MSI",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400",
      rating: 4,
      stock: true,
    },
    {
      id: 10,
      name: "NZXT H7 Flow RGB",
      brand: "NZXT",
      price: 699.99,
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400",
      rating: 5,
      stock: true,
    },
    {
      id: 11,
      name: "Logitech G Pro X Superlight",
      brand: "Logitech",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
      rating: 5,
      stock: true,
    },
    {
      id: 12,
      name: "HyperX Alloy Origins Core",
      brand: "HyperX",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400",
      rating: 4,
      stock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Catálogo de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Produtos
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Encontre as melhores peças e componentes para seu PC
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <h2 className="font-bold text-lg mb-4">Categorias</h2>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id={`cat-${index}`} />
                        <label
                          htmlFor={`cat-${index}`}
                          className="text-sm cursor-pointer hover:text-primary transition-colors"
                        >
                          {category.name}
                        </label>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-bold mb-4">Faixa de Preço</h3>
                  <div className="space-y-2">
                    <Input type="number" placeholder="Mín" />
                    <Input type="number" placeholder="Máx" />
                    <Button className="w-full" size="sm">
                      Aplicar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Mostrando {products.length} de 500+ produtos
              </p>
              <select className="bg-card border border-border rounded-lg px-3 py-2 text-sm">
                <option>Mais Relevantes</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
                <option>Mais Vendidos</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden border-border hover:border-primary transition-all hover:shadow-glow"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">
                      {product.brand}
                    </Badge>
                    <Link to={`/produtos/${product.id}`}>
                      <h3 className="font-bold mb-2 hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < product.rating ? "text-primary" : "text-muted"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </div>
                    {product.stock && (
                      <p className="text-xs text-green-500 mt-1">Em estoque</p>
                    )}
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex gap-2">
                    <Link to={`/produtos/${product.id}`} className="flex-1">
                      <Button className="w-full" variant="secondary">
                        Ver Detalhes
                      </Button>
                    </Link>
                    <Button size="icon" className="shadow-glow">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button size="lg" variant="secondary">
                Carregar Mais Produtos
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
