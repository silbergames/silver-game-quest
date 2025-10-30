import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import interactivePCImage from "@/assets/interactive-pc-diagram.jpg";

interface PCPart {
  id: string;
  name: string;
  x: number; // percentage
  y: number; // percentage
  width: number; // percentage
  height: number; // percentage
}

const pcParts: PCPart[] = [
  { id: "gpu", name: "Placa de Vídeo", x: 20, y: 45, width: 60, height: 15 },
  { id: "cpu", name: "Processador", x: 35, y: 25, width: 30, height: 12 },
  { id: "ram", name: "Memória RAM", x: 65, y: 20, width: 20, height: 25 },
  { id: "motherboard", name: "Placa-Mãe", x: 15, y: 30, width: 70, height: 40 },
  { id: "ssd", name: "SSD", x: 15, y: 72, width: 35, height: 10 },
  { id: "psu", name: "Fonte", x: 15, y: 85, width: 70, height: 12 },
  { id: "case", name: "Gabinete", x: 5, y: 5, width: 90, height: 90 },
  { id: "cooler", name: "Cooler", x: 30, y: 18, width: 25, height: 15 },
];

interface InteractivePCFilterProps {
  onPartClick: (partName: string) => void;
}

export const InteractivePCFilter = ({ onPartClick }: InteractivePCFilterProps) => {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handlePartClick = (part: PCPart) => {
    setSelectedPart(part.id);
    onPartClick(part.name);
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <h3 className="font-bold text-sm mb-3">Filtro Visual</h3>
        <div className="relative group">
          <img
            src={interactivePCImage}
            alt="PC Interativo"
            className="w-full h-auto rounded-lg"
          />
          
          {/* Interactive hotspots */}
          <div className="absolute inset-0">
            {pcParts.map((part) => (
              <button
                key={part.id}
                className={`absolute transition-all duration-200 ${
                  hoveredPart === part.id || selectedPart === part.id
                    ? "bg-primary/30 border-2 border-primary"
                    : "bg-transparent border-2 border-transparent hover:bg-primary/20 hover:border-primary/50"
                }`}
                style={{
                  left: `${part.x}%`,
                  top: `${part.y}%`,
                  width: `${part.width}%`,
                  height: `${part.height}%`,
                }}
                onMouseEnter={() => setHoveredPart(part.id)}
                onMouseLeave={() => setHoveredPart(null)}
                onClick={() => handlePartClick(part)}
                aria-label={`Filtrar por ${part.name}`}
              />
            ))}
          </div>

          {/* Tooltip */}
          {hoveredPart && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-sm border border-border px-3 py-1.5 rounded-lg shadow-lg z-10">
              <p className="text-xs font-medium whitespace-nowrap">
                {pcParts.find((p) => p.id === hoveredPart)?.name}
              </p>
            </div>
          )}
        </div>

        {selectedPart && (
          <div className="mt-3 text-center">
            <p className="text-xs text-muted-foreground">
              Filtrando:{" "}
              <span className="font-bold text-primary">
                {pcParts.find((p) => p.id === selectedPart)?.name}
              </span>
            </p>
            <button
              onClick={() => {
                setSelectedPart(null);
                onPartClick("");
              }}
              className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1 underline"
            >
              Limpar filtro
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
