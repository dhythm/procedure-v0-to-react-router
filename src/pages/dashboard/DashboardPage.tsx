"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { TranslationTable } from "@/components/translation-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, CheckCircle, Download, FileSpreadsheet, Save, Upload } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DashboardPage() {
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [originalText, setOriginalText] = useState("")
  const [correctedText, setCorrectedText] = useState("")
  const [showTranslations, setShowTranslations] = useState(false)

  const handleFileUpload = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setOriginalText(
        "当社は新製品の開発に取り組んでいます。今後も顧客満足度向上の為に努力します。宜しくお願いします。",
      )
      setIsProcessing(false)
      setStep(2)
    }, 2000)
  }

  const handleCorrection = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setCorrectedText(
        "当社は新製品の開発に取り組んでおります。今後もお客様満足度向上のために努力いたします。よろしくお願い申し上げます。",
      )
      setIsProcessing(false)
      setStep(3)
    }, 2000)
  }

  const handleTranslation = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setShowTranslations(true)
      setIsProcessing(false)
      setStep(4)
    }, 2000)
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="ExcelTranslator ダッシュボード"
        text="Excelファイルをアップロードして校正・翻訳を開始しましょう"
      >
        <Link href="/">
          <Button variant="outline" size="sm" className="h-8 border-excel-300 text-excel-700 hover:bg-excel-50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            ホームに戻る
          </Button>
        </Link>
      </DashboardHeader>
      <div className="grid gap-8">
        <Card className="border-excel-200">
          <CardHeader className="bg-excel-50 border-b border-excel-100">
            <CardTitle className="text-excel-800">翻訳ワークフロー</CardTitle>
            <CardDescription className="text-excel-700">
              Excelファイルをアップロードして、AIによる校正と翻訳を行います
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex justify-between mb-8">
              <div className={`flex flex-col items-center ${step >= 1 ? "text-excel-600" : "text-muted-foreground"}`}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? "border-excel-600 bg-excel-100" : "border-muted"}`}
                >
                  1
                </div>
                <span className="text-sm mt-2">アップロード</span>
              </div>
              <div className={`flex-1 border-t-2 self-start mt-5 ${step >= 2 ? "border-excel-600" : "border-muted"}`} />
              <div className={`flex flex-col items-center ${step >= 2 ? "text-excel-600" : "text-muted-foreground"}`}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? "border-excel-600 bg-excel-100" : "border-muted"}`}
                >
                  2
                </div>
                <span className="text-sm mt-2">校正</span>
              </div>
              <div className={`flex-1 border-t-2 self-start mt-5 ${step >= 3 ? "border-excel-600" : "border-muted"}`} />
              <div className={`flex flex-col items-center ${step >= 3 ? "text-excel-600" : "text-muted-foreground"}`}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? "border-excel-600 bg-excel-100" : "border-muted"}`}
                >
                  3
                </div>
                <span className="text-sm mt-2">翻訳</span>
              </div>
              <div className={`flex-1 border-t-2 self-start mt-5 ${step >= 4 ? "border-excel-600" : "border-muted"}`} />
              <div className={`flex flex-col items-center ${step >= 4 ? "text-excel-600" : "text-muted-foreground"}`}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 4 ? "border-excel-600 bg-excel-100" : "border-muted"}`}
                >
                  4
                </div>
                <span className="text-sm mt-2">完了</span>
              </div>
            </div>

            {step === 1 && (
              <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg border-excel-200 bg-excel-50">
                <FileSpreadsheet className="h-16 w-16 text-excel-600 mb-4" />
                <h3 className="text-xl font-medium mb-2 text-excel-800">Excelファイルをアップロード</h3>
                <p className="text-excel-700 text-center mb-6">
                  .xlsx または .xls 形式のファイルをドラッグ＆ドロップするか、ボタンをクリックしてください
                </p>
                <Button onClick={handleFileUpload} disabled={isProcessing} className="bg-excel-600 hover:bg-excel-700">
                  {isProcessing ? (
                    <>処理中...</>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      ファイルを選択
                    </>
                  )}
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-excel-800">原文</h3>
                    <Textarea
                      value={originalText}
                      onChange={(e) => setOriginalText(e.target.value)}
                      className="min-h-[200px] border-excel-200 focus-visible:ring-excel-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-excel-800">校正後のテキスト</h3>
                    <div className="border rounded-md p-4 min-h-[200px] bg-excel-50 border-excel-200 flex items-center justify-center">
                      {isProcessing ? (
                        <p className="text-excel-700">AIによる校正中...</p>
                      ) : (
                        <p className="text-excel-600">「校正する」ボタンをクリックしてください</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="border-excel-300 text-excel-700 hover:bg-excel-50"
                  >
                    戻る
                  </Button>
                  <Button
                    onClick={handleCorrection}
                    disabled={isProcessing}
                    className="bg-excel-600 hover:bg-excel-700"
                  >
                    {isProcessing ? "処理中..." : "校正する"}
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-excel-800">原文</h3>
                    <Textarea
                      value={originalText}
                      onChange={(e) => setOriginalText(e.target.value)}
                      className="min-h-[200px] border-excel-200 focus-visible:ring-excel-500"
                      readOnly
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-excel-800">校正後のテキスト</h3>
                    <Textarea
                      value={correctedText}
                      onChange={(e) => setCorrectedText(e.target.value)}
                      className="min-h-[200px] border-excel-200 focus-visible:ring-excel-500"
                    />
                    <div className="flex items-center mt-2 text-sm text-excel-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      AIによる校正が完了しました
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="border-excel-300 text-excel-700 hover:bg-excel-50"
                  >
                    戻る
                  </Button>
                  <Button
                    onClick={handleTranslation}
                    disabled={isProcessing}
                    className="bg-excel-600 hover:bg-excel-700"
                  >
                    {isProcessing ? "処理中..." : "翻訳する"}
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <Tabs defaultValue="all">
                  <TabsList className="mb-4 bg-excel-100">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-excel-600 data-[state=active]:text-white"
                    >
                      すべて
                    </TabsTrigger>
                    <TabsTrigger
                      value="english"
                      className="data-[state=active]:bg-excel-600 data-[state=active]:text-white"
                    >
                      英語
                    </TabsTrigger>
                    <TabsTrigger
                      value="chinese"
                      className="data-[state=active]:bg-excel-600 data-[state=active]:text-white"
                    >
                      中国語
                    </TabsTrigger>
                    <TabsTrigger
                      value="korean"
                      className="data-[state=active]:bg-excel-600 data-[state=active]:text-white"
                    >
                      韓国語
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="all">
                    <TranslationTable
                      originalText={originalText}
                      correctedText={correctedText}
                      showTranslations={showTranslations}
                    />
                  </TabsContent>
                  <TabsContent value="english">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2 text-excel-800">校正後のテキスト（日本語）</h3>
                          <Textarea
                            value={correctedText}
                            className="min-h-[200px] border-excel-200 focus-visible:ring-excel-500"
                            readOnly
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2 text-excel-800">英語翻訳</h3>
                          <Textarea
                            value="Our company is working on developing new products. We will continue to strive to improve customer satisfaction. Thank you for your continued support."
                            className="min-h-[200px] border-excel-200 focus-visible:ring-excel-500"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="chinese">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2 text-excel-800">校正後のテキスト（日本語）</h3>
                          <Textarea
                            value={correctedText}
                            className="min-h-[200px] border-excel-200 focus-visible:ring-excel-500"
                            readOnly
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2 text-excel-800">中国語翻訳</h3>
                          <Textarea
                            value="我们公司正在开发新产品。我们将继续努力提高客户满意度。感谢您的持续支持。"
                            className="min-h-[200px] border-excel-200 focus-visible:ring-excel-500"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="korean">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2 text-excel-800">校正後のテキスト（日本語）</h3>
                          <Textarea
                            value={correctedText}
                            className="min-h-[200px] border-excel-200 focus-visible:ring-excel-500"
                            readOnly
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2 text-excel-800">韓国語翻訳</h3>
                          <Textarea
                            value="저희 회사는 신제품 개발에 힘쓰고 있습니다. 앞으로도 고객 만족도 향상을 위해 노력하겠습니다. 감사합니다."
                            className="min-h-[200px] border-excel-200 focus-visible:ring-excel-500"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(3)}
                    className="border-excel-300 text-excel-700 hover:bg-excel-50"
                  >
                    戻る
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="border-excel-300 text-excel-700 hover:bg-excel-50">
                      <Save className="mr-2 h-4 w-4" />
                      保存
                    </Button>
                    <Button className="bg-excel-600 hover:bg-excel-700">
                      <Download className="mr-2 h-4 w-4" />
                      エクスポート
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

