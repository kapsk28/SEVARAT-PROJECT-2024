import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    // Password visibility state
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Password validation states
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasLowercase, setHasLowercase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);

    // Email validation states
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isEmailBlurred, setIsEmailBlurred] = useState(false);

    // Function to check email format
    const checkEmailFormat = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    /**========================================================================
     *                          User Signup Function 
    *========================================================================**/

    const userSignupFunction = async () => {
        // validation 
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required");
            return;
        }

        // Check if email format is valid
        if (!checkEmailFormat(userSignup.email) || !userSignup.email.endsWith('@gmail.com')) {
            setIsEmailValid(false);
            return;
        }

        // Check if all password criteria are met
        if (!(hasUppercase && hasLowercase && hasNumber)) {
            toast.error("Password must have one uppercase letter, one lowercase letter, and one number");
            return;
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user Reference
            const userReference = collection(fireDB, "user")

            // Add User Detail
            addDoc(userReference, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            })

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login')
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    // Function to handle email input change
    const handleEmailChange = (e) => {
        setUserSignup({
            ...userSignup,
            email: e.target.value
        });
        // Check email format only if it's blurred
        if (isEmailBlurred) {
            setIsEmailValid(checkEmailFormat(e.target.value) && e.target.value.endsWith('@gmail.com'));
        }
    };

    // Function to handle email input blur
    const handleEmailBlur = () => {
        setIsEmailBlurred(true);
        setIsEmailValid(checkEmailFormat(userSignup.email) && userSignup.email.endsWith('@gmail.com'));
    };

    // Function to handle password input change
    const handlePasswordChange = (e) => {
        setUserSignup({
            ...userSignup,
            password: e.target.value
        });
        // Check password criteria
        checkPasswordCriteria(e.target.value);
    };

    // Password strength indicator
    let passwordStrengthIndicator = '';
    if (userSignup.password.length < 6) {
        passwordStrengthIndicator = 'Weak';
    } else if (userSignup.password.length < 8) {
        passwordStrengthIndicator = 'Strong';
    } else {
        passwordStrengthIndicator = 'Very Strong';
    }

    // Function to check password criteria
    const checkPasswordCriteria = (password) => {
        const hasUpperCaseRegex = /[A-Z]/;
        const hasLowerCaseRegex = /[a-z]/;
        const hasNumberRegex = /\d/;
        
        setHasUppercase(hasUpperCaseRegex.test(password));
        setHasLowercase(hasLowerCaseRegex.test(password));
        setHasNumber(hasNumberRegex.test(password));
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="login_Form bg-blue-50 px-8 py-6 border border-blue-100 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-blue-500 '>
                        Signup
                    </h2>
                </div>
                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                name: e.target.value
                            })
                        }}
                        className='bg-grey-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-200'
                    />
                </div>
                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={userSignup.email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        className={`bg-grey-50 border ${isEmailBlurred ? (isEmailValid ? 'border-blue-200' : 'border-red-500') : 'border-blue-200'} px-2 py-2 w-96 rounded-md outline-none placeholder-blue-200`}
                    />
                    {isEmailBlurred && !isEmailValid && <p className="text-red-500 text-sm">Incorrect email id</p>}
                </div>
                {/* Input Three  */}
                <div className="mb-3 relative">
                    <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder='Password'
                        value={userSignup.password}
                        onChange={handlePasswordChange}
                        className='bg-grey-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-200 pr-10'
                    />
                    {/* Password visibility toggle */}
                    <button
                        className="bg-grey-100 border-1 border-blue-100 px-3 py-1 w-1 rounded-md fouc:outline-none placeholder-blue-200 pr-10"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                        {passwordVisible ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 4a1 1 0 011 1v1.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 6.586V5a1 1 0 011-1zm4.707 5.707a1 1 0 010 1.414l-9 9a1 1 0 01-1.414-1.414l9-9a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zM4 10a6 6 0 1012 0A6 6 0 004 10zm6-4a1 1 0 00-.707 1.707L10.293 8.5 8.646 6.854a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5A1 1 0 0014 5z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                    {/* Checkbox for password criteria */}
                    <div className="mt-2">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" checked={hasUppercase} disabled />
                            <span className="ml-2 text-gray-600">Uppercase letter</span>
                        </label>
                    </div>
                    <div className="mt-2">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" checked={hasLowercase} disabled />
                            <span className="ml-2 text-gray-600">Lowercase letter</span>
                        </label>
                    </div>
                    <div className="mt-2">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" checked={hasNumber} disabled />
                            <span className="ml-2 text-gray-600">Numeric Value</span>
                        </label>
                    </div>
                    {/* Password strength indicator */}
                    <div className="mt-3">
                        <span className="text-gray-600">Password Strength:</span>
                        <span className={`ml-2 font-semibold ${userSignup.password.length < 6 ? 'text-orange-500' : userSignup.password.length < 8 ? 'text-green-500' : 'text-red-500'}`}>{passwordStrengthIndicator}</span>
                    </div>
                </div>
                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className='bg-blue-400 hover:bg-blue-600 w-full text-white text-center py-2 font-bold rounded-md transition duration-300 ease-in-out transform hover:scale-105'
                    >
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-pink'>Have an account? <Link className=' text-blue-500 hover:text-blue-700 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    );
}

export default Signup;
