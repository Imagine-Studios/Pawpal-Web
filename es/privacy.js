const contents = {
    title: "Política de Privacidad — <span class='whitespace-nowrap'>Oru Studio</span>",
    lastUpdated: "2026-01-14",
    note: "Esta política explica cómo <strong>Oru Studio</strong> («nosotros») procesa los datos en la aplicación <strong>PawPal</strong>.",
    sections: {
        dataProcessed: {
            title: "Datos que procesamos",
            note: "Según las funciones que utilices y la configuración de tu dispositivo, la aplicación puede procesar:",
            list: [
                "<strong>Identificadores</strong> (por ejemplo, identificadores de instancia de la app, identificadores del dispositivo y, cuando esté permitido, identificadores publicitarios) utilizados para autenticación, analítica y medición de anuncios.",
                "<strong>Actividad de la aplicación y del juego</strong> (por ejemplo, progreso, interacciones, cambios de escena, uso de funciones) con fines analíticos y de mejora del juego.",
                "<strong>Datos de guardado en la nube</strong> (por ejemplo, monedas, gemas, objetos desbloqueados, estado de no-anuncios y marca temporal de la última actualización) para sincronizar el progreso entre instalaciones o dispositivos.",
                "<strong>Eventos de compra</strong> (por ejemplo, que se haya realizado una compra dentro del juego) para gestionar el progreso y la analítica. Los datos de pago son procesados por la tienda (Google Play / Apple) y no son almacenados por nosotros."
            ]
        },

        useOfData: {
            title: "Finalidad del tratamiento",
            note: "Utilizamos los datos para:",
            list: [
                "Proporcionar y mantener el servicio (incluida la autenticación y el guardado en la nube).",
                "Restaurar tu progreso tras reinstalar la aplicación o cambiar de dispositivo.",
                "Ofrecer soporte al usuario.",
                "Analizar el uso del juego y mejorar la experiencia (por ejemplo, eventos como partida completada, compra de objetos, cambios de herramientas, modos de juego o escenas).",
                "Mostrar publicidad y medir su rendimiento cuando corresponda (Google AdMob), respetando los requisitos de consentimiento (Google UMP)."
            ]
        },

        dataSharing: {
            title: "Base legal",
            paragraphs: [
                "En el EEE y el Reino Unido, la publicidad personalizada se basa en tu <strong>consentimiento</strong>, recopilado mediante Google UMP. Dependiendo de tus elecciones y la región, pueden mostrarse anuncios no personalizados.",
                "La analítica puede basarse en el consentimiento del usuario o en intereses legítimos, según la normativa aplicable y la configuración de los SDK utilizados."
            ]
        },

        providers: {
            title: "Proveedores de servicios",
            note: "Utilizamos proveedores externos para operar y mejorar la aplicación:",
            list: [
                "<strong>Unity Authentication</strong> (servicios de autenticación y gestión de cuentas).",
                "<strong>Google Play Games Services</strong> (inicio de sesión en Android, cuando se utiliza).",
                "<strong>Unity Cloud Save</strong> (almacenamiento del progreso del juego en la nube).",
                "<strong>Google AdMob</strong> (publicidad y medición) y <strong>Google UMP</strong> (gestión del consentimiento).",
                "<strong>Firebase Analytics</strong> (analítica del uso de la aplicación)."
            ]
        },

        retention: {
            title: "Conservación de los datos",
            paragraphs: [
                "Conservamos los datos únicamente durante el tiempo necesario para cumplir las finalidades descritas en esta política.",
                "Los datos de guardado en la nube pueden conservarse para permitir la restauración del progreso entre instalaciones o dispositivos."
            ]
        },

        children: {
            title: "Privacidad de menores",
            paragraphs: [
                "Si la aplicación está dirigida a menores según la configuración de la tienda o la región, se aplican limitaciones adecuadas en publicidad e identificadores conforme a las directrices de la plataforma.",
                "No recopilamos de forma consciente información de contacto personal de menores."
            ]
        },

        yourRights: {
            title: "Derechos del usuario",
            paragraphs: [
                "Dependiendo de tu región, puedes tener derecho a acceder, rectificar o eliminar tus datos.",
                "Puedes contactar con nosotros en <a class=\"text-blue-600 underline\" href=\"mailto:support@oru.studio\">support@oru.studio</a>."
            ]
        },

        shopLinks: {
            smallNote:
                "PawPal está disponible en las siguientes plataformas: <a class=\"text-blue-600 underline\" href=\"https://play.google.com/store/apps/details?id=PLACEHOLDER_PACKAGE\">Google Play</a> <a class=\"text-blue-600 underline\" href=\"https://apps.apple.com/app/idPLACEHOLDER_APPLE_ID\">App Store</a>"
        }
    }
};

document.body.prepend(createHeader());
const main = document.getElementById("privacy-policy");
main.appendChild(createPrivacyContent(contents));
document.body.appendChild(createFooter());
