import nodemailer from 'nodemailer';

export async function sendMail({
  to,
  mail,
  subject,
  body,
}: {
  to: string;
  mail: string;
  subject: string;
  body: string;
}) {
  const { GOOGLEPASS, GOOGLEMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GOOGLEMAIL,
      pass: GOOGLEPASS,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
  }

  try {
    const sendResult = await transport.sendMail({
      from: GOOGLEMAIL,
      to: 'deknopjerico@gmail.com',
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
