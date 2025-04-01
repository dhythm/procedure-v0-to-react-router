import { FileSpreadsheet } from "lucide-react"

interface FileUploadProps {
  className?: string
}

export function FileUpload({ className }: FileUploadProps) {
  return <FileSpreadsheet className={className} />
}

