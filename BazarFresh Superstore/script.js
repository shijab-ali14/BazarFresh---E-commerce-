
// Store Product Database
const productsData = [
    {
        id: 'p1',
        title: 'তাজা দেশি টমেটো (Fresh Tomatoes)',
        category: 'veg',
        price: 60,
        oldPrice: 80,
        unit: '1 kg',
        discount: 25,
        rating: 4.9,
        isFlash: true,
        desc: 'সরাসরি রুট লেভেল ফার্ম থেকে সংগৃহীত লাল ও তাজা দেশি টমেটো। কেমিক্যাল মুক্ত।',
        img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'p2',
        title: 'খাঁটি তরল দুধ (Pasteurized Milk)',
        category: 'dairy',
        price: 90,
        oldPrice: 100,
        unit: '1 Liter',
        discount: 10,
        rating: 4.8,
        isFlash: false,
        desc: '১০০% খাঁটি ও পাসচুরাইজড গাভীর দুধ। সুস্বাদু ও পুষ্টিকর।',
        img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'p3',
        title: 'তাজা নদীর রুই মাছ (Rui Fish Cleaned)',
        category: 'meat',
        price: 380,
        oldPrice: 420,
        unit: '1.2 kg (Cleaned)',
        discount: 10,
        rating: 4.9,
        isFlash: true,
        desc: 'পদ্মা নদীর তাজা রুই মাছ। সুন্দরভাবে কেটে পরিষ্কার করে প্যাক করা।',
        img: 'https://thumbs.dreamstime.com/b/rohu-rui-ruhi-roho-labeo-species-fish-carp-family-found-rivers-south-asia-freshly-caught-piled-together-ready-396513660.jpg'
    },
    {
        id: 'p4',
        title: 'প্রিমিয়াম মিনিকেট চাল (Miniket Rice)',
        category: 'grocery',
        price: 72,
        oldPrice: 80,
        unit: '1 kg',
        discount: 10,
        rating: 5.0,
        isFlash: false,
        desc: 'ঝরঝরে ও সুগন্ধি প্রিমিয়াম গ্রেড মিনিকেট চাউল।',
        img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'p5',
        title: 'সবুজ তাজা ক্যাপসিকাম (Green Capsicum)',
        category: 'veg',
        price: 140,
        oldPrice: 180,
        unit: '500 g',
        discount: 22,
        rating: 4.7,
        isFlash: true,
        desc: 'তাজা সতেজ ক্রিসপি গ্রিন ক্যাপসিকাম।',
        img: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'p6',
        title: 'ফার্মের ডিম (Layer Eggs Batch)',
        category: 'dairy',
        price: 145,
        oldPrice: 160,
        unit: '12 Pcs (1 Dozen)',
        discount: 9,
        rating: 4.8,
        isFlash: true,
        desc: 'তাজা ও বড় আকারের ব্রাউন ডিম।',
        img: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 'p7',
        title: 'দেশি ব্রয়লার চিকেন (Cleaned Chicken)',
        category: 'meat',
        price: 210,
        oldPrice: 240,
        unit: '1 kg',
        discount: 12,
        rating: 4.8,
        isFlash: false,
        desc: 'হ্যালল প্রসেসড চামড়া ছাড়ানো ফ্রেশ চিকেন।',
        img: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'p8',
        title: 'প্রিমিয়াম কাচাগোল্লা/মিষ্টি (Sweets)',
        category: 'snacks',
        price: 320,
        oldPrice: 350,
        unit: '500 g',
        discount: 8,
        rating: 4.9,
        isFlash: false,
        desc: 'খাটি ছানার তৈরি সুস্বাদু মিষ্টি।',
        img: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=500&q=80'
    }
];

// App State
let currentTab = 'all';
let cart = [];
let appliedCouponDiscount = 0;

// Render Flash Products Section
function renderFlashDeals() {
    const flashContainer = document.getElementById('flashProductsGrid');
    flashContainer.innerHTML = '';

    const flashItems = productsData.filter(p => p.isFlash);
    flashItems.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-slate-800 rounded-3xl p-4 border border-slate-700 space-y-3 flex flex-col justify-between";
        card.innerHTML = `
            <div class="relative rounded-2xl overflow-hidden h-36 bg-slate-900">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover">
                <span class="absolute top-2 left-2 bg-citrus-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase">${item.discount}% OFF</span>
            </div>

            <div class="space-y-1">
                <h4 class="font-bold font-bangla text-white text-sm line-clamp-1">${item.title}</h4>
                <p class="text-[11px] text-slate-400">${item.unit}</p>
                <div class="flex items-center space-x-2 pt-1">
                    <span class="text-lg font-black text-citrus-400 font-serif">৳${item.price}</span>
                    <span class="text-xs text-slate-500 line-through font-serif">৳${item.oldPrice}</span>
                </div>
            </div>

            <button onclick="addToCart('${item.id}')" class="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs uppercase transition-colors flex items-center justify-center gap-2">
                <i class="fa-solid fa-cart-plus"></i> Add To Cart
            </button>
        `;
        flashContainer.appendChild(card);
    });
}

