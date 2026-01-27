<script lang="ts">
    import '../../app.css';
    import * as m from '$lib/paraglide/messages.js';
    export const prerender = true;
    export const ssr = true;
</script>

<svelte:head>
    <title>{m.cookies_title()} - {m.brand_label()}</title>
</svelte:head>

<div class="page-wrapper">
    <div class="decorative-line"></div>
    
    <div class="container">
        <div class="page-header">
            <div class="icon-badge">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M9 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M15 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                </svg>
            </div>
            <h1 class="page-title">{m.cookies_title()}</h1>
        </div>
        
        <section class="content-section">
            <div class="section-badge">01</div>
            <h2>{m.cookies_what_title()}</h2>
            <p class="lead-text">{m.cookies_what_text()}</p>
        </section>

        <section class="content-section">
            <div class="section-badge">02</div>
            <h2>{m.cookies_use_title()}</h2>
            
            <div class="cookie-type">
                <h3>{m.cookies_necessary_title()}</h3>
                <p>{m.cookies_necessary_text()}</p>
            </div>

            <div class="cookie-type">
                <h3>{m.cookies_analytics_title()}</h3>
                <p>{m.cookies_analytics_text()}</p>
            </div>
        </section>

        <section class="content-section">
            <div class="section-badge">03</div>
            <h2>{m.cookies_manage_title()}</h2>
            <p>{m.cookies_manage_text()}</p>
            <ul class="styled-list">
                <li><span class="list-marker">•</span>{m.cookies_manage_1()}</li>
                <li><span class="list-marker">•</span>{m.cookies_manage_2()}</li>
                <li><span class="list-marker">•</span>{m.cookies_manage_3()}</li>
                <li><span class="list-marker">•</span>{m.cookies_manage_4()}</li>
            </ul>
            <p class="note-box">{m.cookies_manage_note()}</p>
        </section>

        <section class="content-section">
            <div class="section-badge">04</div>
            <h2>{m.cookies_browsers_title()}</h2>
            <div class="browser-links">
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" class="browser-link">
                    <span class="browser-icon">🌐</span>
                    {m.cookies_chrome()}
                </a>
                <a href="https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies" target="_blank" rel="noopener" class="browser-link">
                    <span class="browser-icon">🌐</span>
                    {m.cookies_firefox()}
                </a>
                <a href="https://support.microsoft.com/cs-cz/windows/odstranění-a-správa-souborů-cookie" target="_blank" rel="noopener" class="browser-link">
                    <span class="browser-icon">🌐</span>
                    {m.cookies_edge()}
                </a>
                <a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank" rel="noopener" class="browser-link">
                    <span class="browser-icon">🌐</span>
                    {m.cookies_safari()}
                </a>
            </div>
        </section>

        <section class="content-section">
            <div class="section-badge">05</div>
            <h2>{m.cookies_changes_title()}</h2>
            <p>{m.cookies_changes_text()}</p>
        </section>

        <section class="content-section contact-box">
            <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
            </div>
            <p>
                {m.cookies_contact_text()} 
                <a href="mailto:irena@muzikova.com" class="inline-link">irena@muzikova.com</a>.
            </p>
        </section>
    </div>
</div>

