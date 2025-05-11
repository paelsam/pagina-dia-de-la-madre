"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog } from "@headlessui/react"
import { cn } from "@/lib/utils"

const defaultPhotos = [
  { src: "/collage_1.jpg", col: 2, row: 2 },
  { src: "/collage_4.jpg", col: 2, row: 2 },
  { src: "/collage_2.jpeg", col: 2, row: 2 },
  { src: "/collage_5.jpg", col: 2, row: 1 },
  { src: "/collage_6.jpg", col: 1, row: 1 },
  { src: "/collage_7.jpg", col: 1, row: 1 },
  { src: "/collage_3.jpg", col: 2, row: 1 },
  { src: "/collage_8.jpg", col: 2, row: 2 },
  { src: "/collage_9.jpg", col: 2, row: 2 },
  { src: "/collage_10.jpeg", col: 2, row: 2 },
  { src: "/collage_12.jpeg", col: 2, row: 2 },
  { src: "/collage_13.jpeg", col: 2, row: 2 },
  { src: "/collage_14.jpeg", col: 2, row: 2 },
  { src: "/collage_15.jpeg", col: 2, row: 2 },
  { src: "/collage_16.jpeg", col: 2, row: 2 },
  { src: "/collage_17.jpeg", col: 2, row: 2 },
  { src: "/collage_18.jpeg", col: 2, row: 2 },


]

export default function PhotoCollage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(300px,_1fr)] gap-1">
        {defaultPhotos.map((photo, index) => (
          <div
            key={index}
            className={cn(
              `relative group overflow-hidden rounded-lg border-4 cursor-pointer transition-all duration-300`,
              `col-span-${photo.col} row-span-${photo.row}`,
              index % 3 === 0 ? "border-pink-200" : index % 3 === 1 ? "border-purple-200" : "border-blue-200",
              "hover:border-pink-400"
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedImage(photo.src)}
          >
            <Image
              src={photo.src}
              alt={`Foto ${index + 1}`}
              fill
              className={cn("object-cover transition-transform duration-500", hoveredIndex === index && "scale-110")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-medium">Recuerdo especial</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        {selectedImage && (
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-contain"
            />
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white text-xl">✕</button>
          </div>
        )}
      </Dialog>
    </>
  )
}