// Render Standard Product Cards
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const sortVal = document.getElementById('sortSelect').value;
    const searchVal = document.getElementById('globalSearchInput').value.toLowerCase();
    
    grid.innerHTML = '';

    let filtered = productsData.filter(p => {
        const matchTab = currentTab === 'all' || p.category === currentTab;
        const matchSearch = p.title.toLowerCase().includes(searchVal);
        return matchTab && matchSearch;
    });

    // Sorting Logic
    if (sortVal === 'lowToHigh') filtered.sort((a,b) => a.price - b.price);
    if (sortVal === 'highToLow') filtered.sort((a,b) => b.price - a.price);
    if (sortVal === 'discount') filtered.sort((a,b) => b.discount - a.discount);

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-400 font-bangla">
                <i class="fa-solid fa-basket-shopping text-4xl mb-2"></i>
                <p class="font-bold text-base">কোনো প্রোডাক্ট পাওয়া যায়নি!</p>
            </div>
        `;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-3xl p-4 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group";
        card.innerHTML = `
            <div>
                <div class="relative rounded-2xl overflow-hidden h-44 bg-slate-100 mb-3">
                    <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <span class="absolute top-2.5 left-2.5 bg-freshRed text-white font-black text-[10px] px-2.5 py-0.5 rounded-full">${p.discount}% OFF</span>
                    <button onclick="openQuickView('${p.id}')" class="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 text-slate-700 flex items-center justify-center text-xs shadow-md hover:bg-brand-600 hover:text-white transition-colors" title="Quick View">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                </div>

                <div class="space-y-1 mb-3">
                    <span class="text-[10px] font-bold text-brand-700 uppercase bg-brand-50 px-2 py-0.5 rounded">${p.unit}</span>
                    <h3 class="font-bold font-bangla text-slate-900 text-sm line-clamp-1 group-hover:text-brand-600 transition-colors">${p.title}</h3>
                    <div class="flex items-center space-x-1 text-[11px] text-amber-500">
                        <i class="fa-solid fa-star"></i> <span class="font-bold text-slate-700">${p.rating}</span>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-between pt-2 border-t border-slate-100">
                <div>
                    <span class="text-xl font-black text-slate-900 font-serif">৳${p.price}</span>
                    <span class="text-xs text-slate-400 line-through font-serif ml-1">৳${p.oldPrice}</span>
                </div>
                <button onclick="addToCart('${p.id}')" class="px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1">
                    <i class="fa-solid fa-plus"></i> Add
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterByTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.prod-tab').forEach(b => b.className = "prod-tab px-4 py-2 rounded-xl text-slate-700 hover:text-slate-950 transition-all");
    event.target.className = "prod-tab active px-4 py-2 rounded-xl bg-brand-600 text-white transition-all";
    renderProducts();
}

function setMainCategory(cat) {
    currentTab = cat;
    renderProducts();
}

function handleGlobalSearch() {
    renderProducts();
}

// Cart Actions
function addToCart(id) {
    const product = productsData.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    toggleCartDrawer(true);
}

