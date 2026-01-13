import type React from "react"
import { MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/contact-data"

interface WhatsAppButtonProps {
  message: string
  className?: string
  children?: React.ReactNode
}

export default function WhatsAppButton({ message, className = "", children }: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${className}`}
    >
      <MessageCircle size={20} />
      {children || "Contacter sur WhatsApp"}
    </a>
  )
}
