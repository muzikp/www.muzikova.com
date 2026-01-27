<script lang="ts">    
    import '../app.css';
    import * as m from '$lib/paraglide/messages.js';
    import { base } from '$app/paths';
    export const prerender = true;
    export const ssr = true;
    
    let status = '';
    
    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        status = 'Odesílám...';
        
        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        
        // Nastavení příjemce podle prostředí (dev vs produkce)
        const recipientEmail = import.meta.env.DEV 
            ? 'pavel.muzik@evalytics.cz' 
            : 'irena@muzikova.com';
        
        // Převod dat formuláře na formát požadovaný AWS API
        const fields = [
            {
                rank: 0,
                property: "recipientEmail",
                value: recipientEmail
            },
            {
                rank: 1,
                property: "name",
                label: m.sec_contact_form_name(),
                value: formData.get('name') as string
            },
            {
                rank: 2,
                property: "email",
                label: m.sec_contact_form_email(),
                value: formData.get('email') as string
            },
            {
                rank: 3,
                property: "phone",
                label: m.sec_contact_form_phone(),
                value: formData.get('phone') as string || '-'
            },
            {
                rank: 4,
                property: "message",
                label: m.sec_contact_form_message(),
                value: formData.get('message') as string
            }
        ];
        
        const requestBody = {
            fields: fields
        };
    
        const response = await fetch("https://5dsrywp9e5.execute-api.eu-central-1.amazonaws.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(requestBody)
        });
        const result = await response.json();      
        if (result.success) {          
            status = 'Zpráva byla úspěšně odeslána!';
            form.reset();
        } else {
            status = 'Chyba při odesílání zprávy';
        }
    }    
</script>

<svelte:head>
    <title>{m.meta_title()}</title>
    <meta name="description" content={m.meta_description()} />
    <meta name="keywords" content={m.meta_keywords()} />
</svelte:head>

