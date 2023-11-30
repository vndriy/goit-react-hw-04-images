import Modal from 'react-modal';
import css from './Modal.module.css';

Modal.setAppElement('#root');

export const ModalWindow = ({ largeImg, modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={largeImg} alt="" />
    </Modal>
  );
};
