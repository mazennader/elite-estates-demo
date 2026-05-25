/* =========================
   FAKE PROPERTIES
========================= */

const properties = [
    {
      id: 1,
      title: "Modern Villa with Pool",
      location: "Beverly Hills, CA",
      price: "$850,000",
      type: "sale",
      beds: 4,
      baths: 3,
      area: "320m²",
      parking: 2,
      featured: "Yes",
      images: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1600&auto=format&fit=crop"
      ],
      description:
        "Stunning modern villa featuring contemporary architecture, high-end finishes, and a beautiful swimming pool. Perfect for families seeking luxury living in an exclusive neighborhood."
    },
    {
      id: 2,
      title: "Contemporary Family Home",
      location: "Manhattan, NY",
      price: "$3,500/mo",
      type: "rent",
      beds: 3,
      baths: 2,
      area: "180m²",
      parking: 1,
      featured: "Yes",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop"
      ],
      description:
        "Elegant family home in a premium neighborhood with spacious rooms, modern architecture, and beautiful natural lighting."
    },
    {
      id: 3,
      title: "Luxury Estate with Garden",
      location: "Miami Beach, FL",
      price: "$1,200,000",
      type: "sale",
      beds: 5,
      baths: 4,
      area: "450m²",
      parking: 3,
      featured: "Yes",
      images: [
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop"
      ],
      description:
        "Large luxury estate featuring a private garden, pool area, premium interior design, and spacious family areas."
    },
    {
      id: 4,
      title: "Elegant Downtown Apartment",
      location: "San Francisco, CA",
      price: "$2,800/mo",
      type: "rent",
      beds: 2,
      baths: 2,
      area: "120m²",
      parking: 1,
      featured: "No",
      images: [
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop"
      ],
      description:
        "Modern downtown apartment with amazing city views, clean interiors, and a practical layout for comfortable living."
    },
    {
      id: 5,
      title: "Coastal Modern Residence",
      location: "Malibu, CA",
      price: "$2,200,000",
      type: "sale",
      beds: 6,
      baths: 5,
      area: "520m²",
      parking: 4,
      featured: "Yes",
      images: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1600&auto=format&fit=crop"
      ],
      description:
        "Stunning coastal residence with open spaces, ocean-inspired design, high-end finishes, and excellent privacy."
    },
    {
      id: 6,
      title: "Charming Suburban House",
      location: "Austin, TX",
      price: "$4,200/mo",
      type: "rent",
      beds: 4,
      baths: 3,
      area: "240m²",
      parking: 2,
      featured: "No",
      images: [
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop"
      ],
      description:
        "Comfortable suburban house with modern finishes, outdoor patio, large bedrooms, and a calm family-friendly location."
    }
  ];
  
  /* =========================
     LOADER
  ========================= */
  
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
  
    if (loader) {
      setTimeout(() => {
        loader.classList.add("hide");
      }, 700);
    }
  });
  
  /* =========================
     HOME PAGE
  ========================= */
  
  const propertiesGrid = document.getElementById("propertiesGrid");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultsText = document.getElementById("resultsText");
  const filterButtons = document.querySelectorAll(".filter-btn");
  
  let currentFilter = "all";
  
  function renderProperties() {
    if (!propertiesGrid || !searchInput || !resultsText) return;
  
    const searchTerm = searchInput.value.toLowerCase();
  
    const filtered = properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm) ||
        property.location.toLowerCase().includes(searchTerm);
  
      const matchesFilter =
        currentFilter === "all" || property.type === currentFilter;
  
      return matchesSearch && matchesFilter;
    });
  
    resultsText.innerText = `${filtered.length} properties match your search`;
    propertiesGrid.innerHTML = "";
  
    filtered.forEach((property, index) => {
      const badgeText = property.type === "sale" ? "For Sale" : "For Rent";
      const badgeClass = property.type === "sale" ? "badge-sale" : "badge-rent";
  
      const card = document.createElement("div");
      card.className = "property-card";
  
      card.innerHTML = `
        <div class="property-image">
          <img src="${property.images[0]}" alt="${property.title}">
          <div class="property-badge ${badgeClass}">
            ${badgeText}
          </div>
        </div>
  
        <div class="property-content">
          <h3 class="property-title">${property.title}</h3>
  
          <div class="property-location">
            <i class="fa-solid fa-location-dot"></i>
            ${property.location}
          </div>
  
          <div class="property-price">${property.price}</div>
  
          <div class="property-features">
            <span><i class="fa-solid fa-bed"></i>${property.beds}</span>
            <span><i class="fa-solid fa-bath"></i>${property.baths}</span>
            <span><i class="fa-solid fa-expand"></i>${property.area}</span>
          </div>
  
          <div class="card-buttons">
            <button class="details-btn">View Details</button>
  
            <a
              href="https://wa.me/123456789?text=Hello%20Elite%20Estates%2C%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}"
              target="_blank"
              class="whatsapp-btn"
            >
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      `;
  
      card.addEventListener("click", () => {
        window.location.href = `property-details.html?id=${property.id}`;
      });
  
      const whatsappBtn = card.querySelector(".whatsapp-btn");
      whatsappBtn.addEventListener("click", (e) => {
        e.stopPropagation();
      });
  
      propertiesGrid.appendChild(card);
  
      setTimeout(() => {
        card.classList.add("show");
      }, 90 * index);
    });
  }
  
  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
  
        button.classList.add("active");
        currentFilter = button.dataset.filter;
  
        renderProperties();
      });
    });
  }
  
  if (searchBtn) {
    searchBtn.addEventListener("click", renderProperties);
  }
  
  if (searchInput) {
    searchInput.addEventListener("keyup", renderProperties);
  }
  
  renderProperties();
  
  /* =========================
     DETAIL PAGE
  ========================= */
  
  const detailsPage = document.querySelector(".details-page");
  
  if (detailsPage) {
    const params = new URLSearchParams(window.location.search);
    const propertyId = Number(params.get("id")) || 1;
  
    const property =
      properties.find((item) => item.id === propertyId) || properties[0];
  
    let currentImageIndex = 0;
  
    const breadcrumbTitle = document.getElementById("breadcrumbTitle");
    const detailsBadge = document.getElementById("detailsBadge");
    const mainPropertyImage = document.getElementById("mainPropertyImage");
    const thumbnailRow = document.getElementById("thumbnailRow");
    const galleryDots = document.getElementById("galleryDots");
    const prevImage = document.getElementById("prevImage");
    const nextImage = document.getElementById("nextImage");
  
    const detailTitle = document.getElementById("detailTitle");
    const detailLocation = document.getElementById("detailLocation");
    const detailPrice = document.getElementById("detailPrice");
    const detailBeds = document.getElementById("detailBeds");
    const detailBaths = document.getElementById("detailBaths");
    const detailAreaNumber = document.getElementById("detailAreaNumber");
    const detailParking = document.getElementById("detailParking");
    const detailDescription = document.getElementById("detailDescription");
  
    const sideType = document.getElementById("sideType");
    const sideBeds = document.getElementById("sideBeds");
    const sideBaths = document.getElementById("sideBaths");
    const sideArea = document.getElementById("sideArea");
    const sideParking = document.getElementById("sideParking");
    const detailsWhatsApp = document.getElementById("detailsWhatsApp");
  
    document.title = `${property.title} | Elite Estates`;
  
    breadcrumbTitle.innerText = property.title;
    detailTitle.innerText = property.title;
    detailLocation.innerText = property.location;
    detailPrice.innerText = property.price;
    detailBeds.innerText = property.beds;
    detailBaths.innerText = property.baths;
    detailAreaNumber.innerText = property.area.replace("m²", "");
    detailParking.innerText = property.parking;
    detailDescription.innerText = property.description;
  
    sideType.innerText = property.type === "sale" ? "Sale" : "Rent";
    sideBeds.innerText = property.beds;
    sideBaths.innerText = property.baths;
    sideArea.innerText = property.area.replace("m²", " m²");
    sideParking.innerText = `${property.parking} spaces`;
  
    detailsBadge.innerText =
      property.type === "sale" ? "For Sale" : "For Rent";
  
    detailsBadge.classList.toggle("badge-rent", property.type === "rent");
    detailsBadge.classList.toggle("badge-sale", property.type === "sale");
  
    detailsWhatsApp.href =
      `https://wa.me/123456789?text=Hello%20Elite%20Estates%2C%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}`;
  
    function updateGallery() {
      mainPropertyImage.src = property.images[currentImageIndex];
  
      document.querySelectorAll(".thumbnail-img").forEach((thumb, index) => {
        thumb.classList.toggle("active", index === currentImageIndex);
      });
  
      document.querySelectorAll(".gallery-dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentImageIndex);
      });
    }
  
    property.images.forEach((image, index) => {
      const thumb = document.createElement("img");
      thumb.src = image;
      thumb.alt = property.title;
      thumb.className = "thumbnail-img";
  
      thumb.addEventListener("click", () => {
        currentImageIndex = index;
        updateGallery();
      });
  
      thumbnailRow.appendChild(thumb);
  
      const dot = document.createElement("button");
      dot.className = "gallery-dot";
      dot.addEventListener("click", () => {
        currentImageIndex = index;
        updateGallery();
      });
  
      galleryDots.appendChild(dot);
    });
  
    prevImage.addEventListener("click", () => {
      currentImageIndex =
        (currentImageIndex - 1 + property.images.length) %
        property.images.length;
  
      updateGallery();
    });
  
    nextImage.addEventListener("click", () => {
      currentImageIndex =
        (currentImageIndex + 1) % property.images.length;
  
      updateGallery();
    });
  
    updateGallery();
  }
  
  /* =========================
     SCROLL ANIMATIONS
  ========================= */
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.15
    }
  );
  
  document
    .querySelectorAll(".feature-box, .contact-card, .map-container, .details-card, .details-sidebar")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(35px)";
      el.style.transition = "0.7s ease";
      observer.observe(el);
    });