// import React, { useEffect, useState, } from "react";
// import { Link } from "react-router-dom";
// import {ExamDataPopUp} from "./ExamDataPopUp";
// import { GrClose } from "react-icons/gr";
//
// export const PatientPopUp = ({ data, open, onClose }) => {
//     const [selectedPatientId, setSelectedPatientId] = useState(null);
//     const [showExamDataPopUp, setShowExamDataPopUp] = useState(false);
//
//     const [currentExam, setCurrentExam] = useState({});
//     const handleExamDataClose = () => setShowExamDataPopUp(false);
//
//     const [handlePatientPopUp, setHandlePatientPopUp] = useState();
//     const [handleExamDataPopUp, setHandleExamDataPopUp] = useState();
//     const [isOpen, setIsOpen] = useState(false);
//
//     // Function to group data by patient ID starts
//     const groupByPatientId = (data) => {
//         return data.reduce((acc, cur) => {
//         acc[cur._id] = acc[cur._id] || [];
//         acc[cur._id].push(cur);
//         return acc;
//         }, {});
//     };
//
//     const groupedData = groupByPatientId(data);
//     // Function to group data by patient ID ends
//
//     // Function to handle button click and set selected patient ID starts
//     const handleButtonClick = (_id) => {
//         setSelectedPatientId(_id);
//     };
//
//     // Function to clear selected patient ID starts
//     const handleCloseModal = () => {
//         setSelectedPatientId(null);
//     };
//
//     // Patient PopUp Starts
//     const handlePatientPopUpClick = (event) => {
//         event.preventDefault();
//         setIsOpen(false);
//         setHandlePatientPopUp(true);
//     };
//
//     const handleClosePatientPopUp = () => {
//         setHandlePatientPopUp(false);
//     };
//
//     const handleOpenPatientPopUp = () => {
//         setHandlePatientPopUp(true);
//     };
//     // Patient PopUp Ends
//
//     // Patient PopUp Starts
//     const handleExamDataPopUpClick = (event) => {
//         event.preventDefault();
//         setIsOpen(false);
//         setHandleExamDataPopUp(true);
//     };
//
//     const handleCloseExamDataPopUp = () => {
//         setHandleExamDataPopUp(false);
//     };
//
//     const handleOpenExamDataPopUp = () => {
//         setShowExamDataPopUp(true);
//     };
//
//     if (!open) return null;
//
//     return (
//         <div className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm ">
//             <div className=" relative bg-white rounded-xl shadow-lg overflow-y-auto h-3/5 md:h-2/5 w-5/6 2xl:w-3/4 ">
//                 <div className="flex items-center justify-end p-3">
//                     <button
//                     className="transform transition hover:translate-y-1 hover:scale-105 shadow-md shadow-[#060957] rounded-full text-gray-800 border-2 p-1.5 md:p-2 text-xs font-bold lg:text-sm 2xl:text-base"
//                     onClick={() => setSelectedPatientId(null)}
//                     //    onClick={onClose}
//                     >
//                     <GrClose className="" />
//                     </button>
//                 </div>
//
//                 <div className="flex justify-center items-center w-full pt-3 mb-3 md:pt-2 md:mb-3 lg:mb-4 xl:mb-6 2xl:mb-10 2xl:h-auto ">
//                     <table className="flex flex-col w-full justify-center items-center mt-2 xl:gap-y-2  2xl:gap-y-4 ">
//                     <thead className="">
//                         <tr className="flex flex-col items-center ">
//                         <th className="text-lg font-semibold  text-[#393939] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
//                             Patient ID
//                         </th>
//                         </tr>
//                     </thead>
//                     <tbody className="flex flex-col justify-center items-center w-full ">
//                         <tr className="">
//                         <td className="w-full text-center text-sm font-semibold whitespace-normal break-words text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
//                             {selectedPatientId}
//                         </td>
//                         </tr>
//                         <hr className="border-b-2 2xl:border-b-4 border-gray-200 w-11/12 mt-2 2xl:mt-6" />
//                     </tbody>
//                     </table>
//                 </div>
//
//                 <div className="flex justify-center items-center px-2 2xl:px-6 2xl:h-1/3">
//                     {groupedData[selectedPatientId].map((exams) => (
//                     <div
//                         key={exams._id}
//                         className=" border-gray-200 h-full w-full "
//                     >
//                         <div className="w-full 2xl:pb-16">
//                         <table className="flex flex-col items-center ">
//                             <thead className="w-full  2xl:mb-2">
//                             <tr className="grid grid-cols-6 text-center w-full ">
//                                 <th className="text-sm  font-medium text-gray-900  2xl:text-2xl">
//                                 Exams
//                                 </th>
//                                 <th className="text-sm font-medium text-gray-900  2xl:text-2xl">
//                                 Age
//                                 </th>
//                                 <th className="text-sm font-medium text-gray-900  2xl:text-2xl">
//                                 Sex
//                                 </th>
//                                 <th className="text-sm font-medium text-gray-900  2xl:text-2xl">
//                                 Zip Code
//                                 </th>
//                                 <th className="text-sm font-medium text-gray-900  2xl:text-2xl">
//                                 Weight
//                                 </th>
//                                 <th className="text-sm font-medium text-gray-900  2xl:text-2xl">
//                                 BMI
//                                 </th>
//                             </tr>
//                             </thead>
//                             <tbody className="w-full">
//                             <tr className=" grid grid-cols-6 text-center w-full whitespace-normal break-words">
//                                 <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
//                                 {exams.exams.sort().map(function (exam, index) {
//                                     return (
//                                     <>
//                                         <Link
//                                         onClick={() => {
//                                             setShowExamDataPopUp(true);
//                                             setCurrentExam({ exam: exam, index });
//                                         }}
//                                         >
//                                         <p className="text-sm text-blue-600 hover:font-bold hover:underline font-medium  md:text-lg lg:text-xl xl:text-2xl 2xl:mb-1 2xl:text-xl">
//                                             Exam {index + 1}
//                                         </p>
//                                         </Link>
//                                         <ExamDataPopUp
//                                         key={currentExam._id}
//                                         currentExam={currentExam}
//                                         examNum={currentExam.index + 1}
//                                         onClose={handleExamDataClose}
//                                         visible={showExamDataPopUp}
//                                         // closePatientCard={handleClosePatientCard}
//                                         />
//                                     </>
//                                     );
//                                 })}
//                                 </td>
//                                 <td className="text-sm font-medium text-gray-500  2xl:text-xl">
//                                 {exams.age}
//                                 </td>
//                                 <td className="text-sm font-medium text-gray-500  2xl:text-xl">
//                                 {exams.sex}
//                                 </td>
//                                 <td className="text-sm font-medium text-gray-500  2xl:text-xl">
//                                 {exams.zip}
//                                 </td>
//                                 <td className="text-sm font-medium text-gray-500  2xl:text-xl">
//                                 {exams.weight}
//                                 </td>
//                                 <td className="text-sm font-medium text-gray-500  2xl:text-xl">
//                                 {exams.bmi}
//                                 </td>
//                             </tr>
//                             </tbody>
//                         </table>
//                         </div>
//                     </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }
