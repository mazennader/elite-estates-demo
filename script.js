const properties = [
  {
    id: 1,
    reference: "RE-001",
    title: "Modern Villa with Pool",
    location: "Beirut, Lebanon",
    price: "$850,000",
    priceValue: 850000,
    type: "sale",
    category: "villa",
    beds: 4,
    baths: 3,
    area: "320m²",
    areaValue: 320,
    parking: 2,
    furnished: "unfurnished",
    featured: true,

    amenities: [
      "Private Pool",
      "Balcony",
      "Parking",
      "Air Conditioning",
      "Garden",
      "Security"
    ],

    images: [
      "images/villa1.jpg",
      "images/villa2.jpg",
      "images/villa3.jpg"
    ],

    description:
      "A modern villa featuring contemporary architecture, high-end finishes, spacious living areas, private parking, and a beautiful swimming pool. The property is suitable for families looking for comfortable and elegant living in Beirut."
  },

  {
    id: 2,
    reference: "RE-002",
    title: "Elegant City Apartment",
    location: "Jounieh, Lebanon",
    price: "$1,500/mo",
    priceValue: 1500,
    type: "rent",
    category: "apartment",
    beds: 2,
    baths: 2,
    area: "125m²",
    areaValue: 125,
    parking: 1,
    furnished: "furnished",
    featured: false,

    amenities: [
      "Furnished",
      "Balcony",
      "Parking",
      "Air Conditioning",
      "Elevator",
      "Sea View"
    ],

    images: [
      "images/villa1.jpg",
      "images/villa2.jpg",
      "images/villa3.jpg"
    ],

    description:
      "A furnished apartment with a practical layout, modern interiors, a private balcony, parking, and attractive views. It is conveniently located near shops, restaurants, and essential services in Jounieh."
  },

  {
    id: 3,
    reference: "RE-003",
    title: "Mountain View Land Plot",
    location: "Faqra, Lebanon",
    price: "$250,000",
    priceValue: 250000,
    type: "land",
    category: "land",
    area: "1,750m²",
    areaValue: 1750,
    zoning: "Villa Zone",
    roadAccess: "Yes",
    view: "Mountain View",
    featured: false,

    amenities: [
      "Road Access",
      "Mountain View",
      "Residential Zoning",
      "Quiet Location"
    ],

    images: [
      "images/villa1.jpg",
      "images/villa2.jpg",
      "images/villa3.jpg"
    ],

    description:
      "A spacious land plot surrounded by nature and mountain views in Faqra. It is suitable for a private villa, chalet, or long-term real estate investment."
  }
];

/* =========================
   GLOBAL SETTINGS
========================= */

const WHATSAPP_NUMBER = "9613123123";

/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 450);
  }
});

/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("show");

    document.body.classList.toggle("menu-open", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    const icon = menuToggle.querySelector("i");

    if (icon) {
      icon.className = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    }
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");

      document.body.classList.remove("menu-open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      const icon = menuToggle.querySelector("i");

      if (icon) {
        icon.className = "fa-solid fa-bars";
      }
    });
  });
}

/* =========================
   HELPERS
========================= */

function getBadgeText(type) {
  if (type === "sale") {
    return "For Sale";
  }

  if (type === "rent") {
    return "For Rent";
  }

  if (type === "land") {
    return "Land For Sale";
  }

  return "Property";
}

function getBadgeClass(type) {
  if (type === "rent") {
    return "badge-rent";
  }

  return "badge-sale";
}

function getCategoryLabel(category) {
  if (!category) {
    return "Property";
  }

  return (
    category.charAt(0).toUpperCase() +
    category.slice(1)
  );
}

function isLand(property) {
  return (
    property.type === "land" ||
    property.category === "land"
  );
}

function getAreaNumber(area) {
  return String(area || "")
    .replace("m²", "")
    .replace(",", "")
    .trim();
}

