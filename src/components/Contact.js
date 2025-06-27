import {CONTACT_LOGO} from "../Utils/constants";
const Contact = ()=>{
    return(
        <div>
        <div className="relative w-full h-[300]">
            <img src={CONTACT_LOGO} className="w-full mx-0 h-full  absolute "></img>
            <h1 className="absolute text-white flex w-full h-full justify-center items-center  text-5xl">We would love to hear from you!</h1>
        </div>
        <div className="flex w-full justify-around">
            <div className="">
             <div className="flex flex-col justify-between items-center">
                <select className="w-full m-4 p-4 border border-gray-400 text-gray-500 rounded-lg">
                    <option >How can we help you?</option>
                    <option>I need help with my Zomato online order.</option>
                    <option>There is a photo/review that is bothering me and I would like to report it.</option>
                    <option>I found incorrect/outdated information on a page.</option>
                    <option>I would like to give feedback/suggestions..</option>
                    <option>The website/app are not working the way they should.</option>
                    <option>Others</option>
                </select>
                <input placeholder="Full Name* " className="m-4 p-4 text-gray-500 w-full border border-gray-400 rounded-lg"></input>
                <input placeholder="Email Address* " className="m-4 p-4 text-gray-500 w-full border border-gray-400 rounded-lg"></input>
                <input placeholder="Mobile Number (Optionol) " className="m-4 p-4 text-gray-500 w-full border border-gray-400 rounded-lg"></input>
               <textarea placeholder="Type text*" className="w-full border border-gray-400 text-gray-200 h-56 m-4 p-4 rounded-lg"></textarea>
               <button className="w-1/3 bg-rose-500 font-semibold text-white border border-gray-200 m-4 p-4 rounded-lg">Submit feedback</button>
             </div>

            </div>
            <div>
                  <div className="w-96 h-52 rounded-lg shadow-lg border border-gray-200 my-16 p-2">
                    <h1 className="mx-4 p-4 text-gray-800 text-2xl">Report a Safety Emergency</h1>
                    <p className="mx-4 p-4 text-gray-400">We are committed to the safety of everyone using  MoodyBites.</p>
                    <button className="mx-8 text-red-700">Report</button>
                  </div>
                  <div className="w-96 h-52 rounded-lg shadow-lg   border border-gray-200 my-8 p-2">
                    <h1 className="mx-4 p-4 text-gray-800 text-2xl">Issue with your live order?</h1>
                    <p className="mx-4 p-4 text-gray-400">Click on the 'Support' or 'Online ordering help' section in your app to connect to our customer support team.</p>
                  </div>

            </div>
        </div>
        </div>
    )
}
export default Contact;