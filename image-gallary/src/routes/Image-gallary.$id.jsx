import { createFileRoute, useParams } from '@tanstack/react-router'
import { picSumApi } from '../service/picSumApi'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/Image-gallary/$id')({
  component: fullViewImage,
})

function fullViewImage() {
  const { id } = useParams()
  console.log(id, 'this is id from route');
  const [fullImage, setFullImage] = useState(null)

  useEffect(() => {
    const loadImage = async () => {
      try {
        const data = await picSumApi() 
        const image = await data.find((image) =>parseInt(image.id) === parseInt(id))
        setFullImage(image)
      } catch (error) {
        console.log(error, 'error while fetching images')
      }
    }
    loadImage()
  }, [id])



  return (
    <>
      <div className="relative">
        <img
          src={fullImage?.download_url}
          alt={fullImage?.author}
          className="w-full h-auto max-h-[600px] object-cover"
        />
      </div>
    </>
  )
}