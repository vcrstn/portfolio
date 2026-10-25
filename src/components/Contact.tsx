import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { profile } from "../data/portfolioData";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const getEmailContent = () => {
    const sub =
      subject.trim() ||
      `Portfolio Inquiry from ${name.trim() || "Employer / Collaborator"}`;
    const body = `Hi Vict,\n\n${message.trim()}\n\n---\nSender Name: ${name.trim()}\nSender Email: ${email.trim()}`;
    return { sub, body };
  };

  const handleGmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { sub, body } = getEmailContent();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email
    )}&su=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleMailtoSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      const form = document.getElementById("employer-contact-form") as HTMLFormElement | null;
      form?.reportValidity();
      return;
    }

    const { sub, body } = getEmailContent();
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      sub
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(false);
    }
  };

  return (
    <section className="contact section scroll-section" id="contact">
      <div className="contact-top">
        <div className="section-label light">
          <span>03</span>
          <p>Say hello</p>
        </div>
        <p className="availability">Open to entry-level frontend roles</p>
      </div>

      <div className="contact-main">
        <div className="contact-headline">
          <h2>
            Let’s build
            <br />
            something <em>thoughtful.</em>
          </h2>
          <p>
            I’m currently looking for entry-level frontend developer opportunities,
            internships, or collaborative web projects. Fill out the message
            form or reach out directly to my Gmail.
          </p>
        </div>

        <div className="contact-form-wrap">
          <form
            id="employer-contact-form"
            className="contact-form"
            onSubmit={handleGmailSubmit}
          >
            <div className="form-group-row">
              <div className="form-field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Jane Doe / Company"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="e.g. jane@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                placeholder="e.g. Frontend Opportunity / Project Inquiry"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Hi Vict, I'd like to talk about an opportunity..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="button button-form-primary"
                title="Open directly in Gmail with prefilled subject and message"
              >
                <Icon name="mail" /> Send via Gmail
              </button>
              <button
                type="button"
                className="button button-form-secondary"
                onClick={handleMailtoSubmit}
                title="Open your system's default email client"
              >
                Default Mail App <Icon name="arrow" />
              </button>
            </div>

            {submitted && (
              <div className="form-feedback" role="status">
                <Icon name="check" />
                <span>
                  Message ready! If popup was blocked, you can send directly to{" "}
                  <strong>{profile.email}</strong>.
                </span>
              </div>
            )}

            <div className="form-quick-copy">
              <span>Direct email:</span>
              <code>{profile.email}</code>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="copy-button"
                aria-label="Copy email address"
              >
                <Icon name={copied ? "check" : "copy"} />
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>
          <Icon name="mail" />
          <b>Email</b>
          <small>{profile.email}</small>
        </a>
        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
          <Icon name="github" />
          <b>GitHub</b>
          <small>{profile.githubDisplay}</small>
        </a>
        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Icon name="linkedin" />
          <b>LinkedIn</b>
          <small>{profile.linkedinDisplay}</small>
        </a>
      </div>
    </section>
  );
}
