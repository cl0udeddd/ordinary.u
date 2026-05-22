// CORE DATA
const ALL_PRODUCTS = [
    { id: '1', name: 'Hoodie', price: 250000, desc: 'Hoodie hangat berbahan katun premium, cocok untuk musim dingin.', imgSrc: 'img/hoddie.png', category: 'pakaian', store: 'Hoodie Official Store' },
    { id: '2', name: 'Sneakers', price: 450000, desc: 'Sneakers dengan gaya 90an yang timeless dan nyaman dipakai harian.', imgSrc: 'img/sneakers.png', category: 'aksesoris', store: 'Store Sneakers' },
    { id: '3', name: 'Flannel', price: 220000, desc: 'Kemeja flanel kotak-kotak klasik.', imgSrc: 'img/flannel.png', category: 'pakaian', store: 'Pakaian Official Store' },
    { id: '4', name: 'Kemeja', price: 280000, desc: 'Kemeja linen ringan untuk tampilan kasual dan elegan.', imgSrc: 'img/kemeja.jpg', category: 'pakaian', store: 'Kemeja Official Store' },
    { id: '5', name: 'Celana Chinos', price: 320000, desc: 'Celana chino katun dengan potongan slim fit yang modern.', imgSrc: 'img/celana.jpg', category: 'pakaian', store: 'Celana Official Store' },
    { id: '6', name: 'Jam Tangan Kulit', price: 550000, desc: 'Jam tangan analog dengan strap kulit asli, memberikan kesan mewah.', imgSrc: 'img/jam1.jpg', category: 'aksesoris', store: 'Jam Official Store' },
    { id: '7', name: 'Tas Tote Kanvas', price: 150000, desc: 'Tas kanvas minimalis untuk bawaan sehari-hari.', imgSrc: 'img/tas.jpg', category: 'aksesoris', store: 'Tas Official Store' },
    { id: '8', name: 'Kacamata Hitam', price: 220000, desc: 'Kacamata hitam gaya retro elegan.', imgSrc: 'img/kacamata.jpg', category: 'aksesoris', store: 'Kacamata Official Store' },
    { id: '9', name: 'Short Pants', price: 220000, desc: 'Celana pendek kasual untuk musim panas.', imgSrc: 'img/pendek.jpg', category: 'pakaian', store: 'Celana Official Store' },
    { id: '10', name: 'Loose pants', price: 220000, desc: 'Celana longgar bergaya santai.', imgSrc: 'img/loose.jpg', category: 'pakaian', store: 'Celana Official Store' },
    { id: '11', name: 'Work Jacket', price: 220000, desc: 'Jaket kerja bergaya vintage.', imgSrc: 'img/work.jpg', category: 'pakaian', store: 'Pakaian Official Store' },
    { id: '12', name: 'Varsity Jacket', price: 220000, desc: 'Jaket varsity klasik.', imgSrc: 'img/varsity.jpg', category: 'pakaian', store: 'Pakaian Official Store' },
    { id: '13', name: 'Varsity Jacket', price: 220000, desc: 'Sepatu flat yang nyaman.', imgSrc: 'img/varsity1.jpg', category: 'pakaian', store: 'Store Sepatu' },
    { id: '14', name: 'Dasi', price: 220000, desc: 'Dasi elegan untuk acara formal.', imgSrc: 'img/dasi.jpg', category: 'aksesoris', store: 'Aksesoris Formal' },
    { id: '15', name: 'Ikat Pinggang', price: 220000, desc: 'Ikat pinggang kulit premium.', imgSrc: 'img/pinggang.jpg', category: 'aksesoris', store: 'Aksesoris Kulit' },
    { id: '16', name: 'Tas Selempang', price: 220000, desc: 'Tas selempang praktis.', imgSrc: 'img/selempang.jpg', category: 'aksesoris', store: 'Tas Official Store' },
    { id: '17', name: 'Sandal', price: 220000, desc: 'Sandal nyaman untuk kegiatan santai.', imgSrc: 'img/sendal.jpg', category: 'aksesoris', store: 'Store Sepatu' },
    { id: '18', name: 'Gelang', price: 220000, desc: 'Gelang bergaya minimalis.', imgSrc: 'img/gelang.jpg', category: 'aksesoris', store: 'Aksesoris Perhiasan' },
    { id: '19', name: 'Plants', price: 220000, desc: 'Tanaman hias kecil untuk dekorasi.', imgSrc: 'img/plants1.jpg', category: 'dekorasi', store: 'Store Dekorasi' },
    { id: '20', name: 'Neckless', price: 220000, desc: 'Kalung bergaya minimalis dan elegan.', imgSrc: 'img/neckless.jpg', category: 'aksesoris', store: 'Aksesoris Perhiasan' },
    { id: '21', name: 'T-Shirt', price: 220000, desc: 'Kaos katun basic yang nyaman untuk sehari-hari.', imgSrc: 'img/tshirt.jpg', category: 'pakaian', store: 'Pakaian Official Store' },
    { id: '22', name: 'Cardigan (White)', price: 220000, desc: 'Cardigan putih bergaya kasual.', imgSrc: 'img/cardigan1.jpg', category: 'pakaian', store: 'Pakaian Official Store' },
    { id: '23', name: 'Cardigan (Brown)', price: 220000, desc: 'Cardigan rajut yang lembut.', imgSrc: 'img/cardigan2.jpg', category: 'pakaian', store: 'Pakaian Official Store' },
    { id: '24', name: 'Raincoat', price: 220000, desc: 'Jas hujan stylish dan fungsional.', imgSrc: 'img/rain.jpg', category: 'pakaian', store: 'Pakaian Official Store' },
    { id: '25', name: 'Training Pants', price: 220000, desc: 'Celana training yang nyaman untuk olahraga.', imgSrc: 'k14.jpg', category: 'pakaian', store: 'Celana Official Store' },
    { id: '26', name: 'Headphone', price: 220000, desc: 'Headphone nirkabel dengan kualitas suara jernih.', imgSrc: 'img/head.jpg', category: 'aksesoris', store: 'Aksesoris Elektronik' },
    { id: '27', name: 'Topi', price: 85000, desc: 'Topi baseball unisex minimalis dengan bordir elegan.', imgSrc: 'img/topi1.jpg', category: 'aksesoris', store: 'Store Aksesoris' },
    { id: '28', name: 'Bag (Small)', price: 220000, desc: 'Tas selempang multifungsi.', imgSrc: 'img/bag.jpg', category: 'aksesoris', store: 'Tas Official Store' },
    { id: '29', name: 'Denim Jacket', price: 220000, desc: 'Jaket denim klasik, mudah dipadukan.', imgSrc: 'img/denim.jpg', category: 'pakaian', store: 'Pakaian Official Store' },
    { id: '30', name: 'Keychains', price: 220000, desc: 'Gantungan kunci unik dengan desain modern.', imgSrc: 'k19.jpg', category: 'aksesoris', store: 'Store Aksesoris' },
    { id: '31', name: 'Bomber Jacket', price: 220000, desc: 'Jaket bomber dengan lapisan tebal.', imgSrc: 'img/bomber.jpg', category: 'pakaian', store: 'Pakaian Official Store' },
    { id: '32', name: 'Sweet Pants', price: 220000, desc: 'Celana jogger yang sangat nyaman dan lembut.', imgSrc: 'img/sweetpants.jpg', category: 'pakaian', store: 'Celana Official Store' },
    { id: '33', name: 'Sweater', price: 220000, desc: 'Sweater rajut hangat dengan warna netral.', imgSrc: 'img/sweater.jpg', category: 'pakaian', store: 'Pakaian Official Store' },
    { id: '34', name: 'Tracktop', price: 220000, desc: 'Jaket tracktop bergaya sporty.', imgSrc: 'img/track.jpg', category: 'pakaian', store: 'Pakaian Official Store' },
    { id: '35', name: 'Loose Jeans', price: 220000, desc: 'Celana jeans longgar untuk gaya santai.', imgSrc: 'img/looseje.jpg', category: 'pakaian', store: 'Celana Official Store' },
    { id: '36', name: 'Blue Jeans', price: 220000, desc: 'Celana jeans biru klasik yang serbaguna.', imgSrc: 'img/blue.jpg', category: 'pakaian', store: 'Celana Official Store' }
];

