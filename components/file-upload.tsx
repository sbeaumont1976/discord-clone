"use client"

import { X } from "lucide-react"
import Image from 'next/image'

import { UploadDropzone } from "@uploadthing/react"
import '@uploadthing/react/styles.css'

interface IFileUploadProps {
  onChange: (url?: string) => void
  value: string
  endpoint: "serverImage" | "messageFile"
}

export const FileUpload = ({ onChange, value, endpoint }: IFileUploadProps) => {

  const fileType = value?.split('.').pop()

  if(value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button type="button" onClick={() => onChange('')} className="bg-rose-500 text-white rounded-full absolute top-0 right-0 p-1 shadow-sm">
          <X className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <UploadDropzone 
      endpoint={endpoint}
      onClientUploadComplete={(res: any) => {
        onChange(res?.[0].url)
      }}
      onUploadError={(error: Error) => {
        console.log(error)
      }}
    />
  )
}