import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const plans = [
    {
      name: "スタータープラン",
      price: "0",
      description: "個人や小規模チームに最適",
      features: [
        "月間10ファイルまで処理可能",
        "1ファイルあたり最大100セル",
        "基本的な校正機能",
        "英語への翻訳のみ",
        "7日間のデータ保存",
      ],
      cta: "無料で始める",
      popular: false,
    },
    {
      name: "ビジネスプラン",
      price: "9,800",
      description: "ビジネス利用に最適な機能を提供",
      features: [
        "月間100ファイルまで処理可能",
        "1ファイルあたり最大1,000セル",
        "高度な校正機能（パターン指定可）",
        "英語・中国語・韓国語への翻訳",
        "30日間のデータ保存",
        "優先サポート",
      ],
      cta: "14日間無料トライアル",
      popular: true,
    },
    {
      name: "エンタープライズプラン",
      price: "要問合せ",
      description: "大規模組織向けカスタマイズプラン",
      features: [
        "無制限のファイル処理",
        "無制限のセル数",
        "カスタム校正ルールの設定",
        "すべての言語対応",
        "無期限のデータ保存",
        "専任サポート担当者",
        "APIアクセス",
      ],
      cta: "お問い合わせ",
      popular: false,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-excel-800">料金プラン</h2>
            <p className="max-w-[900px] text-excel-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              あなたのニーズに合わせた最適なプランをお選びください
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${plan.popular ? "border-excel-500 shadow-md" : "border-excel-200"}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-excel-600 px-3 py-1 text-xs font-medium text-white">
                  人気
                </div>
              )}
              <CardHeader className={plan.popular ? "bg-excel-50" : ""}>
                <CardTitle className="text-excel-800">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-excel-700">¥{plan.price}</span>
                  {plan.price !== "要問合せ" && <span className="text-excel-600">/月</span>}
                </div>
                <CardDescription className="text-excel-600">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-excel-600" />
                      <span className="text-sm text-excel-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className={plan.popular ? "bg-excel-50" : ""}>
                <Link href="/dashboard" className="w-full">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    style={
                      plan.popular
                        ? { backgroundColor: "hsl(142, 76%, 36%)", color: "white" }
                        : { borderColor: "hsl(142, 72%, 80%)", color: "hsl(142, 76%, 36%)" }
                    }
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

