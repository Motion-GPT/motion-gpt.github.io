import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"

const chatVariants = cva(
  "inline-flex mt-5 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-full",
  {
    variants: {
      variant: {
        default: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface MsgProps {
  message: { user: number; text: string; timestamp?: string }[]
}

export interface ChatProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatVariants>,
    MsgProps {}

function Chat({ className, variant, message, ...props }: ChatProps) {
  return (
    <div className={cn(chatVariants({ variant }), className)} {...props}>
      <div className="flex flex-col space-y-3 text-xs w-full">
        {message.map((msg, index) => (
          <div
            className={cn(
              "flex space-x-2 items-end",
              msg.user == 1 ? "justify-end" : ""
            )}
          >
            {message[index + 1]?.user !== msg.user && msg.user == 0 ? (
              <Icons.user className="h-8 w-8" />
            ) : null}
            <div
              key={index}
              className={cn(
                "px-4 py-2 rounded-lg inline-block",
                "text-base text-justify",
                "rounded-tl-5 rounded-br-5 max-w-[70%]",
                msg.user == 0
                  ? "bg-blue-400 text-white"
                  : "bg-orange-200 text-blue-900",
                message[index + 1]?.user !== msg.user
                  ? msg.user == 0
                    ? "rounded-bl-none"
                    : "rounded-br-none"
                  : ""
              )}
            >
              {msg.text}
            </div>
            {message[index + 1]?.user !== msg.user && msg.user == 1 ? (
              <Icons.laptop className="ml-2 h-8 w-8" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export { Chat, chatVariants }
