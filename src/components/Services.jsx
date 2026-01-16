const Services = () => {
  const areas = [
    { num: "01", title: "Eficiencia Diaria", desc: "Optimización fiscal y laboral centrada en la rentabilidad diaria." },
    { num: "02", title: "Crecimiento", desc: "Estructura mercantil y captación de capital público o privado." },
    { num: "03", title: "Patrimonio", desc: "Protección de la empresa familiar y planificación de sucesiones." },
    { num: "04", title: "Adaptación Digital", desc: "Soluciones Legal-Tech para automatizar y asegurar su gestión administrativa." }
  ];

  return (
    <section style={{ padding: '100px 20px', borderTop: '1px solid #e5e5e5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px' }}>
        {areas.map((area) => (
          <div key={area.num} style={{ borderTop: '1px solid #1a1a1a', paddingTop: '20px' }}>
            <span style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#c5a059' }}>{area.num}</span>
            <h3 style={{ fontSize: '2rem', margin: '20px 0' }}>{area.title}</h3>
            <p style={{ fontWeight: '300', lineHeight: '1.6', opacity: 0.8 }}>{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;