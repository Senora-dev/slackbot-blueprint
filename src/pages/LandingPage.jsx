
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Bot, 
  Github, 
  Terminal,
  Folder,
  FileJson,
  Code2,
  CheckCircle2,
  ChevronDown,
  ExternalLink 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-8 text-purple-400">
              <Bot className="w-6 h-6" />
              <span className="font-mono">SLACK BOT BLUEPRINT</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-violet-600 text-transparent bg-clip-text">
              Build Your Next Bot Easily:
              <br />
              Complete Slack Bot Template<br />
              for Platform Engineering
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              Turn manual processes into a true Self-Service experience — in minutes.
            </p>
            <div className="flex justify-start">
              <Button 
                className="bg-[#8c52ff] hover:bg-[#7842e5] text-white gap-2"
                size="lg"
                onClick={() => window.open("https://github.com/Senora-dev/self-service-slack-bot-blueprint", "_blank")}
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              {/* Multiple layered glow effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8c52ff] to-purple-400 rounded-xl blur-2xl opacity-20"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-[#8c52ff] rounded-xl blur-xl opacity-10"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
                <div className="px-4 py-3 bg-slate-800/50 border-b border-slate-700/50 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-[#8c52ff]" />
                  <span className="font-medium text-slate-100">Architecture Overview</span>
                </div>
                <div className="p-8">
                  <div className="relative group transition-all duration-300">
                    {/* Subtle inner glow on hover */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#8c52ff] to-purple-400 rounded-xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/95649c_self-service-slackbot-blueprint-Theflowdrawio.png" 
                      alt="Slack Bot Blueprint Architecture" 
                      className="relative w-full h-auto rounded-lg mix-blend-luminosity hover:mix-blend-normal transition-all duration-300" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <section id="why-section" className="py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Use Bots in DevOps/Platform Engineering?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4">Complete Automation</h3>
              <p className="text-slate-400">
                Reduce workload on Platform teams by automating routine tasks like environment creation, permissions, and more.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4">Self-Service Experience</h3>
              <p className="text-slate-400">
                Enable developers to perform actions themselves, without depending on the infrastructure team.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4">Standardization</h3>
              <p className="text-slate-400">
                Maintain consistent standards across the organization through predefined templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Get Started in Three Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8c52ff] to-purple-400 rounded-xl opacity-20 blur"></div>
              <div className="relative bg-slate-900 rounded-xl p-6 border border-slate-800">
                <div className="w-12 h-12 bg-[#8c52ff]/20 rounded-lg flex items-center justify-center mb-4">
                  <Terminal className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">1. Installation</h3>
                <div className="bg-slate-800 rounded p-3 font-mono text-sm mb-4">
                  <code>make all</code>
                </div>
                <p className="text-slate-400">
                  A single command that installs all required infrastructure on AWS
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8c52ff] to-purple-400 rounded-xl opacity-20 blur"></div>
              <div className="relative bg-slate-900 rounded-xl p-6 border border-slate-800">
                <div className="w-12 h-12 bg-[#8c52ff]/20 rounded-lg flex items-center justify-center mb-4">
                  <FileJson className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">2. Define Actions</h3>
                <p className="text-slate-400 mb-4">
                  Create action folders with modal.json and buildspec.yaml files
                </p>
                <div className="bg-slate-800 rounded p-3 font-mono text-sm">
                  actions/<br />
                  ├── create-env/<br />
                  │   ├── modal.json<br />
                  │   └── buildspec.yaml<br />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8c52ff] to-purple-400 rounded-xl opacity-20 blur"></div>
              <div className="relative bg-slate-900 rounded-xl p-6 border border-slate-800">
                <div className="w-12 h-12 bg-[#8c52ff]/20 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">3. Launch</h3>
                <p className="text-slate-400">
                  Configure the bot in Slack and start using it! The bot will automatically display all defined actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="permissions" className="border border-slate-800 rounded-lg bg-slate-900">
              <AccordionTrigger className="px-6 hover:no-underline hover:bg-slate-800/50 [&[data-state=open]]:bg-slate-800/50 rounded-lg">
                What AWS permissions are required?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-400">
                Permissions to create resources in Lambda, CodeBuild, IAM, and API Gateway are required. The project includes a ready-made IAM template.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="scale" className="border border-slate-800 rounded-lg bg-slate-900">
              <AccordionTrigger className="px-6 hover:no-underline hover:bg-slate-800/50 [&[data-state=open]]:bg-slate-800/50 rounded-lg">
                How scalable is it?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-400">
                The solution is based on AWS managed services and designed for scalability. CodeBuild runs each action in a separate container.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ecs" className="border border-slate-800 rounded-lg bg-slate-900">
              <AccordionTrigger className="px-6 hover:no-underline hover:bg-slate-800/50 [&[data-state=open]]:bg-slate-800/50 rounded-lg">
                Can it be deployed on ECS?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-400">
                Currently, the template supports Lambda, but it can be easily adapted for ECS. Create an Issue on GitHub if you need this feature.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Bot?</h2>
          <p className="text-xl text-slate-400 mb-8">
            Check out the documentation and start building your self-service platform today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#8c52ff] hover:bg-[#7842e5] text-white gap-2"
              size="lg"
              onClick={() => window.open("https://github.com/Senora-dev/self-service-slack-bot-blueprint", "_blank")}
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">Created with ❤️ by Senora.dev</p>
        </div>
      </footer>
    </div>
  );
}
