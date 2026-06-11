
export const WhatsAppFloat = () => {
  return (
    <>
      <style>
        {`
          @keyframes pulse-wa {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
            70% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }
          .animate-pulse-wa {
            animation: pulse-wa 2s infinite ease-out;
          }
        `}
      </style>
      <a 
        href="https://wa.me/59300000000" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-[20px] right-[20px] md:bottom-[30px] md:right-[30px] bg-[#25D366] text-white w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full flex justify-center items-center text-[35px] md:text-[40px] shadow-[0_10px_25px_rgba(37,211,102,0.4)] z-[1000] transition-all duration-300 animate-pulse-wa hover:scale-110 hover:bg-[#1EBE53] hover:animate-none"
      >
        <i className="ph-fill ph-whatsapp-logo"></i>
      </a>
    </>
  );
};