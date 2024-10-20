import Navbar from './Nav'
import Carousel from './Carousel'
import Footer from './Footer'
import CTA from './CTA'

const images=[
  "https://scontent.fudr1-1.fna.fbcdn.net/v/t39.30808-6/441507151_122147876834193339_6759347503756173077_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=LNmaTDxgyJwQ7kNvgES4H3B&_nc_zt=23&_nc_ht=scontent.fudr1-1.fna&_nc_gid=AFxDCsrfN5uTL8duF1v7ZaS&oh=00_AYDkCmm8qunBMw9GrUJ4rxlE8BgZXfiVQg4s81gixPYssw&oe=671A8FE3",
  "https://scontent.fudr1-1.fna.fbcdn.net/v/t39.30808-6/423692390_122107104500193339_7489324886397860538_n.jpg?stp=c546.0.957.957a_dst-jpg_s552x414&_nc_cat=103&ccb=1-7&_nc_sid=50c75d&_nc_ohc=vcDpm28tWiEQ7kNvgFiyGs6&_nc_zt=23&_nc_ht=scontent.fudr1-1.fna&_nc_gid=AzQqpzRwUTH5GLkFbHsp3m7&oh=00_AYBEKjIxBTjdS6XRJoZDedwHldtpCaoknQvtG5RZPAQziQ&oe=671AA008",
  "https://scontent.fudr1-1.fna.fbcdn.net/v/t39.30808-6/428665696_122119885004193339_982216926098623815_n.jpg?stp=c546.0.957.957a_dst-jpg_s552x414&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_ohc=wb2mp1vOIc4Q7kNvgEZc4fj&_nc_zt=23&_nc_ht=scontent.fudr1-1.fna&_nc_gid=ATLu50bPEOCqdgZa-f4YFb9&oh=00_AYDVLUXF8NIt5KWHpp0AHXU0qtIdw9tQNP2OuZbxGbZtbA&oe=671AA90A",
  "https://scontent.fudr1-1.fna.fbcdn.net/v/t39.30808-6/421926230_7052903871454825_1120990758253962783_n.jpg?stp=c799.0.1399.1399a_dst-jpg_s552x414&_nc_cat=102&ccb=1-7&_nc_sid=50c75d&_nc_ohc=zonbOP9esjMQ7kNvgHOTSn4&_nc_zt=23&_nc_ht=scontent.fudr1-1.fna&_nc_gid=AzQqpzRwUTH5GLkFbHsp3m7&oh=00_AYDgIsr9YkhJn9O4Zz33Iq7OFSSdNs97xz5fIQEb1xxKpw&oe=671A8BA1",
  "https://scontent.fudr1-1.fna.fbcdn.net/v/t39.30808-6/423247961_122108729486193339_5473014471759984058_n.jpg?stp=dst-jpg_s552x414&_nc_cat=103&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=9ED1SMAJONoQ7kNvgFxj2CC&_nc_zt=23&_nc_ht=scontent.fudr1-1.fna&_nc_gid=AzQqpzRwUTH5GLkFbHsp3m7&oh=00_AYA1CtOFr4iabGxpcbMMhXvpFhw0D8gyZJd_2-QK7M7Ajw&oe=671AA9A0",
  "https://scontent.fudr1-1.fna.fbcdn.net/v/t39.30808-6/420127750_7052899694788576_6857767908725407799_n.jpg?stp=c799.0.1399.1399a_dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=7a06f5&_nc_ohc=5BtIWcANuPcQ7kNvgEO3ZW3&_nc_zt=23&_nc_ht=scontent.fudr1-1.fna&_nc_gid=AzQqpzRwUTH5GLkFbHsp3m7&oh=00_AYBA8obUfjyiaZ8_sFhmv9dl__rqZrfD287CTjmb9ATp5g&oe=671ABDC6"
]

function App() {

  return (
  <>
      <div className="h-svh bg-cover bg-center bg-no-repeat bg-cow">
          <Navbar/>
          <Carousel/>
      </div>
     <main className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
      <section className='mt-10 mb-20 relative overflow-hidden h-screen' id="videos">
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
      <section className="mt-10 mb-20 relative overflow-hidden h-screen" id="gallery">
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
                {images.map((item)=>
                  <div>
                      <img className="h-full max-w-full rounded-lg object-cover" src={item} alt=""/>
                  </div>)}
                 
              </div>
            </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default App
