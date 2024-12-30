 "use client"
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Footer from "@/components/ui/Footer"; 
import Header from "@/components/ui/Header";

export default function Home() {
  return ( <main> 
     <Header showViewAll={true} text="View All Items" />
    <div className="bg-[#F6F7F9] min-h-screen p-4 sm:p-6 lg:p-1 flex flex-col gap-0 font-[family-name:var(--font-geist-sans)]">
     
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-20">
      {/* Left Car Section */}
      <div className="flex-1 bg-customBlue shadow-md rounded-md p-6 flex flex-col justify-between">
         
        <h2 className="text-2xl font-bold mb-4 bg-customblue">The Best Platform for Car Rental</h2>
        <p className="text-gray-600 mb-6">
          Ease of doing car rental safely and reliably. Of course, at a low price.
        </p>
        <img 
        src="/image 7.png" 
          alt="Car"
          className="w-full h-auto mb-6"
        />
        <Link href={"/admin"}>
         <button  className="bg-blue-500 text-white py-2 px-9 rounded-lg hover:bg-blue-600 " 
        >   
          Rental Car
 
        </button >
        </Link>
         
       
      </div>
  
       {/* Right Car Section */}
       <div className="flex-1 bg-customeColor shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <h2 className="text-2xl font-bold mb-4">Easy Way to Rent a Car at a Low Price</h2>
        <p className="text-gray-600 mb-6">
          Providing cheap car rental services with safe and comfortable facilities.
        </p>
        <img 
        
          src="/image 8.png"
          alt="Car"
          className="w-auto h-auto mb-6"

        /><Link href="/admin"> <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" >
          Rental Car
        </button>
        </Link>
      </div> 
    </div> 
  );  
       
        <section>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Koenigsegg <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/image 7.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
                <Link href="/Detail"><button className="bg-[#3563e9] p-2 text-white rounded-md">
              
                Rent Now</button>
                </Link>
            </CardFooter>
          </Card>

         
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image 
                src={"/heart.lov.svg"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/image 8.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/Detail'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Rolls-Royce <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/Detail'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
              </CardFooter>
          </Card>

     
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/heart.lov.svg"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/image 8.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/Detail'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
              </CardFooter>
          </Card>
        </div>
      </section>


      <section className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car (1).png"} alt="car " width={220} height={68} />
              <Image src={"/Spesification (1).png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/Detail'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
              </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/heart.lov.svg"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car (2).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification (1).png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p> 
              <Link href={'/Detail'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
                         </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car (3).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification (1).png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
               <Link href={'/Detail'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/heart.lov.svg"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification (1).png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
               <Link href={'/Detail'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            
            </CardFooter>
          </Card>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Exclusive <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car (5).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification (1).png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p> 
              <Link href={'/Detail'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
             
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NEW MG ZS <Image src={"/heart.lov.svg"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car (6).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification (1).png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
           <Link href={"/Detail"}>     <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>  </Link>
              </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Excite <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/Car (7).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification (1).png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
               <Link href={'/Detail'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                New MG ZS<Image src={"/heart.lov.svg"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car(8).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification (1).png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p> 
               <Link href={'/Detail'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="button w-full text-center">
        <Link href={"/category"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  <Footer/>
    </main>
     
  );
}


 

 
