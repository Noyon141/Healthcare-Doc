"use client";

import { convertFileToUrl } from "@/lib/utils";
import { Upload } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploaderProps {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
}
const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    onChange(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="flex flex-col gap-3 lg:gap-5 items-center rounded-lg border-2 border-dashed border-green-400/[.5] cursor-pointer p-3 text-center"
    >
      <p className="text-green-400">Click to upload</p>
      <input {...getInputProps()} />
      {files && files.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          alt="uploaded image"
          width={1000}
          height={1000}
          className="max-h-44 w-[50%] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Upload className="text-green-400" size={25} />
        </>
      )}
      {isDragActive ? (
        <p className="text-sm font-thin tracking-wider text-white/[0.6]">
          Upload the scanned copy of document
        </p>
      ) : (
        <p className="text-sm font-thin tracking-wider text-white/[0.6]">
          Drag 'n' drop the scanned copy of document here, or click to select
          files
        </p>
      )}
    </div>
  );
};

export default FileUploader;
