import React from 'react';

export default function ProjectFiles() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Project Files for GitHub Pages Deployment</h1>
      
      <div className="bg-yellow-900/30 border border-yellow-700/50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-2 text-yellow-400">מדריך מפורט</h2>
        <p className="text-yellow-200 mb-4">הנה הצעדים המלאים להעלאת דף הנחיתה ל-GitHub Pages:</p>
        <ol className="list-decimal list-inside space-y-3 text-yellow-100">
          <li>
            <span className="font-semibold">יצירת פרויקט React חדש עם Vite:</span>
            <pre className="bg-slate-800 p-2 rounded mt-1 text-sm">npm create vite@latest self-service-slack-bot-landing -- --template react</pre>
          </li>
          <li>
            <span className="font-semibold">כניסה לתיקיית הפרויקט:</span>
            <pre className="bg-slate-800 p-2 rounded mt-1 text-sm">cd self-service-slack-bot-landing</pre>
          </li>
          <li>
            <span className="font-semibold">התקנת חבילות נדרשות:</span>
            <pre className="bg-slate-800 p-2 rounded mt-1 text-sm">npm install @radix-ui/react-accordion lucide-react tailwindcss postcss autoprefixer @radix-ui/react-popover framer-motion date-fns</pre>
          </li>
          <li>
            <span className="font-semibold">התקנת Tailwind CSS:</span>
            <pre className="bg-slate-800 p-2 rounded mt-1 text-sm">npx tailwindcss init -p</pre>
            <span className="text-yellow-300 block mt-1">* זה ייצור את קבצי tailwind.config.js ו-postcss.config.js. החלף את תוכן הקבצים האלו עם הקוד מהדוגמאות למטה.</span>
          </li>
          <li>
            <span className="font-semibold">העתק את הקוד של דף הנחיתה שלך:</span>
            <span className="block mt-1">צור תיקייה src/components ובתוכה קובץ LandingPage.jsx עם הקוד של הדף הקיים. זכור לשנות את ה-imports כמו שמוסבר בהמשך.</span>
          </li>
          <li>
            <span className="font-semibold">שינוי ה-imports בקוד:</span>
            <pre className="bg-slate-800 p-2 rounded mt-1 text-sm">{`// במקום
import { Button } from "@/components/ui/button";

// השתמש ב-
import { Button } from "./ui/button";

// וכנ"ל עבור כל הרכיבים האחרים`}</pre>
          </li>
          <li>
            <span className="font-semibold">יצירת תיקיית ui עבור הרכיבים:</span>
            <span className="block mt-1">צור תיקייה src/components/ui והעתק לשם את הרכיבים שצריך (כמו button.jsx, accordion.jsx)</span>
          </li>
          <li>
            <span className="font-semibold">הגדרת base URL בקובץ vite.config.js:</span>
            <span className="text-yellow-300 block mt-1">* חשוב מאוד: שנה את הערך של base לשם המדויק של ה-repository שלך!</span>
          </li>
          <li>
            <span className="font-semibold">בנייה והעלאה:</span>
            <pre className="bg-slate-800 p-2 rounded mt-1 text-sm">{`# בניית הפרויקט
npm run build

# יצירת רפוזיטורי גיט חדש והעלאה
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:username/repo-name.git
git push -u origin main

# אם יש לך GitHub Action, הוא ידאג להעלאה ל-gh-pages
# אחרת, תוכל להעלות את תיקיית dist באופן ידני:`}</pre>
          </li>
          <li>
            <span className="font-semibold">הגדרות ב-GitHub:</span>
            <ol className="list-disc list-inside pl-4 mt-1">
              <li>לך ל-Settings ב-repository</li>
              <li>גלול למטה ל-GitHub Pages</li>
              <li>תחת Source, בחר "Deploy from a branch"</li>
              <li>בחר ב-branch: "gh-pages" (אם השתמשת ב-GitHub Action) או "main" והתיקייה "/dist"</li>
              <li>לחץ Save</li>
            </ol>
          </li>
          <li>
            <span className="font-semibold">פתרון בעיות נפוצות:</span>
            <ol className="list-disc list-inside pl-4 mt-1">
              <li>אם מופיע דף לבן, בדוק את הקונסול בדפדפן (F12) לשגיאות</li>
              <li>וודא שה-base URL בקובץ vite.config.js זהה לשם ה-repository</li>
              <li>וודא שהנתיבים ל-assets (תמונות, קבצי CSS) נכונים ומתחילים עם ה-base URL</li>
            </ol>
          </li>
        </ol>
      </div>
      
      <div className="space-y-8">
        {/* tailwind.config.js */}
        <div className="bg-slate-900 rounded-lg p-6">
          <h2 className="text-xl font-mono mb-4">tailwind.config.js</h2>
          <pre className="bg-slate-800 p-4 rounded overflow-x-auto">
{`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
          </pre>
        </div>

        {/* postcss.config.js */}
        <div className="bg-slate-900 rounded-lg p-6">
          <h2 className="text-xl font-mono mb-4">postcss.config.js</h2>
          <pre className="bg-slate-800 p-4 rounded overflow-x-auto">
{`export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`}
          </pre>
        </div>

        {/* vite.config.js */}
        <div className="bg-slate-900 rounded-lg p-6">
          <h2 className="text-xl font-mono mb-4">vite.config.js</h2>
          <pre className="bg-slate-800 p-4 rounded overflow-x-auto">
{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/self-service-slack-bot-landing/', // שנה את זה לשם ה-repository שלך
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})`}
          </pre>
        </div>

        {/* src/index.css */}
        <div className="bg-slate-900 rounded-lg p-6">
          <h2 className="text-xl font-mono mb-4">src/index.css</h2>
          <pre className="bg-slate-800 p-4 rounded overflow-x-auto">
{`@tailwind base;
@tailwind components;
@tailwind utilities;`}
          </pre>
        </div>

        {/* src/main.jsx */}
        <div className="bg-slate-900 rounded-lg p-6">
          <h2 className="text-xl font-mono mb-4">src/main.jsx</h2>
          <pre className="bg-slate-800 p-4 rounded overflow-x-auto">
{`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`}
          </pre>
        </div>

        {/* src/App.jsx */}
        <div className="bg-slate-900 rounded-lg p-6">
          <h2 className="text-xl font-mono mb-4">src/App.jsx</h2>
          <pre className="bg-slate-800 p-4 rounded overflow-x-auto">
{`import LandingPage from './components/LandingPage'

function App() {
  return <LandingPage />
}

export default App`}
          </pre>
        </div>

        {/* src/components/ui/button.jsx */}
        <div className="bg-slate-900 rounded-lg p-6">
          <h2 className="text-xl font-mono mb-4">src/components/ui/button.jsx</h2>
          <pre className="bg-slate-800 p-4 rounded overflow-x-auto">
{`import * as React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-primary text-primary-foreground shadow hover:bg-primary/90": variant === "default",
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90": variant === "destructive",
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground": variant === "outline",
          "text-primary underline-offset-4 hover:underline": variant === "link",
          "h-9 px-4 py-2 text-sm": size === "default",
          "h-10 px-8 text-base": size === "lg",
          "h-8 px-3 text-xs": size === "sm",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }`}
          </pre>
        </div>

        {/* src/components/ui/accordion.jsx */}
        <div className="bg-slate-900 rounded-lg p-6">
          <h2 className="text-xl font-mono mb-4">src/components/ui/accordion.jsx</h2>
          <pre className="bg-slate-800 p-4 rounded overflow-x-auto">
{`import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "../../lib/utils"
import { ChevronDown } from "lucide-react"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}>
      {children}
      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }`}
          </pre>
        </div>

        {/* utils.js */}
        <div className="bg-slate-900 rounded-lg p-6">
          <h2 className="text-xl font-mono mb-4">src/lib/utils.js</h2>
          <pre className="bg-slate-800 p-4 rounded overflow-x-auto">
{`export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}`}
          </pre>
        </div>

        {/* GitHub Action */}
        <div className="bg-slate-900 rounded-lg p-6">
          <h2 className="text-xl font-mono mb-4">.github/workflows/deploy.yml</h2>
          <pre className="bg-slate-800 p-4 rounded overflow-x-auto">
{`name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`}
          </pre>
        </div>

        {/* index.html */}
        <div className="bg-slate-900 rounded-lg p-6">
          <h2 className="text-xl font-mono mb-4">index.html</h2>
          <pre className="bg-slate-800 p-4 rounded overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Slack Bot Blueprint</title>
    <meta name="description" content="Complete Slack Bot Template for Platform Engineering" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`}
          </pre>
        </div>

        <div className="bg-emerald-900/30 border border-emerald-700/50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-3 text-emerald-400">טיפ: שינוי imports ב-LandingPage</h2>
          <p className="text-emerald-200 mb-4">כדי להתאים את הקוד הנוכחי שלך לפרויקט Vite, תצטרך לשנות את ה-imports:</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded">
              <h3 className="font-semibold mb-2 text-red-400">Import מקורי (לא יעבוד):</h3>
              <pre className="text-red-200 overflow-x-auto">
{`import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger,
} from "@/components/ui/accordion";`}
              </pre>
            </div>
            
            <div className="bg-slate-800 p-4 rounded">
              <h3 className="font-semibold mb-2 text-green-400">Import חדש (יעבוד):</h3>
              <pre className="text-green-200 overflow-x-auto">
{`import { Button } from "./ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger,
} from "./ui/accordion";`}
              </pre>
            </div>
          </div>
          
          <p className="text-emerald-200 mt-4">חשוב לזכור שבפרויקט Vite הנתיבים הם יחסיים לקובץ הנוכחי, ולא מתחילים מהשורש.</p>
        </div>
      </div>
    </div>
  );
}