import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GameHouse from "./pages/GameHouse";
import BookingReservation from "./pages/BookingReservation";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Services from "./pages/Services";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import DigitalProducts from "./pages/DigitalProducts";
import DigitalProductDetail from "./pages/DigitalProductDetail";
import EventBooking from "./pages/EventBooking";
import ConsultingService from "./pages/ConsultingService";
import TechnicalSupport from "./pages/TechnicalSupport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/game-house" element={<GameHouse />} />
          <Route path="/game-house/reservar" element={<BookingReservation />} />
          <Route path="/game-house/eventos" element={<EventBooking />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produtos/:id" element={<ProductDetail />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/servicos/assessoria" element={<ConsultingService />} />
          <Route path="/servicos/assistencia" element={<TechnicalSupport />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/produtos-digitais" element={<DigitalProducts />} />
          <Route path="/produtos-digitais/:id" element={<DigitalProductDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
