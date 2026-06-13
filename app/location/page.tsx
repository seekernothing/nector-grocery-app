"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Location() {
  const router = useRouter();
  const [zone, setZone] = useState("");
  const [area, setArea] = useState("");

  function handleSubmit() {
    router.push("/login");
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <img
        src="/assets/images/background-blur.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="flex items-center px-4 py-4 z-10">
        <button
          onClick={() => router.push("/otp")}
          className="text-textDark cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="flex flex-col items-center px-6 pt-8 z-10">
        <div className="mb-6">
          <svg width="225" height="171" viewBox="0 0 225 171" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M222.942 157.113L172.513 90.9603C169.499 87.0079 164.819 84.6904 159.849 84.6904H64.8344C59.8652 84.6904 55.1845 87.0079 52.1709 90.9603L1.74603 157.113C-2.49497 162.677 1.47124 170.692 8.46935 170.692H216.219C223.217 170.688 227.183 162.673 222.942 157.113Z" fill="url(#paint0_linear_1_507)"/>
            <path d="M4.58542 157.25C3.25266 157.25 2.01609 157.644 0.976445 158.317C-1.91806 163.763 1.96571 170.687 8.46919 170.687H216.219C222.722 170.687 226.606 163.763 223.712 158.317C222.672 157.644 221.435 157.25 220.103 157.25H4.58542Z" fill="#C9CDD3"/>
            <path d="M90.697 118.71L126.778 157.25H112.03L80.0991 123.35L90.697 118.71Z" fill="white"/>
            <path d="M165.753 85.8355C163.898 85.0935 161.901 84.6951 159.854 84.6951H141.525L14.556 140.309L1.74601 157.113C1.54907 157.374 1.37504 157.639 1.21016 157.905L165.753 85.8355Z" fill="#FEE379"/>
            <path d="M1.21469 157.905L80.0992 123.349L112.03 157.25L1.21469 157.905Z" fill="#86ADFF"/>
            <path d="M14.556 140.309L141.525 84.6951H64.8343C59.8651 84.6951 55.1844 87.0125 52.1709 90.965L14.556 140.309Z" fill="#69CA9F"/>
            <path d="M190.516 114.579L186.619 109.468L162.876 119.846L141.131 96.6166L130.675 101.196L152.411 124.417L112.342 141.93L116.931 146.735L156.936 129.253L183.147 157.25H197.89L167.401 124.678L190.516 114.579Z" fill="#C9CDD3"/>
            <path opacity="0.3" d="M174.716 93.8503L172.513 90.9603C169.499 87.0079 164.819 84.6904 159.849 84.6904H112.342V121.018L174.716 93.8503Z" fill="url(#paint1_linear_1_507)"/>
            <path d="M106.915 0.364984C88.769 2.79234 74.8965 17.3336 73.2065 35.5616C72.0432 48.1015 76.7788 59.5604 84.9585 67.502C88.1095 70.5614 91.0361 73.8268 93.7199 77.2709C101.336 87.0399 106.553 98.4622 109.25 110.549L111.421 120.276C111.517 120.711 111.902 121.018 112.346 121.018C112.791 121.018 113.175 120.711 113.272 120.276L115.575 109.935C118.195 98.1828 123.219 87.0674 130.574 77.5366C133.199 74.1383 136.075 70.9369 139.221 67.992C146.874 60.8245 151.66 50.6296 151.66 39.3126C151.656 15.813 131.046 -2.86844 106.915 0.364984Z" fill="url(#paint2_linear_1_507)"/>
            <path d="M120.96 51.0233C125.719 46.264 125.719 38.5476 120.96 33.7882C116.2 29.0289 108.484 29.0289 103.725 33.7882C98.9652 38.5476 98.9652 46.264 103.725 51.0233C108.484 55.7826 116.2 55.7826 120.96 51.0233Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear_1_507" x1="17.5331" y1="71.1954" x2="179.757" y2="206.04" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F6F8FF"/>
                <stop offset="1" stopColor="#DEE0ED"/>
              </linearGradient>
              <linearGradient id="paint1_linear_1_507" x1="186.744" y1="62.9038" x2="104.836" y2="112.882" gradientUnits="userSpaceOnUse">
                <stop/>
                <stop offset="1"/>
              </linearGradient>
              <linearGradient id="paint2_linear_1_507" x1="123.587" y1="81.7789" x2="94.8421" y2="-14.9732" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5565EE"/>
                <stop offset="0.3091" stopColor="#5F75FF"/>
                <stop offset="0.5137" stopColor="#6E89FA"/>
                <stop offset="0.7638" stopColor="#6E89FA"/>
                <stop offset="1" stopColor="#7D99FD"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h1 className="text-[26px] font-semibold text-textDark mb-3">Select Your Location</h1>
        <p
          className="text-textGray text-center text-sm mb-16"
          style={{ width: 324, height: 101 }}
        >
          Swithch on your location to stay in tune with
          what's happening in your area
        </p>

        <div className="w-full flex flex-col gap-8 mb-8">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-textGray">Your Zone</label>
            <div className="relative">
              <input
                type="text"
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                placeholder="Maharshtra"
                className="w-full border-b border-gray-200 py-3 text-base text-textDark focus:outline-none focus:border-primary bg-transparent pr-8"
              />
              <ChevronDown size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-textGray" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-textGray">Your Area</label>
            <div className="relative">
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Pune"
                className="w-full border-b border-gray-200 py-3 text-base text-textDark placeholder:text-textGray focus:outline-none focus:border-primary bg-transparent pr-8"
              />
              <ChevronDown size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-textGray" />
            </div>
          </div>
        </div>

        <Button
          label="Submit"
          variant="primary"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
