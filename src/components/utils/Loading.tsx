
const Loading = () => {

    return (
        <div className="absolute inset-0 bg-light-blue-100 bg-opacity-80 flex flex-col items-center justify-center z-50">
            <div className="w-16 h-16 border-4 border-t-transparent border-blue-800 rounded-full animate-spin mb-4"></div>
            <span className="text-blue-800 text-xl font-bold">Loading...</span>
        </div>

    )
}

export default Loading
