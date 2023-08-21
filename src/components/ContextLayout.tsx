
type Destination = {
    name:string 
    description: string
    distance: string
    travel: string
}

type Crew = {
    name: string
    role:string
    bio: string
}

type Technology = {
    name:string
    description: string
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

export function CrewLayout({name,role,bio}: Crew){
    return (
    <div className="mt-7">
        <div className="text-center">
            <p className=" font-bellefair text-white opacity-50 text-2xl font-thin uppercase">{role}</p>
            <p className=" font-bellefair uppercase text-white text-3xl font-thin mt-3">{name}</p>
            <p className=" font-barlowCondensed font-thin text-periwinkle text-base px-2 mt-4">{bio}</p>
        </div>
    </div>
    )
}

export function TechnologyLayout({name,description}: Technology){
    return (
        <div className="mt-7">
            <div className="text-center">
                <p className="text-white font-bellefair text-3xl font-thin uppercase">{name}</p>
                <p className=" font-barlowCondensed font-thin text-periwinkle text-base px-2 mt-4">{description}</p>
            </div>
        </div>
    )
}

