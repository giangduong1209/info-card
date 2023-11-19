import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  PhoneCallIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#4b6cb7] to-[#182848]">
      <div>
        <div className="bg-black w-80 h-96 rounded-2xl shadow-lg">
          <div className="p-6">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="relative rounded-full">
                <Image
                  src="/avatar.jpg"
                  alt="avatar"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div className="absolute h-full w-full top-0 rounded-full border-4 border-blue-400 animate-spin"></div>
              </div>
              <h1 className="font-semibold text-xl text-white">Tran Thuy</h1>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex gap-2">
                <PhoneCallIcon />
                <a href="tel:+84376187961" className="text-white">
                  (+84) 376 187 961
                </a>
              </div>
              <div className="flex gap-2">
                <Mail />
                <a href="mailto:" className="text-white">
                  tranthanhthuy@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-3 relative">
            <div className="absolute bottom-[0.58rem] h-[1px] w-full bg-white z-10"></div>
            <h2 className="relative text-center font-semibold z-20 w-20 bg-black mx-auto text-white">
              Socials
            </h2>
          </div>
          <div className="flex justify-center items-center gap-3 mt-3">
            <Link href="https://www.facebook.com/Dev.Thuy.IT" target="_blank">
              <Facebook className="text-white" />
            </Link>
            <Link href="/" target="_blank">
              <Instagram className="text-white" />
            </Link>
            <Link href="/" target="_blank">
              <Linkedin className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
