import { profile } from "../data/profile";
import { IconGithub, IconLinkedin, IconMail, IconPhone, IconPin } from "./Icons";
import Section from "./Section";

export default function Contact() {
  const email = profile.email.toLowerCase();

  return (
    <Section id="contact" title="Contact">
      <p className="contact-lede">
        For opportunities, research collaborations or questions, write to{" "}
        <a href={`mailto:${email}`}>{email}</a>
      </p>

      <ul className="contact-list">
        <li>
          <IconMail className="icon" /> <a href={`mailto:${email}`}>Email</a>
        </li>
        <li>
          <IconPhone className="icon" /> <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
        </li>
        <li>
          <IconLinkedin className="icon" /> <a href={profile.linkedin}>LinkedIn</a>
        </li>
        <li>
          <IconGithub className="icon" /> <a href={profile.github}>GitHub</a>
        </li>
        <li>
          <IconPin className="icon" /> {profile.location}
        </li>
      </ul>
    </Section>
  );
}
