function Carousel(params) {
  return (
    <section class="carousal_section">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/100/100/image/e1ee932a1e09d5ea.jpg?q=50"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/63c52aea7c13e26c.jpg?q=50"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/63c52aea7c13e26c.jpg?q=50"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Carousel;
