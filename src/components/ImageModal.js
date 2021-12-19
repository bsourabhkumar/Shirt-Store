import React from 'react'
import ModalImage from '../UI/ModalImage'
import classes from './ImageModal.module.css'

const ImageModal = (props) => {
  return (
    <div>
      <ModalImage onClose={props.onClose}>
        <button onClick={props.onClose}>
          <h5>X</h5>
        </button>
        <img
          className={classes['img-modal']}
          src={props.img}
          alt="modal-productImg"
        />
      </ModalImage>
    </div>
  )
}

export default ImageModal
