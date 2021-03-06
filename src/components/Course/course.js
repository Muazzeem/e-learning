import './course.css';
import ModalVideo1 from 'react-modal-video'
import React, {useState} from 'react'
import 'react-modal-video/css/modal-video.css';
import Course1 from "./course1";

export default function Course() {
    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)
    return (<div className="">
        <div className="mt-3 mt-sm-5 mb-4">
            <h1 className="about-content">কোর্স সিলেবাস</h1>
        </div>
        <div className="accordion mt-4" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                        ✅ সার্ভারলেস
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">

                        <ul>
                            <li>
                                <React.Fragment>
                                    <ModalVideo1 channel='youtube' isOpen={isOpen1}
                                                 videoId="B_m6JBTs4yo" onClose={() => setOpen1(false)}/>
                                    <i className="video-button" onClick={() => setOpen1(true)}>
                                        <svg viewBox="0 0 24 24" className="svg-font active"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9 7V15L16 11L9 7ZM21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.9 22.1 3 21 3ZM21 17H3V5H21V17Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </i><span className="video-button"
                                              onClick={() => setOpen1(true)}> সার্ভারলেস কি ?</span>
                                </React.Fragment>
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> এই ওয়েবসাইটের ব্লক ডায়াগ্রাম নিয়ে আলোচনা করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> সার্ভারলেস স্কেল কি এবং কিভাবে কাজ করে ?
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo">
                        ✅ ল্যাম্বডা
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <React.Fragment>
                                    <ModalVideo1 channel='youtube' isOpen={isOpen2}
                                                 videoId="B_m6JBTs4yo" onClose={() => setOpen2(false)}/>
                                    <i className="video-button" onClick={() => setOpen2(true)}>
                                        <svg viewBox="0 0 24 24" className="svg-font active"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9 7V15L16 11L9 7ZM21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.9 22.1 3 21 3ZM21 17H3V5H21V17Z"
                                                fill="currentColor"/>
                                        </svg>
                                    </i><span className="video-button"
                                              onClick={() => setOpen2(true)}> ল্যাম্বডা কি?</span>
                                </React.Fragment>
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা ফাংশন তৈরি
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> EC2 vs Lambda
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা ফাংশনের মেমোরী এবং সময় সীমা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা ইভেন্ট কি ?
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা log দেখা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা ফাংশন জন্য একটি টেস্ট পেলোড তৈরি করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> AWS কনসোল থেকে একটি ল্যাম্বডা ফাংশন চালানো
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা ফাংশনকে পারমিশন দেওয়ার জন্য IAM রোল তৈরি করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা async ইনভোকেশন
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা রিট্রাই পলিছি
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ডেড লেটার কিউ (DLQ) এবং এর ব্যবহার
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ফেল ফাংশনগুলির ইভেন্ট হতে ডেড লেটার কিউ (DLQ) তে রাখা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা কনকারেন্সি এবং কনকারেন্সি রিজারভেশন
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> পভিশন কনকারেন্সি রিজারভেশন
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডার সীমাবদ্ধতা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডার যে বিষয়গুলো সম্পর্কে সচেতন হতে হবে
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা নিয়ে সমস্যা সমাধান
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা বিলিং বিবরণ
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree">
                        ✅ API গেটওয়ে
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <React.Fragment>
                                    <ModalVideo1 channel='youtube' isOpen={isOpen3}
                                                 videoId="7LQhWEXDAck" onClose={() => setOpen3(false)}/>
                                    <i className="video-button" onClick={() => setOpen3(true)}>
                                        <svg viewBox="0 0 24 24" className="svg-font active"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9 7V15L16 11L9 7ZM21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.9 22.1 3 21 3ZM21 17H3V5H21V17Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </i><span className="video-button" onClick={() => setOpen3(true)}> API গেটওয়ে & REST API</span>
                                </React.Fragment>
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> একটি রিসোর্সে এবং API মেথড তৈরি করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> একটি API মেথড এর সাথে ল্যাম্বডা ফাংশান যোগ করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা প্রক্সি ইন্টিগ্রেশন
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা CORS এনাবল
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> API গেটওয়ে authorizer
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> Dev স্টেজিং এ API ডেপ্লয় করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> Postman দ্বারা API টেস্ট করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> কিভাবে API গেটওয়ে বিল করে থাকে ?
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Course1></Course1>
        </div>
    </div>
    )
}