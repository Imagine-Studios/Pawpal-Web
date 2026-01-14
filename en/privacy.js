const contents = {
    title: "Privacy Policy — <span class='whitespace-nowrap'>Oru Studio</span>",
    lastUpdated: "2026-01-14",
    note: "This policy explains how <strong>Oru Studio</strong> (“we”) process data in the app <strong>PawPal</strong>.",
    sections: {
        dataProcessed: {
            title: "Data We Process",
            note: "Depending on your device settings and features you use, the app may process:",
            list: [
                "<strong>Identifiers</strong> (e.g., app instance identifiers, device identifiers and advertising identifiers where permitted) used for authentication, analytics and advertising measurement.",
                "<strong>Gameplay and app activity</strong> (e.g., game progress, interactions, scene changes, feature usage) for analytics and improving the game.",
                "<strong>Cloud save data</strong> (e.g., coins, gems, unlocked items, no-ads flag, last update timestamp) to sync progress across installs/devices.",
                "<strong>Purchase events</strong> (e.g., an item purchase was made) for entitlement/progress and analytics. Payment details are processed by the store (Google Play / Apple) and are not stored by us.",
                "<strong>Diagnostics</strong> (e.g., crash logs, performance data) if enabled via SDKs (such as Firebase Crashlytics)."
            ]
        },

        useOfData: {
            title: "Purposes",
            note: "We use data for the following purposes:",
            list: [
                "To provide and maintain the Service (including authentication and cloud save sync).",
                "To restore your progress after reinstalling or changing device (cloud save).",
                "To provide customer support.",
                "To understand how the game is used and improve gameplay (analytics events such as game completed, item purchased, tool toggles, game mode toggles, scene changes).",
                "To show advertising and measure ad performance where applicable (AdMob), respecting consent requirements (Google UMP).",
                "To detect, prevent and address technical issues (diagnostics/crash reports)."
            ]
        },

        dataSharing: {
            title: "Legal basis",
            paragraphs: [
                "In the EEA/UK, personalized ads rely on your <strong>consent</strong> collected via Google UMP. Non-personalized ads may be shown depending on your choices and regional requirements.",
                "Analytics and diagnostics may rely on legitimate interests or consent depending on region and SDK configuration."
            ]
        },

        providers: {
            title: "Service Providers",
            note: "We use third-party providers to operate and improve the app:",
            list: [
                "<strong>Unity Authentication</strong> (account/authentication services).",
                "<strong>Google Play Games Services</strong> (Android sign-in) — where used.",
                "<strong>Unity Cloud Save</strong> (cloud storage of game progress).",
                "<strong>Google AdMob</strong> (ads & measurement) and <strong>Google UMP</strong> (consent).",
                "<strong>Firebase Analytics</strong> (analytics) — if enabled in the app build.",
                "<strong>Firebase Crashlytics</strong> (diagnostics) — if enabled in the app build."
            ]
        },

        retention: {
            title: "Data Retention",
            paragraphs: [
                "We retain data only as long as necessary for the purposes described above.",
                "Cloud save data may be retained to allow you to restore progress across reinstalls/devices."
            ]
        },

        children: {
            title: "Children's Privacy",
            paragraphs: [
                "If the app is directed to children in your region/store setting, we apply age-appropriate ads and limitations to identifiers per store/SDK guidance.",
                "We do not knowingly collect personal contact information from children."
            ]
        },

        yourRights: {
            title: "Your Data Protection Rights",
            paragraphs: [
                "You may have the right to access, correct, or delete your data depending on your region.",
                "Contact us at <a class=\"text-blue-600 underline\" href=\"mailto:support@oru.studio\">support@oru.studio</a>."
            ]
        },

        shopLinks: {
            smallNote:
                "PawPal is available on the following platforms: <a class=\"text-blue-600 underline\" href=\"https://play.google.com/store/apps/details?id=PLACEHOLDER_PACKAGE\">Google Play</a> <a class=\"text-blue-600 underline\" href=\"https://apps.apple.com/app/idPLACEHOLDER_APPLE_ID\">App Store</a>"
        }
    }
};

document.body.prepend(createHeader());
const main = document.getElementById("privacy-policy");
main.appendChild(createPrivacyContent(contents));
document.body.appendChild(createFooter());
