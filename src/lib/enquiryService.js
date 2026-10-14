const defaultAdminEmail = 'contact@reproservices.in';
const defaultWhatsAppNumber = '919308762244';

export const adminEmail = import.meta.env.VITE_CONTACT_EMAIL || defaultAdminEmail;
export const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || defaultWhatsAppNumber;

export function buildEnquirySummary(data) {
  return {
    serviceCategory: data.serviceCategory || '',
    specificService: data.specificService || '',
    specifications: data.specifications || '',
    dimensions: data.dimensions || '',
    quantity: data.quantity || '',
    deadline: data.deadline || '',
    fullName: data.fullName || '',
    businessName: data.businessName || '',
    phone: data.phone || '',
    email: data.email || '',
    address: data.address || '',
    notes: data.notes || '',
    sendToWhatsapp: Boolean(data.sendToWhatsapp),
    uploadedFileName: data.uploadedFileName || '',
    uploadedFileSize: data.uploadedFileSize || 0,
    createdAt: new Date().toISOString()
  };
}

export function saveEnquiryToStorage(data) {
  if (typeof window === 'undefined') return;

  try {
    const existing = JSON.parse(localStorage.getItem('repro-enquiries') || '[]');
    const next = [data, ...existing].slice(0, 50);
    localStorage.setItem('repro-enquiries', JSON.stringify(next));
  } catch (error) {
    console.warn('Unable to save enquiry locally:', error);
  }
}

export function buildWhatsAppUrl(data) {
  const text = encodeURIComponent(
    `*New Enquiry - Repro Services*\n` +
      `Client: ${data.fullName || 'Not provided'} (${data.businessName || 'Individual'})\n` +
      `Phone: ${data.phone || 'Not provided'}\n` +
      `Email: ${data.email || 'Not provided'}\n` +
      `Service: ${data.specificService || data.serviceCategory || 'General enquiry'}\n` +
      `Category: ${data.serviceCategory || 'Not specified'}\n` +
      `Quantity: ${data.quantity || 'Not specified'}\n` +
      `Specifications: ${data.specifications || 'Not specified'}\n` +
      `Dimensions: ${data.dimensions || 'Not specified'}\n` +
      `Deadline: ${data.deadline || 'Flexible'}\n` +
      `Location: ${data.address || 'Patna, Bihar'}\n` +
      `Notes: ${data.notes || 'No additional notes'} `
  );

  return `https://wa.me/${whatsappNumber}?text=${text}`;
}

export function buildMailtoLink(data) {
  const subject = encodeURIComponent(
    `New enquiry from ${data.fullName || 'website'} | ${data.specificService || 'Project request'}`
  );

  const body = [
    'New enquiry received from the Repro Services website.',
    '',
    `Full Name: ${data.fullName || ''}`,
    `Business Name: ${data.businessName || ''}`,
    `Phone: ${data.phone || ''}`,
    `Email: ${data.email || ''}`,
    `Service Category: ${data.serviceCategory || ''}`,
    `Specific Service: ${data.specificService || ''}`,
    `Specifications: ${data.specifications || ''}`,
    `Quantity: ${data.quantity || ''}`,
    `Dimensions: ${data.dimensions || ''}`,
    `Deadline: ${data.deadline || ''}`,
    `Location: ${data.address || ''}`,
    `Notes: ${data.notes || ''}`,
    `Uploaded File: ${data.uploadedFileName || 'No file uploaded'}`,
    '',
    'This enquiry was submitted via the website form.'
  ].join('\n');

  return `mailto:${adminEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;
}

export async function submitEnquiry(formData, uploadedFile = null) {
  const enquiry = buildEnquirySummary({ ...formData, uploadedFileName: uploadedFile?.name || '', uploadedFileSize: uploadedFile?.size || 0 });
  saveEnquiryToStorage(enquiry);

  if (typeof window === 'undefined') {
    return { success: true, mode: 'local-storage' };
  }

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

  if (contactEmail && typeof FormData !== 'undefined') {
    const formBody = new FormData();

    formBody.append('_subject', `New quote request from ${enquiry.fullName || 'website visitor'}`);
    formBody.append('_captcha', 'false');
    formBody.append('_replyto', enquiry.email || enquiry.phone || contactEmail);

    Object.entries(enquiry).forEach(([key, value]) => {
      if (value === null || value === undefined || value === '') return;
      formBody.append(key, String(value));
    });

    if (uploadedFile) {
      formBody.append('attachment', uploadedFile, uploadedFile.name);
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        body: formBody,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        return { success: true, mode: 'email' };
      }
    } catch (error) {
      console.warn('Direct email send failed, falling back to mail client.', error);
    }
  }

  window.location.href = buildMailtoLink(enquiry);
  return { success: true, mode: 'mailto-fallback' };
}
