import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
    guiOptions: {
        consentModal: {
            layout: 'box inline',
            position: 'bottom right'
        },
        preferencesModal: {
            layout: 'box',
            position: 'right'
        }
    },

    categories: {
        necessary: {
            readOnly: true,
            enabled: true
        },
        analytics: {
            enabled: false
        }
    },

    language: {
        default: 'cs',
        autoDetect: 'browser',
        translations: {
            cs: {
                consentModal: {
                    title: 'Používáme cookies',
                    description: 'Tento web používá nezbytné cookies pro správné fungování a analytické cookies pro měření návštěvnosti. Více informací najdete v našich <a href="/www.muzikova.com/cookies">zásadách používání cookies</a>.',
                    acceptAllBtn: 'Přijmout vše',
                    acceptNecessaryBtn: 'Pouze nezbytné',
                    showPreferencesBtn: 'Nastavení',
                    footer: '<a href="/www.muzikova.com/gdpr">Zásady ochrany osobních údajů</a>'
                },
                preferencesModal: {
                    title: 'Nastavení cookies',
                    acceptAllBtn: 'Přijmout vše',
                    acceptNecessaryBtn: 'Pouze nezbytné',
                    savePreferencesBtn: 'Uložit nastavení',
                    closeIconLabel: 'Zavřít',
                    serviceCounterLabel: 'Služby',
                    sections: [
                        {
                            title: 'Používání cookies',
                            description: 'Používáme cookies pro zajištění funkčnosti webu a analýzu návštěvnosti. Můžete si vybrat, které kategorie cookies chcete povolit.'
                        },
                        {
                            title: 'Nezbytné cookies',
                            description: 'Tyto cookies jsou nezbytné pro správné fungování webu a nelze je vypnout.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Analytické cookies',
                            description: 'Tyto cookies nám pomáhají pochopit, jak návštěvníci používají náš web, prostřednictvím Google Analytics.',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'Více informací',
                            description: 'Pro více informací o zpracování vašich údajů si přečtěte naše <a href="/www.muzikova.com/cookies">zásady používání cookies</a> a <a href="/www.muzikova.com/gdpr">zásady ochrany osobních údajů</a>.'
                        }
                    ]
                }
            },
            en: {
                consentModal: {
                    title: 'We use cookies',
                    description: 'This website uses necessary cookies for proper functioning and analytics cookies to measure traffic. More information can be found in our <a href="/www.muzikova.com/en/cookies">cookie policy</a>.',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Necessary only',
                    showPreferencesBtn: 'Settings',
                    footer: '<a href="/www.muzikova.com/en/gdpr">Privacy policy</a>'
                },
                preferencesModal: {
                    title: 'Cookie settings',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Necessary only',
                    savePreferencesBtn: 'Save settings',
                    closeIconLabel: 'Close',
                    serviceCounterLabel: 'Services',
                    sections: [
                        {
                            title: 'Cookie usage',
                            description: 'We use cookies to ensure website functionality and analyze traffic. You can choose which categories of cookies you want to allow.'
                        },
                        {
                            title: 'Necessary cookies',
                            description: 'These cookies are necessary for the proper functioning of the website and cannot be disabled.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Analytics cookies',
                            description: 'These cookies help us understand how visitors use our website through Google Analytics.',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'More information',
                            description: 'For more information about how we process your data, please read our <a href="/www.muzikova.com/en/cookies">cookie policy</a> and <a href="/www.muzikova.com/en/gdpr">privacy policy</a>.'
                        }
                    ]
                }
            }
        }
    }
};
