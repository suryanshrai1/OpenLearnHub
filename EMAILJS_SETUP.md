# EmailJS Setup Guide for Contact Form

## Overview
This guide will help you set up EmailJS to receive contact form submissions via email. EmailJS is a service that allows you to send emails directly from JavaScript without needing a backend server.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
4. Save the template and note down your **Template ID**

## Step 4: Get Your User ID
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (this is your User ID)

## Step 5: Update Contact Component
Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
// Replace these values with your actual EmailJS credentials
const result = await emailjs.send(
  'YOUR_SERVICE_ID',        // Replace with your Service ID
  'YOUR_TEMPLATE_ID',       // Replace with your Template ID
  templateParams,
  'YOUR_USER_ID'            // Replace with your Public Key
)
```

## Step 6: Test the Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email for the received message

## Example Email Template
Here's a simple email template you can use:

```html
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the OpenLearnHub contact form.
```

## Troubleshooting
- **Form not sending**: Check that all EmailJS credentials are correct
- **Emails not received**: Check your spam folder and EmailJS dashboard
- **Template errors**: Ensure all template variables are properly formatted

## Security Notes
- The User ID (Public Key) is safe to expose in frontend code
- EmailJS handles rate limiting and spam protection
- Free tier allows 200 emails per month

## Support
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
