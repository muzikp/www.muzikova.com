# www.muzikova.com

Advokátní kancelář Mgr. Irena Mužíková - oficiální webové stránky.

##  Deployment na GitHub Pages

Projekt je automaticky deployován na GitHub Pages při každém push do `main` větve.

### Nastavení vlastní domény

1. V GitHub repozitáři jděte na **Settings**  **Pages**
2. V sekci **Custom domain** zadejte: `www.muzikova.com`
3. Počkejte na DNS kontrolu (může trvat až 24 hodin)
4. Zaškrtněte **Enforce HTTPS**

### DNS nastavení u vašeho registrátora

Pro apex doménu (`muzikova.com`):
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

Pro www subdoménu (`www.muzikova.com`):
```
Type: CNAME
Name: www
Value: <username>.github.io
```

##  Vývoj

```bash
# Instalace závislostí
pnpm install

# Spuštění dev serveru
pnpm run dev

# Build pro produkci
pnpm run build

# Preview produkční build
pnpm run preview
```

##  Vícejazyčnost

Web podporuje češtinu a angličtinu pomocí Paraglide i18n.
Překlady najdete v:
- `messages/cs.json` - Čeština
- `messages/en.json` - Angličtina

##  Struktura projektu

```
src/
 routes/           # SvelteKit stránky
    +page.svelte # Hlavní stránka
    gdpr/        # GDPR stránka
    aml/         # AML stránka
    cookies/     # Cookies stránka
 components/      # Komponenty
    navbar.svelte
    footer.svelte
 lib/            # Knihovny a utility
 app.html        # HTML šablona

static/             # Statické soubory
messages/           # i18n překlady
```

##  Technologie

- **SvelteKit** - Framework
- **TypeScript** - Typování
- **Paraglide** - i18n lokalizace
- **Tailwind CSS** - Styling (minimálně použitý)
- **GitHub Pages** - Hosting

##  Licence

 2024 Mgr. Irena Mužíková. Všechna práva vyhrazena.
