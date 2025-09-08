export default function Header({fun,name,age}) {
    return(
        <div className="rounded-xl bg-white p-10 text-sm/7 space-y-6">
            <h1 className="font-medium font-medium text-gray-900 bg-[#bada55] text-[22px] before:content-['']">Name : {name} Age: {age}</h1>
            <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800  sm:grid-cols-3 rounded-lg grid flex"
            onClick={()=>{
                fun();
            }}>
                Click Me
            </button>
            <h1>hello world!!</h1>
        </div>
    )
    
}