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
          <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Nombre y apellidos:</strong> Olga Garrido Juárez</li>
            <li><strong>DNI:</strong> 38078994X </li>
            <li><strong>Domicilio profesional:</strong> Av. Séneca, San Sebatián de los Reyes</li>
            <li><strong>Correo electrónico:</strong> info@gcfconsult.com</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>2. Objeto y ámbito de aplicación</h2>
          <p>El presente Aviso Legal regula el acceso y uso del sitio web <strong>gcfconsult.com</strong> (en adelante, "el Sitio Web"), propiedad del titular identificado anteriormente. El acceso y uso del Sitio Web implica la aceptación plena y sin reservas de las presentes condiciones.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>3. Propiedad intelectual e industrial</h2>
          <p>Todos los contenidos del Sitio Web (textos, imágenes, diseño, logotipos, código fuente) son titularidad del prestador o de terceros que han autorizado su uso, y están protegidos por la normativa española e internacional sobre propiedad intelectual e industrial. Queda expresamente prohibida su reproducción, distribución o comunicación pública sin autorización previa y por escrito del titular.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>4. Exclusión de responsabilidad</h2>
          <p>La información contenida en este Sitio Web tiene carácter meramente informativo y orientativo, y no constituye asesoramiento legal, fiscal o financiero vinculante. El titular no se responsabiliza de las decisiones tomadas por el usuario basándose en dicha información. Para obtener asesoramiento personalizado, es necesario contratar los servicios profesionales correspondientes.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>5. Legislación aplicable y jurisdicción</h2>
          <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso del Sitio Web, las partes se someten a los Juzgados y Tribunales de Madrid, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.</p>

          <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#999' }}>Última actualización: junio de 2025</p>
        </div>
      </div>
    </div>
  );
};

export default AvisoLegal;