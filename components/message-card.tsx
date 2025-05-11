import { Heart, Send, Flower, Smile } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MessageCardProps {
  message: string
  recipient: string
  className?: string
}

export default function MessageCard({ message, recipient, className }: MessageCardProps) {
  const isPinkVariant = recipient.toLowerCase().includes("suleidi")

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-lg rounded-2xl card-soft",
        isPinkVariant
          ? "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200"
          : "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
        className,
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex flex-col items-center gap-1 mt-1">
            <Heart className={cn("h-5 w-5", isPinkVariant ? "text-pink-500" : "text-purple-500")} />
            <Send className={cn("h-4 w-4", isPinkVariant ? "text-pink-400" : "text-purple-400")} />
            <Flower className={cn("h-4 w-4", isPinkVariant ? "text-pink-300" : "text-purple-300")} />
            <Smile className={cn("h-4 w-4", isPinkVariant ? "text-pink-300" : "text-purple-300")} />
          </div>
          <p className="italic text-lg leading-relaxed text-gray-700">
            {message}
          </p>
        </div>
        <p className={cn("text-right font-semibold text-base", isPinkVariant ? "text-pink-600" : "text-purple-600")}>
          {recipient}
        </p>
      </CardContent>
    </Card>
  )
}
