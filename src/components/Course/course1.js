import './course.css';
import ModalVideo1 from 'react-modal-video'
import React, {useState} from 'react'
import 'react-modal-video/css/modal-video.css';

function Course1() {
    const [isOpen4, setOpen4] = useState(false)
    const [isOpen5, setOpen5] = useState(false)
    return (<div className="">
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                        ✅ সার্ভারলেস ফ্রেমওয়ার্ক
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse"
                     aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> সার্ভারলেস ফ্রেমওয়ার্ক কি ?
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> সার্ভারলেস ফ্রেমওয়ার্ক কিভাবে কাজ করে ?
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> পাইথন দিয়ে সার্ভারলেস প্রজেক্টে একটি serverless.yml ফাইল তৈরি করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> সার্ভারলেসের মাধ্যমে ল্যাম্বডা ফাংশন এবং API গেটওয়ে ট্রিগার এড করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> কমান্ড এর মাধ্যমে লগ এক্সেস করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ব্যাসিক কমান্ড সম্পর্কে জানা
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                        ✅ CI/CD
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                     aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> CI কি এবং এর গুরুত্ব
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ইউনিট টেস্টিং এবং সুবিধা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> পাইথনে PEP8 কনভেনশন
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> Github একশন
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> Github এ একটি ট্রিগার যোগ করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> Github একশন ব্যবহার করে অটোম্যাটে CI
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> কিভাবে CI সর্বোচ্চ কোডিং স্ট্যান্ডার্ড এবং ওয়ার্কফ্লো নিশ্চিত করে
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> CD কি এবং এর গুরুত্ব
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
                                </i> ডায়নামোডিবির ডাটা রিড এবং রাইট করার capacity
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
                                </i> ডায়নামোডিবি পার্টিশন-কী এবং শর্ট-কী
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> গ্লোবাল এবং সেকেন্ডারি ইনডেক্সিং
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> Scan vs query
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ডায়নামোডিবি, ল্যাম্বডা ফাংশন এবং boto3
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
                                </i> শর্তসাপেক্ষ ডাটা রাইট করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> Postman দ্বারা API টেস্ট করা
                            </li>
                            <li>
                                <i>
                                    <svg viewBox="0 0 24 24" className="svg-font" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </i> ডায়নামোডিবির বিলিং বিবরণ
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
                                </i> Python স্ক্রিপ্ট দিয়ে ১০০০টি POST রিকোয়েস্ট তৈরি করতে পারবেন
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

export default Course1;