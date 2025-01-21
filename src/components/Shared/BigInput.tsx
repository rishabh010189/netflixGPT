import { forwardRef } from "react"
import BigInputProps from "../../interface/props/BigInputProps"

// const BigInput:React.FC<BigInputProps> = ({placeholder, type, ref}) => {
//   return (
//     <div className="relative mb-4">
//         <input ref={ref} type={type} className="bg-slate-600/80 h-14 rounded-md px-5 py-2 text-white w-full peer"/>
//         <span className="-z-20 absolute text-slate-50 left-6 peer-valid:top-3 peer-valid:text-xl peer-valid:left-5 peer-focus:text-sm peer-focus:top-0 peer-focus:left-5">{placeholder}</span>
//     </div>
//   )
// }

const BigInput = forwardRef<HTMLInputElement, BigInputProps>(({type, placeholder} , ref) => {
    return (
        <div className="relative mb-4">
            <input ref={ref} type={type} className="bg-slate-600/80 h-14 rounded-md px-5 py-2 text-white w-full peer"/>
            <span className="-z-20 absolute text-slate-50 left-6 peer-valid:top-3 peer-valid:text-xl peer-valid:left-5 peer-focus:text-sm peer-focus:top-0 peer-focus:left-5">{placeholder}</span>
        </div>
      )
})

export default BigInput