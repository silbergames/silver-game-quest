import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Minus, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingReservation = () => {
  const { toast } = useToast();
  const [weakPCs, setWeakPCs] = useState(0);
  const [mediumPCs, setMediumPCs] = useState(0);
  const [highEndPCs, setHighEndPCs] = useState(0);
  const [monitors, setMonitors] = useState("default");
  const [peripherals, setPeripherals] = useState<string[]>([]);

  const pcConfigs = [
    {
      type: "Fraco",
      specs: "Intel i3 / GTX 1650 / 8GB RAM",
      price: "R$ 12/hora",
      state: weakPCs,
      setState: setWeakPCs,
    },
    {
      type: "Médio",
      specs: "Intel i5 / RTX 3060 / 16GB RAM",
      price: "R$ 18/hora",
      state: mediumPCs,
      setState: setMediumPCs,
    },
    {
      type: "High-End",
      specs: "Intel i9 / RTX 4080 / 32GB RAM",
      price: "R$ 30/hora",
      state: highEndPCs,
      setState: setHighEndPCs,
    },
  ];

  const peripheralOptions = [
    "Headset Gamer",
    "Webcam HD",
    "Mousepad RGB",
    "Cadeira Gamer Premium",
  ];

  const togglePeripheral = (item: string) => {
    setPeripherals(prev =>
      prev.includes(item)
        ? prev.filter(p => p !== item)
        : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reserva solicitada!",
      description: "Entraremos em contato para confirmar sua reserva.",
    });
  };

  const totalPCs = weakPCs + mediumPCs + highEndPCs;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/game-house" className="text-primary hover:underline mb-4 inline-block">
              ← Voltar para Game House
            </Link>
            <h1 className="text-4xl font-bold mb-4">
              Reservar <span className="bg-gradient-primary bg-clip-text text-transparent">Horário</span>
            </h1>
            <p className="text-muted-foreground">
              Configure sua reserva escolhendo os equipamentos e horários desejados
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Computadores */}
            <Card>
              <CardHeader>
                <CardTitle>Computadores Desejados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {pcConfigs.map((config) => (
                  <div key={config.type} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{config.type}</h3>
                        <p className="text-sm text-muted-foreground">{config.specs}</p>
                        <p className="text-sm text-primary font-medium mt-1">{config.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => config.setState(Math.max(0, config.state - 1))}
                          disabled={config.state === 0}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-xl font-bold w-8 text-center">{config.state}</span>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => config.setState(config.state + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="bg-muted p-3 rounded-lg">
                  <p className="font-medium">Total de Computadores: {totalPCs}</p>
                </div>
              </CardContent>
            </Card>

            {/* Monitores */}
            <Card>
              <CardHeader>
                <CardTitle>Monitores</CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="monitors">Tipo de Monitor</Label>
                <Select value={monitors} onValueChange={setMonitors}>
                  <SelectTrigger id="monitors">
                    <SelectValue placeholder="Selecione o tipo de monitor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Monitor Padrão (24" 144Hz)</SelectItem>
                    <SelectItem value="ultrawide">Ultrawide (34" 144Hz) +R$ 5/hora</SelectItem>
                    <SelectItem value="4k">4K Gaming (27" 165Hz) +R$ 8/hora</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Periféricos */}
            <Card>
              <CardHeader>
                <CardTitle>Periféricos Adicionais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {peripheralOptions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => togglePeripheral(item)}
                      className={`p-4 border rounded-lg text-left transition-all ${
                        peripherals.includes(item)
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Data e Horário */}
            <Card>
              <CardHeader>
                <CardTitle>Data e Horário</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="date">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Data
                  </Label>
                  <Input id="date" type="date" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="start-time">
                      <Clock className="h-4 w-4 inline mr-2" />
                      Horário Início
                    </Label>
                    <Input id="start-time" type="time" required />
                  </div>
                  <div>
                    <Label htmlFor="end-time">Horário Fim</Label>
                    <Input id="end-time" type="time" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informações Pessoais */}
            <Card>
              <CardHeader>
                <CardTitle>Suas Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" type="tel" placeholder="(00) 00000-0000" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="obs">Observações</Label>
                  <Textarea id="obs" placeholder="Alguma informação adicional?" rows={3} />
                </div>
              </CardContent>
            </Card>

            <Button type="submit" size="lg" className="w-full shadow-glow">
              Confirmar Reserva
            </Button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingReservation;
