import nodemailer from 'nodemailer';
import { compileMailTemplate } from '../../../helpers/compileMailTemplate';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, description } = await req.json();

    // Validación de datos
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Obtener variables de entorno
    const { APP_PASS, FROM_MAIL } = process.env;

    if (!APP_PASS || !FROM_MAIL) {
      console.error('Faltan variables de entorno: APP_PASS o FROM_MAIL');
      return NextResponse.json(
        { error: 'Configuración de email no disponible. Por favor contacte al administrador.' },
        { status: 500 }
      );
    }

    // Configurar el transporte de nodemailer
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: FROM_MAIL,
        pass: APP_PASS,
      },
    });

    // Verificar la conexión
    await transport.verify();

    // Compilar el template del email
    const htmlContent = await compileMailTemplate(email, description, name);

    // Enviar el email
    await transport.sendMail({
      from: FROM_MAIL,
      to: FROM_MAIL, // El email se envía a la misma cuenta (para recibir consultas)
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: htmlContent,
      replyTo: email, // Para poder responder directamente al cliente
    });

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      {
        error: 'Error al enviar el mensaje. Por favor intente nuevamente o contacte directamente.',
        details: error.message
      },
      { status: 500 }
    );
  }
}
