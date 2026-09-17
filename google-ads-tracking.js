const GOOGLE_ADS_TAG_ID = "AW-18372415580";

// Google Ads'te WhatsApp tiklama donusumu olusturulunca label buraya eklenir.
// Label bosken temel Google tag ve whatsapp_click etkinligi calisir.
const GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL = "";

window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", GOOGLE_ADS_TAG_ID);

document.addEventListener("DOMContentLoaded", () => {
  const whatsappLinks = document.querySelectorAll(
    "a[href*='wa.me/905488883786'], a[href*='api.whatsapp.com']"
  );

  whatsappLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = link.href;

      gtag("event", "whatsapp_click", {
        send_to: GOOGLE_ADS_TAG_ID,
        event_category: "lead",
        event_label: url
      });

      if (!GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL) {
        return;
      }

      const sendTo = `${GOOGLE_ADS_TAG_ID}/${GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL}`;

      if (link.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey) {
        gtag("event", "conversion", { send_to: sendTo });
        return;
      }

      event.preventDefault();

      let opened = false;
      const openWhatsapp = () => {
        if (opened) {
          return;
        }

        opened = true;
        window.location.href = url;
      };

      gtag("event", "conversion", {
        send_to: sendTo,
        event_callback: openWhatsapp,
        event_timeout: 1500
      });

      window.setTimeout(openWhatsapp, 1600);
    });
  });
});