// === SLIDER LOGIC ===
let slideIndex = 0;
const slides = document.querySelectorAll(".slide"); 
const slideWrapper = document.querySelector(".slide-wrapper");
const totalSlides = slides.length;

function showSlides(n) {
    if (!slideWrapper || totalSlides === 0) return;

    // Logika Looping: Kalau lebih dari total, balik ke 0. Kalau kurang dari 0, ke terakhir.
    if (n >= totalSlides) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = n;
    }

    // Geser wrapper berdasarkan index
    slideWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function autoSlides() {
    showSlides(slideIndex + 1);
}

// Inisialisasi
if (document.querySelector('.slider-section')) {
    showSlides(0); 
    // Ganti ke 4000ms (4 detik) sesuai request kamu
    setInterval(autoSlides, 4000); 
}
// CART CORE LOGIC (Dipakai di semua halaman)

let cartItems = [];
let cartCountElement;

const updateCartState = () => {
    const totalItems = cartItems.reduce((total, item) => total + (parseInt(item.quantity) || 0), 0);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    if (cartCountElement) { cartCountElement.textContent = totalItems; }
};

function addToCart(id, name, price, quantity = 1) { 
    price = parseFloat(price) || 0;
    quantity = parseInt(quantity) || 1;

    const existingItem = cartItems.find(item => item.id === id);
    const productInfo = ALL_PRODUCTS.find(p => p.id === id);
    // Menggunakan img dari ALL_PRODUCTS untuk konsistensi
    const imgSrc = productInfo ? productInfo.imgSrc : 'placeholder.jpg'; 
    const storeName = productInfo ? productInfo.store : name.split(' ')[0] + ' Official Store'; 

    if (existingItem) {
        existingItem.quantity += quantity; 
    } else {
        cartItems.push({
            id: id, 
            name: name, 
            price: price, 
            quantity: quantity, 
            store: storeName,
            imgSrc: imgSrc,
            selected: true 
        });
    }
    updateCartState();
    alert(`${quantity}x ${name} berhasil ditambahkan ke keranjang!`);
    
    if (window.location.pathname.includes('kart.html')) {
        renderCartItems(); 
    }
}

