<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
</script>

<footer class="footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-section">
                <h3 class="footer-title">{m.brand_label()}</h3>
                <p class="footer-subtitle">{m.brand_subtitle()}</p>
                <p class="footer-text">Ukrajinská 874/3<br/>Praha 10, 101 00</p>
            </div>
            
            <div class="footer-section">
                <h4 class="footer-heading">Kontakt</h4>
                <p class="footer-text">
                    Tel: +420 774 869 444<br/>
                    Email: irena@muzikova.com<br/>
                    IČ: 72483539
                </p>
            </div>
            
            <div class="footer-section">
                <h4 class="footer-heading">Navigace</h4>
                <div class="footer-links">
                    <a href="#{m.navbar_about_ref()}">{m.navbar_about_title()}</a>
                    <a href="#{m.navbar_services_ref()}">{m.navbar_services_title()}</a>
                    <a href="#{m.navbar_references_ref()}">{m.navbar_references_title()}</a>
                    <a href="#{m.navbar_contact_ref()}">{m.navbar_contact_title()}</a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; {new Date().getFullYear()} {m.brand_label()}. {m.footer_copyright()}</p>
            <div class="footer-legal-links">
                <a href="/gdpr" class="footer-link">{m.footer_privacy()}</a>
                <span class="footer-divider">|</span>
                <a href="/{m.navbar_aml_ref()}" class="footer-link">{m.footer_aml()}</a>
                <span class="footer-divider">|</span>
                <a href="/{m.navbar_cookies_ref()}" class="footer-link">{m.footer_cookies()}</a>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        background: linear-gradient(165deg, #1e3a5f 0%, #2c5282 50%, #1e3a5f 100%);
        color: white;
        padding: 4rem 2rem 2rem;
        position: relative;
    }
    
    .footer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        opacity: 0.3;
    }
    
    .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }
    
    .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 3rem;
        margin-bottom: 3rem;
    }
    
    .footer-section {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
    
    .footer-title {
        font-size: 1.4rem;
        font-weight: 400;
        margin: 0;
        color: white;
        font-family: 'Libre Baskerville', serif;
        letter-spacing: 0.5px;
    }
    
    .footer-subtitle {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.75rem;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: 'Crimson Text', sans-serif;
        font-weight: 400;
    }
    
    .footer-heading {
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
        color: white;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: 'Crimson Text', sans-serif;
        font-size: 0.85rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        padding-bottom: 0.75rem;
    }
    
    .footer-text {
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.8;
        margin: 0;
        font-family: 'Crimson Text', sans-serif;
        font-size: 0.9rem;
        font-weight: 300;
    }
    
    .footer-links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    
    .footer-links a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: all 0.3s ease;
        font-family: 'Crimson Text', sans-serif;
        font-size: 0.9rem;
        font-weight: 300;
        position: relative;
        padding-left: 1rem;
    }
    
    .footer-links a:before {
        content: '—';
        position: absolute;
        left: 0;
        opacity: 0;
        transition: opacity 0.3s ease;
        color: white;
    }
    
    .footer-links a:hover {
        color: white;
        padding-left: 1.5rem;
    }
    
    .footer-links a:hover:before {
        opacity: 1;
    }
    
    .footer-bottom {
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
    }
    
    .footer-legal-links {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .footer-divider {
        color: rgba(255, 255, 255, 0.3);
    }
    
    .footer-bottom p {
        margin: 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.85rem;
        font-family: 'Crimson Text', sans-serif;
        font-weight: 300;
        letter-spacing: 0.3px;
    }
    
    .footer-link {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        font-size: 0.85rem;
        transition: color 0.3s ease;
        font-family: 'Crimson Text', sans-serif;
        font-weight: 300;
        border-bottom: 1px solid transparent;
        padding-bottom: 2px;
    }
    
    .footer-link:hover {
        color: white;
        border-bottom-color: rgba(255, 255, 255, 0.5);
    }
    
    @media (max-width: 768px) {
        .footer {
            padding: 3rem 2rem 1.5rem;
        }
        
        .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
        }
    }
</style>
