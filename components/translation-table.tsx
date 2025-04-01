import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface TranslationTableProps {
  originalText: string
  correctedText: string
  showTranslations: boolean
}

export function TranslationTable({ originalText, correctedText, showTranslations }: TranslationTableProps) {
  // Split text into sentences for better comparison
  const originalSentences = originalText
    .split("。")
    .filter((s) => s.trim() !== "")
    .map((s) => s + "。")
  const correctedSentences = correctedText
    .split("。")
    .filter((s) => s.trim() !== "")
    .map((s) => s + "。")

  // Make sure we have equal number of rows (use the longer array length)
  const rowCount = Math.max(originalSentences.length, correctedSentences.length)

  return (
    <div className="border rounded-md overflow-hidden border-excel-200">
      <Table>
        <TableHeader className="bg-excel-100">
          <TableRow>
            <TableHead className="w-[50px] text-excel-700">No.</TableHead>
            <TableHead className="text-excel-700">原文</TableHead>
            <TableHead className="text-excel-700">校正後</TableHead>
            <TableHead className="text-excel-700">英語</TableHead>
            <TableHead className="text-excel-700">中国語</TableHead>
            <TableHead className="text-excel-700">韓国語</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: rowCount }).map((_, i) => (
            <TableRow key={i} className={i % 2 === 0 ? "bg-excel-50" : "bg-white"}>
              <TableCell className="font-medium text-excel-700">{i + 1}</TableCell>
              <TableCell className="text-excel-700">{originalSentences[i] || ""}</TableCell>
              <TableCell className="text-excel-700">{correctedSentences[i] || ""}</TableCell>
              <TableCell>
                {showTranslations ? (
                  i === 0 ? (
                    "Our company is working on developing new products."
                  ) : i === 1 ? (
                    "We will continue to strive to improve customer satisfaction."
                  ) : (
                    "Thank you for your continued support."
                  )
                ) : (
                  <div className="h-4 w-full animate-pulse bg-excel-200 rounded"></div>
                )}
              </TableCell>
              <TableCell>
                {showTranslations ? (
                  i === 0 ? (
                    "我们公司正在开发新产品。"
                  ) : i === 1 ? (
                    "我们将继续努力提高客户满意度。"
                  ) : (
                    "感谢您的持续支持。"
                  )
                ) : (
                  <div className="h-4 w-full animate-pulse bg-excel-200 rounded"></div>
                )}
              </TableCell>
              <TableCell>
                {showTranslations ? (
                  i === 0 ? (
                    "저희 회사는 신제품 개발에 힘쓰고 있습니다."
                  ) : i === 1 ? (
                    "앞으로도 고객 만족도 향상을 위해 노력하겠습니다."
                  ) : (
                    "감사합니다."
                  )
                ) : (
                  <div className="h-4 w-full animate-pulse bg-excel-200 rounded"></div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

