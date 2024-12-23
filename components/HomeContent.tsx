"use client";

import "@/components/homeComponent.css";
import Image from "next/image";
import Link from "next/link";

export function HomeContent() {
  return (
    <div className="min-h-screen bg-[#0D0D0E]">
      <div className="upperDiv">
        <div className="center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Welcome</h1>
          <h3 className="text-[#6C757D]">ಸುಸ್ವಾಗತ - ようこそ</h3>
        </div>
      </div>
      <div className="centerDiv center">
        <div className="relative">
          <Link href="/">
            <Image
              src="/images/kunai-home.png"
              width={500}
              height={500}
              alt="Kunai"
              className={`
                absolute cursor-pointer
                top-[-70px] left-[-150px]
                md:top-[-140px] md:left-[-300px]
              `}
            />
          </Link>
          <Link href="/recommendations">
            <Image
              src="/images/kunai-rec.png"
              width={500}
              height={500}
              alt="Kunai"
              className={`
                absolute cursor-pointer
                top-[-70px] right-[-150px]
                md:top-[-140px] md:right-[-300px]
              `}
            />
          </Link>

          <Link href="/contact">
            <Image
              src="/images/kunai-contact.png"
              width={500}
              height={500}
              alt="Kunai"
              className={`
                absolute cursor-pointer
                bottom-[-70px] left-[-150px]
                md:bottom-[-140px] md:left-[-300px]
              `}
            />
          </Link>
          <Link href="/admin">
            <Image
              src="/images/kunai-admin.png"
              width={500}
              height={500}
              alt="Kunai"
              className={`
                absolute cursor-pointer
                bottom-[-70px] right-[-150px]
                md:bottom-[-140px] md:right-[-300px]
              `}
            />
          </Link>

          <Image
            src="/images/luffy.png"
            width={500}
            height={500}
            alt="Picture of Luffy"
          />
        </div>
      </div>
      <div className="lowerDiv">
        <div className="center">
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
            mangaluru anime club
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#6C757D]">
            ಮಂಗಳೂರು ಅನಿಮೆ ಕ್ಲಬ್ - マンガルル アニメ クラブ
          </p>
        </div>
      </div>
    </div>
  );
}
