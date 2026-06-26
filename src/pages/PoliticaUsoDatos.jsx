import { useEffect } from 'react';

const colors = {
  bgVelle: '#fdfbf7',
  navyLogo: '#0b162c',
  goldLogo: '#a18248',
  textDark: '#1a1a1a',
  textMuted: '#555555'
};

const PoliticaCookies = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1000,
      display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
      overflowY: 'auto', padding: '40px 20px', boxSizing: 'border-box'
    }}>
      <div style={{
        backgroundColor: colors.bgVelle, maxWidth: '800px', width: '100%',
        padding: '60px', position: 'relative', margin: 'auto'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '20px', right: '25px',
          background: 'none', border: 'none', fontSize: '1.5rem',
          cursor: 'pointer', color: colors.textMuted
        }}>×</button>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
          fontSize: '2.5rem', color: colors.textDark, marginBottom: '0.5rem'
        }}>Política de Cookies</h1>
        <div style={{ borderBottom: `1px solid ${colors.goldLogo}`, marginBottom: '2rem' }}></div>

        <div style={{ color: colors.textMuted, lineHeight: '1.8', fontWeight: 300, fontSize: '0.95rem' }}>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>1. ¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita un sitio web. Permiten que el sitio recuerde información sobre su visita para facilitar su navegación en visitas posteriores.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>2. Cookies utilizadas en este sitio web</h2>
          <p>Este sitio web utiliza exclusivamente una cookie técnica propia, necesaria para recordar la preferencia de consentimiento del usuario. No se utilizan cookies de analítica, publicidad ni rastreo de ningún tipo.</p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ backgroundColor: colors.navyLogo, color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '400', letterSpacing: '1px' }}>Nombre</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '400', letterSpacing: '1px' }}>Tipo</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '400', letterSpacing: '1px' }}>Finalidad</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '400', letterSpacing: '1px' }}>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                <td style={{ padding: '10px 14px' }}>gcf_cookie_consent</td>
                <td style={{ padding: '10px 14px' }}>Técnica propia</td>
                <td style={{ padding: '10px 14px' }}>Guarda la preferencia de consentimiento de cookies del usuario</td>
                <td style={{ padding: '10px 14px' }}>1 año</td>
              </tr>
            </tbody>
          </table>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>3. Servicios de terceros</h2>
          <p>Este sitio web no utiliza servicios de terceros que instalen cookies. Las fuentes tipográficas están autoalojadas en el propio servidor y no generan peticiones externas.</p>
          <p>El único servicio externo utilizado es:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>
              <strong>Formspree:</strong> gestiona el envío del formulario de contacto. Solo se activa cuando el usuario envía el formulario de forma voluntaria y no instala cookies en el dispositivo. Para más información, consulte la política de privacidad de Formspree en{' '}
              <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: colors.goldLogo }}>
                formspree.io
              </a>.
            </li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>4. Cómo gestionar las cookies</h2>
          <p>El usuario puede configurar su navegador para aceptar, rechazar o eliminar las cookies en cualquier momento. A continuación se indican los enlaces de gestión de los navegadores más habituales:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: colors.goldLogo }}>Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" style={{ color: colors.goldLogo }}>Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: colors.goldLogo }}>Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" style={{ color: colors.goldLogo }}>Microsoft Edge</a></li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>5. Actualizaciones de esta política</h2>
          <p>Esta política puede ser actualizada para adaptarse a cambios legislativos o técnicos. Se recomienda revisarla periódicamente.</p>

          <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#999' }}>Última actualización: junio de 2026</p>
        </div>
      </div>
    </div>
  );
};

export default PoliticaCookies;