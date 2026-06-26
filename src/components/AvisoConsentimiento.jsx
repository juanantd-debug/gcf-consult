import { useState, useEffect } from 'react';

const colors = {
  navyLogo: '#0b162c',
  goldLogo: '#a18248',
  bgVelle: '#fdfbf7',
  textMuted: '#555555'
};

const AvisoConsentimiento = ({ onShowPolitica }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gcf_cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('gcf_cookie_consent', 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('gcf_cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: colors.navyLogo,
      borderTop: `1px solid ${colors.goldLogo}`,
      zIndex: 999,
      padding: '20px 30px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem',
      flexWrap: 'wrap'
    }}>
      <p style={{
        color: 'rgba(255,255,255,0.75)',
        fontSize: '0.78rem',
        fontFamily: "'Inter', sans-serif",
        fontWeight: '300',
        lineHeight: '1.6',
        margin: 0,
        maxWidth: '700px'
      }}>
        Este sitio web utiliza únicamente cookies técnicas necesarias para su funcionamiento. No se utilizan cookies de analítica ni publicitarias. Para más información, consulte nuestra{' '}
        <button
          onClick={onShowPolitica}
          style={{
            color: colors.goldLogo,
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            textDecoration: 'underline'
          }}
        >
          Política de Cookies
        </button>.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
        <button
          onClick={reject}
          style={{
            padding: '0.6rem 1.4rem',
            background: 'none',
            border: `1px solid rgba(255,255,255,0.25)`,
            color: 'rgba(255,255,255,0.5)',
            cursor: 'pointer',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >
          Rechazar
        </button>
        <button
          onClick={accept}
          style={{
            padding: '0.6rem 1.4rem',
            backgroundColor: colors.goldLogo,
            border: `1px solid ${colors.goldLogo}`,
            color: '#fff',
            cursor: 'pointer',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontWeight: '600'
          }}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default AvisoConsentimiento;