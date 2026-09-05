import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // mailto: fallback approach — no server-side code or secrets needed
    const mailtoSubject = encodeURIComponent(formData.subject);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:844844za@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const inputClasses = (field: string) =>
    `w-full px-4 py-3 bg-secondary border ${
      errors[field] ? 'border-accent-red' : 'border-border-subtle focus:border-accent-cyan'
    } rounded-lg text-text-primary placeholder-text-dark font-sans text-sm outline-none transition-colors duration-200`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block font-mono text-xs text-text-muted uppercase tracking-wider mb-1.5">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={inputClasses('name')}
        />
        {errors.name && <p className="text-accent-red text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block font-mono text-xs text-text-muted uppercase tracking-wider mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={inputClasses('email')}
        />
        {errors.email && <p className="text-accent-red text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="block font-mono text-xs text-text-muted uppercase tracking-wider mb-1.5">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className={inputClasses('subject')}
        />
        {errors.subject && <p className="text-accent-red text-xs mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block font-mono text-xs text-text-muted uppercase tracking-wider mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          className={`${inputClasses('message')} resize-none`}
        />
        {errors.message && <p className="text-accent-red text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === 'sending' || status === 'success'}
        className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer ${
          status === 'success'
            ? 'bg-green-600 text-white'
            : 'bg-accent-red hover:bg-accent-red-dark text-white'
        } disabled:opacity-60 disabled:cursor-not-allowed`}
        whileTap={{ scale: 0.98 }}
      >
        {status === 'success' ? (
          <>
            <CheckCircle className="w-4 h-4" />
            Opening mail client...
          </>
        ) : status === 'error' ? (
          <>
            <AlertCircle className="w-4 h-4" />
            Try again
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </motion.button>

      <p className="text-text-dark text-xs text-center font-mono">
        Opens your default email client via mailto: — no data stored on this server.
      </p>
    </form>
  );
}