<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-content">
        <div class="hero-text">
            <h1 class="hero-title">
                <span class="hero-name">{m.hero_name()}</span>
                <span class="hero-role-text">{m.hero_role()}</span>
            </h1>
            <p class="hero-subtitle">{m.hero_subtitle()}</p>
            <a href="#{m.navbar_contact_ref()}" class="cta-button">{m.hero_cta()}</a>
        </div>
        <div class="hero-image">
            <div class="profile-card">
                <div class="profile-img-wrapper">
                    <img src="{base}/images/Irena_24_02_25_033.jpg" alt="Irena Mužíková" class="profile-img" />
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section id={m.navbar_services_ref()} class="services-section">
    <div class="container">
        <h2 class="section-title">{m.sec_services_title()}</h2>
        <p class="section-subtitle">{m.sec_services_subtitle()}</p>
        
        <div class="services-grid">
            <div class="service-card">
                <h3 class="service-title">{m.sec_services_g1_title()}</h3>
                <ul class="service-list">
                    {#each m.sec_services_g1_content().split(';').filter(item => item.trim()) as item}
                        <li>{item.trim()}</li>
                    {/each}
                </ul>
            </div>
            
            <div class="service-card">
                <h3 class="service-title">{m.sec_services_g2_title()}</h3>
                <ul class="service-list">
                    {#each m.sec_services_g2_content().split(';').filter(item => item.trim()) as item}
                        <li>{item.trim()}</li>
                    {/each}
                </ul>
            </div>
            
            <div class="service-card">
                <h3 class="service-title">{m.sec_services_g3_title()}</h3>
                <ul class="service-list">
                    {#each m.sec_services_g3_content().split(';').filter(item => item.trim()) as item}
                        <li>{item.trim()}</li>
                    {/each}
                </ul>
            </div>
            
            <div class="service-card">
                <h3 class="service-title">{m.sec_services_g4_title()}</h3>
                <ul class="service-list">
                    {#each m.sec_services_g4_content().split(';').filter(item => item.trim()) as item}
                        <li>{item.trim()}</li>
                    {/each}
                </ul>
            </div>
            
            <div class="service-card">
                <h3 class="service-title">{m.sec_services_g5_title()}</h3>
                <ul class="service-list">
                    {#each m.sec_services_g5_content().split(';').filter(item => item.trim()) as item}
                        <li>{item.trim()}</li>
                    {/each}
                </ul>
            </div>
            
            <div class="service-card">
                <h3 class="service-title">{m.sec_services_g6_title()}</h3>
                <ul class="service-list">
                    {#each m.sec_services_g6_content().split(';').filter(item => item.trim()) as item}
                        <li>{item.trim()}</li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id={m.navbar_about_ref()} class="about-section">
    <div class="container">
        <h2 class="section-title">{m.about_title()}</h2>
        <p class="section-subtitle">{m.about_subtitle()}</p>
        
        <div class="about-content">
            <div class="about-card">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                </div>
                <h3 class="card-title">{m.about_edu_title()}</h3>
                <ul class="about-list">
                    <li>{m.about_edu_1()}</li>
                    <li>{m.about_edu_2()}</li>
                    <li>{m.about_edu_3()}</li>
                </ul>
            </div>
            
            <div class="about-card">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                </div>
                <h3 class="card-title">{m.about_career_title()}</h3>
                <ul class="about-list">
                    <li>{m.about_career_1()}</li>
                    <li>{m.about_career_2()}</li>
                    <li>{m.about_career_3()}</li>
                    <li>{m.about_career_4()}</li>
                </ul>
            </div>
            
            <div class="about-card">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
                </div>
                <h3 class="card-title">{m.about_languages_title()}</h3>
                <ul class="about-list">
                    <li>{m.about_languages_1()}</li>
                    <li>{m.about_languages_2()}</li>
                </ul>
            </div>
        </div>
        
        <div class="about-photo-section">
            <img src="{base}/images/Irena_24_02_25_123b.jpg" alt="Irena Mužíková" class="about-photo" />
        </div>
        
        <p class="about-description">{m.about_description()}</p>
    </div>
</section>

<!-- Partners Section -->
<section class="partners-section">
    <div class="container">
        <h2 class="section-title">{m.sec_partners_title()}</h2>
        
        <div class="partners-grid">
            <div class="partner-card">
                <h3 class="partner-name">{m.sec_partners_1_name()}</h3>
                <p class="partner-role">{m.sec_partners_1_role()}</p>
            </div>
            
            <div class="partner-card">
                <h3 class="partner-name">{m.sec_partners_2_name()}</h3>
                <p class="partner-role">{m.sec_partners_2_role()}</p>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id={m.navbar_contact_ref()} class="contact-section">
    <div class="container">
        <h2 class="section-title">{m.sec_contact_title()}</h2>
        
        <div class="contact-content">
            <div class="contact-info">
                <h3 class="contact-heading">{m.sec_contact_name()}</h3>
                <p class="contact-role">{m.sec_contact_role()}</p>
                
                <div class="contact-details">
                    <div class="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="contact-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div>
                            <p>Ukrajinská 874/3</p>
                            <p>Vršovice, Praha 10, 101 00</p>
                            <p>{m.sec_contact_country()}</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="contact-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <p>+420 774 869 444</p>
                    </div>
                    
                    <div class="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="contact-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <p>irena@muzikova.com</p>
                    </div>
                    
                    <div class="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="contact-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <div>
                            <p>{m.sec_contact_ds()}: qh4abwm</p>
                            <p>{m.sec_contact_cak()}: 13095</p>
                            <p>{m.sec_contact_ic()}: 72483539</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="contact-form-wrapper">
                <form on:submit={handleSubmit} class="contact-form">
                    <div class="form-group">
                        <label for="name">{m.sec_contact_form_name()}</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder={m.sec_contact_form_name_placeholder()} 
                            required 
                        />
                    </div>
                    
                    <div class="form-group">
                        <label for="email">{m.sec_contact_form_email()}</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder={m.sec_contact_form_email_placeholder()} 
                            required 
                        />
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">{m.sec_contact_form_phone()}</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            placeholder={m.sec_contact_form_phone_placeholder()} 
                        />
                    </div>
                    
                    <div class="form-group">
                        <label for="message">{m.sec_contact_form_message()}</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="5" 
                            required
                        ></textarea>
                    </div>
                    
                    <div class="form-consent">
                        <input type="checkbox" id="consent" name="consent" required />
                        <label for="consent">
                            {m.sec_contact_form_consent_1()} 
                            <a href="{base}/{m.sec_contact_form_consent_link()}">{m.sec_contact_form_consent_2()}</a>
                        </label>
                    </div>
                    
                    <button type="submit" class="submit-button">{m.sec_contact_form_send()}</button>
                    
                    {#if status}
                        <p class="form-status">{status}</p>
                    {/if}
                </form>
            </div>
        </div>
        
        <div class="map-wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.4982391587844!2d14.451899276717833!3d50.07110227152428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948c3fa93333%3A0x5b0c8b5f5b0c8b5f!2sUkrajinsk%C3%A1%20874%2F3%2C%20101%2000%20Praha%2010-Vr%C5%A1ovice!5e0!3m2!1scs!2scz!4v1234567890123!5m2!1scs!2scz" 
                class="map"
                style="border:0;" 
                allowfullscreen={true}
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title={m.sec_contact_map_alt()}
            ></iframe>
        </div>
    </div>
</section>

<style>
    :global(body) {
        margin: 0;
        font-family: 'Libre Baskerville', 'Georgia', 'Times New Roman', serif;
        color: #2c3e50;
        background: #fafafa;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }
    
    /* Hero Section */
    .hero-section {
        background: linear-gradient(165deg, #3a3a3a 0%, #4a4a4a 50%, #3a3a3a 100%);
        color: #ffffff;
        padding: 8rem 2rem 10rem;
        position: relative;
        overflow: hidden;
    }
    
    .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        opacity: 0.4;
    }
    
    .hero-content {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6rem;
        align-items: center;
        position: relative;
        z-index: 1;
    }
    
    .hero-title {
        font-size: 4rem;
        font-weight: 400;
        margin: 0 0 1.5rem 0;
        line-height: 1.2;
        letter-spacing: -0.02em;
        font-family: 'Libre Baskerville', serif;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }
    
    .hero-name {
        white-space: nowrap;
    }
    
    .hero-role-text {
        display: block;
        font-size: 0.6em;
        font-weight: 300;
    }
    
    .hero-subtitle {
        font-size: 1.3rem;
        color: rgba(255, 255, 255, 0.85);
        margin: 0 0 3rem 0;
        font-weight: 300;
        line-height: 1.6;
        font-family: 'Crimson Text', -apple-system, sans-serif;
    }
    
    .cta-button {
        display: inline-block;
        background: transparent;
        color: white;
        padding: 1.2rem 3rem;
        border: 2px solid rgba(255, 255, 255, 0.8);
        border-radius: 0;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.4s ease;
        letter-spacing: 0.5px;
        font-size: 0.95rem;
        text-transform: uppercase;
        font-family: 'Crimson Text', sans-serif;
    }
    
    .cta-button:hover {
        background: white;
        color: #2f4f4f;
        border-color: white;
    }
    
    .profile-card {
        background: transparent;
        backdrop-filter: none;
        border-radius: 0;
        padding: 3rem;
        text-align: center;
        border: none;
        box-shadow: none;
    }
    
    .profile-img-wrapper {
        width: 400px;
        height: 500px;
        margin: 0 auto 2rem;
        border-radius: 0;
        overflow: hidden;
        border: none;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }
    
    .profile-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .profile-name {
        font-size: 1.6rem;
        font-weight: 400;
        margin: 0 0 0.5rem 0;
        letter-spacing: 0.5px;
    }
    
    .profile-role {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1rem;
        margin: 0;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 0.85rem;
        font-family: 'Crimson Text', sans-serif;
    }
    
    /* Sections */
    .section-title {
        font-size: 3rem;
        font-weight: 400;
        text-align: center;
        margin: 0 0 2.5rem 0;
        color: #2f4f4f;
        letter-spacing: -0.02em;
        font-family: 'Libre Baskerville', serif;
        position: relative;
        display: inline-block;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .section-title::after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 2px;
        background: #2f4f4f;
    }
    
    .section-subtitle {
        text-align: center;
        font-size: 1.15rem;
        color: #6b7280;
        margin: 0 0 5rem 0;
        font-weight: 300;
        font-family: 'Crimson Text', sans-serif;
        letter-spacing: 0.3px;
    }
    
    /* About Section */
    .about-section {
        padding: 8rem 2rem;
        background: #ffffff;
    }
    
    .about-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 3rem;
        margin-bottom: 4rem;
    }
    
    .about-card {
        background: #fafafa;
        padding: 3rem;
        border-radius: 0;
        border-left: 3px solid #2f4f4f;
        transition: all 0.4s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    
    .about-card:hover {
        transform: translateX(10px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
    
    .icon-wrapper {
        width: 70px;
        height: 70px;
        background: #2f4f4f;
        border-radius: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
    }
    
    .icon {
        width: 36px;
        height: 36px;
        color: white;
    }
    
    .card-title {
        font-size: 1.6rem;
        font-weight: 400;
        margin: 0 0 1.5rem 0;
        color: #2f4f4f;
        font-family: 'Libre Baskerville', serif;
    }
    
    .about-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .about-list li {
        padding: 0.75rem 0;
        color: #4b5563;
        position: relative;
        padding-left: 2rem;
        line-height: 1.7;
        font-family: 'Crimson Text', sans-serif;
        font-size: 0.95rem;
    }
    
    .about-list li:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.85rem;
        width: 6px;
        height: 6px;
        background: #2f4f4f;
        border-radius: 50%;
    }
    
    .about-photo-section {
        max-width: 1000px;
        margin: 3rem auto;
        text-align: center;
    }
    
    .about-photo {
        width: 100%;
        height: auto;
        border-radius: 0;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    }
    
    .about-description {
        text-align: center;
        font-size: 1.15rem;
        color: #4b5563;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.9;
        font-family: 'Crimson Text', sans-serif;
        font-weight: 300;
    }
    
    /* Services Section */
    .services-section {
        padding: 8rem 2rem;
        background: #fafafa;
    }
    
    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
        gap: 2.5rem;
    }
    
    .service-card {
        background: white;
        padding: 3rem;
        border-radius: 0;
        border-top: 3px solid #2f4f4f;
        transition: all 0.4s ease;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.06);
    }
    
    .service-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    }
    
    .service-icon {
        font-size: 3rem;
        margin-bottom: 1.5rem;
        opacity: 0.8;
    }
    
    .service-title {
        font-size: 1.6rem;
        font-weight: 400;
        margin: 0 0 1.5rem 0;
        color: #2f4f4f;
        font-family: 'Libre Baskerville', serif;
    }
    
    .service-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .service-list li {
        padding: 0.6rem 0;
        color: #4b5563;
        position: relative;
        padding-left: 1.8rem;
        font-size: 0.95rem;
        line-height: 1.6;
        font-family: 'Crimson Text', sans-serif;
    }
    
    .service-list li:before {
        content: '';
        position: absolute;
        left: 0.5rem;
        top: 0.7rem;
        width: 5px;
        height: 5px;
        background: #2f4f4f;
        border-radius: 50%;
    }
    
    /* References Section */
    .references-section {
        padding: 8rem 2rem;
        background: linear-gradient(165deg, #2f4f4f 0%, #556b2f 50%, #2f4f4f 100%);
        color: white;
        position: relative;
    }
    
    .references-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        opacity: 0.3;
    }
    
    /* Partners Section */
    .partners-section {
        padding: 8rem 2rem;
        background: #f9f9f9;
    }
    
    .partners-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 6rem;
        max-width: 900px;
        margin: 0 auto;
    }
    
    .partner-card {
        background: white;
        padding: 3rem;
        border-radius: 0;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        text-align: center;
        transition: all 0.3s ease;
        border-left: 4px solid #2f4f4f;
    }
    
    .partner-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
    
    .partner-name {
        font-size: 1.5rem;
        font-weight: 400;
        margin: 0 0 0.5rem 0;
        color: #2f4f4f;
        font-family: 'Libre Baskerville', serif;
    }
    
    .partner-role {
        color: #666;
        font-size: 1rem;
        margin: 0;
        text-transform: lowercase;
        font-family: 'Crimson Text', sans-serif;
        letter-spacing: 0.5px;
    }
    
    /* Contact Section */
    .contact-section {
        padding: 8rem 2rem;
        background: #ffffff;
    }
    
    .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        margin-bottom: 4rem;
    }
    
    .contact-heading {
        font-size: 2rem;
        font-weight: 400;
        margin: 0 0 0.75rem 0;
        color: #2f4f4f;
        font-family: 'Libre Baskerville', serif;
    }
    
    .contact-role {
        color: #6b7280;
        font-size: 1rem;
        margin: 0 0 3rem 0;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 0.85rem;
        font-family: 'Crimson Text', sans-serif;
    }
    
    .contact-details {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    
    .contact-item {
        display: flex;
        gap: 1.5rem;
        align-items: start;
    }
    
    .contact-icon {
        width: 24px;
        height: 24px;
        color: #2f4f4f;
        flex-shrink: 0;
        margin-top: 0.2rem;
    }
    
    .contact-item p {
        margin: 0;
        color: #4b5563;
        line-height: 1.8;
        font-family: 'Crimson Text', sans-serif;
        font-size: 0.95rem;
    }
    
    .contact-form-wrapper {
        background: #fafafa;
        padding: 3rem;
        border-radius: 0;
        border-top: 3px solid #2f4f4f;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.06);
    }
    
    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    
    .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    
    .form-group label {
        font-weight: 400;
        color: #2f4f4f;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-family: 'Crimson Text', sans-serif;
    }
    
    .form-group input,
    .form-group textarea {
        padding: 1rem;
        border: 1px solid #d1d5db;
        border-radius: 0;
        font-size: 1rem;
        transition: all 0.3s ease;
        font-family: 'Crimson Text', sans-serif;
        background: white;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #2f4f4f;
        box-shadow: 0 0 0 3px rgba(30, 58, 95, 0.1);
    }
    
    .form-consent {
        display: flex;
        gap: 0.75rem;
        align-items: start;
    }
    
    .form-consent input[type="checkbox"] {
        margin-top: 0.25rem;
    }
    
    .form-consent label {
        font-size: 0.9rem;
        color: #6b7280;
        line-height: 1.6;
        font-family: 'Crimson Text', sans-serif;
    }
    
    .form-consent a {
        color: #2f4f4f;
        text-decoration: none;
        border-bottom: 1px solid rgba(30, 58, 95, 0.3);
        transition: border-color 0.3s ease;
    }
    
    .form-consent a:hover {
        border-bottom-color: #2f4f4f;
    }
    
    .submit-button {
        background: transparent;
        color: #2f4f4f;
        padding: 1.2rem 3rem;
        border: 2px solid #2f4f4f;
        border-radius: 0;
        font-size: 0.95rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.4s ease;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-family: 'Crimson Text', sans-serif;
    }
    
    .submit-button:hover {
        background: #2f4f4f;
        color: white;
    }
    
    .form-status {
        text-align: center;
        padding: 1rem;
        border-radius: 0;
        background: #2f4f4f;
        color: white;
        margin: 1rem 0 0 0;
        font-family: 'Crimson Text', sans-serif;
    }
    
    .map-wrapper {
        border-radius: 0;
        overflow: hidden;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        border: 1px solid #e5e7eb;
    }
    
    .map {
        width: 100%;
        height: 500px;
        filter: grayscale(0.4);
        transition: filter 0.4s ease;
    }
    
    .map:hover {
        filter: grayscale(0);
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
        .hero-content,
        .about-content,
        .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
        }
        
        .hero-section {
            padding: 5rem 2rem 6rem;
        }
        
        .hero-title {
            font-size: 2.5rem;
        }
        
        .hero-name {
            font-size: 2.5rem;
        }
        
        .hero-role-text {
            font-size: 2.5rem;
        }
        
        .services-grid,
        .references-grid {
            grid-template-columns: 1fr;
        }
        
        .section-title {
            font-size: 2.2rem;
        }
        
        .about-section,
        .services-section,
        .references-section,
        .contact-section {
            padding: 5rem 2rem;
        }
    }
</style>


