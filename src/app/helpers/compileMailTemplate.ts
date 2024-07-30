import { mailTemplate } from '../lib/mailTemplate';
import Handlebars from 'handlebars';

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
