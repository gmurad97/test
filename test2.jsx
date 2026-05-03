import { memo } from "react";

const Testimonials = () => {
    const reviews = [
        { 
            text: "Customers have been overwhelmingly positive about our new product. One satisfied customer mentioned, 'I've been using this for a week now, and I'm amazed at the results! It's incredibly easy to use and has exceeded my expectations.'", 
            name: "Jimmy C. Bash", 
            handle: "@instagram", 
            img: "/assets/images/user/1.jpg" 
        },
        { 
            text: "Another customer commented, 'This product has truly made a difference in my daily routine. The quality is outstanding, and I appreciate the attention to detail. Highly recommend!'", 
            name: "Jenny C. Buch", 
            handle: "@instagram", 
            img: "/assets/images/user/2.jpg" 
        }
    ];

    return (
        <section className="section-b-space">
          <div className="custom-container container">
            <div className="row">
              <div className="col-12">
                <div className="title-1">
                  <p>Latest Testimonials<span></span></p>
                  <h3>Our Customer's Reviews</h3>
                </div>
              </div>
              <div className="col-12">
                <div className="row gy-4">
                  {reviews.map((review, idx) => (
                    <div key={idx} className="col-md-6">
                      <div className="testimonials-box">
                        <div className="customer-item">
                          <i className="fa-solid fa-quote-left"></i>
                          <div className="customer-box">
                            <p>{review.text}</p>
                          </div>
                        </div>
                        <div className="customer-img">
                          <img className="img-fluid" src={review.img} alt={review.name} onError={(e) => { e.target.src = "/assets/images/user/1.jpg"; }} />
                          <div>
                            <h5>{review.name}</h5>
                            <p>{review.handle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

Testimonials.displayName = "About.Testimonials";
export default memo(Testimonials);
