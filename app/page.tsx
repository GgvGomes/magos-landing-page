"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Fireworks } from "@/components/fireworks";
import { Instagram, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MAGO's Mate",
            description:
              "O melhor tereré do Brasil em Rio Verde. Produtos Chacal, erva mate premium.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Rio Verde",
              addressRegion: "GO",
              addressCountry: "BR",
            },
            url: "https://magosmate.kyte.site",
            sameAs: ["https://www.instagram.com/magos_mate_rv"],
            keywords: "tereré, rio verde, chacal, erva mate, cuia, mate gelado",
          }),
        }}
      />

      <div
        className="flex flex-col items-center inset-0 gap-4 bg-cover bg-center w-[100vw] h-[100vh] bg-no-repeat"
        style={{
          backgroundImage: "url(/images/background.png)",
        }}
        role="img"
        aria-label="Background MAGO's Mate">
        <div className="flex flex-col items-center lg:flex-row gap-3 lg:gap-56 py-4">
          {/* Desktop Logo Positioning */}

          {/* Left Logo */}
          <div
            className={` hidden lg:block transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
            <Image
              src="/images/logo.png"
              alt="MAGO's Mate - Melhor Tereré do Brasil Rio Verde"
              width={120}
              height={120}
              className="drop-shadow-lg"
            />
          </div>

          <div
            className={` transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <Image
              src="/images/write-text.png"
              alt="MAGO's Mate - Texto da logo"
              width={300}
              height={210}
              className="drop-shadow-lg lg:w-[300px] lg:h-[140px] w-[210px] h-[80px]"
            />
          </div>

          {/* Right Logo */}

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
            <Image
              src="/images/logo.png"
              alt="MAGO's Mate - Tereré Premium Rio Verde"
              width={120}
              height={120}
              className="drop-shadow-lg lg:w-[120px] lg:h-[120px] w-[85px] h-[85px]"
            />
          </div>
        </div>

        {/* Fireworks Effect */}
        <Fireworks />

        {/* TextContainer */}
        <div
          className={`text-center max-w-[80vw] lg:max-w-[60vw] h-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <h1 className="font-serif font-bold text-2xl lg:text-4xl text-gray-900 leading-tight drop-shadow-lg  text-center">
            {"Falei pra você não ver, agora vai ter que seguir a "}
            <a
              href="https://magosmate.kyte.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 font-black hover:text-green-800 transition-colors duration-300 cursor-pointer underline decoration-2 underline-offset-4"
              title="MAGO's Mate - Melhor Tereré do Brasil em Rio Verde">
              {"MAGO's"}
            </a>
            {" no "}
            <a
              href="https://www.instagram.com/magos_mate_rv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-black hover:text-green-700 transition-colors duration-300 cursor-pointer underline decoration-2 underline-offset-4"
              title="Instagram MAGO's Mate Rio Verde - @magos_mate_rv">
              {"INSTAGRAM"}
            </a>
            {" e pedir o "}
            <span className="text-green-700 font-black">{"MELHOR TERERÉ"}</span>
            {" do Brasil"}
          </h1>

          <div className="sr-only">
            <h2>MAGO&#39;s Mate - Tereré Premium em Rio Verde</h2>
            <p>
              Produtos Chacal, erva mate premium, cuias e acessórios para tereré em Rio
              Verde, Goiás. O melhor mate gelado do Brasil.
            </p>
            <p>
              Palavras-chave: tereré rio verde, chacal erva mate, magos mate, cuia tereré,
              mate gelado, produtos mate rio verde
            </p>
          </div>
        </div>

        {/* Button */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 hover:-translate-y-2 border border-green-400/50 relative overflow-hidden group backdrop-blur-sm">
            <a
              href="https://magosmate.kyte.site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 relative z-10"
              title="Catálogo MAGO's Mate - Produtos de Tereré Rio Verde"
              aria-label="Ir para catálogo de produtos MAGO's Mate">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <ShoppingCart className="w-5 h-5" />
              ir para o catálogo
            </a>
          </Button>
        </div>

        {/* Products Image */}
        <section
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="relative">
            <Image
              src="/images/products.png"
              alt="Produtos MAGO's Mate - Chacal Erva Mate, Cuias e Acessórios para Tereré Rio Verde"
              width={500}
              height={300}
              className="max-w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 lg:w-[400px] lg:h-[300px] w-[300px] h-[100px]"
              priority
              title="Produtos Chacal - Melhor Tereré do Brasil"
            />
          </div>
        </section>

        {/* Instagram Link */}
        <div
          className={`transition-all duration-1000 mt-auto mb-6 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-white/95 backdrop-blur-md border-2 border-green-600/70 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 hover:text-white font-semibold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <a
              href="https://www.instagram.com/magos_mate_rv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
              title="Siga MAGO's Mate no Instagram - @magos_mate_rv Rio Verde"
              aria-label="Seguir MAGO's Mate no Instagram">
              <Instagram className="w-5 h-5" />
              @magos_mate_rv
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
