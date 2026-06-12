import { useEffect } from 'react';

const colors = {
  bgVelle: '#fdfbf7',
  navyLogo: '#0b162c',
  goldLogo: '#a18248',
  textDark: '#1a1a1a',
  textMuted: '#555555'
};

const PoliticaPrivacidad = ({ onClose }) => {
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
        }}>Política de Privacidad</h1>
        <div style={{ borderBottom: `1px solid ${colors.goldLogo}`, marginBottom: '2rem' }}></div>

        <div style={{ color: colors.textMuted, lineHeight: '1.8', fontWeight: 300, fontSize: '0.95rem' }}>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>1. Responsable del tratamiento</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Nombre y apellidos:</strong> Olga Garrido Juárez</li>
            <li><strong>DNI:</strong> 38078994X </li>
            <li><strong>Domicilio profesional:</strong> Av. Séneca, San Sebatián de los Reyes</li>
            <li><strong>Correo electrónico:</strong> info@gcfconsult.com</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>2. Datos que recogemos</h2>
          <p><p>A través del formulario de contacto del Sitio Web, recogemos los siguientes datos personales. El uso de este formulario está reservado a mayores de 14 años. Al enviar el formulario, el usuario declara expresamente tener dicha edad. Si es menor de 14 años, deberá contar con el consentimiento de sus padres o tutores legales antes de facilitar cualquier dato personal.</p></p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Información sobre el área de consulta que el usuario facilita voluntariamente</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>3. Finalidad y base jurídica del tratamiento</h2>
          <p>Los datos recogidos se tratan con las siguientes finalidades:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Gestión de solicitudes de contacto:</strong> atender y responder a las consultas recibidas a través del formulario. La base jurídica es el consentimiento explícito del interesado (art. 6.1.a RGPD).</li>
            <li><strong>Envío de información comercial:</strong> únicamente si el usuario ha prestado su consentimiento expreso para ello.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>4. Plazo de conservación</h2>
          <p>Los datos se conservarán durante el tiempo necesario para atender la solicitud y, en su caso, durante el plazo legalmente exigido. Una vez cumplida la finalidad, los datos serán suprimidos o anonimizados.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>5. Destinatarios</h2>
          <p>Los datos no serán cedidos a terceros, salvo obligación legal. El formulario utiliza el servicio Formspree para la gestión técnica del envío, sujeto a sus propias políticas de privacidad y medidas de seguridad.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>6. Derechos del interesado</h2>
          <p>El usuario puede ejercer en cualquier momento los siguientes derechos frente al responsable del tratamiento:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Acceso:</strong> conocer qué datos personales se están tratando.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
            <li><strong>Oposición y limitación:</strong> oponerse al tratamiento o solicitar su limitación.</li>
            <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado.</li>
          </ul>
          <p>Para ejercer estos derechos, puede dirigirse a <strong>info@gcfconsult.com</strong>. Si considera que el tratamiento no se ajusta a la normativa, puede presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (www.aepd.es).</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: colors.textDark, fontSize: '1.4rem', marginTop: '2rem' }}>7. Seguridad</h2>
          <p>El responsable ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>

          <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#999' }}>Última actualización: junio de 2025</p>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;