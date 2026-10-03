import {useState } from "react"

export default function TestPage(){

    const [states ,setStatus ] =useState("Off")
    const [level, setLevel] = useState(1)
    
    
    return(
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">{states}</h1>
            <div className="w-75 h-[50px] flex justify-center items-center">
                <button onClick={
                    () => {setStatus("On")
                    alert("Turned on")
                    }
                    } className="p-2 text-white m-2 bg-green-500 hover:bg-green-600">Turn on</button>
                <button onClick={
                    () => {setStatus("Off")
                    alert("Turned off")
                    }
                    } className="p-2 text-white m-2 bg-red-500 hover:bg-red-600">Turn off</button>
                <button onClick={
                    () => {setStatus("Idle")
                    alert("Idle")}
                    } className="p-2 text-white m-2 bg-yellow-600 hover:bg-yellow-600">Idle</button>
            </div>
            <h1 className="text-3xl font-bold">{level}</h1>
            <div className="w-75 h-[50px] flex justify-center items-center">
                <button onClick={
                    ()=>{
                        setLevel(1);
                    }
                    } className="p-2 text-white m-2 bg-green-500 hover:bg-green-600">1</button>
                <button onClick={
                    ()=>{
                        setLevel(2);
                    }
                    } className="p-2 text-white m-2 bg-red-500 hover:bg-red-600">2</button>
                <button onClick={
                    ()=>{
                        setLevel(3);
                    }
                } className="p-2 text-white m-2 bg-yellow-600 hover:bg-yellow-600">3</button>
            </div>
        </div>
    )
}

// export default function TestPage() {
//     return (
//         <div className="w-full h-full">
//             <div className="w-[280px] h-[280px] bg-yellow-300 p-[10px] m-4">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima deserunt odit eligendi beatae libero eaque iste animi aut nostrum, repellat laudantium, non incidunt! Nobis libero ut consequuntur. Cupiditate, dolore sunt?
//             </div>
//             <div className="w-[280px] h-[280px] bg-yellow-300 p-[10px] m-4">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima deserunt odit eligendi beatae libero eaque iste animi aut nostrum, repellat laudantium, non incidunt! Nobis libero ut consequuntur. Cupiditate, dolore sunt?
//             </div>
//             <div className="w-[280px] h-[280px] bg-yellow-300 p-[10px]">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima deserunt odit eligendi beatae libero eaque iste animi aut nostrum, repellat laudantium, non incidunt! Nobis libero ut consequuntur. Cupiditate, dolore sunt?
//             </div>
//             <div className="w-[280px] h-[280px] bg-yellow-300 p-[10px]">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima deserunt odit eligendi beatae libero eaque iste animi aut nostrum, repellat laudantium, non incidunt! Nobis libero ut consequuntur. Cupiditate, dolore sunt?
//             </div>

//         </div>
//     )
// }

// Allignment and positions in css

// export default function TestPage() {
//     return (
//         <div className="w-full h-full">
//             <div className="flex flex-col relative w-[600px] h-[600px] bg-yellow-300 justify-center items-center">
//                 <div className="w-[100px] h-[100px] bg-red-600">
//                 </div>
//                 <div className="fixed right-10 bottom-10 w-[100px] h-[100px] bg-green-600">
//                 </div>
//                 <div className="absolute right-0 top-0 w-[100px] h-[100px] bg-blue-600">
//                 </div>
//                 <div className="w-[100px] h-[100px] bg-white">
//                 </div>
//                 <div className="w-[100px] h-[100px] bg-black">
//                 </div>

//             </div>

//         </div>
//     )
// }