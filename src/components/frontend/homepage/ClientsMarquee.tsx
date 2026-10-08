import { ClientLogoCard } from "../cards/ClientLogoCard";

function loopLogos(clients: string[]): string[] {
  if (clients.length === 0) return [];
  let half = [...clients];
  while (half.length < 8) half = half.concat(clients);
  return [...half, ...half];
}

export function ClientsMarquee({ clients }: { clients: string[] }) { if (clients.length === 0) return null; return <section className="clients-marquee-section" id="clients"><div className="container"><div className="section-header-compact"><div className="clients-badge-pill">SUPPORTED BY • OUR CLIENTS</div><h2>Mitra Perpajakan &amp; Akuntansi yang Bisa Diandalkan</h2><p>Lebih dari 1.000+ pengusaha dan entitas korporasi mempercayakan pembukuan, perizinan PKP, dan SPT pajak mereka kepada EasyTax.</p></div></div><div className="clients-marquee-wrapper"><div className="clients-marquee-track">{[...loopLogos(clients), ...loopLogos(clients)].map((file, index) => <ClientLogoCard file={file} key={`${file}-${index}`} />)}</div><div className="marquee-fade-left" /><div className="marquee-fade-right" /></div></section>; }
