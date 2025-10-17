import lawyersData from "../data/lawyers.json";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const FeaturedLawyers = () => {
    const lawyers = Array.isArray(lawyersData)
        ? lawyersData
        : lawyersData.lawyers || [];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: "0px",
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    };


    return (
        <section className="py-4" style={{ backgroundColor: "#fafdf6" }}>
            <Container>
                <Slider {...settings}>
                    {lawyers.map((lawyer) => (
                        <div key={lawyer.id} className="lawyer-card">
                            <img
                                src={lawyer.image}
                                alt={lawyer.name}
                                className="rounded-circle"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    objectFit: "cover",
                                }}
                            />
                            <h6
                                className="fw-bold mb-1"
                                style={{ color: "#1a237e", fontSize: "1rem" }}
                            >
                                {lawyer.name}
                            </h6>
                            <p
                                className="mb-1"
                                style={{ color: "#333", fontSize: "0.9rem", minHeight: "22px" }}
                            >
                                {lawyer.specialty}
                            </p>

                            <div className="lawyer-stars">
                                {Array.from({ length: 5 }).map((_, i) =>
                                    i < Math.floor(lawyer.rating) ? (
                                        <FaStar key={i} color="#e0a106" size={14} />
                                    ) : i < lawyer.rating ? (
                                        <FaStarHalfAlt key={i} color="#e0a106" size={14} />
                                    ) : (
                                        <FaStar key={i} color="#ddd" size={14} />
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>

            </Container>
        </section>
    );
};

export default FeaturedLawyers;
