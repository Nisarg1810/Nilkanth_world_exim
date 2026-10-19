import Image from "next/image";

interface CertificateLogoProps {
  id: string;
  className?: string;
  size?: number;
}

const certificateAssets: Record<string, { src: string; alt: string }> = {
  apeda: {
    src: "/images/certificates/apeda.png",
    alt: "APEDA Official Logo - Agricultural and Processed Food Products Export Development Authority",
  },
  "spices-board": {
    src: "/images/certificates/spices-board.png",
    alt: "Spices Board of India Official Trade Logo",
  },
  fssai: {
    src: "/images/certificates/fssai.png",
    alt: "FSSAI Official Food Safety and Standards Authority of India Logo",
  },
  phyto: {
    src: "/images/certificates/plant-quarantine.svg",
    alt: "Directorate of Plant Protection, Quarantine & Storage India Emblem",
  },
  "sgs-ready": {
    src: "/images/certificates/sgs.svg",
    alt: "SGS Global Quality and Pre-Shipment Inspection Logo",
  },
  fumigation: {
    src: "/images/certificates/fumigation.svg",
    alt: "Official IPPC ISPM-15 Ocean Freight Fumigation Mark",
  },
};

export default function CertificateLogo({
  id,
  className = "w-16 h-16",
  size = 64,
}: CertificateLogoProps) {
  const asset = certificateAssets[id];
  if (!asset) return null;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src={asset.src}
        alt={asset.alt}
        width={size}
        height={size}
        className="w-full h-full object-contain"
        unoptimized
      />
    </div>
  );
}
