import CategoryContent from "./category-content";

function Categories(params) {
  return (
    <section class="categories_container d-flex justify-content-between container-fluid">
      {/* <div class="category_content">
        <div class="category_image">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/63c52aea7c13e26c.jpg?q=50"
            alt=""
          />
        </div>
        <div class="category_text">text</div>
      </div> */}
      <CategoryContent />
      <CategoryContent />
      <CategoryContent />
      <CategoryContent />
    </section>
  );
}

export default Categories;
