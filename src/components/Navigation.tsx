import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItemsCount = 0; // This will be dynamic later

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/produtos", label: "Produtos" },
    { to: "/game-house", label: "Game House" },
    { to: "/servicos", label: "Serviços" },
    { to: "/produtos-digitais", label: "Digitais" },
    { to: "/sobre", label: "Sobre Nós" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center font-bold text-xl">
              SG
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Silber Games
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <Button
                  variant={location.pathname === link.to ? "default" : "ghost"}
                  className="transition-all"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            <Link to="/carrinho">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link to="/perfil">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location.pathname === link.to ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
