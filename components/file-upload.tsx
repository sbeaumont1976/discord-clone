"use client"

import { UploadDropzone } from "@uploadthing/react"
import '@uploadthing/react/styles.css'

interface IFileUploadProps {
  onChange: (url?: string) => void
  value: string
  endpoint: "serverImage" | "messageFile"
}

export const FileUpload = ({ onChange, value, endpoint }: IFileUploadProps) => {
  return (
    <UploadDropzone 
      endpoint={endpoint}
      onClientUploadComplete={(res: any) => {
        onChange(res?.[0].fileUrl)
      }}
      onUploadError={(error: Error) => {
        console.log(error)
      }}
    />
  )
}
