/* eslint-disable react/prop-types */
import React from 'react';
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const handleUPIPayment = () => {
        // Handle UPI payment logic here
        // For demonstration, let's redirect to an image
        window.location.href = "./../QR code.jpg";
    };

    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full mt-4 px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent hover:bg-blue-700 rounded-xl"
            >
                Pay via Cash
            </Button>
            <Button
                type="button"
                onClick={handleUPIPayment}
                className="w-full mt-4 px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent hover:bg-blue-700 rounded-xl"
            >
                Pay via UPI
            </Button>
            <Dialog open={open} handler={handleOpen} className="bg-blue-50">
                <DialogBody className="">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value
                                })
                            }}
                            placeholder='Enter your name'
                            className='bg-grey-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-600 placeholder-blue-300'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value
                                })
                            }}
                            placeholder='Enter your address'
                            className='bg-grey-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-600 placeholder-blue-300'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value
                                })
                            }}
                            placeholder='Enter your pincode'
                            className='bg-grey-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-600 placeholder-blue-300'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value
                                })
                            }}
                            placeholder='Enter your mobileNumber'
                            className='bg-grey-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-600 placeholder-blue-300'
                        />
                    </div>

                    <div className="">
                        <Button
                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 rounded-lg"
                        >
                            Buy now
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}

export default BuyNowModal;
