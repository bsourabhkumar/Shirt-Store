import React from 'react'
import styles from './ModalImage.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />
}

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')
const ModalImage = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
      )}
    </>
  )
}

export default ModalImage
