const ownerMobile = "917037788052"; 
const products = [
    { id: 1, category: "Health", name: "Aloe Vera Gel", price: 773.00, batch: "BN181124", size: "330mL", img: "aloe-gel.jpg", desc: "Stabilized Aloe Vera juice. Net Volume: 330mL." },
    { id: 2, category: "Health", name: "Arctic Sea", price: 3098.00, batch: "Refer Bottom", size: "60 Softgels", img: "arctic-sea.jpg", desc: "Fish Oil & Olive Oil Omega 3 (EPA/DHA)." },
    { id: 3, category: "Energy", name: "ARGI+ Powder", price: 8233.00, batch: "BN271224A", size: "300g (30 Pkts)", img: "argi.jpg", desc: "L-Arginine, Vitamins & Fruit Extracts energy booster." },
    { id: 4, category: "Health", name: "Tulsi Van Honey", price: 911.00, batch: "Refer Neck", size: "500g", img: "honey.jpg", desc: "100% Natural Honey. Blend of Honeydew & Blossom honey." },
    { id: 5, category: "Energy", name: "FAB Citrus Drink", price: 220.00, batch: "FLED049", size: "250mL Can", img: "fab-citrus-can.jpg", desc: "Energy with natural caffeine from green coffee." },
    { id: 6, category: "Energy", name: "FABX Coffee Drink", price: 220.00, batch: "FLEX003", size: "250mL Can", img: "fab-coffee-can.jpg", desc: "Zero Sugar & Low Calorie active boost." },
    { id: 7, category: "Skin", name: "Bright Toothgel", price: 846.00, batch: "B-301224", size: "130g", img: "toothgel.jpg", desc: "Fluoride-free with Bee Propolis & Aloe Vera." },
    { id: 8, category: "Skin", name: "Radiance Face Wash", price: 748.00, batch: "See Crimp", size: "100mL", img: "face-wash.jpg", desc: "Cleanser with Aloe, Licorice, and Bamboo." },
    { id: 9, category: "Skin", name: "Radiance Toner", price: 881.00, batch: "FT250622", size: "100mL", img: "toner.jpg", desc: "Aloe, Saffron & Licorice skin pore refiner." },
    { id: 10, category: "Skin", name: "Radiance Moisturiser", price: 888.00, batch: "See Crimp", size: "100mL", img: "moisturizer.jpg", desc: "Hydration with Moringa Oil, Aloe & Cica." },
    { id: 11, category: "Skin", name: "Aloe Body Wash", price: 2655.00, batch: "B-040225", size: "236mL", img: "body-wash.jpg", desc: "Naturally derived cleansers for fresh skin." },
    { id: 12, category: "Skin", name: "Bhringraj Hair Oil", price: 1156.00, batch: "F0250350", size: "100mL", img: "hair-oil.jpg", desc: "Hair fall control oil. Dermatologically tested." },
    { id: 13, category: "Skin", name: "Hand Sanitizer", price: 143.00, batch: "BHNSF25101", size: "60mL", img: "sanitizer.jpg", desc: "Aloe based cleaner with 70% alcohol." },
    { id: 14, category: "Health", name: "Aloe Heat Lotion", price: 1301.00, batch: "B-301224", size: "118mL", img: "heat-lotion.jpg", desc: "Soothing massage lotion for muscle comfort." },
    { id: 15, category: "Skin", name: "Aloe Scrub", price: 1385.00, batch: "B-040225", size: "99g", img: "scrub.jpg", desc: "Deep cleaning with Jojoba microspheres." },
    { id: 16, category: "Skin", name: "Mud Mask Scrub", price: 881.00, batch: "Refer Crimp", size: "100g", img: "mud-mask.jpg", desc: "Aloe, Lemon, Cucumber & Kaolin mud mask." },
    { id: 17, category: "Skin", name: "Desire Spray (Men)", price: 554.00, batch: "BDERC25173", size: "150mL", img: "desire.jpg", desc: "Long lasting French fragrance deodorant." },
    { id: 18, category: "Skin", name: "Dream Spray (Women)", price: 554.00, batch: "BDERD25107", size: "150mL", img: "dream.jpg", desc: "Nourishing Aloe deodorant for women." },
    { id: 19, category: "Health", name: "Aloe Turm Lozenges", price: 616.00, batch: "FLF25S01", size: "25 Servings", img: "turm.jpg", desc: "Turmeric & Aloe globally patented formula." },
    { id: 20, category: "Energy", name: "FAB Citrus (Pack of 4)", price: 880.00, batch: "FLED049", size: "1L Box", img: "fab-citrus-box.jpg", desc: "Value pack of 4 carbonated cans." },
    { id: 21, category: "Energy", name: "FABX Coffee (Pack of 4)", price: 880.00, batch: "FLEX003", size: "1L Box", img: "fab-coffee-box.jpg", desc: "Zero sugar bulk pack of 4 cans." },
   // { id: 22, category: "Energy", name: "FastBreak Protein Bar", price: 790.00, batch: "APFL25003", size: "5 Bars", img: "energy-bars.jpg", desc: "Assorted Choco Orange, Almond & Berry bars." },
  //  { id: 23, category: "Energy", name: "FastBreak Pack of 5", price: 790.00, batch: "APFL25003", size: "175g", img: "fastbreak-pack.jpg", desc: "Full energy snack pack for daily needs." }
];

