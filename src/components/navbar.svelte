<script lang="ts">
    import "../app.css";    
    import type {AvailableLanguageTag} from '$lib/paraglide/runtime';    
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';    
	
	let mobileMenuOpen = false;
	
	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
	
	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="navbar">
    <div class="nav-container">
        <a href="/" class="nav-brand">
            <span class="brand-name">{m.brand_label()}</span>
            <span class="brand-subtitle">{m.brand_subtitle()}</span>
        </a>
        
        <button class="mobile-menu-button" on:click={toggleMenu} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="menu-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
        
        <div class="nav-menu {mobileMenuOpen ? 'open' : ''}">
            <a href="#{m.navbar_about_ref()}" class="nav-link" on:click={closeMenu}>{m.navbar_about_title()}</a>
            <a href="#{m.navbar_services_ref()}" class="nav-link" on:click={closeMenu}>{m.navbar_services_title()}</a>
            <a href="#{m.navbar_contact_ref()}" class="nav-link" on:click={closeMenu}>{m.navbar_contact_title()}</a>
            
            <div class="lang-switcher">
                <button 
                    class="lang-button {$page.url.pathname.includes('/cs') || !$page.url.pathname.includes('/en') ? 'active' : ''}" 
                    on:click={() => switchToLanguage('cs')}
                >
                    CS
                </button>
                <span class="lang-divider">|</span>
                <button 
                    class="lang-button {$page.url.pathname.includes('/en') ? 'active' : ''}" 
                    on:click={() => switchToLanguage('en')}
                >
                    EN
                </button>
            </div>
        </div>
    </div>
</nav>

<style>
    .navbar {
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        position: sticky;
        top: 0;
        z-index: 1000;
        border-bottom: 1px solid rgba(30, 58, 95, 0.1);
    }
    
    .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1.25rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .nav-brand {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: #1e3a5f;
    }
    
    .brand-name {
        font-size: 1.4rem;
        font-weight: 400;
        color: #1e3a5f;
        font-family: 'Libre Baskerville', serif;
        letter-spacing: 0.5px;
    }
    
    .brand-subtitle {
        font-size: 0.75rem;
        color: #6b7280;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: 'Crimson Text', sans-serif;
        margin-top: 0.25rem;
    }
    
    .mobile-menu-button {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }
    
    .menu-icon {
        width: 28px;
        height: 28px;
        color: #1e3a5f;
    }
    
    .nav-menu {
        display: flex;
        align-items: center;
        gap: 3rem;
    }
    
    .nav-link {
        text-decoration: none;
        color: #4b5563;
        font-weight: 400;
        transition: color 0.3s ease;
        position: relative;
        font-size: 0.9rem;
        letter-spacing: 0.3px;
        font-family: 'Crimson Text', sans-serif;
    }
    
    .nav-link:after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 1px;
        background: #1e3a5f;
        transition: width 0.4s ease;
    }
    
    .nav-link:hover {
        color: #1e3a5f;
    }
    
    .nav-link:hover:after {
        width: 100%;
    }
    
    .lang-switcher {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.6rem 1.2rem;
        background: transparent;
        border: 1px solid rgba(30, 58, 95, 0.2);
        border-radius: 0;
    }
    
    .lang-button {
        background: none;
        border: none;
        color: #4b5563;
        font-weight: 500;
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        transition: color 0.3s ease;
        font-family: 'Crimson Text', sans-serif;
        letter-spacing: 0.5px;
        font-size: 0.85rem;
    }
    
    .lang-button:hover {
        color: #1e3a5f;
    }
    
    .lang-button.active {
        color: #1e3a5f;
        font-weight: 600;
    }
    
    .lang-divider {
        color: rgba(30, 58, 95, 0.3);
    }
    
    @media (max-width: 768px) {
        .mobile-menu-button {
            display: block;
        }
        
        .nav-menu {
            position: fixed;
            top: 75px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            align-items: stretch;
            padding: 2rem;
            gap: 0;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.4s ease, opacity 0.4s ease;
        }
        
        .nav-menu.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
        }
        
        .nav-link {
            padding: 1rem 0;
            border-bottom: 1px solid rgba(30, 58, 95, 0.1);
        }
        
        .lang-switcher {
            justify-content: center;
            margin-top: 1.5rem;
        }
    }
</style>




