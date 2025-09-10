// --- Sample student accommodation data ---
const mumbaiData = {
  colleges: [
    { name: "Thadomal Shahani Engineering College (TSEC)", area: "Bandra (W)", station: "Bandra Station (W)" },
    { name: "IIT Bombay", area: "Powai", station: "Kanjurmarg / Vikhroli" },
    { name: "VJTI", area: "Matunga", station: "Matunga / Dadar" },
    { name: "Institute of Chemical Technology (ICT)", area: "Matunga", station: "Matunga / Dadar" },
    { name: "NMIMS Mukesh Patel", area: "Vile Parle", station: "Vile Parle Station" },
    { name: "SPIT", area: "Andheri W", station: "Andheri Station" },
    { name: "DJ Sanghvi", area: "Vile Parle W", station: "Vile Parle Station" },
    { name: "KJ Somaiya", area: "Vidyavihar", station: "Vidyavihar Station" },
    { name: "VESIT", area: "Chembur", station: "Chembur Station" },
    { name: "M.H. Saboo Siddik", area: "Byculla", station: "Byculla Station" },
    { name: "Fr. CRCE", area: "Bandra Bandstand", station: "Bandra Station" },
    { name: "Pillai College of Engineering", area: "Panvel", station: "Panvel Station" },
    { name: "Bharati Vidyapeeth", area: "Kharghar", station: "Kharghar Station" },
    { name: "SFIT", area: "Borivali", station: "Borivali Station" },
    { name: "VidyaVardhini", area: "Vasai", station: "Vasai Road Station" },
    { name: "SIES GST", area: "Nerul", station: "Nerul Station" },
    { name: "Don Bosco Institute of Tech", area: "Kurla", station: "Kurla Station" },
    { name: "KC College of Engineering", area: "Thane E", station: "Thane Station" },
    { name: "A. P. Shah Institute", area: "Thane", station: "Thane Station" },
    { name: "Lokmanya Tilak COE", area: "Kopar Khairane", station: "Kopar Khairane Station" },
  ],
  areas: [
    "Bandra",
    "Andheri",
    "Powai",
    "Matunga",
    "Vile Parle",
    "Chembur",
    "Thane",
    "Borivali",
    "Kurla",
    "Dadar",
    "Nerul",
    "Kharghar",
    "Panvel",
    "Vasai",
    "Vidyavihar",
    "Byculla",
    "Kopar Khairane",
    "Kanjurmarg",
    "Vikhroli",
    "Goregaon",
    "Malad",
    "Kandivali",
    "Jogeshwari",
    "Santa Cruz",
    "Khar",
    "Mahim",
    "Lower Parel",
    "Worli",
    "Colaba",
    "Fort",
    "Churchgate",
  ],
  stations: [
    "Bandra Station",
    "Andheri Station",
    "Vile Parle Station",
    "Matunga Station",
    "Dadar Station",
    "Chembur Station",
    "Thane Station",
    "Borivali Station",
    "Kurla Station",
    "Vidyavihar Station",
    "Nerul Station",
    "Kharghar Station",
    "Panvel Station",
    "Vasai Road Station",
    "Byculla Station",
    "Kopar Khairane Station",
    "Kanjurmarg Station",
    "Vikhroli Station",
    "Goregaon Station",
    "Malad Station",
    "Kandivali Station",
    "Jogeshwari Station",
    "Santa Cruz Station",
    "Khar Station",
  ],
}

