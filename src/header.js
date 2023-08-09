function Header() {
  return (
    <nav class="navbar bg-body-tertiary header">
      <div class="container">
        <div class="logo-container">
          <div class="logo-title">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt=""
            />
          </div>
          <div class="logo-subtitle-container">
            <div class="logo-subtitle">
              <div>Explore</div>
              <div class="plus">Plus</div>
            </div>
            <div class="image-container">
              <img
                src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                alt="Bootstrap"
                width="30"
                height="24"
              />
            </div>
          </div>
        </div>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2 search_bar"
            type="search"
            placeholder="Search for products brand and more"
            aria-label="Search"
          />
          <button
            class="btn btn-light btn btn-outline-primary ml-2"
            type="submit"
          >
            Search
          </button>
        </form>
        <div class="header-content d-flex">
          <div class="header-text">Become a seller</div>
          <div class="header-text ml-5">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle text-white"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cart_container d-flex">
          <div class="cart_icon mr-2">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div class="cart_text">Cart</div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
