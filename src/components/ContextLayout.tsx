import { useEffect, useState } from "react"

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
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768;
    const med = 1024;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    function mediaQuery(){
        if(width < breakPoint) {
            return (
                <div className="mt-7">
        <div className='text-white'>
            <p className="font-bellefair text-6xl text-center font-thin">{name}</p>
            <p className=" text-periwinkle text-center font-barlowCondensed font-thin px-3 mt-3">{description}</p>
            <div className=" border-charcoal border-t mt-2 mx-6">
            <p className="uppercase flex flex-col justify-center items-center text-periwinkle font-barlowCondensed font-thin text-sm tracking-widest mt-8">
                AVG. DISTANCE 
                <span className="text-white font-bellefair text-3xl font-thin">{distance}</span>
            </p>
            <p className="uppercase flex flex-col justify-center items-center text-periwinkle font-barlowCondensed font-thin text-sm tracking-widest mt-8">
                EST. TRAVEL TIME
                <span className="text-white font-bellefair text-3xl font-thin">{travel}</span></p>
            </div>
        </div>
    </div>
            )
        } else if( width >= breakPoint && width < med ) {
            return (
                <div className="mt-7">
        <div className='text-white'>
            <p className="font-bellefair text-6xl text-center font-thin">{name}</p>
            <p className="text-periwinkle text-center font-barlowCondensed font-thin mt-5 px-20" >{description}</p>
            <div className=" border-transparent border-t mt-14 mx-6 flex justify-center items-center gap-16">
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
        } else {
            return (
            <div className="mt-10" style={{width:'600px'}}>
        <div className='flex flex-col'>
            <p className="font-bellefair text-6xl font-thin">{name}</p>
            <p className="text-periwinkle font-barlowCondensed font-thin mt-5" >{description}</p>
            <div className=" border-transparent border-t mt-14 mx-6 flex justify-center items-center gap-16">
            <p className="flex flex-col justify-start items-center text-periwinkle font-barlowCondensed font-thin text-sm tracking-widest mt-8">
                AVG. DISTANCE 
                <span className="text-white font-bellefair text-3xl font-thin">{distance}</span>
            </p>
            <p className="flex flex-col justify-center items-center text-periwinkle font-barlowCondensed font-thin text-sm tracking-widest mt-8">
                EST. TRAVEL TIME
                <span className="text-white font-bellefair text-3xl font-thin">{travel}</span></p>
            </div>
        </div>
    </div>)
        }
    }
    return (
        <div>
            {mediaQuery()}
        </div>
    )
}

export function CrewLayout({name,role,bio}: Crew){
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768;
    const med = 1024;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    function mediaQuery(){
        if(width < breakPoint) {
            return (
                <div className="mt-7">
                    <div className="text-center">
                        <p className="font-bellefair text-white opacity-50 text-xl font-thin uppercase">{role}</p>
                        <p className="font-bellefair uppercase text-white text-2xl font-thin mt-3">{name}</p>
                        <p className="font-barlowCondensed font-thin text-periwinkle text-base px-6 mt-6">{bio}</p>
                    </div>
                </div>
                )
        } else if( width >= breakPoint && width < med ) {
            return (
                <div className="mt-7">
                    <div className="text-center">
                        <p className=" font-bellefair text-white opacity-50 text-2xl font-thin uppercase">{role}</p>
                        <p className=" font-bellefair uppercase text-white text-3xl font-thin mt-3">{name}</p>
                        <p className=" font-barlowCondensed font-thin text-periwinkle text-base px-2 mt-4">{bio}</p>
                    </div>
                </div>
                )
        } else {
            return (
                <div className="mt-7">
                    <div className="text-start">
                        <p className="font-bellefair text-white opacity-50 text-2xl font-thin uppercase">{role}</p>
                        <p className="font-bellefair uppercase text-white text-5xl font-thin mt-3">{name}</p>
                        <p className="font-barlowCondensed font-thin text-periwinkle text-base mt-4 tracking-wider" style={{width:'400px'}}>{bio}</p>
                    </div>
                </div>
                )
        }
    }
    return (
    <div>
        {mediaQuery()}
    </div>
    )
}

export function TechnologyLayout({name,description}: Technology){
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768;
    const med = 1024;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    function mediaQuery(){
        if(width < breakPoint) {
            return (
                <div className="mt-2">
                    <div className="text-center">
                        <p className="text-white font-bellefair text-3xl font-thin uppercase">{name}</p>
                        <p className=" font-barlowCondensed font-thin text-periwinkle text-base px-2 mt-8">{description}</p>
                    </div>
                </div>
            )
        } else if( width >= breakPoint && width < med ) {
            return (
                <div className="mt-7">
                    <div className="text-center">
                        <p className="text-white font-bellefair text-3xl font-thin uppercase">{name}</p>
                        <p className=" font-barlowCondensed font-thin text-periwinkle text-base px-2 mt-4">{description}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="mt-7">
                    <div className="text-start" style={{width:'470px'}}>
                        <p className="text-white font-bellefair text-5xl font-thin uppercase">{name}</p>
                        <p className=" font-barlowCondensed font-thin text-periwinkle text-lg mt-8">{description}</p>
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            {mediaQuery()}
        </div>
    )
}

