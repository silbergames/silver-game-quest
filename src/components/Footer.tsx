import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center font-bold text-xl">
                SG
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Silber Games
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Sua loja completa de hardware, montagem de PCs e experiências gamer.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Produtos & Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/produtos" className="text-muted-foreground hover:text-primary transition-colors">
                  Peças e Componentes
                </Link>
              </li>
              <li>
                <Link to="/game-house" className="text-muted-foreground hover:text-primary transition-colors">
                  Game House
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Montagem de PC
                </Link>
              </li>
              <li>
                <Link to="/produtos-digitais" className="text-muted-foreground hover:text-primary transition-colors">
                  Produtos Digitais
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/perfil" className="text-muted-foreground hover:text-primary transition-colors">
                  Meu Perfil
                </Link>
              </li>
              <li>
                <Link to="/pedidos" className="text-muted-foreground hover:text-primary transition-colors">
                  Meus Pedidos
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-3">
              <a href="#" className="h-9 w-9 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Silber Games. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
