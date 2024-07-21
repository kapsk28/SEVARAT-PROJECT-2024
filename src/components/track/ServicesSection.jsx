const ServicesSection = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-5">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Services</h2>
                <div className="flex flex-wrap -m-4 text-center">
                    {/* Service 1: Chef */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-white shadow-md px-6 py-8 rounded-lg">
                            <svg className="text-green-500 w-12 h-12 mb-3 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.5 1.5c-1.77 0-3.33 1.17-3.83 2.87C8.14 4.13 7.58 4 7 4a4 4 0 00-4 4 4.01 4.01 0 003 3.87V19h13v-7.13c1.76-.46 3-2.05 3-3.87a4 4 0 00-4-4c-.58 0-1.14.13-1.67.37-.5-1.7-2.06-2.87-3.83-2.87m-.5 9h1v7h-1v-7m-3 2h1v5H9v-5m6 0h1v5h-1v-5M6 20v1a1 1 0 001 1h11a1 1 0 001-1v-1H6z" clipRule="evenodd" />
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-900">Chef</h3>
                            <p className="text-gray-600 mt-4">Book experienced chefs anytime and enjoy delicious meals in the comfort of your home.</p>
                        </div>
                    </div>

                    {/* Service 2: Home Cleaning */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-white shadow-md px-6 py-8 rounded-lg">
                            <svg className="text-blue-500 w-12 h-12 mb-3 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M19.36 2.72l1.42 1.42-5.72 5.71c1.07 1.54 1.22 3.39.32 4.59L9.06 8.12c1.2-.9 3.05-.75 4.59.32l5.71-5.72M5.93 17.57c-2.01-2.01-3.24-4.41-3.58-6.65l4.88-2.09 7.44 7.44-2.09 4.88c-2.24-.34-4.64-1.57-6.65-3.58z" clipRule="evenodd" />
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-900">Home Cleaning</h3>
                            <p className="text-gray-600 mt-4">Let us take care of your home cleaning needs, leaving your space spotless and fresh.</p>
                        </div>
                    </div>

                    {/* Service 3: Plumbing */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-white shadow-md px-6 py-8 rounded-lg">
                            <svg className="text-purple-500 w-12 h-12 mb-3 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.17 5.63l-2.11 2.15-2.15-2.15 4.26-4.22 3.52 3.51c1.17 1.17 1.17 3.08 0 4.27l-3.52-3.56M4.83 12.7L7 14.81l3.5-3.51-2.11-2.11-3.56 3.51m10.64-4.92L19 11.3l-1.42 1.4-.7-.7L6.23 22.59l-2.81-2.81 8.49-8.48-4.22-4.27L9.8 4.92l4.26 4.27 1.41-1.41z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l2 2 2-2m-2 2v-8" />
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-900">Plumbing</h3>
                            <p className="text-gray-600 mt-4">Our experienced plumbers are ready to tackle any plumbing issue in your home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
