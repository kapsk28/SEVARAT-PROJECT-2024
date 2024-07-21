import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";

//Search data
const searchData =[
    {   name :'plumbing',
        image: 'https://i.pinimg.com/736x/d3/d3/36/d3d336cef679ad8c376b009d79613267.jpg'
    },
    {
        name:'electrician',
        image:'https://i.pinimg.com/236x/3d/58/fb/3d58fb15032a03129a0c8d529fe20d44.jpg'
    },
    {
        name:'chef',
        image:'https://i.pinimg.com/236x/1d/9f/52/1d9f52f5ddb2a47ee703c53d99bb2f24.jpg'
    },
    {
        name :'carpenter',
        image: 'https://i.pinimg.com/236x/25/00/81/250081f3a554addd5d759ec4c198c685.jpg'
    },
    {
        name :'barber',
        image: 'https://i.pinimg.com/236x/d1/44/c3/d144c3c6a69690892d878f46bc6e565a.jpg'
    },
    {
        name:'maid',
        image: 'https://i.pinimg.com/236x/66/65/b2/6665b261e4d3f2c64aac025bb2a172c9.jpg'
    },
]


const SearchBar = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context
    // Search State 
    const [search, setSearch] = useState("");

    // Filter Search Data
    const filterSearchData = getAllProduct.filter((obj) => obj.title.toLowerCase().includes(search)).slice(0,8)

    const navigate = useNavigate();

    return (
        <div className="">
            {/* search input  */}
            <div className="input flex justify-center">
                <input
                    type="text"
                    placeholder='Search here'
                    onChange={(e) => setSearch(e.target.value)}
                    className=' bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-pink '
                />
            </div>

            {/* search drop-down  */}
            <div className=" flex justify-center">
                {search && <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
                    {filterSearchData.length > 0 ?
                        <>
                            {filterSearchData.map((item, index) => {
                                return (
                                    <div key={index} className="py-2 px-2 cursor-pointer" onClick={() => navigate(`/productinfo/${item.id}`)}>
                                        <div className="flex items-center gap-2">
                                            <img className="w-10" src={item.productImageUrl} alt="" />
                                            {item.title}
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                        :
                        <>
                            <div className="flex justify-center">
                                <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                            </div>
                        </>}
                </div>
                }
            </div>
        </div>
    );
}

export default SearchBar;
