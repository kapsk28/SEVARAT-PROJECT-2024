import { useState } from "react";
import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: '../img/plumbpic.png',
        gif: '../img/plumbing.gif',
        name: 'plumbing'
    },
    {
        image: '../img/unpluggedpic.png',
        gif: '../img/unplugged.gif',
        name: 'electrician'
    },
    {
        image: '../img/chefpic.png',
        gif: '../img/chef.gif',
        name: 'chef'
    },
    {
        image: '../img/hacksawpic.png',
        gif: '../img/hacksaw.gif',
        name: 'carpenter'
    },
    {
        image: '../img/dusterpic.png',
        gif: '../img/duster.gif',
        name: 'maid'
    },
    {
        image: '../img/beardpic.png',
        gif: '../img/beard.gif',
        name: 'barber'
    }
]

const Category = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    // navigate 
    const navigate = useNavigate();

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div>
            <div className="flex flex-col mt-16">
                {/* main */}
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                    {/* category */}
                    <div className="flex">
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-16 lg:px-15">
                                    {/* Image */}
                                    <div 
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={() => navigate(`/category/${item.name}`)} 
                                        className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-stone-300 transition-all cursor-pointer mb-1 hover:bg-stone-500"
                                    >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag */}
                                            <img 
                                                src={hoveredIndex === index ? item.gif : item.image} 
                                                alt="img" 
                                                className="falt-icon" 
                                            />
                                        </div>
                                    </div>

                                    {/* Name Text */}
                                    <h1 className='text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase'>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style */}
            <style dangerouslySetInnerHTML={{ __html: `
                .hide-scroll-bar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none;
                }
                .falt-icon {
                    transition: transform 0.3s ease-in-out;
                }
                .falt-icon:hover {
                    transform: scale(1.1);
                }
            ` }} />
        </div>
    );
}

export default Category;
