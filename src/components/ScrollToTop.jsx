// import { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";;

// // const ScrollToTop = () => {
// //     const gotoBtn = () => {
// //         window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
// //     }

// const ScrollToTop = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const toggleVisibility = () => {
//             setIsVisible(window.scrollY > 300);
//         };

//         window.addEventListener("scroll", toggleVisibility);
//         return () => window.removeEventListener("scroll", toggleVisibility);
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     return (
//         <>
//             {/* <Wrapper>
//                 <div className='top-btn' onClick={gotoBtn}>
//                     <FaArrowUp className="top-btn--icon" />
//                 </div>
//             </Wrapper> */}


//             <div>
//                 {isVisible && (
//                     <button onClick={scrollToTop} className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-800 transition">
//                         <FaArrowUp size={20} />
//                     </button>
//                 )}
//             </div>
//         </>
//     )

// }

// export default ScrollToTop




