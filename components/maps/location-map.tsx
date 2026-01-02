"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

type LocationMapProps = {
  lat: number;
  lng: number;
  zoom?: number;
  offsetXPercent?: number;
  className?: string;
};

export function LocationMap({
  lat,
  lng,
  zoom = 15,
  offsetXPercent,
  className,
}: LocationMapProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!wrapperRef.current || isVisible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || !mapContainerRef.current || mapInstanceRef.current) return;
    let isCancelled = false;

    import("leaflet").then((L) => {
      if (isCancelled || !mapContainerRef.current) return;
      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      const resolveOffsetX = () => {
        if (!offsetXPercent) return 0;
        if (typeof window === "undefined") return 0;
        if (!window.matchMedia("(min-width: 1024px)").matches) return 0;
        return map.getSize().x * offsetXPercent;
      };

      const applyCenter = () => {
        map.setView([lat, lng], zoom, { animate: false });
        const offsetX = resolveOffsetX();
        if (offsetX) {
          map.panBy([offsetX, 0], { animate: false });
        }
      };

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://carto.com/attributions">CARTO</a> | &copy; OpenStreetMap',
        maxZoom: 19,
      }).addTo(map);

      L.circleMarker([lat, lng], {
        radius: 8,
        color: "#111",
        fillColor: "#111",
        fillOpacity: 0.9,
      }).addTo(map);

      applyCenter();
      mapInstanceRef.current = map;

      const handleResize = () => {
        applyCenter();
      };
      window.addEventListener("resize", handleResize);
      mapInstanceRef.current.on("unload", () => {
        window.removeEventListener("resize", handleResize);
      });
    });

    return () => {
      isCancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.off();
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isVisible, lat, lng, zoom, offsetXPercent]);

  return (
    <div ref={wrapperRef} className={`relative ${className ?? ""}`}>
      <div
        ref={mapContainerRef}
        className="h-full w-full"
        role="img"
        aria-label="Mapa de ubicación"
      />
      {!isVisible && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-xs uppercase tracking-[0.2em] text-[#D1D5DB]">
          Cargando mapa
        </div>
      )}
    </div>
  );
}
