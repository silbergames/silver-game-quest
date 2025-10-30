import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, MessageSquare, Lightbulb, FileText } from "lucide-react";
import { toast } from "sonner";

const ConsultingService = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitação enviada! Nossa equipe entrará em contato em breve.");
  };

  const benefits = [
    "Análise completa de necessidades e orçamento",
    "Recomendações personalizadas de componentes",
    "Comparativo de custo-benefício",
    "Lista de compras otimizada",
    "Orientação sobre compatibilidade",
    "Dicas de onde comprar com melhor preço",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Assessoria de{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Montagem
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Quer montar um PC gamer mas não sabe por onde começar? Estamos aqui para ajudar!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="h-16 w-16 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Consultoria Online</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Atendimento via WhatsApp ou videochamada
                </p>
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  R$ 99,00
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="h-16 w-16 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Consultoria Presencial</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Reunião em nossa loja com demonstrações
                </p>
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  R$ 149,00
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="h-16 w-16 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Projeto Completo</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Relatório detalhado + acompanhamento
                </p>
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  R$ 249,00
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>O que está incluído?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Solicitar Assessoria</CardTitle>
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
                    <Label htmlFor="service">Tipo de Assessoria</Label>
                    <Select required>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">Consultoria Online - R$ 99</SelectItem>
                        <SelectItem value="presencial">Consultoria Presencial - R$ 149</SelectItem>
                        <SelectItem value="completo">Projeto Completo - R$ 249</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Orçamento Disponível (R$)</Label>
                  <Input id="budget" type="number" placeholder="Ex: 5000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="usage">Uso Principal do PC</Label>
                  <Select required>
                    <SelectTrigger id="usage">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gaming">Gaming (jogos em geral)</SelectItem>
                      <SelectItem value="competitive">E-sports competitivo</SelectItem>
                      <SelectItem value="streaming">Streaming e criação de conteúdo</SelectItem>
                      <SelectItem value="work">Trabalho e produtividade</SelectItem>
                      <SelectItem value="mixed">Uso misto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="games">Jogos que pretende rodar (opcional)</Label>
                  <Input 
                    id="games" 
                    placeholder="Ex: Cyberpunk 2077, Valorant, CS2..." 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Detalhes Adicionais</Label>
                  <Textarea
                    id="details"
                    placeholder="Conte-nos mais sobre suas necessidades, se já possui algum componente, preferências de marca, etc."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-glow">
                  Solicitar Assessoria
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-card border border-border rounded-lg">
            <h3 className="font-bold mb-3">Como funciona?</h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-bold text-primary">1.</span>
                <span>Preencha o formulário com suas necessidades e orçamento</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">2.</span>
                <span>Nossa equipe entra em contato em até 24 horas</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">3.</span>
                <span>Agendamos a consultoria no melhor horário para você</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">4.</span>
                <span>Receba sua lista personalizada de componentes e orientações</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConsultingService;
