<script lang="ts">    
    import '../../app.css';    
    import * as m from '$lib/paraglide/messages.js';    
    import List from "../../components/ul-li.svelte";
    export const prerender = true;
    export const ssr = true;    
</script>

<svelte:head>
    <title>{m.gdpr_h1()} - {m.brand_label()}</title>
</svelte:head>

<div class="gdpr-page">
    <div class="container">
        <h1 class="page-title">{m.gdrp_h1()}</h1>
        
        <section class="gdpr-section">
            <h2>{m.gdpr_h2_1()}</h2>
            <p>{m.gdpr_d1_1()}</p>
            <p>{m.gdpr_d1_2()}</p>
            <List content={m.gdpr_ul1()} />
            <p>{m.gdpr_d1_3()}</p>
            <p>{m.gdpr_d1_4()}</p>
        </section>
        
        <section class="gdpr-section">
            <h2>{m.gdpr_h2_2()}</h2>
            <p>{m.gdpr_d2_1()}</p>
            <List content={m.gdpr_ul2()} />
        </section>
        
        <section class="gdpr-section">
            <h2>{m.gdpr_h2_3()}</h2>
            <p>{m.gdpr_d3_1()}</p>
            <List content={m.gdpr_ul3()} />
            <p>{m.gdpr_d3_2()}</p>
            <List content={m.gdpr_ul4()} />
            <p>{m.gdpr_d3_3()}</p>
        </section>
        
        <section class="gdpr-section">
            <h2>{m.gdpr_h2_4()}</h2>
            <p>{m.gdpr_d4_1()}</p>
            <p>{m.gdpr_d4_2()}</p>
            <p>{m.gdpr_d4_3()}</p>
        </section>
        
        <section class="gdpr-section">
            <h2>{m.gdpr_h2_5()}</h2>
            <p>{m.gdpr_d5_1()}</p>
            <p>{m.gdpr_d5_2()}</p>
        </section>
        
        <section class="gdpr-section">
            <h2>{m.gdpr_h2_6()}</h2>
            <p>{m.gdpr_d6_1()}</p>
        </section>
        
        <section class="gdpr-section">
            <h2>{m.gdpr_h2_7()}</h2>
            <p>{m.gdpr_d7_1()}</p>
        </section>
        
        <section class="gdpr-section">
            <h2>{m.gdpr_h2_8()}</h2>
            <p>{m.gdpr_d8_1()}</p>
        </section>
        
        <section class="gdpr-section">
            <h2>{m.gdpr_h2_9()}</h2>
            <p>{m.gdpr_d9_1()}</p>
        </section>
        
        <section class="gdpr-section">
            <h2>{m.gdpr_h2_10()}</h2>
            <p>{m.gdpr_d10_1()}</p>
        </section>
        
        <section class="gdpr-section">
            <h2>{m.gdpr_h2_11()}</h2>
            <p>{m.gdpr_d11_1()}</p>
        </section>
        
        <section class="gdpr-section">
            <h2>{m.gdpr_h2_12()}</h2>
            <p>{m.gdpr_d12_1()}</p>
        </section>
    </div>
</div>

<style>
    :global(body) {
        font-family: 'Libre Baskerville', 'Georgia', 'Times New Roman', serif;
        color: #2c3e50;
        background: #fafafa;
    }
    
    .gdpr-page {
        background: #fafafa;
        padding: 8rem 2rem;
        min-height: 80vh;
    }
    
    .container {
        max-width: 900px;
        margin: 0 auto;
        background: white;
        padding: 4rem;
        border-radius: 0;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        border-top: 3px solid #1e3a5f;
    }
    
    .page-title {
        font-size: 3rem;
        font-weight: 400;
        color: #1e3a5f;
        margin: 0 0 3rem 0;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(30, 58, 95, 0.15);
        text-align: center;
        letter-spacing: -0.02em;
        font-family: 'Libre Baskerville', serif;
    }
    
    .gdpr-section {
        margin-bottom: 4rem;
    }
    
    .gdpr-section h2 {
        font-size: 2rem;
        font-weight: 400;
        color: #1e3a5f;
        margin: 0 0 1.5rem 0;
        padding-bottom: 1rem;
        border-bottom: 3px solid #1e3a5f;
        font-family: 'Libre Baskerville', serif;
    }
    
    .gdpr-section p {
        color: #4b5563;
        line-height: 1.9;
        margin-bottom: 1.8rem;
        font-family: 'Crimson Text', -apple-system, sans-serif;
        font-size: 0.95rem;
        font-weight: 300;
    }
    
    @media (max-width: 768px) {
        .gdpr-page {
            padding: 5rem 2rem;
        }
        
        .container {
            padding: 2.5rem 1.5rem;
        }
        
        .page-title {
            font-size: 2.2rem;
        }
        
        .gdpr-section h2 {
            font-size: 1.6rem;
        }
    }
</style>
    