function createWhatsAppLink(property) {
  const message =
    `Hello RE Real Estate, I am interested in ${property.title} ` +
    `(${property.reference}). Please send me more information.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

/* =========================
   HOME PAGE ELEMENTS
========================= */

const propertiesGrid =
  document.getElementById("propertiesGrid");

const resultsText =
  document.getElementById("resultsText");

const noResults =
  document.getElementById("noResults");

const propertySearchForm =
  document.getElementById("propertySearchForm");

const searchInput =
  document.getElementById("searchInput");

const listingType =
  document.getElementById("listingType");

const propertyCategory =
  document.getElementById("propertyCategory");

const minPrice =
  document.getElementById("minPrice");

const maxPrice =
  document.getElementById("maxPrice");

const bedroomsFilter =
  document.getElementById("bedroomsFilter");

const bathroomsFilter =
  document.getElementById("bathroomsFilter");

const minArea =
  document.getElementById("minArea");

const maxArea =
  document.getElementById("maxArea");

const furnishedFilter =
  document.getElementById("furnishedFilter");

const sortProperties =
  document.getElementById("sortProperties");

const advancedFilterBtn =
  document.getElementById("advancedFilterBtn");

const advancedFilters =
  document.getElementById("advancedFilters");

const clearFiltersBtn =
  document.getElementById("clearFiltersBtn");

const resetSearchBtn =
  document.getElementById("resetSearchBtn");

const quickFilterButtons =
  document.querySelectorAll(".quick-filter-btn");

/* =========================
   ADVANCED FILTER
========================= */

if (advancedFilterBtn && advancedFilters) {
  advancedFilterBtn.addEventListener("click", () => {
    const isOpen =
      advancedFilters.classList.toggle("show");

    const lastIcon =
      advancedFilterBtn.querySelector(
        ".fa-chevron-down, .fa-chevron-up"
      );

    if (lastIcon) {
      lastIcon.className = isOpen
        ? "fa-solid fa-chevron-up"
        : "fa-solid fa-chevron-down";
    }
  });
}

/* =========================
   FILTERING AND SORTING
========================= */

function getFilteredProperties() {
  const searchTerm = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const selectedListingType =
    listingType?.value || "all";

  const selectedCategory =
    propertyCategory?.value || "all";

  const selectedBedrooms =
    bedroomsFilter?.value || "all";

  const selectedBathrooms =
    bathroomsFilter?.value || "all";

  const selectedFurnished =
    furnishedFilter?.value || "all";

  const minimumPrice =
    Number(minPrice?.value || 0);

  const maximumPrice =
    Number(maxPrice?.value || 0);

  const minimumArea =
    Number(minArea?.value || 0);

  const maximumArea =
    Number(maxArea?.value || 0);

  const filtered = properties.filter((property) => {
    const searchableText = [
      property.title,
      property.location,
      property.type,
      property.category,
      property.reference,
      property.description
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      !searchTerm ||
      searchableText.includes(searchTerm);

    const matchesListingType =
      selectedListingType === "all" ||
      property.type === selectedListingType;

    const matchesCategory =
      selectedCategory === "all" ||
      property.category === selectedCategory;

    const matchesMinPrice =
      !minimumPrice ||
      property.priceValue >= minimumPrice;

    const matchesMaxPrice =
      !maximumPrice ||
      property.priceValue <= maximumPrice;

    const matchesBedrooms =
      selectedBedrooms === "all" ||
      (
        !isLand(property) &&
        Number(property.beds || 0) >=
          Number(selectedBedrooms)
      );

    const matchesBathrooms =
      selectedBathrooms === "all" ||
      (
        !isLand(property) &&
        Number(property.baths || 0) >=
          Number(selectedBathrooms)
      );

    const matchesMinArea =
      !minimumArea ||
      property.areaValue >= minimumArea;

    const matchesMaxArea =
      !maximumArea ||
      property.areaValue <= maximumArea;

    const matchesFurnished =
      selectedFurnished === "all" ||
      property.furnished === selectedFurnished;

    return (
      matchesSearch &&
      matchesListingType &&
      matchesCategory &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesBedrooms &&
      matchesBathrooms &&
      matchesMinArea &&
      matchesMaxArea &&
      matchesFurnished
    );
  });

  const selectedSort =
    sortProperties?.value || "newest";

  if (selectedSort === "price-low") {
    filtered.sort(
      (a, b) => a.priceValue - b.priceValue
    );
  }

  if (selectedSort === "price-high") {
    filtered.sort(
      (a, b) => b.priceValue - a.priceValue
    );
  }

  if (selectedSort === "area-large") {
    filtered.sort(
      (a, b) => b.areaValue - a.areaValue
    );
  }

  if (selectedSort === "newest") {
    filtered.sort(
      (a, b) => b.id - a.id
    );
  }

  return filtered;
}

/* =========================
   PROPERTY CARDS
========================= */

function createPropertyCard(property) {
  const card = document.createElement("article");

  card.className = "property-card";

  const featureHtml = isLand(property)
    ? `
      <span>
        <i class="fa-solid fa-ruler-combined"></i>
        ${property.area}
      </span>

      <span>
        <i class="fa-solid fa-map"></i>
        ${property.zoning}
      </span>

      <span>
        <i class="fa-solid fa-road"></i>
        Road Access
      </span>
    `
    : `
      <span>
        <i class="fa-solid fa-bed"></i>
        ${property.beds} Beds
      </span>

      <span>
        <i class="fa-solid fa-bath"></i>
        ${property.baths} Baths
      </span>

      <span>
        <i class="fa-solid fa-ruler-combined"></i>
        ${property.area}
      </span>
    `;

  card.innerHTML = `
    <div class="property-image">

      <img
        src="${property.images[0]}"
        alt="${property.title}"
        loading="lazy"
      >

      <span class="property-badge ${getBadgeClass(
        property.type
      )}">
        ${getBadgeText(property.type)}
      </span>

    </div>

    <div class="property-content">

      <h3 class="property-title">
        ${property.title}
      </h3>

      <div class="property-location">
        <i class="fa-solid fa-location-dot"></i>
        <span>${property.location}</span>
      </div>

      <div class="property-price">
        ${property.price}
      </div>

      <div class="property-features">
        ${featureHtml}
      </div>

      <div class="card-buttons">

        <button
          class="details-btn"
          type="button"
        >
          View Details
        </button>

        <a
          href="${createWhatsAppLink(property)}"
          target="_blank"
          rel="noopener noreferrer"
          class="whatsapp-btn"
          aria-label="Ask about ${property.title} on WhatsApp"
        >
          <i class="fa-brands fa-whatsapp"></i>
        </a>

      </div>

    </div>
  `;

  const detailsButton =
    card.querySelector(".details-btn");

  if (detailsButton) {
    detailsButton.addEventListener("click", () => {
      window.location.href =
        `property-details.html?id=${property.id}`;
    });
  }

  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      return;
    }

    window.location.href =
      `property-details.html?id=${property.id}`;
  });

  return card;
}

function renderProperties() {
  if (!propertiesGrid || !resultsText) {
    return;
  }

  const filteredProperties =
    getFilteredProperties();

  propertiesGrid.innerHTML = "";

  const word =
    filteredProperties.length === 1
      ? "property"
      : "properties";

  resultsText.textContent =
    `${filteredProperties.length} ${word} match your search`;

  filteredProperties.forEach((property) => {
    const propertyCard =
      createPropertyCard(property);

    propertiesGrid.appendChild(propertyCard);
  });

  if (noResults) {
    noResults.hidden =
      filteredProperties.length !== 0;
  }
}

/* =========================
   RESET FILTERS
========================= */

function resetFilters() {
  if (propertySearchForm) {
    propertySearchForm.reset();
  }

  if (listingType) {
    listingType.value = "all";
  }

  if (propertyCategory) {
    propertyCategory.value = "all";
  }

  if (bedroomsFilter) {
    bedroomsFilter.value = "all";
  }

  if (bathroomsFilter) {
    bathroomsFilter.value = "all";
  }

  if (furnishedFilter) {
    furnishedFilter.value = "all";
  }

  if (sortProperties) {
    sortProperties.value = "newest";
  }

  quickFilterButtons.forEach((button) => {
    button.classList.remove("active");
  });

  renderProperties();
}

if (clearFiltersBtn) {
  clearFiltersBtn.addEventListener(
    "click",
    resetFilters
  );
}

if (resetSearchBtn) {
  resetSearchBtn.addEventListener(
    "click",
    resetFilters
  );
}

/* =========================
   SEARCH EVENTS
========================= */

if (propertySearchForm) {
  propertySearchForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      renderProperties();

      const propertiesSection =
        document.getElementById("properties");

      if (propertiesSection) {
        propertiesSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  );
}

[
  listingType,
  propertyCategory,
  bedroomsFilter,
  bathroomsFilter,
  furnishedFilter,
  sortProperties
].forEach((element) => {
  if (element) {
    element.addEventListener(
      "change",
      renderProperties
    );
  }
});

[
  searchInput,
  minPrice,
  maxPrice,
  minArea,
  maxArea
].forEach((element) => {
  if (element) {
    element.addEventListener(
      "input",
      renderProperties
    );
  }
});

/* =========================
   QUICK FILTER BUTTONS
========================= */

quickFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    quickFilterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    if (
      button.dataset.filter &&
      listingType
    ) {
      listingType.value =
        button.dataset.filter;
    }

    if (
      button.dataset.category &&
      propertyCategory
    ) {
      propertyCategory.value =
        button.dataset.category;
    }

    renderProperties();

    const propertiesSection =
      document.getElementById("properties");

    if (propertiesSection) {
      propertiesSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

renderProperties();

/* =========================================================
   PROPERTY DETAILS PAGE
========================================================= */

const detailsPage =
  document.querySelector(".details-page");

if (detailsPage) {
  const params =
    new URLSearchParams(
      window.location.search
    );

  const propertyId =
    Number(params.get("id")) || 1;

  const property =
    properties.find(
      (item) => item.id === propertyId
    ) || properties[0];

  let currentImageIndex = 0;

  const breadcrumbTitle =
    document.getElementById(
      "breadcrumbTitle"
    );

  const detailsBadge =
    document.getElementById(
      "detailsBadge"
    );

  const featuredBadge =
    document.getElementById(
      "featuredBadge"
    );

  const mainPropertyImage =
    document.getElementById(
      "mainPropertyImage"
    );

  const thumbnailRow =
    document.getElementById(
      "thumbnailRow"
    );

  const galleryDots =
    document.getElementById(
      "galleryDots"
    );

  const galleryCounter =
    document.getElementById(
      "galleryCounter"
    );

  const prevImage =
    document.getElementById(
      "prevImage"
    );

  const nextImage =
    document.getElementById(
      "nextImage"
    );

  const detailTitle =
    document.getElementById(
      "detailTitle"
    );

  const detailLocation =
    document.getElementById(
      "detailLocation"
    );

  const detailPrice =
    document.getElementById(
      "detailPrice"
    );

  const detailDescription =
    document.getElementById(
      "detailDescription"
    );

  const detailBeds =
    document.getElementById(
      "detailBeds"
    );

  const detailBaths =
    document.getElementById(
      "detailBaths"
    );

  const detailAreaNumber =
    document.getElementById(
      "detailAreaNumber"
    );

  const detailParking =
    document.getElementById(
      "detailParking"
    );

  const detailStats =
    document.querySelector(
      ".detail-stats"
    );

  const sideListingType =
    document.getElementById(
      "sideListingType"
    );

  const sideType =
    document.getElementById(
      "sideType"
    );

  const sideBeds =
    document.getElementById(
      "sideBeds"
    );

  const sideBaths =
    document.getElementById(
      "sideBaths"
    );

  const sideArea =
    document.getElementById(
      "sideArea"
    );

  const sideParking =
    document.getElementById(
      "sideParking"
    );

  const sideFurnished =
    document.getElementById(
      "sideFurnished"
    );

  const propertyReference =
    document.getElementById(
      "propertyReference"
    );

  const sideReference =
    document.getElementById(
      "sideReference"
    );

  const detailsWhatsApp =
    document.getElementById(
      "detailsWhatsApp"
    );

  const amenitiesGrid =
    document.getElementById(
      "amenitiesGrid"
    );

  document.title =
    `${property.title} | RE Real Estate`;

  if (breadcrumbTitle) {
    breadcrumbTitle.textContent =
      property.title;
  }

  if (detailTitle) {
    detailTitle.textContent =
      property.title;
  }

  if (detailLocation) {
    detailLocation.textContent =
      property.location;
  }

  if (detailPrice) {
    detailPrice.textContent =
      property.price;
  }

  if (detailDescription) {
    detailDescription.textContent =
      property.description;
  }

  if (detailsBadge) {
    detailsBadge.textContent =
      getBadgeText(property.type);
  }

  if (featuredBadge) {
    featuredBadge.hidden =
      !property.featured;
  }

  if (propertyReference) {
    propertyReference.textContent =
      property.reference;
  }

  if (sideReference) {
    sideReference.textContent =
      property.reference;
  }

  if (sideListingType) {
    sideListingType.textContent =
      getBadgeText(property.type);
  }

  if (sideType) {
    sideType.textContent =
      getCategoryLabel(
        property.category
      );
  }

  if (sideArea) {
    sideArea.textContent =
      property.area.replace(
        "m²",
        " m²"
      );
  }

  if (sideFurnished) {
    sideFurnished.textContent =
      property.furnished
        ? getCategoryLabel(
            property.furnished
          )
        : "Not Applicable";
  }

  if (detailsWhatsApp) {
    detailsWhatsApp.href =
      createWhatsAppLink(property);
  }

  if (amenitiesGrid) {
    amenitiesGrid.innerHTML =
      property.amenities
        .map(
          (amenity) => `
            <div class="amenity-item">
              <i class="fa-solid fa-circle-check"></i>
              ${amenity}
            </div>
          `
        )
        .join("");
  }

  if (isLand(property)) {
    if (detailStats) {
      detailStats.innerHTML = `
        <div class="detail-stat">

          <div class="stat-icon">
            <i class="fa-solid fa-ruler-combined"></i>
          </div>

          <div>
            <strong>
              ${getAreaNumber(property.area)}
            </strong>

            <span>m² Land</span>
          </div>

        </div>

        <div class="detail-stat">

          <div class="stat-icon">
            <i class="fa-solid fa-map"></i>
          </div>

          <div>
            <strong>
              ${property.zoning}
            </strong>

            <span>Zoning</span>
          </div>

        </div>

        <div class="detail-stat">

          <div class="stat-icon">
            <i class="fa-solid fa-road"></i>
          </div>

          <div>
            <strong>
              ${property.roadAccess}
            </strong>

            <span>Road Access</span>
          </div>

        </div>

        <div class="detail-stat">

          <div class="stat-icon">
            <i class="fa-solid fa-mountain-sun"></i>
          </div>

          <div>
            <strong>
              ${property.view}
            </strong>

            <span>View</span>
          </div>

        </div>
      `;
    }

    const sidebarInfoList =
      document.querySelector(
        ".details-sidebar .info-list"
      );

    if (sidebarInfoList) {
      sidebarInfoList.innerHTML = `
        <div class="info-row">
          <span>Listing Type</span>
          <strong>Land For Sale</strong>
        </div>

        <div class="info-row">
          <span>Property Type</span>
          <strong>Land</strong>
        </div>

        <div class="info-row">
          <span>Area</span>

          <strong>
            ${property.area.replace(
              "m²",
              " m²"
            )}
          </strong>
        </div>

        <div class="info-row">
          <span>Zoning</span>

          <strong>
            ${property.zoning}
          </strong>
        </div>

        <div class="info-row">
          <span>Road Access</span>

          <strong>
            ${property.roadAccess}
          </strong>
        </div>

        <div class="info-row">
          <span>View</span>

          <strong>
            ${property.view}
          </strong>
        </div>

        <div class="info-row">
          <span>Reference</span>

          <strong>
            ${property.reference}
          </strong>
        </div>
      `;
    }
  } else {
    if (detailBeds) {
      detailBeds.textContent =
        property.beds;
    }

    if (detailBaths) {
      detailBaths.textContent =
        property.baths;
    }

    if (detailAreaNumber) {
      detailAreaNumber.textContent =
        getAreaNumber(property.area);
    }

    if (detailParking) {
      detailParking.textContent =
        property.parking;
    }

    if (sideBeds) {
      sideBeds.textContent =
        property.beds;
    }

    if (sideBaths) {
      sideBaths.textContent =
        property.baths;
    }

    if (sideParking) {
      sideParking.textContent =
        `${property.parking} ${
          property.parking === 1
            ? "space"
            : "spaces"
        }`;
    }
  }

  /* =========================
     IMAGE GALLERY
  ========================= */

  function updateGallery() {
    if (mainPropertyImage) {
      mainPropertyImage.src =
        property.images[
          currentImageIndex
        ];

      mainPropertyImage.alt =
        `${property.title} image ${
          currentImageIndex + 1
        }`;
    }

    document
      .querySelectorAll(
        ".thumbnail-img"
      )
      .forEach(
        (thumbnail, index) => {
          thumbnail.classList.toggle(
            "active",
            index === currentImageIndex
          );
        }
      );

    document
      .querySelectorAll(
        ".gallery-dot"
      )
      .forEach((dot, index) => {
        dot.classList.toggle(
          "active",
          index === currentImageIndex
        );
      });

    if (galleryCounter) {
      galleryCounter.textContent =
        `${currentImageIndex + 1} / ${
          property.images.length
        }`;
    }
  }

  if (thumbnailRow) {
    thumbnailRow.innerHTML = "";
  }

  if (galleryDots) {
    galleryDots.innerHTML = "";
  }

  property.images.forEach(
    (image, index) => {
      if (thumbnailRow) {
        const thumbnail =
          document.createElement("img");

        thumbnail.src = image;

        thumbnail.alt =
          `${property.title} thumbnail ${
            index + 1
          }`;

        thumbnail.className =
          "thumbnail-img";

        thumbnail.loading = "lazy";

        thumbnail.addEventListener(
          "click",
          () => {
            currentImageIndex = index;

            updateGallery();
          }
        );

        thumbnailRow.appendChild(
          thumbnail
        );
      }

      if (galleryDots) {
        const dot =
          document.createElement(
            "button"
          );

        dot.className = "gallery-dot";
        dot.type = "button";

        dot.setAttribute(
          "aria-label",
          `View image ${index + 1}`
        );

        dot.addEventListener(
          "click",
          () => {
            currentImageIndex = index;

            updateGallery();
          }
        );

        galleryDots.appendChild(dot);
      }
    }
  );

  if (prevImage) {
    prevImage.addEventListener(
      "click",
      () => {
        currentImageIndex =
          (
            currentImageIndex -
            1 +
            property.images.length
          ) %
          property.images.length;

        updateGallery();
      }
    );
  }

  if (nextImage) {
    nextImage.addEventListener(
      "click",
      () => {
        currentImageIndex =
          (
            currentImageIndex +
            1
          ) %
          property.images.length;

        updateGallery();
      }
    );
  }

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "ArrowLeft") {
        if (prevImage) {
          prevImage.click();
        }
      }

      if (event.key === "ArrowRight") {
        if (nextImage) {
          nextImage.click();
        }
      }
    }
  );

  updateGallery();
}

/* =========================
   SCROLL ANIMATIONS
========================= */

const animationElements =
  document.querySelectorAll(
    ".property-card, " +
    ".feature-card, " +
    ".feature-box, " +
    ".contact-card, " +
    ".map-container, " +
    ".details-card, " +
    ".sidebar-card, " +
    ".about-image, " +
    ".about-content"
  );

if ("IntersectionObserver" in window) {
  const observer =
    new IntersectionObserver(
      (
        entries,
        currentObserver
      ) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.style.opacity =
            "1";

          entry.target.style.transform =
            "translateY(0)";

          currentObserver.unobserve(
            entry.target
          );
        });
      },
      {
        threshold: 0.12
      }
    );

  animationElements.forEach(
    (element) => {
      element.style.opacity = "0";

      element.style.transform =
        "translateY(24px)";

      element.style.transition =
        "opacity .65s ease, transform .65s ease";

      observer.observe(element);
    }
  );
} else {
  animationElements.forEach(
    (element) => {
      element.style.opacity = "1";

      element.style.transform =
        "none";
    }
  );
}