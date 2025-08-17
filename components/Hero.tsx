import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-background py-8">
      <article className="w-[90%] m-auto flex flex-col md:flex-row bg-primary rounded-2xl">
        <div className="flex w-[100%] md:w-[65%] p-6 m-1 rounded-2xl relative overflow-hidden">
          <div className="w-[100%] md:w-[30%] md:block hidden">
            <Image
              src="/images/hero/hero icon effect.png"
              alt="Chubi illustration"
              fill
              className="object-contain object-left-bottom hidden scale-90 md:block"
          />
          </div>
          <div className="w-[100%] md:w-[70%] relative z-10 pb-10 md:pb-0">
              <h1 className="font-bold text-4xl md:text-4xl xl:text-6xl text-white text-center md:text-left">
                Trade Crypto 
                instantly 
                with Ease
              </h1><br />
              <p className="mt-4 text-white text-center md:text-left">Our App is available for download on:</p><br />
              <ul className="flex flex-row justify-center md:justify-start">
                <li className="me-2">
                    <a href="">
                        <Image
                          src="/images/hero/Apple Store download.png"
                          alt="App Store"
                          width={180} // fallback width for SEO/layout
                          height={60}
                          className="w-[140px] sm:w-[160px] md:w-[180px] h-auto"
                        />
                    </a>
                  </li>
                  <li className="ms-2">
                    <a href="">
                        <Image
                          src="/images/hero/Google Play Store download.png"
                          alt="Google Play"
                          width={180} // fallback width for SEO/layout
                          height={60}
                          className="w-[140px] sm:w-[160px] md:w-[180px] h-auto"
                        />
                    </a>
                  </li>
              </ul>
          </div>
          
           
        </div>

        <div className="w-[100%] md:w-[35%] px-10 md:p-6 m-1 rounded-2xl">
          <Image
              src="/images/hero/hero page illustration.png"
              alt="Chubi illustration"
              width={500} // fallback width for SEO/layout
              height={300}
              className="w-110 h-auto flex ms-auto"
          />
        </div>
      </article>
    </section>
  );
}