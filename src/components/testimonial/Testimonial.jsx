/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    // Testimonial data
    const testimonials = [
        {
            name: "RUPEN KUMAR",
            profile: "CEO OF MICROSOFT",
            image: "../img/Rupen.jpg",
            content: "I was dreading calling a plumber for my clogged drain, but Sevarat made the process so easy. They arrived promptly, identified the issue quickly, and had everything running smoothly again in no time. 10/10!",
        },
        {
            name: "SAKSHAM R KAPOOR",
            profile: "CEO OF GOOGLE",
            image: "../img/me.jpg",
            content: "I've had some bad experiences with home service providers in the past, but Sevarat restored my faith! Their team was punctual, courteous, and got the job done right the first time. Thank you!",
        },  
        {
            name: "UJJWAL",
            profile: "CEO OF TESLA",
            image: "../img/ujjwal.jpg",
            content: "Reliable and quality service from Sevarat. Attention to detail and professionalism exceeded my expectations.",
        }
    ];

    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-pink' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonials */}
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center bg-gray-300 p-6 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out">
                                    <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={testimonial.image} />
                                    <div className="flex justify-center mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 fill-current animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 0l2.79 6.84L20 7.5l-5.64 4.46L15 20l-5-4.09L5 20l1.64-8.5L0 7.5l7.21-.66L10 0z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="leading-relaxed">{testimonial.content}</p>
                                    <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">{testimonial.name}</h2>
                                    <p className="text-gray-500">{testimonial.profile}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial;
