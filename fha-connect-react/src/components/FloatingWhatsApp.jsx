import { WHATSAPP_NUMBER } from "../constants/contact";

export default function FloatingWhatsApp() {
  const message = "Hi FHA Connect, I'd like to ask about your Wi-Fi service.";

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message FHA Connect on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/30 flex items-center justify-center hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.34.65 4.53 1.78 6.4L4 29l7.79-1.75A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3zm0 21.8c-1.86 0-3.6-.5-5.1-1.36l-.366-.214-4.62 1.038 1.02-4.5-.24-.38A9.77 9.77 0 0 1 5.2 15c0-5.964 4.837-10.8 10.8-10.8S26.8 9.036 26.8 15 21.964 24.8 16 24.8zm5.94-8.1c-.325-.163-1.92-.948-2.218-1.056-.297-.108-.514-.162-.73.163-.216.324-.838 1.055-1.028 1.272-.19.216-.38.243-.704.081-.325-.162-1.372-.505-2.614-1.612-.966-.86-1.618-1.923-1.808-2.248-.19-.324-.02-.5.142-.662.146-.145.325-.378.487-.567.162-.19.216-.324.324-.54.108-.216.054-.406-.027-.567-.081-.163-.73-1.76-1-2.41-.263-.633-.53-.548-.73-.558l-.622-.011c-.216 0-.567.081-.865.406-.297.324-1.135 1.109-1.135 2.705 0 1.596 1.162 3.138 1.324 3.354.162.216 2.288 3.494 5.545 4.9.775.334 1.38.534 1.85.684.777.247 1.484.212 2.043.129.623-.093 1.92-.784 2.19-1.542.27-.757.27-1.406.19-1.542-.081-.135-.297-.216-.622-.378z" />
      </svg>
    </a>
  );
}
