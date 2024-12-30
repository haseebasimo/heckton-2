import Button from "@/components/ui/Button"
import { Card } from "@/components/ui/card"
import LocationSelector from "@/components/ui/locationSlector"
import { CARCARD } from "../CARCARD/CARCARD"
import Image from "next/image"


const carDetails: CARCARD[] = [
    {
        name: 'Nissan',
        currPrice: '$99.00/',
        oldPrice: '$200.00/',
        cardType: 'mobile',
        image: '/nisan.png',
        heart: true,
        carType: 'Sport',
        icons: true,
    },
    {
        name: 'Sportage',
        currPrice: '$99.00/',
        oldPrice: '$200.00/',
        cardType: 'mobile',
        image: '/jeep.png',
        heart: false,
        carType: 'Hatchback',
        icons: true,
    },
    {
        name: 'Rolls- Royce',
        currPrice: '$99.00/',
        oldPrice: '$200.00/',
        cardType: 'mobile',
        image: '/rollsroyce.png',
        heart: true,
        carType: 'Sedan',
        icons: true,
    },
    {
        name: 'Koenigsegg',
        currPrice: '$99.00/',
        image: '/car2.svg',
        carType: 'Manual',
        heart: false,
        icons: true,
        oldPrice: '$200.00/',
        cardType: 'mobile',
    }
]
const Category = () => {
    return (
        <div className="flex justify-between ">
            <div className="min-w-72 border-t hidden lg:flex flex-col p-6 gap-6">
                <div className="text-xs opacity-50">TYPE</div>

                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/checkbox.svg' alt="checkbox-icon" width={100} height={100} />
                    Sports <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/checkbox.svg' alt="checkbox-icon" width={100} height={100} />
                    SUV <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    MPV <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    Sedan <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    Coupe <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    Hatchback <span className="opacity-50">(12)</span>
                </div>

                <div className="text-xs opacity-50">CAPACITY</div>

                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/checkbox.svg' alt="checkbox-icon" width={100} height={100} />
                    2 Person <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    4 Person <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    6 Person <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/checkbox.svg' alt="checkbox-icon" width={100} height={100} />
                    8 Person <span className="opacity-50">(12)</span>
                </div>

                <div className="text-xs opacity-50">PRICE</div>


                <div className="flex gap-2 items-start flex-col">
                    <Image className="w-full" src='/seekbar.svg' alt="checkbox-icon" width={100} height={100} />
                    Max. $100.00
                </div>
            </div>
            <div className="md:px-16 px-6 py-8 bg-[#f6f7f9] w-full">
                <LocationSelector currentPage={'category'} />


                
                        


                <div className="flex justify-center mt-12">
                    <div className="flex w-full justify-center relative max-w-[1308px]">
                        <Button text='Show more car' classes='bg-blue-600' />
                        <div className="text-sm opacity-50 absolute right-0">120 cars</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Category