/**
 * Client logo item inside the clients marquee.
 */
export function ClientLogoCard({ file }: { file: string }) {
  return (
    <div className="client-marquee-item">
      <img
        src={file.startsWith("/") || file.startsWith("http") ? file : `/images/clients/${file}`}
        alt={file.split("/").pop()?.replace(/\.\w+$/, "") ?? "Client"}
        className="client-logo-img"
        loading="lazy"
      />
    </div>
  );
}
