import React, { useState } from "react"

interface CodeBoxProps {
  code: string
}

const CodeBox: React.FC<CodeBoxProps> = ({ code }) => {
  const [showFirstSvg, setShowFirstSvg] = useState(true)
  const [showSecondSvg, setShowSecondSvg] = useState(false)

  const handleClick = () => {
    setShowFirstSvg(false)
    setShowSecondSvg(true)

    setTimeout(() => {
      setShowFirstSvg(true)
      setShowSecondSvg(false)
    }, 2000)
  }
  return (
    <div data-rehype-pretty-code-fragment="" className="relative">
      <pre
        className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 pl-5 dark:bg-zinc-900"
        data-language="bash"
        data-theme="default"
      >
        <code className="font-mono text-xs text-zinc-50 md:text-sm">
          {code}
        </code>
      </pre>
      <button
        className="absolute right-4 top-4 z-10 inline-flex h-6 w-6 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        onClick={() => {
          navigator.clipboard.writeText(code)
          handleClick()
        }}
      >
        <span className="sr-only">Copy</span>
        <div className="transition-all duration-300 ease-in-out">
          {showFirstSvg && (
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
            >
              <path
                d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}

          {showSecondSvg && (
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}
        </div>
      </button>
    </div>
  )
}

export default CodeBox
