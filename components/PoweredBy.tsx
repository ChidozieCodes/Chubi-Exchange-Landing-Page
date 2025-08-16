import Image from "next/image";
export default function PoweredBy() {
  return (
    <section className="bg-background py-8">
      <article className="w-[90%] m-auto flex flex-col md:flex-row bg-primary rounded-2xl">
        <div className="w-full md:w-[65%] m-2 p-8 flex justify-center flex-col">
          <h3 className="text-white text-2xl font-bold mb-4 md:text-left text-center"> <span className="text-accent">Powered by</span> Chubi Crypto Merchant</h3>
          <p className="list-none text-white md:text-left text-center">
           Our platform allows Users to have free, safer and more trustworthy experiences  
          </p>
        </div>
        <div className="w-full md:w-[35%] m-2">
           <Image
              src="/images/other illustration.png"
              alt="Chubi illustration two"
              width={500} // fallback width for SEO/layout
              height={300}
              className="w-110 h-auto flex"
            />
        </div>
      </article>
    </section>
  );
}