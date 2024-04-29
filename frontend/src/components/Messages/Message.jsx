
const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full"> 
                <img src="https://avatar.iran.liara.run/public/boy?username=John"
                />
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">
            Salam !
        </div>
        <div className="chat-footer opacity-50 txt btn-xs flex gap-1 items-center">
            2:15
        </div>
    </div>
  )
}

export default Message



// STARTER CODE
// const Message = () => {
//     return (
//       <div className="chat chat-end">
//           <div className="chat-image avatar">
//               <div className="w-10 rounded-full"> 
//                   <img src="https://avatar.iran.liara.run/public/boy?username=John"
//                   />
//               </div>
//           </div>
//           <div className="chat-bubble text-white bg-blue-500">
//               Salam !
//           </div>
//           <div className="chat-footer opacity-50 txt btn-xs flex gap-1 items-center">
//               2:15
//           </div>
//       </div>
//     )
//   }
  
//   export default Message