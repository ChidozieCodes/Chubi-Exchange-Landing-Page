import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
        <footer className="bg-white">
      <div className="w-[90%] m-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4"  data-aos="fade-up">CHUBi</h3>
            <p className="text-gray-600 text-sm">Buy and Sell Crypto easily anytime, anywhere.</p>
            <div className="flex space-x-3 mt-4" 
            data-aos="fade-up"
            data-aos-delay="200">
              {/* Social media icons would go here */}
              <div className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full">
                 <Link href="/" className="">
                    <Image
                      src="/icons/facebook.png"
                      alt="Facebook Logo"
                      width={150} // fallback width for SEO/layout
                      height={50}
                      className="w-[80px] h-auto sm:w-[120px] md:w-[150px]"
                    />
                  </Link>
              </div>
              <div className="w-6 h-6 bg-gray-300 rounded-full">
                <Link href="/" className="">
                    <Image
                      src="/icons/telegram.png"
                      alt="Telegram Logo"
                      width={150} // fallback width for SEO/layout
                      height={50}
                      className="w-[80px] h-auto sm:w-[120px] md:w-[150px]"
                    />
                  </Link>
              </div>
              <div className="w-6 h-6 bg-gray-300 rounded-full">
                 <Link href="/" className="">
                    <Image
                      src="/icons/twitter.png"
                      alt="Twitter Logo"
                      width={150} // fallback width for SEO/layout
                      height={50}
                      className="w-[80px] h-auto sm:w-[120px] md:w-[150px]"
                    />
                  </Link>
              </div>
              <div className="w-6 h-6 bg-gray-300 rounded-full">
                 <Link href="/" className="">
                    <Image
                      src="/icons/youtube.png"
                      alt="Youtube Logo"
                      width={150} // fallback width for SEO/layout
                      height={50}
                      className="w-[80px] h-auto sm:w-[120px] md:w-[150px]"
                    />
                  </Link>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div>
            {/* Intentionally left blank to create space like in the design */}
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Service Policy</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Sell Crypto</a></li>
              <li><a href="#" className="hover:underline">Buy Crypto</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-200 pt-6">
          Chubi Crypto Merchant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}