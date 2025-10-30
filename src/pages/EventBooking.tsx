import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { CalendarIcon, Users, Gamepad2, Monitor } from "lucide-react";
import { toast } from "sonner";

const EventBooking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitação enviada! Entraremos em contato em breve.");
  };

  const equipment = [
    { id: "rtx4090", name: "RTX 4090", price: 500 },
    { id: "rtx4080", name: "RTX 4080", price: 400 },
    { id: "ryzen9", name: "Ryzen 9 7950X", price: 350 },
    { id: "i9", name: "Intel Core i9", price: 350 },
    { id: "monitor240hz", name: "Monitor 240Hz", price: 150 },
    { id: "teclado-mecanico", name: "Teclado Mecânico RGB", price: 50 },
    { id: "mouse-gamer", name: "Mouse Gamer Pro", price: 40 },
    { id: "headset-premium", name: "Headset Premium", price: 60 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reserve seu{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Evento Gamer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Aniversários, campeonatos ou qualquer celebração. Personalize cada detalhe!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Eventos na Game House</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Até 20 pessoas em nosso espaço equipado com PCs de última geração, 
                  iluminação RGB e área de descanso.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Decoração temática incluída
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Som ambiente profissional
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Suporte técnico durante o evento
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Gamepad2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Eventos Externos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Levamos toda a estrutura até você! Computadores customizados 
                  e periféricos de alta performance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Montagem e desmontagem incluídas
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Equipamentos personalizáveis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Técnico presente no evento
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Solicitar Orçamento</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" type="tel" placeholder="(00) 00000-0000" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Número de Convidados</Label>
                    <Input id="guests" type="number" placeholder="10" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Data Desejada</Label>
                  <div className="border border-border rounded-lg p-4 flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tipo de Evento</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="inhouse" />
                      <label htmlFor="inhouse" className="text-sm cursor-pointer">
                        Na Game House
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="external" />
                      <label htmlFor="external" className="text-sm cursor-pointer">
                        Evento Externo
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Equipamentos Desejados (opcional)</Label>
                  <div className="grid grid-cols-2 gap-3 p-4 border border-border rounded-lg">
                    {equipment.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id={item.id} />
                          <label htmlFor={item.id} className="text-sm cursor-pointer">
                            {item.name}
                          </label>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          +R$ {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Observações</Label>
                  <Textarea
                    id="message"
                    placeholder="Detalhes adicionais sobre seu evento, tema, jogos preferidos, etc."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-glow">
                  Solicitar Orçamento Personalizado
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-card border border-border rounded-lg">
            <h3 className="font-bold text-lg mb-4">Valores de Referência</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">Pacote Básico (4 horas)</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Até 10 pessoas: R$ 800,00</li>
                  <li>• Até 20 pessoas: R$ 1.500,00</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Pacote Premium (6 horas)</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Até 10 pessoas: R$ 1.100,00</li>
                  <li>• Até 20 pessoas: R$ 2.000,00</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              * Valores sujeitos a alteração. Orçamento final depende de customizações e equipamentos escolhidos.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventBooking;
