const contents = {
    title: "Privacy Policy — <span class='whitespace-nowrap'>Oru Studio</span>",
    lastUpdated: "2025-11-06",
    note: "This policy explains how <strong>Oru Studio</strong> (“we”) process data in the app <strong>PawPal</strong>.",
    sections: {
        dataProcessed: {
            title: "Data We Process",
            note: "We collect and process the following types of data:",
            list: [
                "Personal identification information (Name, email address, phone number, etc.)",
                "Usage data and cookies",
                "Device information"
            ]
        },
        useOfData: {
            title: "Purposes",
            note: "We use the collected data for various purposes:",
            list: [
                "To provide and maintain our Service",
                "To notify you about changes to our Service",
                "To provide customer support",
                "To gather analysis to improve our Service (Aggregate usage statistics).",
                "To tailor relevant advertising (AdMob)."
            ]
        },
        dataSharing: {
            title: "Legal basis",
            paragraphs: [
                "In the EEA/UK, personalized ads rely on your <strong>consent</strong> collected via Google UMP.",
                "Analytics/diagnostics rely on legitimate interests or consent depending on region/SDK settings."
            ]
        },
        providers: {
            title: "Service Providers",
            list: [
                "<strong>Google AdMob</strong> (ads & measurement).",
                "<strong>Analytics</strong> (e.g., Firebase/Unity Analytics) — if applicable.",
                "<strong>Crashlytics</strong> (diagnostics) — if applicable."
            ]
        },
        retention: {
            title: "Data Retention",
            paragraphs: [
                "We retain your personal data only as long as necessary for the purposes outlined in this Privacy Policy."
            ]
        },
        children: {
            title: "Children's Privacy",
            paragraphs: [
                "If the app is directed to children in your region/store setting, we apply age-appropriate ads and limitations to identifiers per store/SDK guidance."
            ]
        },
        yourRights: {
            title: "Your Data Protection Rights",
            paragraphs: [
                "You have the right to access, update, or delete your personal data. You can also object to the processing of your data.",
                "<a class=\"text-blue-600 underline\" href=\"mailto:support@oru.studio\">support@oru.studio</a>."
            ]
        },
        shopLinks: {
            smallNote: "PawPal is available on the following platforms: <a class=\"text-blue-600 underline\" href=\"https://play.google.com/store/apps/details?id=PLACEHOLDER_PACKAGE\">Google Play</a> <a class=\"text-blue-600 underline\" href=\"https://apps.apple.com/app/idPLACEHOLDER_APPLE_ID\">App Store</a>"
        }
    }
}

const main = document.getElementById("privacy-policy");
main.appendChild(createPrivacyContent(contents));
document.body.appendChild(createFooter());
