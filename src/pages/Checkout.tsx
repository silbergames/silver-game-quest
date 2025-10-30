import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Barcode, Landmark, Lock, Truck, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [step, setStep] = useState(1);

  const cartItems = [
    {
      id: 1,
      name: "RTX 4090 24GB",
      brand: "NVIDIA",
      price: 12999.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=200",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pedido realizado com sucesso!");
    setTimeout(() => {
      navigate("/perfil");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Finalizar{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Compra
            </span>
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4 max-w-2xl w-full">
              <div className="flex items-center gap-2 flex-1">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {step > 1 ? <CheckCircle2 className="h-5 w-5" /> : "1"}
                </div>
                <span className="text-sm font-medium hidden sm:inline">Dados</span>
              </div>
              <div className="h-0.5 flex-1 bg-border" />
              <div className="flex items-center gap-2 flex-1">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {step > 2 ? <CheckCircle2 className="h-5 w-5" /> : "2"}
                </div>
                <span className="text-sm font-medium hidden sm:inline">Pagamento</span>
              </div>
              <div className="h-0.5 flex-1 bg-border" />
              <div className="flex items-center gap-2 flex-1">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  3
                </div>
                <span className="text-sm font-medium hidden sm:inline">Confirmação</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Dados de Entrega
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input id="name" placeholder="João Silva" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="joao@email.com" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" type="tel" placeholder="(00) 00000-0000" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cpf">CPF</Label>
                        <Input id="cpf" placeholder="000.000.000-00" required />
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Endereço</Label>
                        <Input id="address" placeholder="Rua, número" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cep">CEP</Label>
                        <Input id="cep" placeholder="00000-000" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="neighborhood">Bairro</Label>
                        <Input id="neighborhood" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <Input id="city" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">Estado</Label>
                        <Input id="state" maxLength={2} placeholder="SP" required />
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Forma de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer flex-1">
                        <CreditCard className="h-5 w-5" />
                        <span>Cartão de Crédito</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem value="pix" id="pix" />
                      <Label htmlFor="pix" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Landmark className="h-5 w-5" />
                        <span>PIX (5% de desconto)</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem value="boleto" id="boleto" />
                      <Label htmlFor="boleto" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Barcode className="h-5 w-5" />
                        <span>Boleto Bancário</span>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit-card" && (
                    <form onSubmit={handleSubmitPayment} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Número do Cartão</Label>
                        <Input id="card-number" placeholder="0000 0000 0000 0000" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="card-name">Nome no Cartão</Label>
                        <Input id="card-name" placeholder="NOME IMPRESSO NO CARTÃO" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Validade</Label>
                          <Input id="expiry" placeholder="MM/AA" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="000" maxLength={3} required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="installments">Parcelas</Label>
                        <select
                          id="installments"
                          className="w-full px-3 py-2 bg-background border border-border rounded-lg"
                        >
                          <option>1x de R$ {total.toFixed(2)} sem juros</option>
                          <option>2x de R$ {(total / 2).toFixed(2)} sem juros</option>
                          <option>3x de R$ {(total / 3).toFixed(2)} sem juros</option>
                          <option>4x de R$ {(total / 4).toFixed(2)} sem juros</option>
                          <option>5x de R$ {(total / 5).toFixed(2)} sem juros</option>
                          <option>6x de R$ {(total / 6).toFixed(2)} sem juros</option>
                        </select>
                      </div>
                      <Button type="submit" size="lg" className="w-full shadow-glow mt-6">
                        Finalizar Pedido
                      </Button>
                    </form>
                  )}

                  {paymentMethod === "pix" && (
                    <div className="text-center py-6">
                      <div className="w-64 h-64 mx-auto bg-muted rounded-lg flex items-center justify-center mb-4">
                        <p className="text-muted-foreground">QR Code PIX aparecerá aqui</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Escaneie o QR Code com o app do seu banco
                      </p>
                      <p className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
                        R$ {(total * 0.95).toFixed(2)}
                      </p>
                      <Button size="lg" className="w-full shadow-glow" onClick={handleSubmitPayment}>
                        Confirmar Pagamento PIX
                      </Button>
                    </div>
                  )}

                  {paymentMethod === "boleto" && (
                    <div className="text-center py-6">
                      <Barcode className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
                      <p className="text-sm text-muted-foreground mb-4">
                        O boleto será gerado após a confirmação do pedido
                      </p>
                      <p className="text-xs text-muted-foreground mb-6">
                        Prazo de vencimento: 3 dias úteis
                      </p>
                      <Button size="lg" className="w-full shadow-glow" onClick={handleSubmitPayment}>
                        Gerar Boleto
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground">{item.brand}</p>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qtd: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold">
                            R$ {item.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>R$ {subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Frete</span>
                      <span className="text-green-500 font-medium">Grátis</span>
                    </div>
                    {paymentMethod === "pix" && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Desconto PIX (5%)</span>
                        <span className="text-green-500">
                          -R$ {(subtotal * 0.05).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      R${" "}
                      {(paymentMethod === "pix" ? total * 0.95 : total).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="pt-4 space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Compra 100% segura</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-primary" />
                      <span>Frete grátis Sul/Sudeste</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Garantia do fabricante</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
