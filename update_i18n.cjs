const fs = require('fs');
const path = require('path');
const localesPath = path.join('c:/Users/junin/Documents/Site Automatiza .com/automatiza1/src/i18n/locales');

const keysToAdd = {
  header: {
    nav: {
      inicio: { pt: 'Início', en: 'Home', es: 'Inicio' },
      produtos: { pt: 'Produtos', en: 'Products', es: 'Productos' },
      sobre: { pt: 'Sobre', en: 'About Us', es: 'Sobre Nosotros' },
      contato: { pt: 'Contato', en: 'Contact', es: 'Contacto' },
      informacoes: { pt: 'Informações', en: 'Information', es: 'Información' },
      seguranca: { pt: 'Segurança', en: 'Security', es: 'Seguridad' },
      envio: { pt: 'Envio', en: 'Shipping', es: 'Envío' },
      garantia: { pt: 'Garantia', en: 'Warranty', es: 'Garantía' },
      comoComprar: { pt: 'Como Comprar', en: 'How to Buy', es: 'Cómo Comprar' },
      trocasDevolucoes: { pt: 'Trocas e Devoluções', en: 'Returns and Exchanges', es: 'Cambios y Devoluciones' },
      videosInstalacao: { pt: 'Vídeos de Instalação', en: 'Installation Videos', es: 'Videos de Instalación' }
    },
    actions: {
      faleConosco: { pt: 'Fale Conosco', en: 'Contact Us', es: 'Contáctenos' },
      chamarWhatsapp: { pt: 'CHAMAR NO WHATSAPP', en: 'MESSAGE ON WHATSAPP', es: 'CONTACTAR POR WHATSAPP' }
    }
  }
};

const langs = ['pt-BR', 'en-US', 'es-ES'];
const mapLang = { 'pt-BR': 'pt', 'en-US': 'en', 'es-ES': 'es' };

langs.forEach(lang => {
  const filePath = path.join(localesPath, `${lang}.json`);
  let data = {};
  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  
  if (!data.header) data.header = {};
  if (!data.header.nav) data.header.nav = {};
  if (!data.header.actions) data.header.actions = {};

  const l = mapLang[lang];
  
  Object.keys(keysToAdd.header.nav).forEach(k => {
    data.header.nav[k] = keysToAdd.header.nav[k][l];
  });
  
  Object.keys(keysToAdd.header.actions).forEach(k => {
    data.header.actions[k] = keysToAdd.header.actions[k][l];
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Updated ${lang}.json`);
});
