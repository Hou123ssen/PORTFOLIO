import { Resend } from 'resend';

const limits = {
  name: 100,
  email: 200,
  subject: 150,
  message: 5000,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(response, status, body) {
  response.status(status).json(body);
}

function sanitize(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function validateField(value, maxLength) {
  return value.length > 0 && value.length <= maxLength;
}

function hasLineBreak(value) {
  return /[\r\n]/.test(value);
}

function parseBody(body) {
  if (typeof body !== 'string') {
    return body;
  }

  try {
    return JSON.parse(body);
  } catch {
    return null;
  }
}

function validatePayload(body) {
  const name = sanitize(body?.name);
  const email = sanitize(body?.email);
  const subject = sanitize(body?.subject);
  const message = sanitize(body?.message);
  const website = sanitize(body?.website);

  if (website) {
    return {
      blocked: true,
      values: { name, email, subject, message },
    };
  }

  const isValid =
    validateField(name, limits.name) &&
    validateField(email, limits.email) &&
    emailPattern.test(email) &&
    validateField(subject, limits.subject) &&
    validateField(message, limits.message) &&
    !hasLineBreak(name) &&
    !hasLineBreak(email) &&
    !hasLineBreak(subject);

  return {
    isValid,
    values: { name, email, subject, message },
  };
}

function buildTextEmail({ name, email, subject, message }) {
  return [
    'NEW PORTFOLIO MESSAGE',
    '',
    'Name:',
    name,
    '',
    'Email:',
    email,
    '',
    'Subject:',
    subject,
    '',
    'Message:',
    message,
  ].join('\n');
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return json(response, 405, {
      success: false,
      message: 'Method not allowed.',
    });
  }

  const { blocked, isValid, values } = validatePayload(parseBody(request.body));

  if (blocked) {
    return json(response, 200, { success: true });
  }

  if (!isValid) {
    return json(response, 400, {
      success: false,
      message: 'Invalid form submission.',
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return json(response, 500, {
      success: false,
      message: 'Unable to send message.',
    });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: values.email,
      subject: `Portfolio Contact - ${values.subject}`,
      text: buildTextEmail(values),
    });

    if (error) {
      return json(response, 500, {
        success: false,
        message: 'Unable to send message.',
      });
    }

    return json(response, 200, { success: true });
  } catch {
    return json(response, 500, {
      success: false,
      message: 'Unable to send message.',
    });
  }
}
