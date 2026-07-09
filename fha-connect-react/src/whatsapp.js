// Replace with your real WhatsApp number: country code + number, digits only.
// e.g. Nigerian number 0813 xxx xxxx becomes "234813xxxxxxx"
export const WHATSAPP_NUMBER = '234813xxxxxxx'

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
