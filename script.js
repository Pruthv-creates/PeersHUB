// --- Sample student accommodation data ---
const listingsData = [
  {
    id: 1,
    title: "Premium Boys PG near DU North Campus",
    kind: "pg_boys",
    location: "Kamla Nagar, Delhi",
    price: 15000,
    desc: "Fully furnished PG with AC, WiFi, meals included. 5 min walk to DU.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    gender: "boys",
    amenities: ["WiFi", "AC", "Meals", "Laundry", "Security"],
    distance: "0.5 km from DU North Campus",
  },
  {
    id: 2,
    title: "Girls PG - Safe & Secure near Pune University",
    kind: "pg_girls",
    location: "Aundh, Pune",
    price: 12000,
    desc: "Ladies PG with 24/7 security, home-cooked meals, and study room.",
    img: "https://images.unsplash.com/photo-1560449739-6bfa9b6c4f20?auto=format&fit=crop&w=800&q=60",
    gender: "girls",
    amenities: ["WiFi", "Meals", "Security", "Study Room", "CCTV"],
    distance: "1 km from Pune University",
  },
  {
    id: 4,
    title: "Affordable Boys PG near IIT Bombay",
    kind: "pg_boys",
    location: "Powai, Mumbai",
    price: 14000,
    desc: "Budget-friendly PG for engineering students. Close to IIT Bombay.",
    img: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=60",
    gender: "boys",
    amenities: ["WiFi", "Meals", "Study Area", "Parking"],
    distance: "0.8 km from IIT Bombay",
  },
  {
    id: 5,
    title: "Luxury Girls PG - Premium Amenities",
    kind: "pg_girls",
    location: "Sector 62, Noida",
    price: 20000,
    desc: "Premium girls PG with swimming pool, gym, and spa facilities.",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    gender: "girls",
    amenities: ["WiFi", "AC", "Pool", "Gym", "Spa", "Meals"],
    distance: "1.5 km from Amity University",
  },
  {
    id: 8,
    title: "Budget Boys PG near Jamia University",
    kind: "pg_boys",
    location: "Jamia Nagar, Delhi",
    price: 9000,
    desc: "Affordable accommodation for students with basic amenities.",
    img: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=60",
    gender: "boys",
    amenities: ["WiFi", "Meals", "Study Room", "Security"],
    distance: "0.3 km from Jamia Millia Islamia",
  },
  {
    id: 9,
    title: "Girls Hostel - University Approved",
    kind: "hostel",
    location: "Anna Nagar, Chennai",
    price: 13000,
    desc: "University approved girls hostel with mess and library facilities.",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=60",
    gender: "girls",
    amenities: ["WiFi", "Mess", "Library", "Security", "CCTV"],
    distance: "1.2 km from Anna University",
  },
]

// --- DOM refs ---
const listingsEl = document.getElementById("listings")
const resultsInfo = document.getElementById("resultsInfo")
const yearEl = document.getElementById("year")
const qEl = document.getElementById("q")
const kindEl = document.getElementById("kind")
const sortEl = document.getElementById("sort")

// modal refs
const modal = document.getElementById("modal")
const modalTitle = document.getElementById("modalTitle")
const modalImg = document.getElementById("modalImg")
const modalDesc = document.getElementById("modalDesc")
const modalPrice = document.getElementById("modalPrice")
const modalAmenities = document.getElementById("modalAmenities")
const bookingArea = document.getElementById("bookingArea")

// form modal refs
const formModal = document.getElementById("formModal")
const listingForm = document.getElementById("listingForm")

let currentGenderFilter = ""

