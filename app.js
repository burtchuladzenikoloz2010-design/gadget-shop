const data = {
  p01: {
    name: "უსადენო ყურსასმენი",
    category: "აუდიო",
    description:
      "დახურული ყურსასმენი ხმაურის ჩახშობით. ერთი დატენვა — 30 საათი მუსიკა.",
    price: 249,
    rating: 4.7,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop",
  },
  p02: {
    name: "უსადენო ყურის ღილაკები",
    category: "აუდიო",
    description:
      "კომპაქტური ყუთი-დამტენით. წყალგამძლეა — ვარჯიშისთვისაც გამოდგება.",
    price: 129,
    rating: 4.4,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=450&fit=crop",
  },
  p03: {
    name: "ჭკვიანი საათი",
    category: "გაჯეტები",
    description:
      "პულსი, ნაბიჯები და შეტყობინებები მაჯაზე. ორი დღე მუშაობს ერთი დატენვით.",
    price: 699,
    rating: 4.8,
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=450&fit=crop",
  },
  p04: {
    name: "მსუბუქი ლეპტოპი",
    category: "კომპიუტერები",
    description:
      "14 დიუმიანი ეკრანი, 16 GB მეხსიერება და მხოლოდ 1,3 კგ — სასწავლად და სამუშაოდ.",
    price: 2899,
    rating: 4.6,
    stock: 3,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=450&fit=crop",
  },
  p05: {
    name: "პლანშეტი სტილუსით",
    category: "კომპიუტერები",
    description:
      "11 დიუმიანი ეკრანი და სტილუსი — ჩანაწერებისთვის, ხატვისა და ფილმებისთვის.",
    price: 1499,
    rating: 4.5,
    stock: 0,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=450&fit=crop",
  },
  p06: {
    name: "სმარტფონი",
    category: "ტელეფონები",
    description: "6,1 დიუმიანი ეკრანი, ორმაგი კამერა და 128 GB მეხსიერება.",
    price: 1899,
    rating: 4.6,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop",
  },
  p07: {
    name: "უსადენო კლავიატურა",
    category: "კომპიუტერები",
    description: "თხელი და მშვიდი. ერთდროულად სამ მოწყობილობას უკავშირდება.",
    price: 189,
    rating: 4.3,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=450&fit=crop",
  },
  p08: {
    name: "უსადენო მაუსი",
    category: "კომპიუტერები",
    description:
      "ერგონომიული ფორმა და ჩუმი ღილაკები. ერთ ბატარეაზე 6 თვე მუშაობს.",
    price: 79,
    rating: 4.2,
    stock: 0,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=450&fit=crop",
  },
  p09: {
    name: "სათამაშო ჯოისტიკი",
    category: "თამაშები",
    description: "ვიბრაციით და დამტენი კაბელით — კომპიუტერისა და კონსოლისთვის.",
    price: 219,
    rating: 4.7,
    stock: 9,
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=450&fit=crop",
  },
  p10: {
    name: "მყისიერი ფოტოაპარატი",
    category: "ფოტო",
    description:
      "სურათი გადაღებისთანავე იბეჭდება — წვეულებისა და მოგზაურობისთვის.",
    price: 349,
    rating: 4.5,
    stock: 6,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=450&fit=crop",
  },
  p11: {
    name: "დრონი კამერით",
    category: "ფოტო",
    description: "4K ვიდეო ჰაერიდან, 25 წუთი ფრენა და ავტომატური დაბრუნება.",
    price: 1299,
    rating: 4.4,
    stock: 2,
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=450&fit=crop",
  },
  p12: {
    name: "ქალაქის ზურგჩანთა",
    category: "აქსესუარები",
    description:
      "წყალგამძლე ქსოვილი და ცალკე განყოფილება 15 დიუმიანი ლეპტოპისთვის.",
    price: 159,
    rating: 4.6,
    stock: 14,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=450&fit=crop",
  },
};

console.log(data.p03.name, data.p03.price);

let sum = 0;
let count = 0;
let maxPrice = 0;
let maxName = "";

for (let key in data) {
  const product = data[key];

  console.log(product.name + " — " + product.price + " ₾");

  sum += product.price;
  count++;

  if (product.price > maxPrice) {
    maxPrice = product.price;
    maxName = product.name;
  }
}

console.log("საშუალო ფასი: " + (sum / count).toFixed(2) + " ₾");
console.log("ყველაზე ძვირი: " + maxName);

const catalog = document.querySelector("#catalog");

function renderCatalog(onlyInStock) {
  let html = "";

  for (let key in data) {
    const p = data[key];
    const soldOut = p.stock === 0;

    if (onlyInStock && soldOut) {
      continue;
    }

    html += `
      <div class="card ${soldOut ? "sold-out" : ""}">
        <div class="img-wrap">
          <img src="${p.image}" alt="${p.name}" />
          ${soldOut ? '<span class="badge">არ არის მარაგში</span>' : ""}
        </div>
        <div class="info">
          <span class="category">${p.category}</span>
          <h3>${p.name}</h3>
          <p class="description">${p.description}</p>
          <div class="bottom">
            <span class="price">${p.price} ₾</span>
            <span class="rating">★ ${p.rating}</span>
          </div>
        </div>
      </div>
    `;
  }

  catalog.innerHTML = html;
}

renderCatalog(false);

const btnAll = document.querySelector("#btn-all");
const btnStock = document.querySelector("#btn-stock");
const btnDiscount = document.querySelector("#btn-discount");

let onlyInStock = false;

btnAll.addEventListener("click", () => {
  onlyInStock = false;
  btnAll.classList.add("active");
  btnStock.classList.remove("active");
  renderCatalog(onlyInStock);
});

btnStock.addEventListener("click", () => {
  onlyInStock = true;
  btnStock.classList.add("active");
  btnAll.classList.remove("active");
  renderCatalog(onlyInStock);
});

let discountApplied = false;

btnDiscount.addEventListener("click", () => {
  if (discountApplied) {
    return;
  }

  for (let key in data) {
    data[key].price = Math.round(data[key].price * 0.9);
  }

  discountApplied = true;
  btnDiscount.disabled = true;
  btnDiscount.textContent = "ფასდაკლება გააქტიურებულია ✓";

  renderCatalog(onlyInStock);
});
