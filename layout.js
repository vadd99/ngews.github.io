// ==========================================
// 1. TEMPLATE HEADER & SIDEBAR LENGKAP
// ==========================================
const headerHTML = `
    <header>
        <div class="header-left">
            <button class="menu-toggle" id="menuToggleBtn" aria-label="Toggle Navigation">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <a href="index.html" class="logo">NG<span>ews</span></a>
        </div>
        <div class="header-right">
            <div class="expandable-search" id="expandableSearch">
                <input type="text" class="search-input-expanding" id="searchInput" placeholder="Cari berita atau video...">
                <button class="search-icon-btn" id="searchToggleBtn" aria-label="Cari">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </div>
        </div>
    </header>
`;

const sidebarHTML = `
    <div class="drawer-overlay" id="drawerOverlay"></div>
    <aside id="sidebar">
        <p class="sidebar-title">Menu Utama</p>
        <ul class="sidebar-menu">
            <li class="sidebar-item active" id="menuBeranda">
                <a href="index.html" id="btnBeranda">
                    <div class="sidebar-item-inner">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        Beranda
                    </div>
                </a>
            </li>
            <li class="sidebar-item" id="menuPopuler">
                <a href="#" id="btnPopuler">
                    <div class="sidebar-item-inner">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        Populer
                    </div>
                </a>
            </li>
            <li class="sidebar-item" id="menuMostLiked">
                <a href="#" id="btnMostLiked">
                    <div class="sidebar-item-inner">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"></path></svg>
                        Most Liked
                    </div>
                </a>
            </li>
            <li class="sidebar-item-dropdown">
                <button class="sidebar-dropdown-toggle" id="dropdownToggleBtn">
                    <div class="dropdown-label-wrapper">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        Kategori
                    </div>
                    <span class="dropdown-arrow">❯</span>
                </button>
                <ul class="sidebar-submenu-list" id="sidebarSubmenu">
                    <!-- Kategori Otomatis -->
                </ul>
            </li>
        </ul>

        <p class="sidebar-title">Perpustakaan</p>
        <ul class="sidebar-menu">
            <li class="sidebar-item">
                <a href="#">
                    <div class="sidebar-item-inner">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.158.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                        Koleksi Saya
                    </div>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#">
                    <div class="sidebar-item-inner">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Riwayat
                    </div>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#">
                    <div class="sidebar-item-inner">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        Video Disukai
                    </div>
                </a>
            </li>
        </ul>
    </aside>
`;

// ==========================================
// 2. FUNGSI UNTUK MENYUNTIKKAN KE HTML
// ==========================================
export function renderLayout() {
    const headerContainer = document.getElementById('app-header');
    const sidebarContainer = document.getElementById('app-sidebar');
    
    if(headerContainer) headerContainer.innerHTML = headerHTML;
    if(sidebarContainer) sidebarContainer.innerHTML = sidebarHTML;

    setupLayoutInteractions();
}

// ==========================================
// 3. LOGIKA INTERAKSI MENU & SIDEBAR
// ==========================================
function setupLayoutInteractions() {
    // Search Bar Logika
    const searchToggleBtn = document.getElementById('searchToggleBtn');
    const expandableSearch = document.getElementById('expandableSearch');
    const expandingInput = document.getElementById('searchInput');

    if(searchToggleBtn) {
        searchToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!expandableSearch.classList.contains('active')) {
                expandableSearch.classList.add('active');
                expandingInput.focus();
            } else if (expandingInput.value === '') { 
                expandableSearch.classList.remove('active'); 
            }
        });
        document.addEventListener('click', () => {
            if (expandableSearch && expandableSearch.classList.contains('active') && expandingInput.value === '') {
                expandableSearch.classList.remove('active');
            }
        });
        expandingInput.addEventListener('click', (e) => e.stopPropagation());
    }

    // Toggle Sidebar & Drawer Logika
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const sidebar = document.getElementById('sidebar');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const mainContent = document.getElementById('mainContent');

    if(menuToggleBtn && sidebar) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.innerWidth > 768) {
                // PC Mode
                sidebar.classList.toggle('collapsed');
                if(mainContent) mainContent.classList.toggle('expanded');
            } else {
                // HP Mode
                sidebar.classList.toggle('active');
                if(drawerOverlay) drawerOverlay.classList.toggle('active');
            }
        });
    }

    if(drawerOverlay && sidebar) {
        drawerOverlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            drawerOverlay.classList.remove('active');
        });
    }

    // Dropdown Kategori
    const dropdownToggleBtn = document.getElementById('dropdownToggleBtn');
    if(dropdownToggleBtn) {
        dropdownToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownToggleBtn.classList.toggle('active');
        });
    }
}
