  const categoriesList = document.querySelector("ul#categories");
  const categoryItems = categoriesList.querySelectorAll("li.item");

  console.log(`Number of categories: ${categoryItems.length}`);

  categoryItems.forEach((category) => {
    const categoryTitle = category.querySelector("h2").textContent;
    const items = category.querySelectorAll("ul li");
    console.log(`Category: ${categoryTitle}`);
    console.log(`Number of items: ${items.length}`);
  });