"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileSpreadsheet, Upload, CheckCircle, Languages } from "lucide-react"

export function HeroSection() {
  const [step, setStep] = useState(1)

  // Animation for demonstration purposes
  setTimeout(() => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      setStep(1)
    }
  }, 3000)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-excel-50 to-excel-100">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-excel-800">
                Excelをアップロードするだけ！
              </h1>
              <p className="text-xl text-excel-700 md:text-2xl/relaxed lg:text-2xl/relaxed xl:text-3xl/relaxed">
                AIで校正して多言語翻訳まで、もう悩まない！
              </p>
            </div>
            <div className="flex flex-col gap-2 min-h-[100px]">
              <p className="max-w-[600px] text-excel-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {step === 1 && "Excelファイルをアップロードするだけで、AIが自動的に文章を校正します。"}
                {step === 2 && "校正された文章を確認し、必要に応じて編集できます。"}
                {step === 3 && "ワンクリックで英語・中国語・韓国語に翻訳し、すべての言語を一画面で管理できます。"}
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto bg-excel-600 hover:bg-excel-700">
                  まずは無料で試してみる
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-excel-300 text-excel-700 hover:bg-excel-50"
                >
                  詳しく見る
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-video rounded-xl border bg-white p-4 shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                {step === 1 && (
                  <div className="flex flex-col items-center gap-4 text-center">
                    <FileSpreadsheet className="h-16 w-16 text-excel-600" />
                    <div className="flex items-center gap-2">
                      <Upload className="h-5 w-5 animate-bounce text-excel-600" />
                      <p className="text-lg font-medium text-excel-800">Excelファイルをアップロード</p>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
                      <div className="border rounded-md p-3 bg-excel-50">
                        <p className="text-sm text-excel-700">原文</p>
                        <p className="text-sm">当社は新製品の開発に取り組んでいます。</p>
                      </div>
                      <div className="border rounded-md p-3 bg-excel-100">
                        <p className="text-sm text-excel-700">校正後</p>
                        <p className="text-sm">当社は新製品の開発に取り組んでおります。</p>
                        <CheckCircle className="h-4 w-4 text-excel-600 mt-2" />
                      </div>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="flex flex-col items-center gap-4 text-center w-full max-w-[400px]">
                    <Languages className="h-12 w-12 text-excel-600" />
                    <div className="grid grid-cols-3 gap-2 w-full">
                      <div className="border rounded-md p-2 bg-excel-50">
                        <p className="text-xs text-excel-700">英語</p>
                        <p className="text-xs">Our company is working on developing new products.</p>
                      </div>
                      <div className="border rounded-md p-2 bg-excel-50">
                        <p className="text-xs text-excel-700">中国語</p>
                        <p className="text-xs">我们公司正在开发新产品。</p>
                      </div>
                      <div className="border rounded-md p-2 bg-excel-50">
                        <p className="text-xs text-excel-700">韓国語</p>
                        <p className="text-xs">저희 회사는 신제품 개발에 힘쓰고 있습니다.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

