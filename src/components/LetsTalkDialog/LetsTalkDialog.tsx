import * as Dialog from "@radix-ui/react-dialog";

import { useMemo, useState, type PropsWithChildren } from "react";
import Button from "../Button/Button";
import { Typography } from "../Typography/Typography";
import { Icon } from "@iconify/react";

type LetsTalkDialogProps = PropsWithChildren;

const subjects = [
  "MVP or prototype",
  "App development",
  "UI to code",
  "Consulting session",
  "Other",
];

export default function LetsTalkDialog({ children }: LetsTalkDialogProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = useMemo(() => {
    return (
      form.name.trim() !== "" &&
      form.subject.trim() !== "" &&
      form.message.trim() !== "" &&
      isEmailValid(form.email)
    );
  }, [form]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-secondary-black p-6 shadow-xl focus:outline-none z-50">
          <Dialog.Title className="sr-only">name</Dialog.Title>
          <div className="flex justify-between items-start mb-4">
            <Typography variant="header3" as="h3" className="text-gray-300">
              Let's talk
            </Typography>
            <Dialog.Close asChild>
              <button className="text-gray-500 cursor-pointer">
                <Icon icon="radix-icons:cross-2" width="20" height="20" />
              </button>
            </Dialog.Close>
          </div>

          <Typography variant="body1" as="p" className="text-gray-300">
            Tell me a bit about you and what you need.
          </Typography>

          <div className="flex flex-col gap-2 mt-4">
            <input
              placeholder="Your name *"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Your e-mail *"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              placeholder="Your phone number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
            <select name="subject" value={form.subject} onChange={handleChange}>
              <option value="">What you need *</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me a bit what you need. *"
              value={form.message}
              onChange={handleChange}
            />
            <Button className="bg-brand-primary" disabled={!isFormValid}>
              Send
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
