import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "RTX 4090 24GB",
      brand: "NVIDIA",
      price: 12999.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=200",
    },
    {
      id: 2,
      name: "Ryzen 9 7950X",
      brand: "AMD",
      price: 3499.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=200",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Frete grátis
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Carrinho de{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Compras
          </span>
        </h1>

        {cartItems.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-xl text-muted-foreground mb-6">
                Seu carrinho está vazio
              </p>
              <Link to="/produtos">
                <Button>Ver Produtos</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-1">
                          {item.brand}
                        </p>
                        <h3 className="font-bold mb-2">{item.name}</h3>
                        <p className="text-lg font-bold text-primary">
                          R${" "}
                          {item.price.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                          })}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <Button variant="ghost" size="icon" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center border border-border rounded-lg">
                          <Button variant="ghost" size="sm">
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-3 py-1 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button variant="ghost" size="sm">
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Summary */}
            <div>
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold">Resumo do Pedido</h2>
                  
                  <div className="space-y-2 py-4 border-y border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">
                        R${" "}
                        {subtotal.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Frete</span>
                      <span className="font-medium text-green-500">Grátis</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      R${" "}
                      {total.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <Button className="w-full shadow-glow" size="lg">
                    Finalizar Compra
                  </Button>

                  <Link to="/produtos">
                    <Button variant="secondary" className="w-full">
                      Continuar Comprando
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
