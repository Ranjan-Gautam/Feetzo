export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9779840203297?text=Hi%20Feetzo!%20I%20want%20to%20ask%20about%20an%20item."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-accent px-4 py-3.5 font-semibold text-background shadow-lg shadow-black/30 transition-all hover:gap-4"
    >
      <WhatsAppIcon />
      <span className="hidden text-sm sm:inline">Chat with us</span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.54-3.7 8.24-8.25 8.24-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24Zm-2.9 4.43c-.14 0-.36.05-.55.26-.19.21-.72.7-.72 1.72 0 1.01.74 1.99.84 2.12.1.14 1.45 2.21 3.52 3.1.49.21.88.34 1.18.44.5.16.95.14 1.3.08.4-.06 1.23-.5 1.4-.99.18-.48.18-.9.12-.99-.05-.08-.19-.14-.4-.24-.21-.1-1.23-.61-1.42-.68-.19-.07-.33-.1-.47.1-.14.21-.54.68-.66.82-.12.14-.24.16-.45.05-.21-.1-.88-.32-1.68-1.03-.62-.55-1.04-1.24-1.16-1.45-.12-.21-.01-.32.09-.42.09-.09.21-.24.31-.36.1-.12.14-.21.21-.35.07-.14.03-.26-.02-.36-.05-.1-.47-1.13-.64-1.55-.17-.4-.34-.35-.47-.36h-.4Z" />
    </svg>
  );
}
