function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        {/* LEFT */}
        <div className="contact-info-card">
          <span className="contact-info-title">
            CONTÁCTANOS
          </span>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <span className="contact-icon">📍</span>

              <div>
                <h3>Dirección</h3>

                <p>
                  Residencial Las Delicias 8va Calle
                  <br />
                  G-285, Managua, Nicaragua.
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-icon">✉️</span>

              <div>
                <h3>Correo</h3>

                <p>
                  <a href="mailto:aconsa@gmail.com">
                    aconsa@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-icon">📞</span>

              <div>
                <h3>Teléfono</h3>

                <p>
                  <a href="tel:+50522447169">
                    (+505) 2244-7169
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-icon">🕒</span>

              <div>
                <h3>Horario</h3>

                <p>8:00 am - 17:00 pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-map-card">
          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.2744921509443!2d-86.18464569999999!3d12.161706099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73fc7290cb4513%3A0x5591ddffb59f231f!2sACONSA%20(Asesoría%20%26%20Construcción%20S.A.)!5e0!3m2!1ses!2sus!4v1778469582031!5m2!1ses!2sus"
              title="Ubicación de ACONSA"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact-map-footer">
            <a
              href="https://www.google.com/maps/search/?api=1&query=ACONSA%20Managua%20Nicaragua"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              COMO LLEGAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;