function removeItemFromCart(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    updateCartState();      
    renderCartItems(); 
}

function changeQuantity(id, delta) {
    const item = cartItems.find(i => i.id === id);
    if (item) {
        const newQuantity = item.quantity + delta;
        
        if (newQuantity >= 1) {
            item.quantity = newQuantity;
            updateCartState();
            renderCartItems();
        } else {
            // Jika kuantitas kurang dari 1, hapus item
            removeItemFromCart(id); 
        }
    }
}

// LOGIKA Halaman KATALOG & PENCARIAN (index.html dan pr.html

function renderProductCatalog(productsToRender, containerId) { 
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (productsToRender.length === 0) {
        container.innerHTML = '<p style="text-align: center; margin-top: 30px;">Tidak ada produk yang ditemukan sesuai kriteria.</p>';
        return;
    }
    
    let html = '';
    productsToRender.forEach(product => {
        const imgSrcPath = product.imgSrc; 

        html += `
             <a href="detail.html?id=${product.id}" class="product-card-link" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">
                 <div class="product-card">
                     <img src="${imgSrcPath}" alt="${product.name}">
                     <div class="product-info">
                         <h3>${product.name}</h3>
                         <p class="price">Rp ${product.price.toLocaleString('id-ID')}</p>
                         <button class="btn btn-outline add-to-cart-btn">Tambah</button>
                     </div>
                 </div>
             </a>
        `;
    });
    container.innerHTML = html;
}

/**
 * Fungsi untuk memfilter dan me-render produk di pr.html
 */
function applyPrPageFilters(currentSearchQuery) {
    const filterDropdown = document.getElementById('category-filter');
    const selectedCategory = filterDropdown ? filterDropdown.value : 'all';
    
    let productsToRender = ALL_PRODUCTS; 

    // 1. LOGIKA FILTER KATA KUNCI ('q')
    if (currentSearchQuery) {
        const query = currentSearchQuery.toLowerCase();
        productsToRender = productsToRender.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.desc.toLowerCase().includes(query) ||
            (product.category && product.category.toLowerCase().includes(query)) // Tambah cek null untuk category
        );
    }
    
    // 2. LOGIKA FILTER KATEGORI ('category')
    if (selectedCategory && selectedCategory.toLowerCase() !== 'all') {
         productsToRender = productsToRender.filter(product => 
             product.category && product.category.toLowerCase() === selectedCategory.toLowerCase()
         );
    }
    
    renderProductCatalog(productsToRender, 'full-product-catalog'); 
}

// LOGIKA Halaman DETAIL PRODUK (detail.html)

