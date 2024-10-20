
import qrCode from './assets/QRCode.png';

export default function CTA() {
    return (
          <div className="relative isolate overflow-hidden bg-primary px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 w-full">
         
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Keep Support Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              Contribute to purify and make it more worthy for the motherland and the sacred cow.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="https://www.youtube.com/@SarehNathaniaGochar"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
              
              </div>
            </div>
            <div className="relative items-center flex justify-center mx-24">
            <img src={qrCode} alt="qr code" className='h-80'/>
            </div>
          </div>
    )
  }
  