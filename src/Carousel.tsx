function Carousel() {
    return (
      <div className="carousel">
        <div className="list loop-scroll">
          <div className="item ">
            <img
              className="brightness"
              src="https://images.artfulcloud.com/13170_2203242w1500+v=202201081235/young-brahman.jpg"/>
            <div className="content">
              <div className="author">JAI GAU MATA</div>
              <div className="title">Jai Gau Mata Jai Gopal</div>
              <div className="des mt-5 ">
                <p className="text-2xl">त्वं माता सर्व देवानां त्वं च यज्ञस्य कारणम् | </p>
                <p className="text-2xl">त्वं तीर्थ सर्वतीर्थानां नमस्तेस्तु सदानधे ||</p>
                <p className="mt-5">हे पाप नाश करनेवाली! आप सभी देवताओं की माता हैं। आप ही यज्ञ का कारण हैं। </p>
                <p>सभी तीर्थों में आप सबसे पवित्र हैं। मैं आपको प्रणाम करता
                हूँ।</p>
              </div>
              <div className="buttons">
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Carousel;
  