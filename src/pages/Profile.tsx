import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, CreditCard, MapPin, ShoppingBag } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Meu{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Perfil
          </span>
        </h1>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="account" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Dados Pessoais
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Pedidos
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Endereços
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Pagamento
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" placeholder="000.000.000-00" />
                  </div>
                </div>
                <Button className="shadow-glow">Salvar Alterações</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Meus Pedidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="border border-border rounded-lg p-4 hover:border-primary transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold">Pedido #{1000 + i}</p>
                          <p className="text-sm text-muted-foreground">
                            15/01/2025 - R$ 12.999,99
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-medium">
                          Entregue
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        RTX 4090 24GB e mais 1 item
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="addresses">
            <Card>
              <CardHeader>
                <CardTitle>Endereços de Entrega</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold">Casa</p>
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Rua Exemplo, 123
                    <br />
                    Centro, Cidade - UF
                    <br />
                    CEP 00000-000
                  </p>
                </div>
                <Button variant="secondary">Adicionar Novo Endereço</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle>Formas de Pagamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold">**** **** **** 1234</p>
                      <p className="text-sm text-muted-foreground">Cartão de Crédito</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Remover
                    </Button>
                  </div>
                </div>
                <Button variant="secondary">Adicionar Novo Cartão</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
