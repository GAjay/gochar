import logo from "./assets/logo.svg";

const Footer = () => (
<div className="w-full max-w-7xl mx-auto px-6 sm:px-4 lg:px-2 border-t border-gray-200">
            <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-between py-8 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                    <a href="#" className="py-1.5 px-0.5">
                     <img src={logo} alt="logo"/>
                    </a>

                </div>
                <p className="font-normal text-sm leading-6 text-gray-900">© 2024 Pagedone. All rights reserved.</p>
                <div className="flex items-center gap-4 ">
                <a href="https://www.facebook.com/people/सरेह-नथानिया-गौचर-बीकानेर/61555800189887/" className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                        <svg className="w-[0.938rem] h-[1.625rem]" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z" fill="currentColor"/>
                            </svg>
                            
                    </a>
                    <a href="https://www.youtube.com/@SarehNathaniaGochar" className="block  text-gray-900 transition-all duration-500 hover:text-red-600 ">
                        <svg className="w-[1.875rem] h-[1.375rem]" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3106 1.27838C27.5782 1.62071 28.5745 2.61957 28.9113 3.88573C29.524 6.18356 29.524 10.9809 29.524 10.9809C29.524 10.9809 29.524 15.7782 28.9113 18.076C28.5698 19.3469 27.5735 20.3457 26.3106 20.6834C24.0186 21.2977 14.8226 21.2977 14.8226 21.2977C14.8226 21.2977 5.63122 21.2977 3.33456 20.6834C2.06695 20.3411 1.07063 19.3422 0.73385 18.076C0.121094 15.7782 0.121094 10.9809 0.121094 10.9809C0.121094 10.9809 0.121094 6.18356 0.73385 3.88573C1.07531 2.61488 2.07162 1.61602 3.33456 1.27838C5.63122 0.664062 14.8226 0.664062 14.8226 0.664062C14.8226 0.664062 24.0186 0.664062 26.3106 1.27838ZM19.5234 10.9809L11.885 15.403V6.55872L19.5234 10.9809Z" fill="currentColor"/>
                            </svg>
                            
                    </a>
                    
                </div>
            </div>
            <div className="flex item-center justify-between pt-6 md:flex-row flex-col">
                <div className="block xl:max-w-[900px] lg:max-w-[700px] md:max-w-[500px] pb-5 md:pb-0">
                    <p className="text-gray-900 text-xs text-center md:text-left"><a href="tel:9828592885" className="text-indigo-600">Developed By</a> Ajay Kumar Maheshwari
                    </p>
                </div>
                <div className=" flex items-center justify-center gap-2">
                    <p className="font-normal text-sm text-gray-900">Crafted with</p>
                    <img src="https://pagedone.io/asset/uploads/1699268349.png" alt="image"/>
                    <span className="font-normal text-sm text-gray-900">in Bikaner</span>
                </div>
            </div>
        </div>
                                        
  );
  
  export default Footer