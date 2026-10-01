export default function TestPage() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col relative w-[600px] h-[600px] bg-yellow-300 justify-center items-center">
                <div className="w-[100px] h-[100px] bg-red-600">
                </div>
                <div className="fixed right-10 bottom-10 w-[100px] h-[100px] bg-green-600">
                </div>
                <div className="absolute right-0 top-0 w-[100px] h-[100px] bg-blue-600">
                </div>
                <div className="w-[100px] h-[100px] bg-white">
                </div>
                <div className="w-[100px] h-[100px] bg-black">
                </div>

            </div>

        </div>
    )
}