import './course.css';
import ModalVideo1 from 'react-modal-video'
import React, {useState} from 'react'
import 'react-modal-video/css/modal-video.css';

export default function Course() {
    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)
    const [isOpen4, setOpen4] = useState(false)
    return (<div className="">
        <div className="about mt-3 mt-sm-5 mb-4">
            <h1>প্রিভিউ কন্টেন্ট</h1>
        </div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
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
                                </i> ল্যাম্বডা ইভেন্ট কি ?
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ল্যাম্বডা লগ অ্যাক্সেস করা
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
                                </i> ডেভ স্টেজিং এ API ডেপ্লয় করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> পোস্টম্যান দ্বারা API টেস্ট করা
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFour">
                       ✅ ডায়নামোডিবি
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingFour">
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <React.Fragment>
                                    <ModalVideo1 channel='youtube' isOpen={isOpen4}
                                                 videoId="7LQhWEXDAck" onClose={() => setOpen4(false)}/>
                                    <i className="video-button" onClick={() => setOpen4(true)}>
                                        <svg viewBox="0 0 24 24" className="svg-font active"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9 7V15L16 11L9 7ZM21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.9 22.1 3 21 3ZM21 17H3V5H21V17Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </i><span className="video-button" onClick={() => setOpen4(true)}> AWS ল্যামডা  থেকে ডায়নামোডিবি এক্সেস</span>
                                </React.Fragment>
                            </li>

                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ডায়নামোডিবি কি ?
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> একটি টেবিল তৈরি করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ম্যানুয়ালি রেকর্ড তৈরি করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ডায়নামোডিবি, ল্যাম্বডা ফাংশন এবং বোটো3
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> CRUD অপারেশন এবং ডায়নামোডিবি টেবিল
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> পোস্টম্যান দ্বারা API টেস্ট করা
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFive">
                        ✅ যে সব শিখতে পারবেন
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingFive">
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> API এ লোড এবং স্ট্রেস পরীক্ষা করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> python স্ক্রিপ্ট দিয়ে ১০০০টি POST রিকোয়েস্ট তৈরি করতে পারবেন
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> বিভিন্ন প্যারামিটার পরিবর্তন
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseSix">
                        ✅ এরপর কি
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingSix">
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> মাইক্রোসার্ভিস ডিজাইন করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> পর্যবেক্ষণ এবং লগিং
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> সার্ভারলেস স্কেল অন-ডিমান্ড কিভাবে পর্যবেক্ষণ করা যায়
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}