function loadProductDetails() {
    if (window.location.pathname.includes('detail.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const detailSection = document.querySelector('.product-detail-section');
        
        if (!productId || !detailSection) {
            if (detailSection) detailSection.innerHTML = '<h1 style="text-align: center; margin-top: 50px; font-family: \'Playfair Display\', serif;">ID Produk tidak ditemukan.</h1>';
            return;
        }

        const product = ALL_PRODUCTS.find(p => p.id === productId);

        if (product) {
            // ... (HTML Detail Produk - sama seperti sebelumnya) ...
             detailSection.innerHTML = `
                <div class="detail-content-wrapper">
                    <div class="detail-image-container">
                        <img src="${product.imgSrc}" alt="${product.name}">
                        </div>
                    <div class="detail-info">
                        <h1 id="product-name">${product.name}</h1>
                        <p class="product-price">Rp ${product.price.toLocaleString('id-ID')}</p>
                        
                        <div class="description-box">
                            <h3 style="font-weight: 600; margin-bottom: 10px;">Deskripsi</h3>
                            <p class="product-description">${product.desc}</p>
                        </div>

                        <div class="quantity-control">
                            <label>Kuantitas:</label>
                            <div class="quantity-input-group">
                                <button type="button" class="qty-btn" id="decrease-detail-qty">-</button>
                                <input type="number" id="product-quantity" value="1" min="1" max="10" readonly>
                                <button type="button" class="qty-btn" id="increase-detail-qty">+</button>
                            </div>
                        </div>
                        
                        <button id="add-to-cart-detail" class="btn btn-black" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">
                            <i class="fa-solid fa-bag-shopping"></i> Tambah ke Keranjang
                        </button>
                        
                        <p class="product-id-display" id="product-id-display">ID: ${product.id}</p>
                    </div>
                </div>
            `;


            const detailBtn = document.getElementById('add-to-cart-detail');
            const quantityInput = document.getElementById('product-quantity');
            const decreaseBtn = document.getElementById('decrease-detail-qty');
            const increaseBtn = document.getElementById('increase-detail-qty');
            
            if (decreaseBtn && increaseBtn && quantityInput) {
                decreaseBtn.addEventListener('click', () => {
                    let qty = parseInt(quantityInput.value);
                    if (qty > 1) {
                        quantityInput.value = qty - 1;
                    }
                });

                increaseBtn.addEventListener('click', () => {
                    let qty = parseInt(quantityInput.value);
                    if (qty < 10) { 
                        quantityInput.value = qty + 1;
                    }
                });
            }

            if(detailBtn && quantityInput) {
                detailBtn.addEventListener('click', () => {
                    const quantity = parseInt(quantityInput.value) || 1;
                    addToCart(product.id, product.name, product.price, quantity); 
                });
            }
            
        } else if (detailSection) {
            detailSection.innerHTML = '<h1 style="text-align: center; margin-top: 50px; font-family: \'Playfair Display\', serif;">Produk tidak ditemukan.</h1>';
        }
    }
}
// Taruh di bagian paling bawah file script.js kamu
document.addEventListener('click', function(e) {
    // Kita cek apakah yang diklik itu tombol dengan ID back-to-previous
    // atau icon di dalam tombol tersebut
    if (e.target.closest('#back-to-previous')) {
        window.history.back();
    }
});

// LOGIKA Halaman KERANJANG (kart.html)

function renderCartItems() {
    // ... (Logika render cart - sama seperti sebelumnya) ...
    const cartContainer = document.getElementById('cart-items-container');
    const finalTotalDisplay = document.getElementById('final-total-display'); 
    
    if (!cartContainer || !finalTotalDisplay) return;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p style="text-align: center; margin-top: 50px; padding: 20px; font-style: italic;">Keranjang Anda kosong. Yuk, belanja! 🛒</p>';
        finalTotalDisplay.textContent = 'Rp 0';
        return;
    }

    let itemsHtml = '';
    let finalTotal = 0;
    
    const groupedItems = cartItems.reduce((acc, item) => {
        const storeName = item.store || 'Toko Lain';
        if (!acc[storeName]) {
            acc[storeName] = [];
        }
        acc[storeName].push(item);
        return acc;
    }, {});

    for (const store in groupedItems) {
        itemsHtml += `
             <div class="store-group">
                 <div class="store-header">
                     <i class="fa-solid fa-store" style="color: #666;"></i>
                     <h3>Toko: ${store}</h3>
                 </div>
                 ${groupedItems[store].map(item => {
                     const price = parseFloat(item.price) || 0;
                     const quantity = parseInt(item.quantity) || 0;
                     const totalHarga = price * quantity;
                     finalTotal += totalHarga;
                     
                     return `
                         <div class="cart-item" data-id="${item.id}">
                             <img src="${item.imgSrc}" alt="${item.name}">
                             
                             <div class="item-details">
                                 <h4>${item.name}</h4>
                                 <p class="item-price">Harga: Rp ${price.toLocaleString('id-ID')}</p>
                                 <p class="item-note">Subtotal Item: <strong>Rp ${totalHarga.toLocaleString('id-ID')}</strong></p> 
                             </div>

                             <div class="item-quantity-control">
                                 <button class="btn-quantity-decrease" data-id="${item.id}">-</button>
                                 <span class="item-qty-value">${quantity}</span>
                                 <button class="btn-quantity-increase" data-id="${item.id}">+</button>
                             </div>
                         </div>
                     `;
                 }).join('')}
             </div>
        `;
    }

    cartContainer.innerHTML = itemsHtml;
    finalTotalDisplay.textContent = `Rp ${finalTotal.toLocaleString('id-ID')}`;
    
    
    document.querySelectorAll('.btn-quantity-increase').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            changeQuantity(id, 1);
        });
    });

    document.querySelectorAll('.btn-quantity-decrease').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            changeQuantity(id, -1);
        });
    });
}

