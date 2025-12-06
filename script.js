// --- DATA ---
const CHARACTERS = [
    {
        id: 'bocchi',
        name: 'Hitori Gotoh',
        kanji: '後藤 ひとり',
        role: 'Lead Guitar / Lyrics',
        instrument: 'Gibson Les Paul Custom',
        description: 'A severely socially anxious girl who picked up the guitar to make friends. Known online as "guitarhero". Often transforms into abstract shapes when stressed.',
        color: 'pink',
        themeColorHex: '#ec4899', // pink-500
        imageUrl: 'https://picsum.photos/seed/bocchi-hero/800/1200',
    },
    {
        id: 'nijika',
        name: 'Nijika Ijichi',
        kanji: '伊地知 虹夏',
        role: 'Drums / Leader',
        instrument: 'Tama Imperialstar',
        description: 'The energetic leader of Kessoku Band. She dreams of playing at the Budokan. The Dorito on her head is her charm point.',
        color: 'yellow',
        themeColorHex: '#eab308', // yellow-500
        imageUrl: 'https://picsum.photos/seed/nijika-hero/800/1200',
    },
    {
        id: 'ryo',
        name: 'Ryo Yamada',
        kanji: '山田 リョウ',
        role: 'Bass / Composer',
        instrument: 'Fender Precision Bass',
        description: 'The cool, mysterious bassist who is perpetually broke due to buying expensive gear. Eats weeds when money is tight.',
        color: 'blue',
        themeColorHex: '#2563eb', // blue-600
        imageUrl: 'https://picsum.photos/seed/ryo-hero/800/1200',
    },
    {
        id: 'kita',
        name: 'Ikuyo Kita',
        kanji: '喜多 郁代',
        role: 'Vocals / Rhythm Guitar',
        instrument: 'Gibson Les Paul Junior',
        description: 'A cheerful, social butterfly who joined the band to be close to Ryo. The "Kita-aura" is blinding. Actually named Ikuyo.',
        color: 'red',
        themeColorHex: '#ef4444', // red-500
        imageUrl: 'https://picsum.photos/seed/kita-hero/800/1200',
    },
];

const GALLERY_ITEMS = [
    { id: '1', title: 'Live at STARRY', imageUrl: 'https://picsum.photos/seed/live1/800/600', size: 'large' },
    { id: '2', title: 'Practice', imageUrl: 'https://picsum.photos/seed/practice/400/400', size: 'small' },
    { id: '3', title: 'Sunset', imageUrl: 'https://picsum.photos/seed/sunset/400/600', size: 'medium' },
    { id: '4', title: 'New Gear', imageUrl: 'https://picsum.photos/seed/gear/400/400', size: 'small' },
    { id: '5', title: 'Street Perf.', imageUrl: 'https://picsum.photos/seed/street/400/400', size: 'small' },
    { id: '6', title: 'Backstage', imageUrl: 'https://picsum.photos/seed/backstage/800/400', size: 'medium' },
    { id: '7', title: 'Jump!', imageUrl: 'https://picsum.photos/seed/jump/400/600', size: 'medium' },
    { id: '8', title: 'Smile', imageUrl: 'https://picsum.photos/seed/smile/400/400', size: 'small' },
];

const TIMELINE_EVENTS = [
    { id: '1', date: '2022.04', title: 'Band Formation', description: 'Nijika discovers a lonely Hitori in the park and recruits her.', icon: 'sparkles' },
    { id: '2', date: '2022.05', title: 'First Audition', description: 'The band struggles but barely passes the audition at STARRY.', icon: 'music' },
    { id: '3', date: '2022.08', title: 'First Live', description: 'Despite the rain, they perform their first live concert with a small audience.', icon: 'zap' },
    { id: '4', date: '2022.11', title: 'School Festival', description: 'Kessoku Band performs at the Shuka High culture festival. Bocchi breaks a string but keeps going.', icon: 'star' },
];

