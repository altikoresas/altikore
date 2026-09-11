import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// SMTP Configuration (Hostinger email or custom SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: (process.env.SMTP_PORT || '465') === '465',
  auth: {
    user: process.env.SMTP_USER || 'contacto@altikore.com',
    pass: process.env.SMTP_PASS || '',
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, projectType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos obligatorios (nombre, correo o mensaje).' });
  }

  // If SMTP password is not configured yet, respond with success for simulation/development
  if (!process.env.SMTP_PASS) {
    console.log('[LEAD RECIBIDO (Modo Prueba)]', { name, email, projectType, message });
    return res.json({ 
      success: true, 
      message: 'Mensaje registrado correctamente (Modo desarrollo/sin SMTP configurado).' 
    });
  }

  try {
    await transporter.sendMail({
      from: `"Altikore Web Lead" <${process.env.SMTP_USER || 'contacto@altikore.com'}>`,
      to: process.env.NOTIFICATION_EMAIL || 'contacto@altikore.com',
      replyTo: email,
      subject: `[Nuevo Lead Altikore] ${name} - ${projectType || 'Consulta General'}`,
      text: `Nombre: ${name}\nCorreo: ${email}\nTipo de Proyecto: ${projectType}\n\nMensaje:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #5A1498; margin-top: 0;">Nuevo Lead recibido desde Altikore.com</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo Electrónico:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Tipo de Proyecto:</strong> ${projectType || 'No especificado'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Mensaje:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    res.json({ success: true, message: 'Mensaje enviado exitosamente.' });
  } catch (error) {
    console.error('Error al enviar correo SMTP:', error);
    res.status(500).json({ error: 'No se pudo enviar el correo en este momento.' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Altikore API Contact Server' });
});

app.listen(PORT, () => {
  console.log(`Servidor de contacto Altikore ejecutándose en http://localhost:${PORT}`);
});
