"use client"
import React from "react";
import Link from "next/link";
        export default function SideNavbar(){
          return (
            <div
              className="fixed top-0 left-0 z-50"
              style={{
                width: "176px", // Adjusting the width as specified
                height: "352px", // Height as per requirement
                padding: "32px 32px 32px 32px", // Consistent padding
                gap: "28px", // Space between categories
                opacity: 0, // Initially set opacity to 0 (change it to 1 to show the navbar)
                backgroundColor: "#f8f9fa", // Light background color for the sidebar
                overflowY: "auto", // Allow scrolling if the content overflows
              }}
            >
              {/* Category Section */}
              <div className="flex flex-col gap-6">
                {/* Type Section */}
                <div>
                    pp
                  <p className="font-bold text-lg text-gray-800">T Y P E</p>
        
                  {/* Category Items */}
                  <div className="flex flex-col mt-2 space-y-2">
                    <Link href="/sport" className="text-sm text-gray-600 hover:text-blue-500">
                      Sport (10)
                    </Link>
                    <Link href="/suv" className="text-sm text-gray-600 hover:text-blue-500">
                      SUV (12)
                    </Link>
                    <Link href="/mpv" className="text-sm text-gray-600 hover:text-blue-500">
                      MPV (16)
                    </Link>
                    <Link href="/sedan" className="text-sm text-gray-600 hover:text-blue-500">
                      Sedan (20)
                    </Link>
                    <Link href="/coupe" className="text-sm text-gray-600 hover:text-blue-500">
                      Coupe (14)
                    </Link>
                    <Link href="/hatchback" className="text-sm text-gray-600 hover:text-blue-500">
                      Hatchback (14)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        };
         
        
    