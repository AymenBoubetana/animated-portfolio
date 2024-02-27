import {motion} from "framer-motion";
const Buttontoggle = ({ setOpen, isOpen }) => { // Destructure setOpen from props
  return (
    <button onClick={() => setOpen(prev => !prev)}>
     <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ cursor: 'pointer' }}
      >
        {isOpen ? (
          <path d="M18 6L6 18M6 6l12 12" />
        ) : (
          <path d="M3 12h18M3 6h18M3 18h18" />
        )}
      </svg>
    </button>
  );
};

export default Buttontoggle;
