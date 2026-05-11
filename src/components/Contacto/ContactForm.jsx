import ContactInfo from "./ContactInfo";

function ContactForm() {
  return (
    <section className="contact-form-section" id="formulario-contacto">
      <div className="contact-container">
        <ContactInfo />

        <div className="contact-form-box">
          <span className="form-subtitle">
            FORMULARIO DE CONTACTO
          </span>

          <h2>Contáctenos</h2>

          <form className="contact-form">
            <div className="form-group">
              <label>Nombre</label>

              <input
                type="text"
                placeholder="Ingrese su nombre"
              />
            </div>

            <div className="form-group">
              <label>Correo electrónico</label>

              <input
                type="email"
                placeholder="Ingrese su correo"
              />
            </div>

            <div className="form-group full">
              <label>Mensaje</label>

              <textarea
                rows="6"
                placeholder="Escriba su mensaje"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;