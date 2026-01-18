import React from 'react';
import './App.css';
import videoHero from './assets/edificios.mp4';
import logo from './assets/content.png';
// Importante: Para que las fuentes funcionen, añade estas líneas en tu App.css o index.html:
// @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@200;300;400;600&display=swap');

const App = () => {
  // Paleta Velle Capital + Logo GCF
  const colors = {
    bgVelle: '#fdfbf7',   // Fondo hueso premium
    navyLogo: '#0b162c',  // El azul marino de tu logo
    goldLogo: '#a18248',  // El dorado de tu logo
    textDark: '#1a1a1a',  // Texto principal
    textMuted: '#555555'  // Texto secundario
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

  return (
    <div style={{ margin: 0, padding: 0, width: '100%', overflowX: 'hidden', fontFamily: "'Inter', sans-serif", backgroundColor: colors.bgVelle }}>
      
     {/* 1. NAVEGACIÓN - Integración con Identidad Corporativa */}
<nav style={{ 
  width: '100%', 
  borderBottom: `1px solid ${colors.goldLogo}33`, // Línea dorada sutil al 20% de opacidad
  backgroundColor: colors.navyLogo, // Azul oscuro del logo
  backdropFilter: 'blur(10px)', 
  position: 'sticky', 
  top: 0, 
  zIndex: 100 
}}>
  <div style={{ ...containerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90px' }}>
    
    {/* LOGO - Integrado en el fondo navy */}
    <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <img 
        src={logo} 
        alt="GCF Consult Logo" 
        style={{ 
          height: '65px', 
          width: 'auto',
          display: 'block'
        }} 
      />
    </a>

    {/* MENÚ - Letras en blanco para contraste sobre Navy */}
    <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
      <a href="#servicios" style={{ marginLeft: '2rem', textDecoration: 'none', color: '#ffffff', fontWeight: '500' }}>Servicios</a>
      <a href="#metodologia" style={{ marginLeft: '2rem', textDecoration: 'none', color: '#ffffff', fontWeight: '500' }}>Metodología</a>
      <a href="#sobre-nosotros" style={{ marginLeft: '2rem', textDecoration: 'none', color: '#ffffff', fontWeight: '500' }}>Nosotros</a>
      <a href="#contacto" style={{ 
        marginLeft: '2rem', 
        textDecoration: 'none', 
        color: colors.goldLogo, 
        fontWeight: '700', 
        border: `1px solid ${colors.goldLogo}`, 
        padding: '10px 20px' 
      }}>
        Contacto
      </a>
    </div>
  </div>
</nav>

<header style={{ 
  width: '100%', 
  height: '100vh', 
  position: 'relative', 
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  // ELIMINADO: backgroundColor aquí ocultaba el video con z-index: -1
}}>
  {/* 1. EL VÍDEO (Capa base) */}
  <video autoPlay loop muted playsInline style={{
    position: 'absolute', 
    top: 0,
    left: 0,
    width: '100%', 
    height: '100%', 
    objectFit: 'cover', 
    zIndex: 0 // Cambiado a 0 para mayor seguridad
  }}>
    <source src={videoHero} type="video/mp4" />
  </video>
  
  {/* 2. CAPA DE DISEÑO / OVERLAY (Capa intermedia) */}
  <div style={{
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%',
    backgroundColor: 'rgba(253, 251, 247, 0.6)', // El tono hueso estilo Velle
    zIndex: 1,
  }}></div>
{/* 3. CONTENIDO (Capa superior) */}
  <div style={{ 
    ...containerStyle, 
    position: 'relative', 
    zIndex: 2, 
    paddingBottom: '15vh', // Sube el texto considerablemente (ajusta este valor si necesitas más)
    paddingLeft: '65px'    // Desplaza el bloque de texto ligeramente a la derecha
  }}>
     <h1 className="fade-in-hero" style={{ ...titleSerif, fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: '1.1' }}>
      Su negocio, protegido.<br /> 
      <span style={{ color: colors.goldLogo }}>Su futuro, asegurado.</span> 
    </h1>
    
    <p className="fade-in-subtext" style={{ 
      fontSize: '1.1rem', 
      marginTop: '2.5rem', 
      maxWidth: '600px', 
      color: colors.textDark, 
      fontWeight: '300', 
      textTransform: 'uppercase', 
      letterSpacing: '2px' 
    }}>
      Somos el socio estratégico que protege su negocio, optimiza su fiscalidad y blinda su patrimonio.
    </p>
  </div>
</header>


     {/* 3. SERVICIOS - Más separados y con tipografía de mayor impacto */}
<section id="servicios" style={{ width: '100%', padding: '140px 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
  <div style={containerStyle}>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', // Mantiene las 4 columnas en línea
      gap: '8rem' // Aumentamos el espacio significativamente para que "respire"
    }}>
      <div>
        <span style={{ color: colors.goldLogo, fontWeight: '700', fontSize: '1rem' }}>01.</span>
        <h3 style={{ 
          ...titleSerif, 
          fontSize: '2.0rem', // Aumentado para mayor autoridad
          margin: '1.5rem 0', 
          borderBottom: '1px solid #000', 
          paddingBottom: '0.8rem',
          lineHeight: '1.1'
        }}>
          Eficiencia Diaria
        </h3>
        <p style={{ color: colors.textMuted, lineHeight: '1.8', fontWeight: '300', fontSize: '1.1rem' }}>
          Optimización fiscal centrada en la rentabilidad de autónomos y pymes. 
        </p>
      </div>

      <div>
        <span style={{ color: colors.goldLogo, fontWeight: '700', fontSize: '1rem' }}>02.</span>
        <h3 style={{ 
          ...titleSerif, 
          fontSize: '2.0rem', 
          margin: '1.5rem 0', 
          borderBottom: '1px solid #000', 
          paddingBottom: '0.8rem',
          lineHeight: '1.1'
        }}>
          Crecimiento
        </h3>
        <p style={{ color: colors.textMuted, lineHeight: '1.8', fontWeight: '300', fontSize: '1.1rem' }}>
          Estructura mercantil y gestión de financiación para acompañar su expansión. 
        </p>
      </div>

      <div>
        <span style={{ color: colors.goldLogo, fontWeight: '700', fontSize: '1rem' }}>03.</span>
        <h3 style={{ 
          ...titleSerif, 
          fontSize: '2.0rem', 
          margin: '1.5rem 0', 
          borderBottom: '1px solid #000', 
          paddingBottom: '0.8rem',
          lineHeight: '1.1'
        }}>
          Protección Patrimonial
        </h3>
        <p style={{ color: colors.textMuted, lineHeight: '1.8', fontWeight: '300', fontSize: '1.1rem' }}>
          Planificación de empresa familiar, sucesiones y blindaje de futuro. 
        </p>
      </div>

      <div>
        <span style={{ color: colors.goldLogo, fontWeight: '700', fontSize: '1rem' }}>04.</span>
        <h3 style={{ 
          ...titleSerif, 
          fontSize: '2.0rem', 
          margin: '1.5rem 0', 
          borderBottom: '1px solid #000', 
          paddingBottom: '0.8rem',
          lineHeight: '1.1'
        }}>
          Adaptación Digital
        </h3>
        <p style={{ color: colors.textMuted, lineHeight: '1.8', fontWeight: '300', fontSize: '1.1rem' }}>
          Socio tecnológico en Legal-Tech para automatizar y asegurar su gestión operativa. 
        </p>
      </div>
    </div>
  </div>
</section>

    {/* 4. METODOLOGÍA - Ajustada para ser más compacta y legible */}
<section id="metodologia" style={{ 
  width: '100%', 
  padding: '60px 0', // Reducido de 120px para que el bloque no sea tan grande
  backgroundColor: colors.navyLogo, 
  color: colors.bgVelle 
}}>
<div style={containerStyle}>
    <h2 style={{ 
      ...titleSerif, 
      color: colors.bgVelle, 
      fontSize: '3.2rem', 
      marginBottom: '5rem', // Espacio con los bloques inferiores
      marginTop: '0',      // Eliminamos márgenes por defecto
      textAlign: 'center',
      letterSpacing: '-1px'
    }}>
      Metodología Integral 
    </h2>
    
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', // Mantenemos la línea única
      gap: '2.5rem' 
    }}>
      {[
        { step: "01", title: "Diagnóstico", desc: "Análisis profundo de su situación legal y financiera actual." },
        { step: "02", title: "Plan", desc: "Diseño de la estrategia personalizada y hoja de ruta estratégica." },
        { step: "03", title: "Ejecución", desc: "Implementación técnica y jurídica de las soluciones acordadas." },
        { step: "04", title: "Seguimiento", desc: "Control contínuo y adaptación ante cambios de mercado o legislativos." }
      ].map((item, idx) => (
        <div key={idx} style={{ 
          padding: '15px 0 15px 25px', 
          borderLeft: `1px solid ${colors.goldLogo}` 
        }}>
          {/* Número del paso agrandado */}
          <span style={{ 
            color: colors.goldLogo, 
            fontSize: '1.1rem', // Aumentado
            fontWeight: '700',
            letterSpacing: '1px'
          }}>
            {item.step}
          </span>
          
          {/* Título del paso agrandado */}
          <h4 style={{ 
            margin: '1rem 0', 
            fontWeight: '500', 
            fontSize: '1.5rem', // Aumentado considerablemente
            ...titleSerif, 
            color: colors.bgVelle 
          }}>
            {item.title}
          </h4>
          
          {/* Descripción agrandada ligeramente */}
          <p style={{ 
            color: 'rgba(255,255,255,0.7)', 
            fontSize: '1rem', // Aumentado a 1rem para mejor legibilidad
            lineHeight: '1.6', 
            fontWeight: '300' 
          }}>
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* 5. SOBRE NOSOTROS */}
      <section id="sobre-nosotros" style={{ 
        width: '100%', 
        padding: '140px 0 60px 0' // Aumentamos el espacio inferior (de 20px a 60px)
      }}>
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
                <li><strong style={{ display: 'block', marginBottom: '0.5rem' }}>VISIÓN 360°</strong> Conectamos su empresa con la protección de su patrimonio personal. </li>
                <li><strong style={{ display: 'block', marginBottom: '0.5rem' }}>ENFOQUE EN RENTABILIDAD</strong> Traducimos la complejidad legal en oportunidades de ahorro. </li>
                <li><strong style={{ display: 'block', marginBottom: '0.5rem' }}>EXPERIENCIA PRAGMÁTICA</strong> Más de 30 años dando respuestas claras y ejecutables. </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LÍNEA DIVISORIA ESTRATÉGICA (Fina y con márgenes) */}
      <div style={{ ...containerStyle, padding: '0 80px' }}>
        <div style={{ borderTop: `2px solid ${colors.goldLogo}`, width: '100%' }}></div>
      </div>

      {/* 6. CONTACTO */}
      <section id="contacto" style={{ 
        width: '100%', 
        padding: '80px 0 120px 0' // Espacio equilibrado respecto a la línea
      }}>
        <div style={{ ...containerStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem' }}>
          <div>
            <h2 style={{ ...titleSerif, fontSize: '3.5rem', margin: '0' }}>Empecemos a <br/><span style={{ color: colors.goldLogo }}>crecer juntos.</span></h2>
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
  {/* El atributo 'name' es vital para que Formspree sepa qué es cada dato */}
  <input 
    type="text" 
    name="nombre" 
    placeholder="Nombre completo" 
    required 
    style={inputStyle} 
  />
  <input 
    type="email" 
    name="email" 
    placeholder="Email corporativo" 
    required 
    style={inputStyle} 
  />
  <textarea 
    name="mensaje" 
    placeholder="¿En qué área estratégica necesita apoyo? (Fiscal, Crecimiento, Patrimonio...)" 
    rows="4" 
    required 
    style={inputStyle}
  ></textarea>
  
  <button type="submit" style={{ 
    padding: '1rem', 
    backgroundColor: '#1a1a1a', 
    color: '#fff', 
    border: 'none', 
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }}>
    Enviar solicitud estratégica
  </button>
</form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ width: '100%', padding: '80px 0', backgroundColor: colors.navyLogo, color: '#fff', textAlign: 'center', borderTop: `1px solid ${colors.goldLogo}` }}>
        <div style={{ fontWeight: '700', fontSize: '1.2rem', letterSpacing: '5px', marginBottom: '1.5rem', color: colors.goldLogo }}>GCFCONSULT</div>
        <p style={{ opacity: 0.4, fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Experiencia Pragmática: +30 Años de Trayectoria</p>
      </footer>
    </div>
  );
};

export default App;