<style>
    :global(body) {
        font-family: 'Libre Baskerville', 'Georgia', 'Times New Roman', serif;
        color: #2c3e50;
        background: #fafafa;
    }
    
    .page-wrapper {
        background: #fafafa;
        padding: 6rem 2rem 8rem;
        min-height: 80vh;
        position: relative;
    }
    
    .decorative-line {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: 200px;
        background: linear-gradient(to bottom, transparent, #1e3a5f, transparent);
        opacity: 0.3;
    }
    
    .container {
        max-width: 900px;
        margin: 0 auto;
        background: white;
        padding: 5rem 4rem;
        border-radius: 0;
        box-shadow: 0 2px 25px rgba(0, 0, 0, 0.06);
        border-top: 4px solid #1e3a5f;
        position: relative;
    }
    
    .page-header {
        text-align: center;
        margin-bottom: 5rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(30, 58, 95, 0.1);
    }
    
    .icon-badge {
        width: 80px;
        height: 80px;
        margin: 0 auto 2rem;
        background: #1e3a5f;
        border-radius: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 30px rgba(30, 58, 95, 0.2);
    }
    
    .icon-badge svg {
        width: 40px;
        height: 40px;
        color: white;
    }
    
    .page-title {
        font-size: 2.5rem;
        font-weight: 400;
        color: #1e3a5f;
        margin: 0;
        letter-spacing: -0.02em;
        font-family: 'Libre Baskerville', serif;
        line-height: 1.3;
    }
    
    .content-section {
        margin-bottom: 4rem;
        position: relative;
        padding-left: 4rem;
        min-height: 100px;
    }
    
    .section-badge {
        position: absolute;
        left: 0;
        top: 0.25rem;
        width: 45px;
        height: 45px;
        background: white;
        border: 2px solid #1e3a5f;
        border-radius: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Crimson Text', sans-serif;
        font-weight: 600;
        color: #1e3a5f;
        font-size: 0.9rem;
    }
    
    .content-section h2 {
        font-size: 1.8rem;
        font-weight: 400;
        color: #1e3a5f;
        margin: 0 0 1.5rem 0;
        font-family: 'Libre Baskerville', serif;
        letter-spacing: -0.01em;
    }
    
    .cookie-type {
        margin: 2.5rem 0;
        padding: 2rem;
        background: #fafafa;
        border-left: 3px solid #1e3a5f;
        display: flex;
        flex-direction: column;
        min-height: 120px;
    }
    
    .cookie-type h3 {
        font-size: 1.3rem;
        font-weight: 400;
        color: #1e3a5f;
        margin: 0 0 1rem 0;
        font-family: 'Libre Baskerville', serif;
    }
    
    .cookie-type p {
        margin: 0;
    }
    
    .lead-text {
        font-size: 1.05rem;
        line-height: 2;
        color: #2c3e50;
    }
    
    .content-section p {
        color: #4b5563;
        line-height: 1.9;
        margin-bottom: 1.5rem;
        font-family: 'Crimson Text', -apple-system, sans-serif;
        font-size: 0.95rem;
        font-weight: 300;
    }
    
    .styled-list {
        list-style: none;
        padding: 0;
        margin: 2rem 0;
    }
    
    .styled-list li {
        padding: 1rem 0;
        color: #4b5563;
        font-family: 'Crimson Text', -apple-system, sans-serif;
        font-size: 0.95rem;
        font-weight: 300;
        line-height: 1.8;
        border-bottom: 1px solid rgba(30, 58, 95, 0.08);
        display: flex;
        align-items: start;
        gap: 1rem;
    }
    
    .styled-list li:last-child {
        border-bottom: none;
    }
    
    .list-marker {
        color: #1e3a5f;
        font-weight: 400;
        flex-shrink: 0;
        margin-top: 0.1rem;
    }
    
    .note-box {
        background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
        padding: 1.5rem;
        border-left: 3px solid #f59e0b;
        font-style: italic;
        color: #92400e;
    }
    
    .browser-links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin: 2rem 0;
    }
    
    .browser-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.25rem 1.5rem;
        background: #fafafa;
        border: 1px solid rgba(30, 58, 95, 0.15);
        text-decoration: none;
        color: #1e3a5f;
        transition: all 0.3s ease;
        font-family: 'Crimson Text', sans-serif;
        font-size: 0.95rem;
        font-weight: 400;
    }
    
    .browser-link:hover {
        background: white;
        border-color: #1e3a5f;
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(30, 58, 95, 0.1);
    }
    
    .browser-icon {
        font-size: 1.5rem;
        opacity: 0.7;
    }
    
    .inline-link {
        color: #1e3a5f;
        text-decoration: none;
        border-bottom: 1px solid rgba(30, 58, 95, 0.3);
        transition: all 0.3s ease;
        font-weight: 400;
        padding-bottom: 2px;
    }
    
    .inline-link:hover {
        border-bottom-color: #1e3a5f;
        color: #2c5282;
    }
    
    .contact-box {
        background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%);
        color: white;
        padding: 2.5rem 2.5rem 2.5rem 5rem;
        margin-left: -4rem;
        margin-right: -4rem;
        margin-bottom: 0;
        border-radius: 0;
        box-shadow: 0 10px 40px rgba(30, 58, 95, 0.2);
        position: relative;
    }
    
    .contact-box::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        opacity: 0.4;
    }
    
    .contact-icon {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        border-radius: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .contact-icon svg {
        width: 24px;
        height: 24px;
        color: white;
    }
    
    .contact-box p {
        color: rgba(255, 255, 255, 0.95);
        margin: 0;
        font-size: 1rem;
        line-height: 1.8;
        position: relative;
        z-index: 1;
    }
    
    .contact-box .inline-link {
        color: white;
        border-bottom-color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
    }
    
    .contact-box .inline-link:hover {
        border-bottom-color: white;
    }
    
    @media (max-width: 768px) {
        .page-wrapper {
            padding: 4rem 1.5rem 6rem;
        }
        
        .container {
            padding: 3rem 2rem;
        }
        
        .page-title {
            font-size: 2rem;
        }
        
        .content-section {
            padding-left: 3rem;
        }
        
        .intro-section,
        .contact-box {
            margin-left: -2rem;
            margin-right: -2rem;
            padding-left: 4rem;
            padding-right: 2rem;
        }
        
        .section-badge {
            width: 40px;
            height: 40px;
            font-size: 0.85rem;
        }
        
        .content-section h2 {
            font-size: 1.5rem;
        }
        
        .browser-links {
            grid-template-columns: 1fr;
        }
    }
</style>