// initial render
function renderListings(data) {
  listingsEl.innerHTML = ""
  if (!data.length) {
    listingsEl.innerHTML =
      '<div style="padding:40px;background:#fff;border-radius:12px;border:1px dashed #e2e8f0;text-align:center"><h3 style="color:#64748b">No accommodations found</h3><p class="muted">Try adjusting your filters or search terms</p></div>'
  }

  data.forEach((item) => {
    const el = document.createElement("div")
    el.className = "card"
    el.innerHTML = `
      <img src="${item.img}" alt="${item.title}" />
      <div class="meta">
        <div style="flex:1">
          <div class="title">${item.title}</div>
          <div class="muted" style="font-size:13px;margin-top:4px">📍 ${item.location}</div>
          <div class="college-distance">🎓 ${item.distance}</div>
        </div>
        <div class="price">${formatPrice(item.price)}/month</div>
      </div>
      <div class="tags">
        <div class="tag">${prettyKind(item.kind)}</div>
        <div class="gender-tag ${item.gender}">${item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}</div>
      </div>
      <div class="amenities">
        ${item.amenities
          .slice(0, 3)
          .map((a) => `<span class="amenity">${a}</span>`)
          .join("")}
        ${item.amenities.length > 3 ? `<span class="amenity">+${item.amenities.length - 3} more</span>` : ""}
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px">
        <div class="muted" style="font-size:12px">ID: ${item.id}</div>
        <div class="actions">
          <button class="btn secondary" data-id="${item.id}" onclick="openDetails(${item.id})" style="padding:8px 12px;font-size:13px">View Details</button>
          <button class="btn" onclick="quickContact(${item.id})" style="padding:8px 12px;font-size:13px">Contact</button>
        </div>
      </div>
    `
    listingsEl.appendChild(el)
  })
  resultsInfo.textContent = `Showing ${data.length} accommodation${data.length !== 1 ? "s" : ""}`
}

function formatPrice(v) {
  if (!v) return "—"
  return "₹ " + v.toLocaleString()
}
function prettyKind(k) {
  return (
    {
      pg_boys: "Boys PG",
      pg_girls: "Girls PG",
      hostel: "Student Hostel",
      flat_share: "Flat Share",
      studio: "Studio Apt",
    }[k] || k
  )
}

// --- Search & filters ---
function applyFilters() {
  const q = qEl.value.trim().toLowerCase()
  const kind = kindEl.value
  const min = Number(document.getElementById("minPrice").value || 0)
  const max = Number(document.getElementById("maxPrice").value || 0)

  const filtered = listingsData.filter((l) => {
    const matchesQ = !q || (l.title + " " + l.location + " " + l.desc).toLowerCase().includes(q)
    const matchesKind = kind === "all" || l.kind === kind
    const matchesPrice = (!min || l.price >= min) && (!max || (l.price && l.price <= max))
    const matchesGender = !currentGenderFilter || l.gender === currentGenderFilter
    return matchesQ && matchesKind && matchesPrice && matchesGender
  })

  const sortVal = sortEl.value
  if (sortVal === "price_asc") filtered.sort((a, b) => (a.price || 0) - (b.price || 0))
  else if (sortVal === "price_desc") filtered.sort((a, b) => (b.price || 0) - (a.price || 0))
  else filtered.sort((a, b) => b.id - a.id)

  renderListings(filtered)
}

document.getElementById("applyFilters").addEventListener("click", applyFilters)
document.getElementById("resetFilters").addEventListener("click", () => {
  document.getElementById("minPrice").value = ""
  document.getElementById("maxPrice").value = ""
  qEl.value = ""
  kindEl.value = "all"
  currentGenderFilter = ""
  document.querySelectorAll("[data-gender]").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll("#categoryList .chip").forEach((c) => c.classList.remove("active"))
  document.querySelector('#categoryList .chip[data-kind="all"]').classList.add("active")
  applyFilters()
})
qEl.addEventListener("input", applyFilters)
kindEl.addEventListener("change", applyFilters)
sortEl.addEventListener("change", applyFilters)

// category chips
document.querySelectorAll("#categoryList .chip").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#categoryList .chip").forEach((c) => c.classList.remove("active"))
    btn.classList.add("active")
    kindEl.value = btn.dataset.kind
    applyFilters()
  })
})