function render(data = products) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = data.map(p => `
        <div onclick="openModal(${p.id})" class="bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center cursor-pointer">
            <img src="images/${p.img}" alt="${p.name}" class="h-44 w-full object-contain mb-4" onerror="this.src='https://via.placeholder.com/200?text=Forever'">
            <h3 class="font-black text-gray-800 text-sm h-10 overflow-hidden text-center uppercase tracking-tighter leading-tight">${p.name}</h3>
            <p class="text-[9px] text-gray-400 font-bold my-3 tracking-widest uppercase">${p.size}</p>
            <div class="flex justify-between items-center w-full mt-auto pt-4 border-t border-gray-50">
                <span class="text-xl font-black text-orange-600 italic tracking-tighter italic">₹${p.price.toFixed(2)}</span>
                <span class="text-[9px] bg-slate-900 text-white px-3 py-1 rounded-full font-black uppercase tracking-tighter italic">Details</span>
            </div>
        </div>
    `).join('');
}

function filterCategory(cat) {
    if(cat === 'all') render(products);
    else render(products.filter(p => p.category === cat));
}

function filterProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    render(products.filter(p => p.name.toLowerCase().includes(query)));
}

function openModal(id) {
    const p = products.find(x => x.id === id);
    document.getElementById('modal-content').innerHTML = `
        <div class="text-center">
            <img src="images/${p.img}" class="h-56 w-full object-contain mb-8" onerror="this.src='https://via.placeholder.com/300?text=Forever+Shop'">
            <h2 class="text-2xl font-black text-gray-950 uppercase italic tracking-tighter mb-1 leading-none">${p.name}</h2>
            <p class="text-orange-500 font-black text-xs uppercase mb-8 tracking-widest underline decoration-orange-100 underline-offset-8 decoration-2">${p.size}</p>
        </div>
        <div class="space-y-6">
            <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 italic">Product Info:</p>
                <p class="text-sm text-gray-700 leading-relaxed font-bold italic underline decoration-slate-200">${p.desc}</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100"><p class="text-[8px] font-black text-gray-400 uppercase tracking-tighter italic">Batch</p><span class="text-gray-950 font-black text-xs uppercase">${p.batch}</span></div>
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-right"><p class="text-[8px] font-black text-gray-400 uppercase tracking-tighter italic">MRP</p><span class="text-green-600 font-black text-sm tracking-tighter italic">₹${p.price.toFixed(2)}</span></div>
            </div>
            <button onclick="orderViaWhatsApp('${p.name}')" class="w-full bg-green-500 text-white py-5 rounded-3xl font-black text-lg hover:bg-green-600 shadow-2xl transition active:scale-95 italic tracking-tighter uppercase">
                Order via WhatsApp
            </button>
            <p class="text-[9px] text-center text-gray-400 font-bold tracking-[0.2em] italic mt-4 uppercase italic">thakurdps795@gmail.com</p>
        </div>
    `;
    document.getElementById('product-modal').classList.remove('hidden');
    document.body.classList.add('modal-active');
}

function closeModal() {
    document.getElementById('product-modal').classList.add('hidden');
    document.body.classList.remove('modal-active');
}

function orderViaWhatsApp(name) {
    const msg = encodeURIComponent(`नमस्ते! मुझे आपकी वेबसाइट से ये ओरिजिनल प्रोडक्ट खरीदना है: ${name}.\n\nमेरा नाम: \nमेरा पता: \nमोबाइल: \n\nकृपया डिलीवरी डिटेल्स साझा करें।`);
    window.open(`https://wa.me/${ownerMobile}?text=${msg}`, '_blank');
}

render();