// LOGIKA MODAL VOUCHER (kart.html)

function initializeVoucherModal() {
    const voucherModal = document.getElementById('voucher-modal');
    const openVoucherBtn = document.getElementById('open-voucher-modal');
    const closeBtn = document.querySelector('#voucher-modal .close-btn');
    const applyBtn = document.getElementById('apply-voucher-btn');
    const voucherInput = document.getElementById('voucher-input');
    const message = document.getElementById('voucher-message');

    if (voucherModal && openVoucherBtn && closeBtn) {
        voucherModal.style.display = 'none';

        openVoucherBtn.addEventListener('click', () => {
            voucherModal.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            voucherModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === voucherModal) {
                voucherModal.style.display = 'none';
            }
        });
        
        applyBtn.addEventListener('click', () => {
            const code = voucherInput.value.toUpperCase().trim();
            
            // Cek voucher dari game (Memory Match dan Math Quiz)
            const memoryVoucher = localStorage.getItem('memory_voucher');
            const mathVoucher = localStorage.getItem('math_voucher');

            // Cek apakah kode yang dimasukkan cocok dengan kode statis atau kode game
            if (code === 'HEMAT20' || code === 'COBA10' || code === memoryVoucher || code === mathVoucher) {
                let successMessage = `Voucher ${code} berhasil diterapkan!`;
                
                if (code === memoryVoucher) {
                    successMessage += " (Diskon 10% Game Memori)";
                    localStorage.removeItem('memory_voucher');
                } else if (code === mathVoucher) {
                    const discount = code.match(/MATH(\d+)/); 
                    const percent = discount ? discount[1] : 0;
                    successMessage += ` (Diskon ${percent}% Game Matematika)`; 
                    localStorage.removeItem('math_voucher');
                } 
                
                message.textContent = successMessage;
                message.style.color = 'green';
                alert(`${successMessage} (Anggap diskon diterapkan).`);
                voucherModal.style.display = 'none';
                
            } else {
                message.textContent = 'Kode voucher tidak valid.';
                message.style.color = 'red';
            }
        });
    }
}

// LOGIKA MINI GAME MEMORY MATCH (index.html)