function updateCartUI() {
    const container = document.getElementById('cartItemsContainer');
    const emptyMsg = document.getElementById('emptyCartMsg');
    const badge = document.getElementById('headerCartBadge');

    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = totalCount;

    if (cart.length === 0) {
        emptyMsg.classList.remove('hidden');
        container.innerHTML = '';
        container.appendChild(emptyMsg);
    } else {
        emptyMsg.classList.add('hidden');
        container.innerHTML = '';

        cart.forEach((item, index) => {
            const row = document.createElement('div');
            row.className = "bg-slate-50 p-3 rounded-2xl border border-slate-200/80 flex items-center justify-between";
            row.innerHTML = `
                <div class="flex items-center space-x-3">
                    <img src="${item.img}" class="w-12 h-12 rounded-xl object-cover">
                    <div>
                        <h4 class="font-bold text-slate-900 text-xs font-bangla line-clamp-1">${item.title}</h4>
                        <span class="text-xs text-brand-700 font-black">৳${item.price}</span>
                    </div>
                </div>

                <div class="flex items-center space-x-2">
                    <div class="flex items-center space-x-1.5 bg-white p-1 rounded-lg border border-slate-200">
                        <button onclick="changeQty(${index}, -1)" class="w-5 h-5 flex items-center justify-center font-bold text-xs">-</button>
                        <span class="text-xs font-bold w-4 text-center">${item.qty}</span>
                        <button onclick="changeQty(${index}, 1)" class="w-5 h-5 flex items-center justify-center font-bold text-xs">+</button>
                    </div>
                </div>
            `;
            container.appendChild(row);
        });
    }

    // Calculation
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const delivery = subtotal > 999 || subtotal === 0 ? 0 : 60;
    const total = Math.max(0, subtotal - appliedCouponDiscount + delivery);

    document.getElementById('cartSubtotal').textContent = `৳${subtotal}`;
    document.getElementById('cartDiscount').textContent = `-৳${appliedCouponDiscount}`;
    document.getElementById('cartDeliveryFee').textContent = delivery === 0 ? 'FREE' : `৳${delivery}`;
    document.getElementById('cartTotal').textContent = `৳${total}`;
    document.getElementById('checkoutTotalVal').textContent = total;
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    updateCartUI();
}

function applyCoupon() {
    const code = document.getElementById('couponInput').value.trim().toUpperCase();
    if (code === 'FRESH50') {
        appliedCouponDiscount = 100;
        alert('কুপন সক্রিয় হয়েছে! ৳১০০ ডিসকাউন্ট যুক্ত করা হয়েছে।');
    } else {
        alert('দুঃখিত, কুপন কোডটি সঠিক নয়।');
    }
    updateCartUI();
}

function toggleCartDrawer(forceOpen = false) {
    const drawer = document.getElementById('cartDrawer');
    const content = document.getElementById('cartContent');

    if (forceOpen || drawer.classList.contains('opacity-0')) {
        drawer.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('translate-x-full');
    } else {
        drawer.classList.add('opacity-0', 'pointer-events-none');
        content.classList.add('translate-x-full');
    }
}

// Quick View Modal
function openQuickView(id) {
    const p = productsData.find(item => item.id === id);
    if (!p) return;

    document.getElementById('qvImage').src = p.img;
    document.getElementById('qvTitle').textContent = p.title;
    document.getElementById('qvCategory').textContent = p.category.toUpperCase();
    document.getElementById('qvUnit').textContent = p.unit;
    document.getElementById('qvPrice').textContent = `৳${p.price}`;
    document.getElementById('qvOldPrice').textContent = `৳${p.oldPrice}`;
    document.getElementById('qvDesc').textContent = p.desc;

    document.getElementById('qvAddToCartBtn').onclick = () => {
        addToCart(p.id);
        closeQuickView();
    };

    document.getElementById('quickViewModal').classList.remove('hidden');
}

function closeQuickView() {
    document.getElementById('quickViewModal').classList.add('hidden');
}

// Budget Calculator Logic
function calculateBudget() {
    const size = parseInt(document.getElementById('calcFamilySize').value);
    const diet = document.getElementById('calcDietType').value;

    let baseCost = size * 600;
    if (diet === 'veg') baseCost *= 0.8;
    if (diet === 'premium') baseCost *= 1.3;

    const savings = Math.round(baseCost * 0.15);

    document.getElementById('calcEstCost').textContent = `৳${Math.round(baseCost)}`;
    document.getElementById('calcSavings').textContent = `৳${savings} / week`;
}

// Modals
function openCheckoutModal() {
    if (cart.length === 0) return alert('আপনার কার্ট খালি!');
    toggleCartDrawer();
    document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.add('hidden');
}

function handlePlaceOrder(e) {
    e.preventDefault();
    cart = [];
    updateCartUI();
    closeCheckoutModal();
    toggleTrackerModal();
}

function toggleTrackerModal() {
    const modal = document.getElementById('trackerModal');
    modal.classList.toggle('hidden');
}

function toggleLocationModal() {
    const modal = document.getElementById('locationModal');
    modal.classList.toggle('hidden');
}

function setLocation(loc) {
    document.getElementById('currentLocationText').textContent = loc;
    toggleLocationModal();
}

// Countdown Timer
function startTimer() {
    let h = 4, m = 32, s = 18;
    setInterval(() => {
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        document.getElementById('timerHours').textContent = String(h).padStart(2, '0');
        document.getElementById('timerMinutes').textContent = String(m).padStart(2, '0');
        document.getElementById('timerSeconds').textContent = String(s).padStart(2, '0');
    }, 1000);
}

// Initial Load
window.onload = function() {
    renderFlashDeals();
    renderProducts();
    startTimer();
};