// Simple email service using formspree.io as alternative to EmailJS
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  
  // Fallback to working mailto solution
  const subject = `New Contact Form Submission from ${formData.name}`;
  const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not specified'}\n\nMessage:\n${formData.message}`;
  
  const mailtoLink = `mailto:hello@reviverstudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  try {
    // Open email client in new tab
    if (typeof window !== 'undefined') {
      const newWindow = window.open(mailtoLink, '_blank');
      
      if (newWindow) {
        return {
          success: true,
          message: 'Email client opened. Please send the email to complete your submission.'
        };
      } else {
        // Fallback for browsers that block popups
        return {
          success: false,
          message: 'Please manually email us at hello@reviverstudio.com with your message.'
        };
      }
    }
    
    return {
      success: false,
      message: 'Email service not available. Please contact us directly at hello@reviverstudio.com'
    };
    
  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      message: 'Unable to open email client. Please contact us directly at hello@reviverstudio.com'
    };
  }
};
