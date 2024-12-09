import React from "react";

function Modal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = React.useRef();

  React.useEffect(() => {
    const closeModalOnOutsideClick = (e) => {
      const modal = modalRef.current;
      if (!modal) return;

      const clickedElement = e.target;
      const isClickedOutside = modal.contains(clickedElement) === false;
      if (!isClickedOutside) return;

      closeModal();
    };

    document.addEventListener("mousedown", closeModalOnOutsideClick);

    return () =>
      document.removeEventListener("mousedown", closeModalOnOutsideClick);
  }, []);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button data-testid="btn" onClick={openModal}>
        OPEN
      </button>
      {isOpen && (
        <div data-testid="modal" ref={modalRef}>
          <h2>CLICK OUTSIDE OF ME</h2>
        </div>
      )}
    </>
  );
}

export default Modal;
