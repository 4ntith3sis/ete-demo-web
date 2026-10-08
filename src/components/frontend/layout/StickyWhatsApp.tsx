/**
 * Floating WhatsApp CTA, visible on desktop and mobile.
 */
export function StickyWhatsApp({ whatsappUrl }: { whatsappUrl?: string }) {
  return (
    <a
      href={whatsappUrl ?? "https://mauorder.online/easytaxwebsite"}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
    </a>
  );
}
