import Navbar from './Nav'
import Carousel from './Carousel'
import Footer from './Footer'
import CTA from './CTA'
import item1 from './assets/item1.jpg'
import item2 from './assets/item2.jpg'
import item3 from './assets/item3.jpg'
import item4 from './assets/item4.jpg'
import item5 from './assets/item5.jpg'
import item6 from './assets/item6.jpg'

const images=[
  item1,
  item2,
  item3,
  item4,
  item5,
  item6]

function App() {

  return (
  <>
      <div className="h-svh bg-cover bg-center bg-no-repeat bg-cow">
          <Navbar/>
          <Carousel/>
      </div>
     <main className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
      <section className='mt-10 mb-20 relative overflow-hidden' id="videos">
          <div className="text-center "> 
              <h1 className="mt-4 text-3xl tracking-tight text-gray-900 sm:text-5xl text-primary">
                    Anand
                      <span className="relative whitespace-nowrap text-orange-400">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 418 42"
                          className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-300/70"
                          preserveAspectRatio="none"
                        >
                          <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                        </svg>
                        <span className="relative"> Videos</span>
                      </span>
                </h1>
          </div>
          <div className="elfsight-app-e6f0efec-c489-483f-a64b-d9d08e0be195 pt-6" data-elfsight-app-lazy/>
      </section>
      <CTA/>
      <section className="mt-10 mb-20 relative overflow-hidden " id="gallery">
            <div className="text-center ">
              <h1 className="mt-4 text-3xl tracking-tight text-gray-900 sm:text-5xl text-primary">
                Glimpse Of
                <span className="relative whitespace-nowrap text-orange-400">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-300/70"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  <span className="relative"> Anand</span>
                </span>
              </h1>
            </div>
            <div className="pt-6 mt-10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((item, index)=>
                  <div key={index+"item"} className='object-cover'>
                      <img className="aspect-square max-w-full rounded-lg object-cover" src={item} alt=""/>
                  </div>)}
                 
              </div>
            </div>
      </section>
      
    </main>
    {/* <section className='bg-primary'>
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8"><div className="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center"><div className="xl:w-0 xl:flex-1"><h2 className="text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl sm:leading-9">Get notified whenever we publish something new</h2><p className="max-w-3xl mt-3 text-lg leading-6 text-indigo-200" id="newsletter-headline">Sign up for our newsletter to stay up to date.</p></div><div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8"><form target="_blank" className="sm:flex" aria-labelledby="newsletter-headline" action="https://labnol.us1.list-manage.com/subscribe/post?u=f52af1b2d34e161675d992e00&amp;id=eb043dcd01" method="POST"><input name="MERGE0" aria-label="Email address" type="email" required="" className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400" placeholder="Enter your email"/><div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0"><button type="submit" className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400">Subscribe</button></div></form><p className="mt-3 text-sm leading-5 text-indigo-200">We will never spam. That's our promise .</p></div></div></div>
      </section> */}
    <Footer/>
    </>
  )
}

export default App
