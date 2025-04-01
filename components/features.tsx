import { FileSpreadsheet, CheckSquare, Edit, Languages, LayoutDashboard, Zap } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-excel-600" />,
      title: "Excelファイルアップロード",
      description: "Excelファイルをアップロードするだけで、テキストを自動的に取り込みます。",
    },
    {
      icon: <CheckSquare className="h-10 w-10 text-excel-600" />,
      title: "複数セル選択と一括処理",
      description: "複数のセルからテキストを選択し、一度に処理することができます。",
    },
    {
      icon: <Edit className="h-10 w-10 text-excel-600" />,
      title: "AI自動校正",
      description: "自然な日本語へのAI自動校正で、文章の品質を向上させます。",
    },
    {
      icon: <Languages className="h-10 w-10 text-excel-600" />,
      title: "多言語自動翻訳",
      description: "校正済テキストを英語・中国語・韓国語に自動翻訳します。",
    },
    {
      icon: <LayoutDashboard className="h-10 w-10 text-excel-600" />,
      title: "一括管理ダッシュボード",
      description: "原文・校正後・翻訳後を同時に確認できる直感的なダッシュボード。",
    },
    {
      icon: <Zap className="h-10 w-10 text-excel-600" />,
      title: "業務効率化",
      description: "手間のかかる校正作業と翻訳作業を一気に効率化します。",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-excel-800">主な機能</h2>
            <p className="max-w-[900px] text-excel-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ExcelTranslatorは校正と翻訳を一気に効率化する多彩な機能を提供します
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-excel-50 border-excel-200"
            >
              {feature.icon}
              <h3 className="text-xl font-bold text-excel-800">{feature.title}</h3>
              <p className="text-excel-700 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