const listingsData = [
  {
    id: 1,
    title: "Premium Boys PG near IIT Bombay",
    kind: "pg_boys",
    location: "Powai, Mumbai",
    price: 18000,
    desc: "Fully furnished PG with AC, WiFi, meals included. Walking distance to IIT Bombay.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    gender: "boys",
    amenities: ["WiFi", "AC", "Meals", "Laundry", "Security"],
    distance: "0.8 km from IIT Bombay",
    college: "IIT Bombay",
    station: "Kanjurmarg / Vikhroli",
  },
  {
    id: 2,
    title: "Girls PG - Safe & Secure near VJTI",
    kind: "pg_girls",
    location: "Matunga, Mumbai",
    price: 16000,
    desc: "Ladies PG with 24/7 security, home-cooked meals, and study room.",
    img: "https://images.unsplash.com/photo-1560449739-6bfa9b6c4f20?auto=format&fit=crop&w=800&q=60",
    gender: "girls",
    amenities: ["WiFi", "Meals", "Security", "Study Room", "CCTV"],
    distance: "0.5 km from VJTI",
    college: "VJTI",
    station: "Matunga / Dadar",
  },
  {
    id: 3,
    title: "Modern Boys PG near NMIMS",
    kind: "pg_boys",
    location: "Vile Parle, Mumbai",
    price: 17000,
    desc: "Contemporary PG with modern amenities for NMIMS students.",
    img: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=60",
    gender: "boys",
    amenities: ["WiFi", "AC", "Meals", "Gym", "Study Area"],
    distance: "0.3 km from NMIMS",
    college: "NMIMS Mukesh Patel",
    station: "Vile Parle Station",
  },
  {
    id: 4,
    title: "Luxury Girls PG - Premium Amenities",
    kind: "pg_girls",
    location: "Bandra, Mumbai",
    price: 22000,
    desc: "Premium girls PG with swimming pool, gym, and spa facilities.",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    gender: "girls",
    amenities: ["WiFi", "AC", "Pool", "Gym", "Spa", "Meals"],
    distance: "0.7 km from TSEC",
    college: "Thadomal Shahani Engineering College (TSEC)",
    station: "Bandra Station (W)",
  },
  {
    id: 5,
    title: "Budget Boys PG near Thane Station",
    kind: "pg_boys",
    location: "Thane, Mumbai",
    price: 12000,
    desc: "Affordable accommodation for students with basic amenities.",
    img: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=60",
    gender: "boys",
    amenities: ["WiFi", "Meals", "Study Room", "Security"],
    distance: "0.5 km from KC College of Engineering",
    college: "KC College of Engineering",
    station: "Thane Station",
  },
  {
    id: 6,
    title: "Girls Hostel - University Approved",
    kind: "hostel",
    location: "Andheri, Mumbai",
    price: 15000,
    desc: "University approved girls hostel with mess and library facilities.",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=60",
    gender: "girls",
    amenities: ["WiFi", "Mess", "Library", "Security", "CCTV"],
    distance: "0.4 km from SPIT",
    college: "SPIT",
    station: "Andheri Station",
  },
]

// --- DOM refs ---
const listingsEl = document.getElementById("listings")
const resultsInfo = document.getElementById("resultsInfo")
const yearEl = document.getElementById("year")
const collegeSearchEl = document.getElementById("collegeSearch")
const collegeDropdownEl = document.getElementById("collegeDropdown")
const locationSelectEl = document.getElementById("locationSelect")
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

let selectedCollege = null
let currentHighlightIndex = -1

let currentGenderFilter = ""

function initializeLocationDropdown() {
  locationSelectEl.innerHTML = '<option value="">Select Station</option>'
  mumbaiData.stations.forEach((station) => {
    const option = document.createElement("option")
    option.value = station
    option.textContent = station
    locationSelectEl.appendChild(option)
  })
}

function setupCollegeSearch() {
  collegeSearchEl.addEventListener("input", handleCollegeSearch)
  collegeSearchEl.addEventListener("keydown", handleCollegeKeydown)
  collegeSearchEl.addEventListener("blur", hideCollegeDropdown)
  collegeSearchEl.addEventListener("focus", handleCollegeSearch)
}

function handleCollegeSearch() {
  const query = collegeSearchEl.value.toLowerCase().trim()

  if (query.length === 0) {
    hideCollegeDropdown()
    selectedCollege = null
    return
  }

  const filteredColleges = mumbaiData.colleges.filter((college) => {
    const nameMatch = college.name.toLowerCase().includes(query)
    const areaMatch = college.area.toLowerCase().includes(query)
    const stationMatch = college.station.toLowerCase().includes(query)
    // Also check for partial matches at word boundaries
    const words = query.split(" ")
    const wordMatch = words.some(
      (word) => college.name.toLowerCase().includes(word) || college.area.toLowerCase().includes(word),
    )
    return nameMatch || areaMatch || stationMatch || wordMatch
  })

  showCollegeDropdown(filteredColleges)
}

function showCollegeDropdown(colleges) {
  collegeDropdownEl.innerHTML = ""
  currentHighlightIndex = -1

  if (colleges.length === 0) {
    hideCollegeDropdown()
    return
  }

  colleges.forEach((college, index) => {
    const option = document.createElement("div")
    option.className = "college-option"
    option.innerHTML = `
      <div class="college-name">${college.name}</div>
      <div class="college-area">${college.area} • ${college.station}</div>
    `

    option.addEventListener("mousedown", (e) => {
      e.preventDefault() // Prevent blur event
      selectCollege(college)
    })

    collegeDropdownEl.appendChild(option)
  })

  collegeDropdownEl.classList.add("show")
}

function hideCollegeDropdown() {
  setTimeout(() => {
    collegeDropdownEl.classList.remove("show")
  }, 150)
}

