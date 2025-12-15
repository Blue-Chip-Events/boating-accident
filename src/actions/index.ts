import { ContactsApi, CreateContact } from "@getbrevo/brevo";
import { z } from 'astro/zod';
import { defineAction } from 'astro:actions';

export async function processCaptcha(g_recaptcha_response: string) {
  const url =
    'https://www.google.com/recaptcha/api/siteverify'

  const requestBody = new URLSearchParams({
    secret:
      import.meta.env.RECAPTCHA_SECRET_KEY ||
      process.env.RECAPTCHA_SECRET_KEY,
    response: g_recaptcha_response
  })

  console.error('Verifying reCAPTCHA with body:', requestBody.toString());

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: requestBody.toString()
  })

  console.error('reCAPTCHA response status:', response.status);

  const data = await response.json()

  console.error('reCAPTCHA response data:', data);

  return data.success
}

export const server = {
  test: defineAction({
    handler: (input) => {
      console.log('Test action received input:', input);
      return { success: true, message: 'Test action executed successfully' };
    },
  }),
  newsletter: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email(),
      //recaptchaToken: z.string(),
    }),
    handler: async (input) => {
      console.log(input);
      /* console.error('Received email:', input.email);
      console.error('Received reCAPTCHA token:', input.recaptchaToken);
      
      const recaptchaSuccess = await processCaptcha(input.recaptchaToken);

      console.error('reCAPTCHA success:', recaptchaSuccess);
      if (!recaptchaSuccess) {
        return {
          error: {
            message: 'reCAPTCHA verification failed',
            fields: {
              email: ['reCAPTCHA verification failed'],
            },
          },
        };
      } */


      let contactAPI = new ContactsApi();
      contactAPI.setApiKey(0, process.env.BREVO_API_KEY || "");

      let contact = new CreateContact();
      contact.email = input.email;

      contactAPI.createContact(contact).then(res => {
        console.log(JSON.stringify(res.body));
      }).catch(err => {
        console.error("Error creating contact:", err.body);
      });

      return {
        success: true,
        message: 'Please check your email to confirm your subscription' 
      }
    },
  }),
}
