import { GeneralModal } from "@/types";

const Modal = ({ title, children }: GeneralModal) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <h4 className="font-sm modal-title">{title}</h4>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
