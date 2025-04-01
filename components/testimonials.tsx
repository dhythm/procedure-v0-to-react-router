import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "田中 健太",
      role: "マーケティング部長",
      company: "グローバル商事",
      avatar: "TK",
      content:
        "海外向けの資料作成が週に数回あり、毎回校正と翻訳に時間を取られていました。ExcelTranslatorのおかげで作業時間が70%削減され、本来の業務に集中できるようになりました。",
    },
    {
      name: "鈴木 美香",
      role: "国際営業担当",
      company: "テクノソリューション",
      avatar: "SM",
      content:
        "英語が得意でない私でも、自信を持って海外クライアントとコミュニケーションが取れるようになりました。校正機能で日本語の品質が上がり、翻訳の精度も向上しています。",
    },
    {
      name: "佐藤 雄一",
      role: "経営企画室",
      company: "未来工業",
      avatar: "SY",
      content:
        "月次レポートの多言語化が必須になり困っていたところ、このツールに出会いました。直感的な操作性と高い翻訳精度で、社内からの評価も上々です。",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-excel-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-excel-800">お客様の声</h2>
            <p className="max-w-[900px] text-excel-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ExcelTranslatorを導入したお客様からいただいた声をご紹介します
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full bg-white border-excel-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="bg-excel-200 text-excel-700">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-excel-800">{testimonial.name}</CardTitle>
                    <p className="text-sm text-excel-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-excel-700">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

