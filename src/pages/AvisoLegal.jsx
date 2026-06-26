import { useEffect } from 'react';

const colors = {
  bgVelle: '#fdfbf7',
  navyLogo: '#0b162c',
  goldLogo: '#a18248',
  textDark: '#1a1a1a',
  textMuted: '#555555'
};

const AvisoLegal = ({ onClose }) => {
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
        }}>Aviso Legal</h1>
        <div style={{ borderBottom: `1px solid ${colors.goldLogo}`, marginBottom: '2rem' }}></div>

        <div style={{ color: colors.textMuted, lineHeight: '1.8', fontWeight: 300, fontSize: '0.95rem' }}>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>1. Datos identificativos del titular</h2>
          <p>En cumplimiento del deber de información establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se hacen constar los siguientes datos:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Titular:</strong> Olga Garrido Juárez</li>
            <li><strong>NIF:</strong> 38078994X</li>
            <li><strong>Domicilio profesional:</strong> Avda. Séneca, 24 — 28703 San Sebastián de los Reyes (Madrid)</li>
            <li><strong>Correo electrónico:</strong> info@gcfconsult.com</li>
            <li><strong>Nombre comercial:</strong> GCF Consult</li>
            <li><strong>Sitio web:</strong> gcfconsult.com</li>
            <li><strong>Actividad:</strong> prestación de servicios de asesoramiento jurídico y consultoría de empresa</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>2. Datos de colegiación</h2>
          <p>La titular ejerce la abogacía y se encuentra colegiada conforme a los siguientes datos:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Colegio profesional:</strong> Ilustre Colegio de la Abogacía de Madrid</li>
            <li><strong>Número de colegiada:</strong> 142325 </li>
            <li><strong>Título académico:</strong> Licenciada en Derecho (España)</li>
            <li><strong>Normas profesionales aplicables:</strong> Estatuto General de la Abogacía Española (Real Decreto 135/2021), accesible a través del Consejo General de la Abogacía Española (www.abogacia.es).</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>3. Objeto</h2>
          <p>El presente Aviso Legal regula el acceso, la navegación y el uso del sitio web gcfconsult.com (en adelante, el "Sitio Web"). El acceso al Sitio Web atribuye la condición de usuario e implica la aceptación plena de las condiciones recogidas en este Aviso Legal.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>4. Condiciones de acceso y uso</h2>
          <p>El usuario se compromete a hacer un uso adecuado y lícito del Sitio Web y de sus contenidos, conforme a la legislación vigente, la buena fe y el orden público, absteniéndose de cualquier uso que pueda dañar, inutilizar o sobrecargar el Sitio Web o impedir su normal utilización. La información facilitada a través del Sitio Web tiene carácter general y no constituye asesoramiento jurídico personalizado, que requerirá en todo caso la formalización de la correspondiente relación profesional.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>5. Propiedad intelectual e industrial</h2>
          <p>Todos los contenidos del Sitio Web (textos, imágenes, diseño gráfico, código fuente, logotipos, marcas y demás elementos) son titularidad de la titular o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación sin autorización expresa.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>6. Exclusión de responsabilidad</h2>
          <p>La titular no se hace responsable de los daños o perjuicios derivados del acceso o uso del Sitio Web, ni de la presencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos del usuario. Asimismo, no garantiza la disponibilidad y continuidad permanente del Sitio Web, sin perjuicio de su compromiso de mantenimiento.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>7. Enlaces</h2>
          <p>El Sitio Web puede contener enlaces a sitios de terceros. La titular no asume responsabilidad alguna sobre los contenidos, políticas o servicios de dichos sitios, cuyo acceso es responsabilidad exclusiva del usuario.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>8. Protección de datos</h2>
          <p>El tratamiento de los datos personales facilitados a través del Sitio Web se rige por lo dispuesto en la Política de Privacidad, accesible desde el propio Sitio Web, conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>9. Legislación aplicable y jurisdicción</h2>
          <p>El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales que resulten competentes conforme a la normativa aplicable.</p>

          <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#999' }}>Última actualización: junio de 2026</p>
        </div>
      </div>
    </div>
  );
};

export default AvisoLegal;