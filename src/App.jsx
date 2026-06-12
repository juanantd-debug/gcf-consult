import { useState } from 'react';
import './App.css';
import videoHero from './assets/edificios.mp4';
import logo from './assets/content.png';
import AvisoLegal from './pages/AvisoLegal';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';
import CookieBanner from './components/CookieBanner';

const App = () => {
  const [showAvisoLegal, setShowAvisoLegal] = useState(false);
  const [showPrivacidad, setShowPrivacidad] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const colors = {
    bgVelle: '#fdfbf7',
    navyLogo: '#0b162c',
    goldLogo: '#a18248',
    textDark: '#1a1a1a',
    textMuted: '#555555'
  };

  const inputStyle = { 
    padding: '1.2rem', 
    border: `1px solid #e0e0e0`, 
    backgroundColor: 'transparent', 
    fontFamily: 'inherit',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '0.9rem'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 30px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const titleSerif = {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: '400',
    color: colors.textDark
  };

  const footerLinkStyle = {
    color: 'rgba(255,255,255,0.5)',
    textDecoration: 'none',
    fontSize: '0.7rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontFamily: 'inherit',
    padding: 0
  };

  return (
    <div style={{ margin: 0, padding: 0, width: '100%', overflowX: 'hidden', fontFamily: "'Inter', sans-serif", backgroundColor: colors.bgVelle }}>

      {/* MODALES LEGALES */}
      {showAvisoLegal && <AvisoLegal onClose={() => setShowAvisoLegal(false)} />}
      {showPrivacidad && <PoliticaPrivacidad onClose={() => setShowPrivacidad(false)} />}
      {showCookies && <PoliticaCookies onClose={() => setShowCookies(false)} />}

      {/* BANNER DE COOKIES */}
      <CookieBanner onShowPolitica={() => setShowCookies(true)} />

      {/* 1. NAVEGACIÓN */}
      <nav style={{ 
        width: '100%', 
        borderBottom: `1px solid ${colors.goldLogo}33`,
        backgroundColor: colors.navyLogo,
        backdropFilter: 'blur(10px)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100 
      }}>
        <div style={{ ...containerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90px' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logo} alt="GCF Consult Logo" style={{ height: '65px', width: 'auto', display: 'block' }} />
          </a>
          <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
            <a href="#servicios" style={{ marginLeft: '2rem', textDecoration: 'none', color: '#ffffff', fontWeight: '500' }}>Servicios</a>
            <a href="#metodologia" style={{ marginLeft: '2rem', textDecoration: 'none', color: '#ffffff', fontWeight: '500' }}>Metodología</a>
            <a href="#sobre-nosotros" style={{ marginLeft: '2rem', textDecoration: 'none', color: '#ffffff', fontWeight: '500' }}>Nosotros</a>
            <a href="#contacto" style={{ 
              marginLeft: '2rem', textDecoration: 'none', color: colors.goldLogo, fontWeight: '700', 
              border: `1px solid ${colors.goldLogo}`, padding: '10px 20px' 
            }}>Contacto</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO */}
      <header style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <video autoPlay loop muted playsInline style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0
        }}>
          <source src={videoHero} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(253, 251, 247, 0.6)', zIndex: 1 }}></div>
        <div style={{ ...containerStyle, position: 'relative', zIndex: 2, paddingBottom: '15vh', paddingLeft: '65px' }}>
          <h1 className="fade-in-hero" style={{ ...titleSerif, fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: '1.1' }}>
            Su negocio, protegido.<br />
            <span style={{ color: colors.goldLogo }}>Su futuro, asegurado.</span>
          </h1>
          <p className="fade-in-subtext" style={{ 
            fontSize: '1.1rem', marginTop: '2.5rem', maxWidth: '600px', color: colors.textDark, 
            fontWeight: '300', textTransform: 'uppercase', letterSpacing: '2px' 
          }}>
            Somos el socio estratégico que protege su negocio, optimiza su fiscalidad y blinda su patrimonio.
          </p>
        </div>
      </header>

      {/* 3. SERVICIOS */}
      <section id="servicios" style={{ width: '100%', padding: '140px 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8rem' }}>
            {[
              { n: '01.', title: 'Eficiencia Diaria', desc: 'Optimización fiscal centrada en la rentabilidad de autónomos y pymes.' },
              { n: '02.', title: 'Crecimiento', desc: 'Estructura mercantil y gestión de financiación para acompañar su expansión.' },
              { n: '03.', title: 'Protección Patrimonial', desc: 'Planificación de empresa familiar, sucesiones y blindaje de futuro.' },
              { n: '04.', title: 'Adaptación Digital', desc: 'Socio tecnológico en Legal-Tech para automatizar y asegurar su gestión operativa.' }
            ].map((item, idx) => (
              <div key={idx}>
                <span style={{ color: colors.goldLogo, fontWeight: '700', fontSize: '1rem' }}>{item.n}</span>
                <h3 style={{ ...titleSerif, fontSize: '2.0rem', margin: '1.5rem 0', borderBottom: '1px solid #000', paddingBottom: '0.8rem', lineHeight: '1.1' }}>
                  {item.title}
                </h3>
                <p style={{ color: colors.textMuted, lineHeight: '1.8', fontWeight: '300', fontSize: '1.1rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METODOLOGÍA */}
      <section id="metodologia" style={{ width: '100%', padding: '60px 0', backgroundColor: colors.navyLogo, color: colors.bgVelle }}>
        <div style={containerStyle}>
          <h2 style={{ ...titleSerif, color: colors.bgVelle, fontSize: '3.2rem', marginBottom: '5rem', marginTop: '0', textAlign: 'center', letterSpacing: '-1px' }}>
            Metodología Integral
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem' }}>
            {[
              { step: "01", title: "Diagnóstico", desc: "Análisis profundo de su situación legal y financiera actual." },
              { step: "02", title: "Plan", desc: "Diseño de la estrategia personalizada y hoja de ruta estratégica." },
              { step: "03", title: "Ejecución", desc: "Implementación técnica y jurídica de las soluciones acordadas." },
              { step: "04", title: "Seguimiento", desc: "Control continuo y adaptación ante cambios de mercado o legislativos." }
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '15px 0 15px 25px', borderLeft: `1px solid ${colors.goldLogo}` }}>
                <span style={{ color: colors.goldLogo, fontSize: '1.1rem', fontWeight: '700', letterSpacing: '1px' }}>{item.step}</span>
                <h4 style={{ margin: '1rem 0', fontWeight: '500', fontSize: '1.5rem', ...titleSerif, color: colors.bgVelle }}>{item.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.6', fontWeight: '300' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOBRE NOSOTROS */}
      <section id="sobre-nosotros" style={{ width: '100%', padding: '140px 0 60px 0' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ ...titleSerif, fontSize: '3.5rem', margin: '0', lineHeight: '1' }}>
                Más que una asesoría, somos su <span style={{ color: colors.goldLogo }}>Socio de Negocio</span>.
              </h2>
              <p style={{ marginTop: '3rem', color: colors.textMuted, lineHeight: '2', fontWeight: '300', fontSize: '1.1rem' }}>
                Nos posicionamos como el departamento legal y financiero estratégico que la pyme no puede permitirse contratar internamente.
              </p>
            </div>
            <div style={{ padding: '3.5rem', border: `1px solid ${colors.goldLogo}`, position: 'relative' }}>
              <h4 style={{ margin: '0 0 2rem 0', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.7rem', color: colors.goldLogo, fontWeight: '700' }}>Nuestra Diferencia</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2rem', fontWeight: '300', fontSize: '0.95rem' }}>
                <li><strong style={{ display: 'block', marginBottom: '0.5rem' }}>VISIÓN 360°</strong> Conectamos su empresa con la protección de su patrimonio personal.</li>
                <li><strong style={{ display: 'block', marginBottom: '0.5rem' }}>ENFOQUE EN RENTABILIDAD</strong> Traducimos la complejidad legal en oportunidades de ahorro.</li>
                <li><strong style={{ display: 'block', marginBottom: '0.5rem' }}>EXPERIENCIA PRAGMÁTICA</strong> Más de 30 años dando respuestas claras y ejecutables.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISORIA */}
      <div style={{ ...containerStyle, padding: '0 80px' }}>
        <div style={{ borderTop: `2px solid ${colors.goldLogo}`, width: '100%' }}></div>
      </div>

      {/* 6. CONTACTO */}
      <section id="contacto" style={{ width: '100%', padding: '80px 0 120px 0' }}>
        <div style={{ ...containerStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem' }}>
          <div>
            <h2 style={{ ...titleSerif, fontSize: '3.5rem', margin: '0' }}>
              Empecemos a <br/><span style={{ color: colors.goldLogo }}>crecer juntos.</span>
            </h2>
            <p style={{ marginTop: '2rem', color: colors.textMuted, fontWeight: '300' }}>Solicite una sesión de diagnóstico inicial.</p>
            <div style={{ marginTop: '50px', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
              <p style={{ marginBottom: '1rem' }}><strong style={{ color: colors.goldLogo }}>Email:</strong> info@gcfconsult.com</p>
              <p><strong style={{ color: colors.goldLogo }}>Ubicación:</strong> Madrid | Barcelona</p>
            </div>
          </div>

          <form 
            action="https://formspree.io/f/xbddddva" 
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input type="text" name="nombre" placeholder="Nombre completo" required style={inputStyle} />
            <input type="email" name="email" placeholder="Email corporativo" required style={inputStyle} />
            <textarea 
              name="mensaje" 
              placeholder="¿En qué área estratégica necesita apoyo? (Fiscal, Crecimiento, Patrimonio...)" 
              rows="4" required style={inputStyle}
            ></textarea>

            {/* CONSENTIMIENTO RGPD */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '0.5rem' }}>
              <input 
                type="checkbox" 
                id="consent" 
                name="consent"
                required
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                style={{ marginTop: '3px', cursor: 'pointer', accentColor: colors.goldLogo, flexShrink: 0 }}
              />
              <label htmlFor="consent" style={{ fontSize: '0.78rem', color: colors.textMuted, fontWeight: '300', lineHeight: '1.6', cursor: 'pointer' }}>
                He leído y acepto la{' '}
                <button 
                  type="button"
                  onClick={() => setShowPrivacidad(true)}
                  style={{ color: colors.goldLogo, background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}
                >
                  Política de Privacidad
                </button>
                {' '}y consiento el tratamiento de mis datos personales para atender mi solicitud.
              </label>
            </div>

            <button 
              type="submit" 
              disabled={!consentChecked}
              style={{ 
                padding: '1rem', 
                backgroundColor: consentChecked ? '#1a1a1a' : '#aaaaaa',
                color: '#fff', 
                border: 'none', 
                cursor: consentChecked ? 'pointer' : 'not-allowed',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'background-color 0.2s ease'
              }}
            >
              Enviar solicitud 
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ width: '100%', padding: '60px 0 40px 0', backgroundColor: colors.navyLogo, color: '#fff', textAlign: 'center', borderTop: `1px solid ${colors.goldLogo}` }}>
        <div style={{ fontWeight: '700', fontSize: '1.2rem', letterSpacing: '5px', marginBottom: '1rem', color: colors.goldLogo }}>GCFCONSULT</div>
        <p style={{ opacity: 0.4, fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2rem' }}>
          Experiencia Pragmática: +30 Años de Trayectoria
        </p>

        {/* ENLACES LEGALES */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <button onClick={() => setShowAvisoLegal(true)} style={footerLinkStyle}>
            Aviso Legal
          </button>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>|</span>
          <button onClick={() => setShowPrivacidad(true)} style={footerLinkStyle}>
            Política de Privacidad
          </button>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>|</span>
          <button onClick={() => setShowCookies(true)} style={footerLinkStyle}>
            Política de Cookies
          </button>
        </div>

        <p style={{ opacity: 0.25, fontSize: '0.6rem', letterSpacing: '1px' }}>
          © {new Date().getFullYear()} GCFConsult. Todos los derechos reservados.
        </p>
      </footer>

    </div>
  );
};

export default App;