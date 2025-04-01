import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileUpload } from "@/components/file-upload"
import { Features } from "@/components/features"
import { HeroSection } from "@/components/hero-section"
import { Testimonials } from "@/components/testimonials"
import { PricingSection } from "@/components/pricing-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-excel-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 text-excel-700">
            <FileUpload className="h-6 w-6" />
            <span className="text-xl font-bold">ExcelTranslator</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4 text-excel-800">
              機能
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:underline underline-offset-4 text-excel-800"
            >
              使い方
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4 text-excel-800">
              料金
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="border-excel-300 text-excel-700 hover:bg-excel-50">
                ログイン
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm" className="bg-excel-600 hover:bg-excel-700">
                無料で試す
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <Features />
        <Testimonials />
        <PricingSection />
      </main>
      <footer className="border-t py-6 md:py-10 bg-excel-50">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <div className="flex items-center gap-2 text-excel-700">
            <FileUpload className="h-6 w-6" />
            <span className="text-xl font-bold">ExcelTranslator</span>
          </div>
          <p className="text-sm text-excel-700">© 2025 ExcelTranslator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

