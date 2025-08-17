import faqData from "@/lib/faqData";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  return (
    <section className="py-8 bg-gray-50">
      <article className="w-[90%] bg-muted m-auto p-12 rounded-2xl">
        <h5 className="text-center font-bold mb-6" data-aos="fade-down">Popular questions</h5>
        <h2 className="text-center text-3xl font-bold mb-6"  data-aos="fade-up">
          Learn more about Chubi Crypto Merchant
        </h2>
        <p className="text-center font-semibold mb-8" data-aos="zoom-in">We accept 100+ cryptocurrencies around the world</p>
        <div className="max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <Accordion data-aos="fade-up" data-aos-delay={index * 100} key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </article>
    </section>
  );
}