function initializeMemoryMatchGame() {
    // *** FIX ID: MENGGUNAKAN 'memory-modal' SESUAI REVISI HTML ***
    const memoryModal = document.getElementById('memory-modal'); 
    const openMemoryBtn = document.getElementById('open-memory-match-btn'); // TOMBOL PEMBUKA
    const closeBtn = document.querySelector('#memory-modal .close-btn'); // Selektor spesifik
    const startMemoryBtn = document.getElementById('start-memory-btn');
    const memoryGrid = document.getElementById('memory-grid');
    const statusMessage = document.getElementById('status-message');
    const gameResultContainer = document.getElementById('game-result-container');
    const copyVoucherBtn = document.getElementById('copy-voucher-btn');
    const voucherDisplay = document.getElementById('voucher-code-display');
    
    // DEBUGGING: Cek apakah elemen penting ada sebelum melanjutkan
    if (!memoryModal || !openMemoryBtn || !startMemoryBtn || !memoryGrid) {
        console.error("Memory Match ERROR: Salah satu elemen kunci (modal/tombol/grid) tidak ditemukan. Inisialisasi dibatalkan.");
        return;
    }
    console.log("Memory Match SUCCESS: Semua elemen modal ditemukan dan diinisialisasi.");

    // PASTIKAN MODAL TERSEMBUNYI DI Awal
    memoryModal.style.display = 'none';
    
    // --- Modal Control (Koneksi Tombol Pembuka) ---
    openMemoryBtn.onclick = () => {
        memoryModal.style.display = 'flex'; // Gunakan flex untuk centering
        resetGame(); 
    }

    if(closeBtn) {
        closeBtn.onclick = () => {
             memoryModal.style.display = 'none';
        }
    }
    
    // ... (Logic Game: productIds, shuffle, handleCardClick, generateCards, 
    //      checkForMatch, disableCards, unflipCards, resetBoard, gameWon, resetGame) ...
    
    const productIds = ['3', '4', '10', '11', '12', '33', '31', '34']; 
    let cardsArray = [];
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let matchesFound = 0;

    function shuffle(array) {
        return array.sort(() => 0.5 - Math.random());
    }

    function handleCardClick(cardElement, cardData) {
        if (lockBoard) return;
        if (cardElement === firstCard || cardData.isMatched) return; 

        cardElement.classList.add('flipped');
        cardData.isFlipped = true;

        if (!firstCard) {
            firstCard = cardElement;
            return;
        }

        secondCard = cardElement;
        checkForMatch();
    }
    
    function generateCards() {
        const gameProductIds = shuffle([...productIds, ...productIds]);
        cardsArray = gameProductIds.map((id, index) => {
            const product = ALL_PRODUCTS.find(p => p.id === id);
            return {
                id: index,
                productId: id,
                imgSrc: product ? product.imgSrc : 'placeholder.jpg',
                isFlipped: false,
                isMatched: false
            };
        });

        memoryGrid.innerHTML = '';
        memoryGrid.style.gridTemplateColumns = `repeat(4, 1fr)`;
        cardsArray.forEach((cardData) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card', 'card-with-image');
            cardElement.setAttribute('data-id', cardData.productId);
            
            cardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">?</div>
                    <div class="card-back">
                        <img src="${cardData.imgSrc}" alt="Produk" class="card-game-image">
                    </div>
                </div>
            `;
            
            cardElement.addEventListener('click', () => handleCardClick(cardElement, cardData));
            memoryGrid.appendChild(cardElement);
        });
    }

    function checkForMatch() {
        let isMatch = firstCard.getAttribute('data-id') === secondCard.getAttribute('data-id');

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        matchesFound++;
        
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        
        const matchedProductId = firstCard.getAttribute('data-id');
        cardsArray.filter(card => card.productId === matchedProductId).forEach(card => card.isMatched = true);

        resetBoard();
        
        if (matchesFound === productIds.length) {
            gameWon();
        }
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000); 
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }
    
    function gameWon() {
        // VOUCHER MEMORI MEMBERI DISKON 10%
        const voucherCode = 'MEMORI10' + Math.floor(Math.random() * 90 + 10);
        localStorage.setItem('memory_voucher', voucherCode); 
        
        statusMessage.textContent = ' Selamat! Anda Menemukan Semua Pasangan!';
        voucherDisplay.textContent = voucherCode;
        gameResultContainer.style.display = 'block';
        startMemoryBtn.style.display = 'none';
        memoryGrid.style.display = 'none';
    }

    function resetGame() {
        [firstCard, secondCard, lockBoard, matchesFound] = [null, null, false, 0];
        
        statusMessage.textContent = 'Temukan semua pasangan untuk memenangkan diskon 10%!';
        gameResultContainer.style.display = 'none';
        startMemoryBtn.style.display = 'block'; 
        memoryGrid.style.display = 'none';
        memoryGrid.innerHTML = ''; 
    }

    startMemoryBtn.addEventListener('click', () => {
        startMemoryBtn.style.display = 'none';
        memoryGrid.style.display = 'grid';
        generateCards();
    });
    
    copyVoucherBtn.addEventListener('click', () => {
        const voucherCode = voucherDisplay.textContent;
        navigator.clipboard.writeText(voucherCode).then(() => {
            copyVoucherBtn.textContent = 'Berhasil Disalin!';
            setTimeout(() => {
                 copyVoucherBtn.textContent = 'Salin Kode';
            }, 2000);
        }).catch(err => {
            console.error('Gagal menyalin: ', err);
            alert('Gagal menyalin kode. Silakan salin manual.');
        });
    });
}

// LOGIKA MINI GAME MATH QUIZ (index.html)

const QUIZ_QUESTIONS = [
    { 
        question: "Harga asli Hoodie (Rp 250.000). Jika ada diskon 20%, berapa harga yang harus dibayar?",
        answer: 200000 
    },
    {
        question: "Anda membeli 2 T-Shirt (masing-masing Rp 220.000). Berapa total harga sebelum diskon?",
        answer: 440000 
    },
    { 
        question: "Harga celana Chinos adalah Rp 320.000. Jika Anda mendapat potongan Rp 40.000, berapa total akhirnya?",
        answer: 280000 
    }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let mathQuizGameActive = false;

function initializeMathQuizGame() {
    const mathModal = document.getElementById('math-modal');
    const openMathBtn = document.getElementById('open-math-quiz-btn'); // TOMBOL PEMBUKA
    const closeBtn = document.querySelector('#math-modal .close-btn'); 
    const questionDisplay = document.getElementById('math-question');
    const answerInput = document.getElementById('math-answer');
    const submitBtn = document.getElementById('submit-answer-btn');
    const resultsArea = document.getElementById('math-results');
    const messageDisplay = document.getElementById('math-message');
    const nextBtn = document.getElementById('next-math-btn');
    
    // DEBUGGING: Cek apakah elemen penting ada
    if (!mathModal || !openMathBtn) {
        console.error("Math Quiz ERROR: Modal atau tombol pembuka tidak ditemukan. Inisialisasi dibatalkan.");
        return;
    }
    console.log("Math Quiz SUCCESS: Semua elemen modal ditemukan dan diinisialisasi.");
    
    // PASTIKAN MODAL TERSEMBUNYI DI Awal
    mathModal.style.display = 'none'; 
    
    // --- Modal Control (Koneksi Tombol Pembuka) ---
    openMathBtn.onclick = () => {
        mathModal.style.display = 'flex'; // Gunakan flex untuk centering
        startQuiz(); 
    }

    if(closeBtn) {
        closeBtn.onclick = () => {
             mathModal.style.display = 'none';
        }
    }

    // --- Game Logic ---
    function startQuiz() {
        currentQuestionIndex = 0;
        correctAnswersCount = 0;
        mathQuizGameActive = true;
        
        // Asumsi struktur HTML Anda: #quiz-area berisi question & input; #math-results berisi hasil
        if(document.getElementById('quiz-area')) document.getElementById('quiz-area').style.display = 'block';
        if(resultsArea) resultsArea.style.display = 'none';
        
        loadQuestion();
    }
    
    function loadQuestion() {
        if (currentQuestionIndex < QUIZ_QUESTIONS.length && questionDisplay) {
            const q = QUIZ_QUESTIONS[currentQuestionIndex];
            questionDisplay.textContent = `Soal ${currentQuestionIndex + 1}/${QUIZ_QUESTIONS.length}: ${q.question}`;
            if(answerInput) answerInput.value = '';
            if(submitBtn) submitBtn.textContent = "Jawab";
        } else {
            endQuiz();
        }
    }
    
    if (submitBtn) {
        submitBtn.onclick = () => {
            if (!mathQuizGameActive || !answerInput) return;
            
            const userAnswer = parseInt(answerInput.value.trim());
            const correctAnswer = QUIZ_QUESTIONS[currentQuestionIndex].answer;
            
            if (isNaN(userAnswer)) {
                alert("Mohon masukkan hanya angka sebagai jawaban.");
                return;
            }

            if (userAnswer === correctAnswer) {
                correctAnswersCount++;
                alert(`Jawaban Benar! 🎉`);
            } else {
                alert(`Jawaban Salah. Jawaban yang benar adalah Rp ${correctAnswer.toLocaleString('id-ID')}.`);
            }
            
            currentQuestionIndex++;
            
            if (currentQuestionIndex < QUIZ_QUESTIONS.length) {
                loadQuestion();
            } else {
                endQuiz();
            }
        }
    }


    function endQuiz() {
        mathQuizGameActive = false;
        if(document.getElementById('quiz-area')) document.getElementById('quiz-area').style.display = 'none';
        if(resultsArea) resultsArea.style.display = 'block';

        let message = `Anda menjawab benar **${correctAnswersCount}** dari ${QUIZ_QUESTIONS.length} soal.<br><br>`;
        let discountPercentage = 0;
        let voucherCode = '';
        
        if (correctAnswersCount === 3) {
            discountPercentage = 30;
            voucherCode = 'MATH30' + Math.floor(Math.random() * 90 + 10);
            message += `**JACKPOT!** Anda mendapatkan diskon terbesar: **30%**!`;
        } else if (correctAnswersCount === 2) {
            discountPercentage = 20;
            voucherCode = 'MATH20' + Math.floor(Math.random() * 90 + 10);
            message += `Lumayan! Anda mendapatkan diskon **20%**.`;
        } else if (correctAnswersCount === 1) {
            discountPercentage = 10;
            voucherCode = 'MATH10' + Math.floor(Math.random() * 90 + 10);
            message += `Anda mendapatkan diskon kecil **10%** sebagai hiburan.`;
        } else {
            message += `Yah, Anda belum beruntung. Silakan coba lagi.`;
        }
        
        if (messageDisplay) {
             messageDisplay.innerHTML = message;
        }

        if (voucherCode) {
            const finalMessage = `${messageDisplay.innerHTML} <br><br> Kode Voucher Anda:<br><strong>${voucherCode}</strong>`;
            if (messageDisplay) messageDisplay.innerHTML = finalMessage;
            localStorage.setItem('math_voucher', voucherCode); 
        }

        if (nextBtn) nextBtn.textContent = 'Main Lagi';
    }
    
    if (nextBtn) {
        nextBtn.onclick = () => {
            startQuiz();
        }
    }
}

// INITIALIZATION (Dipanggil saat DOM dimuat)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Muat data dari Local Storage
    let loadedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    cartItems = loadedItems.map(item => ({
        ...item,
        price: parseFloat(item.price) || 0, 
        quantity: parseInt(item.quantity) || 0 
    }));

    cartCountElement = document.getElementById('cart-count'); 
    
    const path = window.location.pathname;
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q'); 
    const initialCategory = urlParams.get('category') || 'all';

    // Dapatkan semua elemen modal game
    const allGameModals = document.querySelectorAll('.modal-game');
    
    // PASTIKAN SEMUA MODAL GAME TERSEMBUNYI SAAT START
    allGameModals.forEach(modal => {
        modal.style.display = 'none';
    });


    // 2. Logika Pemisahan Halaman
    if (path.includes('index.html') || path === '/') {
        const featuredProducts = ALL_PRODUCTS.slice(0, 3);
        renderProductCatalog(featuredProducts, 'produk');
        if(document.querySelector('.slider-section')) { showSlides(slideIndex); }
        
        // === INISIASI MINI GAME ===
        // PENTING: Panggil fungsi inisialisasi agar tombol game terhubung
        initializeMemoryMatchGame(); 
        initializeMathQuizGame(); 
        
        // Logika penutupan modal saat mengklik di luar modal (Mini Game)
         window.onclick = (event) => {
            allGameModals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        }


    } else if (path.includes('pr.html')) {
        
        const filterDropdown = document.getElementById('category-filter');

        if (filterDropdown) {
             filterDropdown.value = initialCategory;
        }

        applyPrPageFilters(searchQuery); 

        if (filterDropdown) {
            filterDropdown.addEventListener('change', () => {
                applyPrPageFilters(searchQuery);
            });
        }
        
    } else if (path.includes('detail.html')) {
        loadProductDetails();
    } else if (path.includes('kart.html')) { 
        renderCartItems(); 
        initializeVoucherModal(); 
    }

    // 3. Event Delegation untuk Tombol 'Tambah ke Keranjang' (di katalog/index)
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart-btn')) {
            event.preventDefault(); 
            event.stopPropagation();
            
            const productLink = event.target.closest('.product-card-link'); 
            
            if (productLink) {
                const productId = productLink.dataset.id;
                const productName = productLink.dataset.name;
                const productPrice = parseFloat(productLink.dataset.price) || 0; 
                
                addToCart(productId, productName, productPrice, 1);
            }
        }
    });

    // 4. Update status keranjang terakhir
    updateCartState();
});
   // === LOGIKA OPERASIONAL HAMBURGER MENU MOBILE ===
function toggleMobileMenu() {
    const overlay = document.getElementById('mobileMenuOverlay');
    const drawer = document.getElementById('mobileMenuDrawer');
    
    if (drawer && overlay) {
        overlay.classList.toggle('active');
        drawer.classList.toggle('active');
    }
}

// Sinkronisasi sinkron gambar avatar dan badge keranjang ke dalam menu mobile saat dimuat
document.addEventListener('DOMContentLoaded', () => {
    // 1. Sinkronisasi Badge Keranjang Belanja
    const mainCartCount = document.getElementById('cart-count')?.textContent || "0";
    const mobileCartCountEl = document.getElementById('mobile-cart-count');
    if (mobileCartCountEl) mobileCartCountEl.textContent = mainCartCount;

    // 2. Sinkronisasi Nama & Foto Profil di HP
    const savedName = localStorage.getItem('userName');
    const savedAvatar = localStorage.getItem('userAvatar');
    
    if (savedName && document.getElementById('mobile-username-display')) {
        document.getElementById('mobile-username-display').textContent = savedName;
    }
    
    if (savedAvatar) {
        const mobImg = document.getElementById('mobile-avatar-img');
        const mobIcon = document.getElementById('mobile-avatar-icon');
        if (mobImg && mobIcon) {
            mobImg.src = savedAvatar;
            mobImg.style.display = 'block';
            mobIcon.style.display = 'none';
        }
    }
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         