function selectCollege(college) {
  selectedCollege = college
  collegeSearchEl.value = college.name
  hideCollegeDropdown()

  locationSelectEl.innerHTML = '<option value="">Select Station</option>'

  const nearbyStations = getNearbyStations(college)
  nearbyStations.forEach((station, index) => {
    const option = document.createElement("option")
    option.value = station
    option.textContent = station
    if (index === 0) {
      option.selected = true // Auto-select the primary station
    }
    locationSelectEl.appendChild(option)
  })

  applyFilters()
}

function handleCollegeKeydown(e) {
  const options = collegeDropdownEl.querySelectorAll(".college-option")

  if (e.key === "ArrowDown") {
    e.preventDefault()
    currentHighlightIndex = Math.min(currentHighlightIndex + 1, options.length - 1)
    updateHighlight(options)
  } else if (e.key === "ArrowUp") {
    e.preventDefault()
    currentHighlightIndex = Math.max(currentHighlightIndex - 1, -1)
    updateHighlight(options)
  } else if (e.key === "Enter") {
    e.preventDefault()
    if (currentHighlightIndex >= 0 && options[currentHighlightIndex]) {
      const collegeName = options[currentHighlightIndex].querySelector(".college-name").textContent
      const college = mumbaiData.colleges.find((c) => c.name === collegeName)
      if (college) {
        selectCollege(college)
      }
    }
  } else if (e.key === "Escape") {
    hideCollegeDropdown()
  }
}

function updateHighlight(options) {
  options.forEach((option, index) => {
    option.classList.toggle("highlighted", index === currentHighlightIndex)
  })
}

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
  const collegeQuery = collegeSearchEl.value.toLowerCase()
  const selectedStation = locationSelectEl.value
  const kind = kindEl.value
  const min = Number(document.getElementById("minPrice").value || 0)
  const max = Number(document.getElementById("maxPrice").value || 0)

  const filtered = listingsData.filter((l) => {
    const matchesCollege =
      !collegeQuery ||
      l.title.toLowerCase().includes(collegeQuery) ||
      l.location.toLowerCase().includes(collegeQuery) ||
      l.desc.toLowerCase().includes(collegeQuery) ||
      l.distance.toLowerCase().includes(collegeQuery) ||
      (l.college && l.college.toLowerCase().includes(collegeQuery)) ||
      // Check if any word in the query matches
      collegeQuery
        .split(" ")
        .some(
          (word) =>
            l.title.toLowerCase().includes(word) ||
            l.location.toLowerCase().includes(word) ||
            (l.college && l.college.toLowerCase().includes(word)),
        )

    const matchesStation =
      !selectedStation || (l.station && l.station.includes(selectedStation.replace(" Station", "")))

    const matchesKind = kind === "all" || l.kind === kind
    const matchesPrice = (!min || l.price >= min) && (!max || (l.price && l.price <= max))
    const matchesGender = !currentGenderFilter || l.gender === currentGenderFilter

    return matchesCollege && matchesStation && matchesKind && matchesPrice && matchesGender
  })

  const sortVal = sortEl.value
  if (sortVal === "price_asc") filtered.sort((a, b) => (a.price || 0) - (b.price || 0))
  else if (sortVal === "price_desc") filtered.sort((a, b) => (b.price || 0) - (a.price || 0))
  else filtered.sort((a, b) => b.id - a.id)

  renderListings(filtered)
}

document.getElementById("applyFilters").addEventListener("click", applyFilters)
document.getElementById("resetFilters").addEventListener("click", () => {
  collegeSearchEl.value = ""
  locationSelectEl.value = ""
  selectedCollege = null
  document.getElementById("minPrice").value = ""
  document.getElementById("maxPrice").value = ""
  kindEl.value = "all"
  currentGenderFilter = ""
  document.querySelectorAll("[data-gender]").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll("#categoryList .chip").forEach((c) => c.classList.remove("active"))
  document.querySelector('#categoryList .chip[data-kind="all"]').classList.add("active")
  applyFilters()
})

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

// Event listeners for real-time search and sorting
locationSelectEl.addEventListener("change", applyFilters)
sortEl.addEventListener("change", applyFilters)

document.addEventListener("DOMContentLoaded", () => {
  initializeLocationDropdown()
  setupCollegeSearch()
  applyFilters() // Show all listings initially
})

