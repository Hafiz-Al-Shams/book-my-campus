import img1 from "../../../public/1.webp";
import img2 from "../../../public/2.webp";
import img3 from "../../../public/3.webp";
import img5 from "../../../public/4.webp";
import img4 from "../../../public/5.webp";
import img6 from "../../../public/6.webp";


const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pb-10 mx-auto flex flex-wrap">
                {/* Header */}
                <div className="w-full mb-6 flex flex-wrap">
                    <h1 className="lg:w-1/3 sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4 lg:mb-0">
                        Happy Happy Moments
                    </h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whether you’re stepping onto campus for the first time or walking across the stage in your cap and gown, remember that learning doesn’t stop with any diploma—it’s a lifelong journey. Embrace every challenge as a chance to grow, stay curious in all you do, and lean on your community for support. Your passion, resilience, and willingness to adapt will turn today’s lessons into tomorrow’s opportunities.
                    </p>
                </div>

                {/* Gallery */}
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                    {images.map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                            <img
                                src={img.src}
                                alt={`gallery-img-${index}`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
