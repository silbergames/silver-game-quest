import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wrench, Zap, Shield, Clock } from "lucide-react";
import { toast } from "sonner";

const TechnicalSupport = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitação recebida! Entraremos em contato em breve.");
  };

  const services = [
    {
      title: "Montagem Completa",
      description: "Montamos seu PC do zero com todas as peças",
      price: "R$ 200,00",
      icon: Wrench,
    },
    {
      title: "Upgrade de Componentes",
      description: "Instalação e configuração de novas peças",
      price: "R$ 80,00",
      icon: Zap,
    },
    {
      title: "Manutenção Preventiva",
      description: "Limpeza, troca de pasta térmica e otimização",
      price: "R$ 120,00",
      icon: Shield,
    },
    {
      title: "Diagnóstico de Problemas",
      description: "Identificação e orçamento de reparos",
      price: "R$ 50,00",
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Assistência{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Técnica
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Montagem, upgrade e manutenção especializada para seu PC
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.description}
                      </p>
                      <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {service.price}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>O que fazemos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Montagem</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Montagem completa do PC</li>
                    <li>• Instalação de sistema operacional</li>
                    <li>• Configuração de BIOS/UEFI</li>
                    <li>• Instalação de drivers</li>
                    <li>• Testes de estabilidade</li>
                    <li>• Garantia de 30 dias no serviço</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Upgrade & Manutenção</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Instalação de GPU, RAM, SSD</li>
                    <li>• Troca de pasta térmica</li>
                    <li>• Limpeza interna completa</li>
                    <li>• Otimização de performance</li>
                    <li>• Diagnóstico de problemas</li>
                    <li>• Substituição de componentes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Solicitar Assistência</CardTitle>
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
                    <Label htmlFor="phone">Telefone/WhatsApp</Label>
                    <Input id="phone" type="tel" placeholder="(00) 00000-0000" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service-type">Tipo de Serviço</Label>
                    <Select required>
                      <SelectTrigger id="service-type">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="montagem">Montagem Completa</SelectItem>
                        <SelectItem value="upgrade">Upgrade de Componentes</SelectItem>
                        <SelectItem value="manutencao">Manutenção Preventiva</SelectItem>
                        <SelectItem value="diagnostico">Diagnóstico de Problemas</SelectItem>
                        <SelectItem value="reparo">Reparo/Troca de Peça</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="components">Componentes Envolvidos (se aplicável)</Label>
                  <Input 
                    id="components" 
                    placeholder="Ex: Placa de vídeo RTX 4080, Processador Ryzen 7..." 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgência</Label>
                  <Select required>
                    <SelectTrigger id="urgency">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal (3-5 dias úteis)</SelectItem>
                      <SelectItem value="urgente">Urgente (1-2 dias úteis) +R$ 50</SelectItem>
                      <SelectItem value="express">Express (24 horas) +R$ 100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição do Problema/Serviço</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva em detalhes o que precisa ou qual problema está enfrentando..."
                    rows={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Local do Atendimento</Label>
                  <Select required>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="loja">Levar à loja</SelectItem>
                      <SelectItem value="domicilio">Atendimento em domicílio (+R$ 80)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" size="lg" className="w-full shadow-glow">
                  Solicitar Atendimento
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="font-bold mb-3">Garantias</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ 30 dias de garantia em serviços</li>
                <li>✓ 90 dias em montagens completas</li>
                <li>✓ Técnicos certificados</li>
                <li>✓ Peças originais</li>
              </ul>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="font-bold mb-3">Prazo de Atendimento</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Normal: 3-5 dias úteis</li>
                <li>• Urgente: 1-2 dias úteis</li>
                <li>• Express: 24 horas</li>
                <li>• Diagnóstico: até 24h grátis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TechnicalSupport;