function getNearbyStations(college) {
  const collegeStation = college.station
  const allStations = mumbaiData.stations

  // Find the main station and add nearby ones
  const nearbyStations = [collegeStation]

  const stationMappings = {
    "Bandra Station (W)": [
      "Bandra Station",
      "Khar Station",
      "Santa Cruz Station",
      "Mahim Station",
      "Andheri Station",
      "Vile Parle Station",
      "Jogeshwari Station",
      "Dadar Station",
      "Matunga Station",
      "Goregaon Station",
    ],
    "Kanjurmarg / Vikhroli": [
      "Kanjurmarg Station",
      "Vikhroli Station",
      "Kurla Station",
      "Vidyavihar Station",
      "Thane Station",
      "Dadar Station",
      "Matunga Station",
      "Chembur Station",
      "Andheri Station",
      "Goregaon Station",
    ],
    "Matunga / Dadar": [
      "Matunga Station",
      "Dadar Station",
      "Kurla Station",
      "Byculla Station",
      "Vidyavihar Station",
      "Chembur Station",
      "Kanjurmarg Station",
      "Thane Station",
      "Andheri Station",
      "Santa Cruz Station",
    ],
    "Vile Parle Station": [
      "Vile Parle Station",
      "Andheri Station",
      "Santa Cruz Station",
      "Khar Station",
      "Jogeshwari Station",
      "Bandra Station",
      "Goregaon Station",
      "Malad Station",
      "Kandivali Station",
      "Dadar Station",
    ],
    "Andheri Station": [
      "Andheri Station",
      "Vile Parle Station",
      "Jogeshwari Station",
      "Goregaon Station",
      "Santa Cruz Station",
      "Khar Station",
      "Bandra Station",
      "Malad Station",
      "Kandivali Station",
      "Borivali Station",
    ],
    "Vidyavihar Station": [
      "Vidyavihar Station",
      "Kurla Station",
      "Matunga Station",
      "Dadar Station",
      "Kanjurmarg Station",
      "Chembur Station",
      "Thane Station",
      "Vikhroli Station",
      "Byculla Station",
      "Andheri Station",
    ],
    "Chembur Station": [
      "Chembur Station",
      "Kurla Station",
      "Vidyavihar Station",
      "Dadar Station",
      "Byculla Station",
      "Matunga Station",
      "Kanjurmarg Station",
      "Thane Station",
      "Vikhroli Station",
      "Andheri Station",
    ],
    "Thane Station": [
      "Thane Station",
      "Kanjurmarg Station",
      "Vikhroli Station",
      "Kurla Station",
      "Kopar Khairane Station",
      "Vidyavihar Station",
      "Nerul Station",
      "Kharghar Station",
      "Dadar Station",
      "Matunga Station",
    ],
    "Borivali Station": [
      "Borivali Station",
      "Kandivali Station",
      "Malad Station",
      "Goregaon Station",
      "Andheri Station",
      "Jogeshwari Station",
      "Vile Parle Station",
      "Santa Cruz Station",
      "Vasai Road Station",
      "Khar Station",
    ],
    "Byculla Station": [
      "Byculla Station",
      "Dadar Station",
      "Matunga Station",
      "Chembur Station",
      "Kurla Station",
      "Vidyavihar Station",
      "Kanjurmarg Station",
      "Thane Station",
      "Andheri Station",
      "Santa Cruz Station",
    ],
    "Panvel Station": [
      "Panvel Station",
      "Kharghar Station",
      "Nerul Station",
      "Kopar Khairane Station",
      "Thane Station",
      "Kanjurmarg Station",
      "Vikhroli Station",
      "Kurla Station",
      "Vidyavihar Station",
      "Dadar Station",
    ],
    "Kharghar Station": [
      "Kharghar Station",
      "Panvel Station",
      "Nerul Station",
      "Kopar Khairane Station",
      "Thane Station",
      "Kanjurmarg Station",
      "Vikhroli Station",
      "Kurla Station",
      "Vidyavihar Station",
      "Dadar Station",
    ],
    "Vasai Road Station": [
      "Vasai Road Station",
      "Borivali Station",
      "Kandivali Station",
      "Malad Station",
      "Goregaon Station",
      "Andheri Station",
      "Jogeshwari Station",
      "Vile Parle Station",
      "Santa Cruz Station",
      "Khar Station",
    ],
    "Nerul Station": [
      "Nerul Station",
      "Kharghar Station",
      "Panvel Station",
      "Kopar Khairane Station",
      "Thane Station",
      "Kanjurmarg Station",
      "Vikhroli Station",
      "Kurla Station",
      "Vidyavihar Station",
      "Dadar Station",
    ],
    "Kurla Station": [
      "Kurla Station",
      "Vidyavihar Station",
      "Chembur Station",
      "Dadar Station",
      "Matunga Station",
      "Kanjurmarg Station",
      "Thane Station",
      "Vikhroli Station",
      "Byculla Station",
      "Andheri Station",
    ],
    "Kopar Khairane Station": [
      "Kopar Khairane Station",
      "Nerul Station",
      "Kharghar Station",
      "Thane Station",
      "Panvel Station",
      "Kanjurmarg Station",
      "Vikhroli Station",
      "Kurla Station",
      "Vidyavihar Station",
      "Dadar Station",
    ],
  }

  return stationMappings[collegeStation] || [collegeStation]
}
