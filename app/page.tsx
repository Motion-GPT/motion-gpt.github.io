"use client"

import Image from "next/image"
import Link from "next/link"
import fudanLogo from "@/public/fudan.svg"
import pipeline from "@/public/pipeline.png"
import shanghaiTechLogo from "@/public/shanghaitech.svg"
import teaser from "@/public/teaser.png"
import tencentLogo from "@/public/tencent.png"
import white from "@/public/white.svg"
import YouTube from "react-youtube"

import "node_modules/video-react/dist/video-react.css"
import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Chat } from "@/components/academic/chat"
import EmblaCarousel from "@/components/embla/EmblaCarousel"
import EmblaCarousel2 from "@/components/embla/EmblaCarousel2"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  const authors = [
    "Biao Jiang",
    "Xin Chen",
    "Wen Liu",
    "Jingyi Yu",
    "Gang YU",
    "Tao Chen",
  ]
  const authorLinks = [
    "https://github.com/billl-jiang",
    "https://chenxin.tech/",
    "https://scholar.google.com/citations?user=A6K6bkoAAAAJ",
    "https://sist.shanghaitech.edu.cn/2020/0707/c7499a53862/page.htm",
    "https://www.skicyyu.org/",
    "https://eetchen.github.io/",
  ]
  const authorAffliations = ["1", "2", "2", "3", "2", "1"]

  const t2mResults = [
    "videos/text-to-motion/0.webm",
    "videos/text-to-motion/1.webm",
    "videos/text-to-motion/2.webm",
    "videos/text-to-motion/3.webm",
    "videos/text-to-motion/4.webm",
    "videos/text-to-motion/5.webm",
    "videos/text-to-motion/6.webm",
    "videos/text-to-motion/7.webm",
    "videos/text-to-motion/8.webm",
  ]
  const t2mResultsCaptions = [
    "A person is walking forwards, but stumbles and steps back, then carries on forward.",
    "A man aggressively kicks an object to the left using his right foot.",
    "A person lowers their arms, gets onto all fours, and crawls.",
    "A person bends over and picks things up with both hands individually, then walks forward.",
    "The man kicks with his right foot and then returns to a stable position.",
    "The person is practing balancing on one leg.",
    "A person walks forward, stops, turns directly to their right, then walks forward again.",
    "A person sits on the ledge of something then gets off and walks away.",
    "A person is crouched down and walking around sneakily.",
  ]

  const m2tVideos = [
    "videos/motion-to-text/0.webm",
    "videos/motion-to-text/1.webm",
    "videos/motion-to-text/2.webm",
    "videos/motion-to-text/3.webm",
    "videos/motion-to-text/4.webm",
    "videos/motion-to-text/5.webm",
    "videos/motion-to-text/6.webm",
    "videos/motion-to-text/7.webm",
  ]
  const m2tQuestions = [
    "Please explain the movement shown in [Motion_toknes] using natural language.",
    "What kind of action is being represented in [Motion_toknes]? Explain it in text.",
    "Generate text for [Motion_toknes]:",
    "Provide a summary of the motion demonstrated in [Motion_toknes] using words.",
    "What action is depicted in [Motion_toknes]? Please explain it in text.",
    "Provide a summary of the action depicted in [Motion_toknes] using language.",
    "Explain the motion demonstrated in [Motion_toknes] using natural language.",
    "Describe the motion represented by [Motion_toknes] in plain English.",
    "Provide a description of the action in [Motion_toknes] using words.",
  ]
  const m2tAnswers = [
    "a person walks forward then does a backwards z-shape movement to its left side. then back to the right.",
    "a person catches a ball, winds up and throws the ball then stops standing sideways.",
    "a person is kick boxing and holding his arms in front of his chest.",
    "a person lifts and bends their left leg/knee, then sweeps the leg in a counterclockwise motion back to the starting position, then repeats that process once more.",
    "a person takes two steps forward then turns to their right 180 degrees and takes two steps away.",
    "the man shakes something places it on the table and steps backwards.",
    "the man shakes something places it on the table and steps backwards.",
    "a person holds on to things on both sides while carefully walking.",
    "a person kicks two times on his left then kicks forward two times",
  ]

  const m2mVideos = [
    "videos/motion-pred/0.webm",
    "videos/motion-pred/1.webm",
    "videos/motion-pred/2.webm",
    "videos/motion-pred/2.webm",
  ]

  const t2tResults = [
    {
      user: 0,
      text: "Random say something about describing a human motion.",
    },
    {
      user: 1,
      text: "A person reaches for something and then drys their arm.",
    },
    {
      user: 0,
      text: "Describe the motion of someone as you will.",
    },
    {
      user: 1,
      text: "A man appears to be doing the waltz dance.",
    },
    {
      user: 0,
      text: "Come up with a human motion caption.",
    },
    {
      user: 1,
      text: "A man stands and moves his left leg backward and moves his left hand foward trying to throw something hard.",
    },
    {
      user: 0,
      text: "Write a sentence about how someone might dance.",
    },
    {
      user: 1,
      text: "The person walks in a curved path to the left then stops, turns around and follows the same path back to the way they came and turning around to their original starting position.",
    },
    {
      user: 0,
      text: "Depict a motion as like you have seen it.",
    },
    {
      user: 1,
      text: "The person walks while swaying their hips along a curved path to the left slowly then stops to look down at the edge of the grey platform at something.",
    },
  ]

  return (
    <div className="scroll-smooth">
      {/* Video */}
      <section className="flex flex-col gap-2 bg-[#F7F7F7]">
        <div className="w-full h-[calc(100vh)] items-end justify-center">
          <h1 className="text-4xl text-center font-extrabold leading-tight tracking-tight md:text-6xl py-4">
            <span className="text-amber-500">Motion</span>GPT: Human Motion{" "}
            <br className="hidden sm:inline" />
            as Foreign <span className="text-blue-500">Language</span>
          </h1>
          <div className="flex justify-center items-center mt-4">
            <div className="max-w-screen-lg ">
              <video autoPlay loop playsInline muted>
                <source src="videos/teaser_video.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <div className="container grid items-center pb-8 pt-6">
        {/* Information */}
        <section className="flex flex-col gap-2">
          {/* <h1 className="text-4xl text-center font-extrabold leading-tight tracking-tight md:text-6xl py-4">
            <span className="text-amber-500">Motion</span>GPT: Human Motion{" "}
            <br className="hidden sm:inline" />
            as Foreign <span className="text-blue-500">Language</span>
          </h1> */}
          <div className="grid grid-cols-3 lg:mx-[12rem] mt-4 gap-4 text-xl text-center leading-tight tracking-tight md:text-2xl px-6">
            <Button variant="outline" asChild>
              <Link
                href="https://github.com/OpenMotionLab/MotionGPT/blob/main/MotionGPT.pdf"
                target="_blank"
                className="flex items-center"
              >
                <Icons.paper className="mr-2 h-4 w-4" />
                Paper
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://github.com/OpenMotionLab/MotionGPT"
                target="_blank"
                className="flex items-center"
              >
                <Icons.gitHub className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
            <Button variant="outline" disabled>
              <Icons.boxes className="mr-2 h-4 w-4" />
              Web Demo &#20; <Badge variant="outline">Soon</Badge>
            </Button>
          </div>

          <div className="grid grid-cols-6 lg:mx-[18rem] mt-4 gap-2 text-xl text-center tracking-tigh">
            {authors.map((author, index) => (
              <div key={index}>
                <Link
                  className="transition hover:text-blue-400"
                  href={authorLinks[index]}
                >
                  {author}
                </Link>
                <sup>{authorAffliations[index]}</sup>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 lg:mx-[12rem] mt-4 gap-2 text-lg text-center leading-tight tracking-tight md:text-xl justify-center">
            <div className="flex justify-center">
              <Image src={fudanLogo} alt="Fudan University" width={32}></Image>
              <span>
                <sup>1</sup>Fudan University
              </span>
            </div>
            <div className="flex justify-center">
              <Image src={tencentLogo} alt="Tencent PCG" width={32}></Image>
              <span>
                <sup>2</sup>Tencent PCG
              </span>
            </div>
            <div className="flex justify-center">
              <Image
                src={shanghaiTechLogo}
                alt="ShanghaiTech University"
                width={32}
              ></Image>
              <span>
                <sup>3</sup>ShanghaiTech University
              </span>
            </div>
          </div>
        </section>
        {/* Abstract */}
        <section className="py-10 max-w-screen-lg mx-auto space-y-5">
          <h2 className="font-mono font-semibold text-2xl uppercase tracking-tight py-5">
            <div className="text-red-500">Paper</div>
            <div className="text-4xl">Abstract</div>
          </h2>
          <p className="mt-4 md:text-l lg:text-xl text-justify">
            Though the advancement of pre-trained large language models unfolds,
            the exploration of building a unified model for language and other
            multimodal data, such as motion, remains challenging and untouched
            so far. Fortunately, human motion displays a semantic coupling akin
            to human language, often perceived as a form of body language. By
            fusing language data with large-scale motion models, motion-language
            pre-training that can enhance the performance of motion-related
            tasks becomes feasible. Driven by this insight, we propose
            MotionGPT, a unified, versatile, and user-friendly motion-language
            model to handle multiple motion-relevant tasks. Specifically, we
            employ the discrete vector quantization for human motionand transfer
            3D motion into motion tokens, similar to the generation process
            ofword tokens. Building upon this “motion vocabulary”, we perform
            language modeling on both motion and text in a unified manner,
            treating human motion as a specific language. Moreover, inspired by
            prompt learning, we pre-train MotionGPT with a mixture of
            motion-language data and fine-tune it on prompt-based
            question-and-answer tasks. Extensive experiments demonstrate that
            MotionGPT achieves state-of-the-art performances on multiple motion
            tasks including text-driven motion generation, motion captioning,
            motion prediction, and motion in-between.
          </p>
          <Image src={teaser} alt="MotionGPT teaser"></Image>
        </section>
        <section className="py-10 max-w-screen-lg mx-auto space-y-5">
          <h2 className="font-mono font-semibold text-2xl uppercase tracking-tight py-5">
            <div className="text-red-500">Our</div>
            <div className="text-4xl">Method</div>
          </h2>
          <p className="mt-4 md:text-l lg:text-xl text-justify">
            To involve large language data and models in the motion generation
            tasks, we propose a unified motion-language framework named
            MotionGPT. MotionGPT consists of a motion tokenizer responsible for
            converting raw motion data into discrete motion tokens, as well as a
            motion-aware language model that learns to understand the motion
            tokens from large language pre-training models by corresponding
            textual descriptions.
          </p>
          <Image src={pipeline} alt="MotionGPT pipeline"></Image>
        </section>
        {/* More Results */}
        <section className="py-10 max-w-screen-lg mx-auto space-y-5 w-full">
          <h2 className="font-mono font-semibold text-2xl uppercase tracking-tight py-5">
            <div className="text-red-500">Example</div>
            <div className="text-4xl">Results</div>
          </h2>
          {/* Different Tasks */}
          <Tabs defaultValue="t2m">
            <TabsList>
              <TabsTrigger value="t2m">Motion Generation</TabsTrigger>
              <TabsTrigger value="m2t">Motion Translation</TabsTrigger>
              <TabsTrigger value="t2t">Question-Answer</TabsTrigger>
              <TabsTrigger value="m2m">Motion Complete</TabsTrigger>
            </TabsList>
            <TabsContent value="t2m">
              <div className="relative">
                <EmblaCarousel
                  slides={t2mResults}
                  captions={t2mResultsCaptions}
                  options={{ loop: true }}
                ></EmblaCarousel>
              </div>
            </TabsContent>
            <TabsContent value="m2t">
              <div className="relative">
                <EmblaCarousel2
                  slides={m2tVideos}
                  captions={m2tQuestions}
                  captions2={m2tAnswers}
                  options={{ loop: true }}
                ></EmblaCarousel2>
              </div>
            </TabsContent>
            <TabsContent value="m2m">
              <div className="relative">
                <EmblaCarousel
                  slides={m2mVideos}
                  options={{ loop: true }}
                ></EmblaCarousel>
              </div>
            </TabsContent>
            <TabsContent value="t2t">
              <Chat message={t2tResults} />
            </TabsContent>
          </Tabs>

          {/* Comparision */}
          <h2 className="font-mono font-semibold text-2xl uppercase tracking-tight py-5">
            <div className="text-red-500">Comparision</div>
            <div className="text-4xl">Results</div>
          </h2>
          <div className="flex justify-center">
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/AH_q9P5dQ-c"
              title="MotionGPT Comparision"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <Separator className="my-8" />
        {/* Acknowledgement */}
        <div className="flex justify-center">
          <p className="">
            Made with{" "}
            <Link
              href="https://nextjs.org/"
              className="font-medium hover:text-blue-400 hover:underline"
              target="_blank"
            >
              Next.js
            </Link>{" "}
            ,
            <Link
              href="https://tailwindcss.com/"
              className="font-medium hover:text-blue-400 hover:underline"
              target="_blank"
            >
              Tailwind CSS
            </Link>{" "}
            and{" "}
            <Link
              href="https://ui.shadcn.com/"
              className="font-medium hover:text-blue-400 hover:underline"
              target="_blank"
            >
              shadcn/ui
            </Link>
            . Style inspire by{" "}
            <Link
              href="https://anonymous-31415926.github.io/"
              className="font-medium hover:text-blue-400 hover:underline"
              target="_blank"
            >
              RERENDER A VIDEO
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
