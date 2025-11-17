import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    // Coordenadas de Fortaleza-CE
    const fortalezaCoords: [number, number] = [-38.5434, -3.7172];
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: fortalezaCoords,
      zoom: 12,
    });

    // Adicionar marcador na localização
    new mapboxgl.Marker({ color: '#8B5CF6' })
      .setLngLat(fortalezaCoords)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<h3 class="font-bold">Silber Games</h3><p>Fortaleza - CE, Brasil</p>')
      )
      .addTo(map.current);

    // Adicionar controles de navegação
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken);
      setIsTokenSet(true);
    }
  };

  return (
    <div className="relative w-full h-[500px]">
      {!isTokenSet ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm rounded-lg border border-border">
          <div className="bg-card p-8 rounded-lg border border-border shadow-lg max-w-md w-full mx-4">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Configure o Mapa</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Para visualizar o mapa, insira seu token público do Mapbox.
              Você pode obter um em{' '}
              <a
                href="https://mapbox.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="mapbox-token">Token Público do Mapbox</Label>
                <Input
                  id="mapbox-token"
                  type="text"
                  placeholder="pk.eyJ1..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Carregar Mapa
              </Button>
            </form>
          </div>
        </div>
      ) : null}
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;