// --- RENDER FUNCTIONS ---

function renderHero() {
    const container = document.getElementById('hero-strips');
    container.innerHTML = CHARACTERS.map(char => `
        <div class="hero-strip relative flex-1 h-full group overflow-hidden border-r border-gray-900/50 last:border-none cursor-pointer grayscale hover:grayscale-0" onclick="scrollToSection('characters'); switchCharacterById('${char.id}')">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style="background-image: url('${char.imageUrl}')">
                 <div class="absolute inset-0 opacity-50 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" style="background-color: ${char.themeColorHex}"></div>
            </div>
            <div class="hero-content absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100">
                <h2 class="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-t from-white to-gray-500 tracking-tighter writing-mode-vertical-rl md:writing-mode-horizontal-tb origin-bottom">
                    ${char.name.split(' ')[0]}
                </h2>
                <p class="text-sm md:text-lg font-bold text-white mt-2 uppercase tracking-widest border-t-2 border-pink-500 pt-4 inline-block">
                    ${char.instrument}
                </p>
            </div>
        </div>
    `).join('');
}

let activeCharIndex = 0;

function renderCharacterNav() {
    const nav = document.getElementById('char-nav');
    nav.innerHTML = CHARACTERS.map((char, index) => `
        <button
            onclick="switchCharacter(${index})"
            class="hover-trigger group relative overflow-hidden p-5 text-left transition-all duration-300 border-l-4 w-full ${index === activeCharIndex ? 'bg-zinc-800 border-pink-500 translate-x-2 shadow-lg' : 'bg-transparent border-zinc-800 hover:bg-zinc-800/50 hover:border-zinc-600'}"
        >
            <div class="flex items-center justify-between relative z-10">
                <div>
                    <h3 class="text-xl md:text-2xl font-black italic uppercase ${index === activeCharIndex ? 'text-white' : 'text-gray-500 group-hover:text-white transition-colors'}">
                        ${char.name}
                    </h3>
                    <p class="text-xs text-gray-500 font-mono tracking-widest mt-1">${char.role}</p>
                </div>
            </div>
        </button>
    `).join('');
}

function renderCharacterCard() {
    const char = CHARACTERS[activeCharIndex];
    const card = document.getElementById('char-card');
    const bgText = document.getElementById('bg-char-name');
    
    // Background parallax text update
    bgText.textContent = char.name.toUpperCase();
    bgText.style.color = char.themeColorHex + '15'; // Very transparent hex
    
    // Fade out
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.innerHTML = `
            <div class="flex flex-col md:flex-row h-full">
                <div class="md:w-5/12 relative h-64 md:h-auto overflow-hidden group">
                    <img src="${char.imageUrl}" alt="${char.name}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent md:bg-gradient-to-r opacity-90"></div>
                    <div class="absolute bottom-4 left-4 p-2 bg-black/80 backdrop-blur text-white text-xs font-mono border border-white/20">
                        MODEL: ${char.id.toUpperCase()}_V2
                    </div>
                </div>
                <div class="md:w-7/12 p-8 md:p-12 flex flex-col justify-center space-y-8 relative">
                     <div class="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <i data-lucide="music" class="w-32 h-32"></i>
                    </div>
                    
                    <div>
                        <h3 class="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-2 italic" style="text-shadow: 2px 2px 0px ${char.themeColorHex}">${char.kanji}</h3>
                        <p class="text-2xl text-pink-500 font-rock">${char.name}</p>
                    </div>
                    <div class="grid grid-cols-2 gap-6">
                        <div>
                            <p class="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Position</p>
                            <p class="text-lg font-bold text-white">${char.role}</p>
                        </div>
                        <div>
                            <p class="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Gear</p>
                            <p class="text-lg font-bold text-white">${char.instrument}</p>
                        </div>
                    </div>
                    <div class="pt-6 border-t border-zinc-700/50">
                        <p class="text-gray-300 leading-loose text-sm md:text-base font-light">
                            ${char.description}
                        </p>
                    </div>
                    <div class="flex gap-2">
                        <button class="hover-trigger px-6 py-2 bg-white text-black font-black uppercase tracking-wider hover:bg-pink-500 hover:text-white transition-colors skew-x-[-10deg]">
                            <div class="skew-x-[10deg]">Profile</div>
                        </button>
                        <button class="hover-trigger px-6 py-2 border border-white text-white font-black uppercase tracking-wider hover:bg-white hover:text-black transition-colors skew-x-[-10deg]">
                            <div class="skew-x-[10deg]">Gallery</div>
                        </button>
                    </div>
                </div>
            </div>
        `;
        lucide.createIcons();
        // Fade in
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 300);
}

