const contents = {
    title: "Política de privacidad — <span class='whitespace-nowrap'>Oru Studio</span>",
    lastUpdated: "2025-11-06",
    note: "Esta política explica cómo <strong>Oru Studio</strong> (\"nosotros\") procesamos los datos en la aplicación <strong>PawPal</strong>.",
    sections: {
        dataProcessed: {
            title: "Datos que procesamos",
            note: "Recopilamos y procesamos los siguientes tipos de datos:",
            list: [
                "Información de identificación personal (nombre, dirección de correo electrónico, número de teléfono, etc.)",
                "Datos de uso y cookies",
                "Información del dispositivo"
            ]
        },
        useOfData: {
            title: "Propósitos",
            note: "Utilizamos los datos recopilados para diversos propósitos:",
            list: [
                "Para proporcionar y mantener nuestro Servicio",
                "Para notificarle sobre cambios en nuestro Servicio",
                "Para proporcionar soporte al cliente",
                "Para recopilar análisis y mejorar nuestro Servicio (estadísticas de uso agregadas).",
                "Para personalizar la publicidad relevante (AdMob)."
            ]
        },
        dataSharing: {
            title: "Base legal",
            paragraphs: [
                "En el EEE/Reino Unido, los anuncios personalizados se basan en su <strong>consentimiento</strong> recopilado a través de Google UMP.",
                "Los análisis y diagnósticos se basan en intereses legítimos o en el consentimiento, según la región y la configuración del SDK."
            ]
        },
        providers: {
            title: "Proveedores de servicios",
            list: [
                "<strong>Google AdMob</strong> (anuncios y medición).",
                "<strong>Analytics</strong> (por ejemplo, Firebase/Unity Analytics) — si corresponde.",
                "<strong>Crashlytics</strong> (diagnósticos) — si corresponde."
            ]
        },
        retention: {
            title: "Retención de datos",
            paragraphs: [
                "Retenemos sus datos personales solo durante el tiempo necesario para los fines descritos en esta Política de privacidad."
            ]
        },
        children: {
            title: "Privacidad de los niños",
            paragraphs: [
                "Si la aplicación está dirigida a niños en su región/configuración de la tienda, aplicamos anuncios apropiados para la edad y limitaciones a los identificadores según la guía de la tienda/SDK."
            ]
        },
        yourRights: {
            title: "Sus derechos de protección de datos",
            paragraphs: [
                "Tiene derecho a acceder, actualizar o eliminar sus datos personales. También puede oponerse al procesamiento de sus datos.",
                "<a class=\"text-blue-600 underline\" href=\"mailto:support@oru.studio\">support@oru.studio</a>."
            ]
        },
        shopLinks: {
            smallNote: "PawPal está disponible en las siguientes plataformas: <a class=\"text-blue-600 underline\" href=\"https://play.google.com/store/apps/details?id=PLACEHOLDER_PACKAGE\">Google Play</a> <a class=\"text-blue-600 underline\" href=\"https://apps.apple.com/app/idPLACEHOLDER_APPLE_ID\">App Store</a>"
        }
    }
}

document.body.prepend(createHeader());
const main = document.getElementById("privacy-policy");
main.appendChild(createPrivacyContent(contents));
document.body.appendChild(createFooter());
