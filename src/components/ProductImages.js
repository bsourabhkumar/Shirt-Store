import React, { useState } from 'react'
import ImageModal from './ImageModal'
import './ProductImages.css'

const ProductImages = ({ images }) => {
  const [showImageModal, setShowImageModal] = useState(false)
  const [imageIndex, setImageIndex] = useState()
  const hideImageModalHandler = () => {
    setShowImageModal(false)
  }
  const showImageModalHandler = (e) => {
    setShowImageModal(true)
    setImageIndex(e.target.id)
  }
  return (
    <div className="wrapper">
      {showImageModal && (
        <ImageModal onClose={hideImageModalHandler} img={images[imageIndex]} />
      )}
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              id={index}
              src={image}
              alt="shirtImage"
              onClick={showImageModalHandler}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductImages
