
type Destination = {
    name:string 
    description: string
    distance: string
    travel: string
}
export default function DestinationLayout({name,description,distance,travel}: Destination) {
  return (
    <div className=" mt-7">
        <div className='text-white'>
            <p className="font-bellefair text-6xl text-center font-thin">{name}</p>
            <p className=" text-periwinkle text-center font-barlowCondensed font-thin">{description}</p>
            <div className=" border-white border-t mt-2 mx-6">
            <p className="flex flex-col justify-center items-center text-periwinkle font-barlowCondensed font-thin text-sm tracking-widest mt-8">
                AVG. DISTANCE 
                <span className="text-white font-bellefair text-3xl font-thin">{distance}</span>
            </p>
            <p className="flex flex-col justify-center items-center text-periwinkle font-barlowCondensed font-thin text-sm tracking-widest mt-8">
                EST. TRAVEL TIME
                <span className="text-white font-bellefair text-3xl font-thin">{travel}</span></p>
            </div>
        </div>
    </div>
  )
}