function switchCharacter(index) {
    if (activeCharIndex === index) return;
    activeCharIndex = index;
    renderCharacterNav();
    renderCharacterCard();
}

function switchCharacterById(id) {
    const index = CHARACTERS.findIndex(c => c.id === id);
    if(index !== -1) switchCharacter(index);
}

function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = GALLERY_ITEMS.map((item, index) => `
        <div class="hover-trigger relative group overflow-hidden bg-zinc-900 cursor-pointer 
            ${item.size === 'large' ? 'col-span-2 row-span-2' : ''}
            ${item.size === 'medium' ? 'col-span-1 row-span-2' : ''}
            ${item.size === 'small' ? 'col-span-1 row-span-1' : ''}"
            style="animation-delay: ${index * 50}ms">
            
            <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 border-4 border-transparent group-hover:border-pink-500/50 box-border">
                <span class="text-xs text-pink-500 font-mono mb-1">IMG_0${index + 1}</span>
                <h3 class="text-white font-black text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 uppercase italic">
                    ${item.title}
                </h3>
            </div>
        </div>
    `).join('');
}

function renderHistory() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = TIMELINE_EVENTS.map((event, index) => `
        <div class="flex flex-col md:flex-row items-center justify-between w-full group relative">
            <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black border-4 border-zinc-700 group-hover:border-pink-500 group-hover:scale-150 transition-all z-10"></div>
            
            <div class="w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'} mb-8 md:mb-0">
                <div class="inline-block p-2 bg-zinc-900 border border-zinc-800 text-pink-500 font-mono font-bold text-sm mb-2">
                    ${event.date}
                </div>
                <h3 class="text-3xl font-black text-white mb-3 group-hover:text-pink-500 transition-colors uppercase italic">${event.title}</h3>
                <p class="text-zinc-400 leading-relaxed">${event.description}</p>
            </div>
            
            <div class="w-full md:w-5/12 ${index % 2 === 0 ? 'md:order-2' : ''}"></div>
        </div>
    `).join('');
}

// --- UTILS ---
function scrollToSection(id) {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Custom Cursor Logic
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.hover-trigger') || e.target.closest('button') || e.target.tagName === 'A') {
        cursor.classList.add('hovered');
    } else {
        cursor.classList.remove('hovered');
    }
});

// --- INIT ---
window.addEventListener('load', () => {
    // Hide Loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.visibility = 'hidden';
        }, 800);
    }, 1500);

    renderHero();
    renderCharacterNav();
    renderCharacterCard(); 
    renderGallery();
    renderHistory();
    lucide.createIcons();
    
    // Initial Animation Trigger for Card
    document.getElementById('char-card').style.opacity = '1';
});

window.addEventListener('scroll', () => {
     const navbar = document.getElementById('navbar');
     if (window.scrollY > 50) {
         navbar.classList.add('bg-black/90', 'backdrop-blur-md', 'border-b', 'border-gray-800');
         navbar.classList.remove('bg-transparent');
     } else {
         navbar.classList.remove('bg-black/90', 'backdrop-blur-md', 'border-b', 'border-gray-800');
         navbar.classList.add('bg-transparent');
     }
 });