// gender filter chips
document.querySelectorAll("[data-gender]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-gender]").forEach((c) => c.classList.remove("active"))
    if (currentGenderFilter === btn.dataset.gender) {
      currentGenderFilter = ""
    } else {
      btn.classList.add("active")
      currentGenderFilter = btn.dataset.gender
    }
    applyFilters()
  })
})

// --- modal logic ---
function openDetails(id) {
  const it = listingsData.find((l) => l.id === id)
  if (!it) return
  modalTitle.textContent = it.title
  modalImg.src = it.img
  modalDesc.textContent = it.desc
  modalPrice.textContent = formatPrice(it.price)
  modalAmenities.innerHTML =
    "<strong>Amenities:</strong> " +
    it.amenities.map((a) => `<span class="tag" style="margin-left:4px">${a}</span>`).join("")
  bookingArea.style.display = "none"
  modal.style.display = "flex"
  window.currentItem = it
}
document.getElementById("closeModal").addEventListener("click", () => (modal.style.display = "none"))
document.getElementById("bookBtn").addEventListener("click", () => {
  bookingArea.style.display = "block"
})
document.getElementById("messageBtn").addEventListener("click", () => {
  alert("Visit scheduling feature coming soon! For now, please use the contact form.")
  bookingArea.style.display = "block"
})
document.getElementById("cancelBook").addEventListener("click", () => {
  bookingArea.style.display = "none"
})
document.getElementById("confirmBook").addEventListener("click", () => {
  const name = document.getElementById("bookName").value.trim()
  const phone = document.getElementById("bookPhone").value.trim()
  const college = document.getElementById("bookCollege").value.trim()
  const course = document.getElementById("bookCourse").value.trim()
  if (!name || !phone) {
    alert("Please enter your name and phone number")
    return
  }
  alert(`Inquiry sent for "${window.currentItem.title}"! The property owner will contact you soon at ${phone}.`)
  modal.style.display = "none"
  // Clear form
  document.getElementById("bookName").value = ""
  document.getElementById("bookPhone").value = ""
  document.getElementById("bookCollege").value = ""
  document.getElementById("bookCourse").value = ""
})

function quickContact(id) {
  openDetails(id)
  bookingArea.style.display = "block"
}

// --- listing form modal ---
document.getElementById("newListingBtn").addEventListener("click", () => {
  formModal.style.display = "flex"
})
document.getElementById("closeForm").addEventListener("click", () => {
  formModal.style.display = "none"
})
document.getElementById("clearForm").addEventListener("click", () => listingForm.reset())

listingForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const data = new FormData(listingForm)
  const obj = {}
  for (const [k, v] of data.entries()) obj[k] = v

  const imageFiles = data.getAll("images")
  let imageUrl = "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60" // default

  if (imageFiles.length > 0 && imageFiles[0].size > 0) {
    // Create object URL for uploaded image to display immediately
    imageUrl = URL.createObjectURL(imageFiles[0])
  }

  const newId = listingsData.length ? Math.max(...listingsData.map((x) => x.id)) + 1 : 1
  listingsData.unshift({
    id: newId,
    title: obj.title,
    kind: obj.kind,
    location: obj.location,
    price: Number(obj.price) || 0,
    desc: obj.desc,
    gender: obj.gender,
    amenities: ["WiFi", "Security", "Basic Amenities"],
    img: imageUrl, // use uploaded image or default
    distance: "Near local colleges", // default distance
  })
  listingForm.reset()
  formModal.style.display = "none"
  applyFilters()
  alert("🎉 Your property listing has been published successfully!")
})

// auth stub
document
  .getElementById("loginBtn")
  .addEventListener("click", () => alert("Student authentication coming soon! This is a demo version."))

// small helpers
document.getElementById("year").textContent = new Date().getFullYear()

// initial call
applyFilters()
