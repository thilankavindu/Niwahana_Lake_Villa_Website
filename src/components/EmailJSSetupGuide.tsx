import React from 'react';
export function EmailJSSetupGuide() {
  return <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Setting Up EmailJS
      </h2>
      <div className="prose">
        <p>To get the contact form working with EmailJS, follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Create an EmailJS account</strong>
            <p>
              Sign up for a free account at{' '}
              <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-700">
                emailjs.com
              </a>
            </p>
          </li>
          <li>
            <strong>Create an Email Service</strong>
            <p>
              In your EmailJS dashboard, go to "Email Services" and connect your
              email provider (Gmail, Outlook, etc.)
            </p>
          </li>
          <li>
            <strong>Create an Email Template</strong>
            <p>
              Go to "Email Templates" and create a new template. Use the
              following variables in your template:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <code>
                  {{
                  from_name
                }}
                </code>{' '}
                - Sender's name
              </li>
              <li>
                <code>
                  {{
                  from_email
                }}
                </code>{' '}
                - Sender's email
              </li>
              <li>
                <code>
                  {{
                  from_phone
                }}
                </code>{' '}
                - Sender's phone
              </li>
              <li>
                <code>
                  {{
                  subject
                }}
                </code>{' '}
                - Message subject
              </li>
              <li>
                <code>
                  {{
                  message
                }}
                </code>{' '}
                - Message body
              </li>
              <li>
                <code>
                  {{
                  is_booking
                }}
                </code>{' '}
                - Whether it's a booking request
              </li>
            </ul>
          </li>
          <li>
            <strong>Update the Contact.tsx file</strong>
            <p>
              Replace the placeholder values in the Contact.tsx file with your
              actual EmailJS credentials:
            </p>
            <pre className="bg-gray-100 p-3 rounded">
              <code>
                const emailjsServiceId = "YOUR_SERVICE_ID";
                <br />
                const emailjsTemplateId = "YOUR_TEMPLATE_ID";
                <br />
                const emailjsPublicKey = "YOUR_PUBLIC_KEY";
              </code>
            </pre>
          </li>
        </ol>
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <h3 className="text-lg font-semibold text-blue-800">Note:</h3>
          <p>
            The free tier of EmailJS allows 200 emails per month, which should
            be sufficient for most small villa rental websites.
          </p>
        </div>
      </div>
    </div>;
}