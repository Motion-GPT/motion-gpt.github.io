"use client"

import Image from "next/image"
import Link from "next/link"
import fudanLogo from "@/public/fudan.svg"
import pipeline from "@/public/pipeline.png"
import shanghaiTechLogo from "@/public/shanghaitech.svg"
import teaser from "@/public/teaser.png"
import tencentLogo from "@/public/tencent.png"
import white from "@/public/white.svg"
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks"

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
    "a person moves their hands back and forth as if using a broom.",
    "A person lowers their arms, gets onto all fours, and crawls.",
    "Person is side stepping back and forth.",
    "a person kneeling on the ground gets up ",
    "The person is practing balancing on one leg.",
    "A person walks forward, stops, turns directly to their right, then walks forward again.",
    " a person walks forward, leans and touches something with his left hand, and then walks backward.",
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
      <section className="flex flex-col gap-2 bg-[#F6F6F6]">
        <div className="h-[calc(100vh)] w-full items-end justify-center">
          <h1 className="py-4 text-center text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            <span className="text-amber-500">Motion</span>GPT: Human Motion{" "}
            <br className="hidden sm:inline" />
            as Foreign <span className="text-blue-500">Language</span>
          </h1>
          <div className="mt-4 flex items-center justify-center">
            <div className="max-w-screen-lg ">
              <video autoPlay loop playsInline muted>
                <source src="videos/teaser_video_loop.webm" type="video/webm" />
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
          <div className="mt-4 grid grid-cols-3 gap-4 px-6 text-center text-xl leading-tight tracking-tight md:text-2xl lg:mx-[12rem]">
            <Button variant="outline" asChild>
              <Link
                href="https://arxiv.org/pdf/2306.14795"
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

          <div className="tracking-tigh mt-4 grid grid-cols-6 gap-2 text-center text-base md:text-lg lg:mx-[18rem] lg:text-xl">
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
          <div className="mt-4 grid grid-cols-3 justify-center gap-2 text-center text-base leading-tight tracking-tight md:text-xl lg:mx-[12rem]">
            <div className="flex items-center justify-center">
              <Image src={fudanLogo} alt="Fudan University" width={32}></Image>
              <span>
                <sup>1</sup>Fudan University
              </span>
            </div>
            <div className="flex items-center  justify-center">
              <Image src={tencentLogo} alt="Tencent PCG" width={32}></Image>
              <span>
                <sup>2</sup>Tencent PCG
              </span>
            </div>
            <div className="flex items-center justify-center">
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
        <section className="mx-auto max-w-screen-lg space-y-5 py-10">
          <h2 className="py-5 font-mono text-2xl font-semibold uppercase tracking-tight">
            <div className="text-red-500">Paper</div>
            <div className="text-4xl">Abstract</div>
          </h2>
          <p className="md:text-l mt-4 text-justify lg:text-xl">
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
          {/* <Image src={teaser} alt="MotionGPT teaser"></Image> */}
          <Tabs defaultValue="m2t">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="m2t">Motion Translation</TabsTrigger>
              <TabsTrigger value="t2m">Motion Generation</TabsTrigger>
              <TabsTrigger value="t2t">Question-Answer</TabsTrigger>
              <TabsTrigger value="m2m">Motion Complete</TabsTrigger>
            </TabsList>
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
            <TabsContent value="t2m">
              <div className="relative">
                <EmblaCarousel
                  slides={t2mResults}
                  captions={t2mResultsCaptions}
                  options={{ loop: true }}
                ></EmblaCarousel>
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
        </section>
        <section className="mx-auto max-w-screen-lg space-y-5 py-10">
          <h2 className="py-5 font-mono text-2xl font-semibold uppercase tracking-tight">
            <div className="text-red-500">Our</div>
            <div className="text-4xl">Method</div>
          </h2>
          <p className="md:text-l mt-4 text-justify lg:text-xl">
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
        <section className="mx-auto w-full max-w-screen-lg space-y-5 py-10">
          {/* <h2 className="py-5 font-mono text-2xl font-semibold uppercase tracking-tight">
            <div className="text-red-500">Example</div>
            <div className="text-4xl">Results</div>
          </h2> */}
          {/* Different Tasks */}

          {/* Comparision */}
          <h2 className="py-5 font-mono text-2xl font-semibold uppercase tracking-tight">
            <div className="text-red-500">Comparision</div>
            <div className="text-4xl">Results</div>
          </h2>
          <div className="flex justify-center">
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/AH_q9P5dQ-c"
              title="MotionGPT Comparision"
              allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Citation */}
          <h2 className="pt-5 font-mono text-2xl font-semibold uppercase tracking-tight">
            <div className="text-3xl">Citation</div>
          </h2>
          <p className="md:text-l text-justify lg:text-xl">
            If you find our code or paper helps, please consider citing:
          </p>
          <CopyBlock
            text={`@article{jiang2023motiongpt,
          title={MotionGPT: Human Motion as a Foreign Language},
          author={Jiang, Biao and Chen, Xin and Liu, Wen and Yu, Jingyi and Yu, Gang and Chen, Tao},
          journal={arXiv preprint arXiv:2306.14795}, 
          year={2023}
  }`}
            language="bibtex"
            showLineNumbers={false}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
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
            </Link>
            ,{" "}
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
            . Icons from{" "}
            <Link
              href="https://lucide.dev/"
              className="font-medium hover:text-blue-400 hover:underline"
              target="_blank"
            >
              Lucide
            </Link>
            . Style inspired by{" "}
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
