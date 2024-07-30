import nodemailer from 'nodemailer';
import { mailTemplate } from '../lib/mailTemplate';
import Handlebars from 'handlebars';

export async function POST(req: Request) {
  const { name, mail, subject, body } = await req.json();
  const response = await sendMail({
    name,
    mail,
    subject,
    body,
  });
  if (response.sendResult) {
    return new Response('Mail Sent');
  } else {
    console.log(response.error);
    return response.error;
  }
}

async function sendMail({
  name,
  mail,
  subject,
  body,
}: {
  name: string;
  mail: string;
  subject: string;
  body: string;
}) {
  const { APP_PASS, FROM_MAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: FROM_MAIL,
      pass: APP_PASS,
    },
  });

  try {
    const sendResult = await transport.sendMail({
      from: FROM_MAIL,
      to: FROM_MAIL,
      subject,
      html: await compileMailTemplate(mail, body, name),
    });
    return { sendResult, status: 200 };
  } catch (error) {
    return { error };
  }
}

export async function compileMailTemplate(
  mail: string,
  body: string,
  name: string
) {
  const template = Handlebars.compile(mailTemplate);
  return template({
    mail,
    body,
    name,
  });
}
