import * as Dialog from "@radix-ui/react-dialog";
import { useMemo, useState, type PropsWithChildren } from "react";
import Button from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

type LetsTalkDialogProps = PropsWithChildren;

const subjects = [
  "MVP or prototype",
  "App development",
  "UI to code",
  "Consulting session",
  "Other",
];

const getButtonLabel = (sending: boolean, sent: boolean) => {
  if (sending) {
    return (
      <div className="flex items-center justify-center gap-2 cursor-wait">
        <Icon
          icon="hugeicons:reload"
          className="text-main-black size-4 animate-spin"
        />{" "}
        Sending...
      </div>
    );
  }

  if (sent) {
    return "Sent! Thank you 🎉";
  }
  return "Send";
};

export default function LetsTalkDialog({ children }: LetsTalkDialogProps) {
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSending(true);

    const res = await fetch("/api/send-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();

    if (result.success) {
      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 3000);

      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      alert("Failed to submit form: " + result.error);
    }

    setIsSending(false);
  };

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

          <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit}>
            <input
              placeholder="Your name *"
              name="name"
              value={form.name}
              onChange={handleChange}
              maxLength={30}
            />
            <input
              type="email"
              placeholder="Your e-mail *"
              name="email"
              value={form.email}
              onChange={handleChange}
              maxLength={30}
            />
            <input
              placeholder="Your phone number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              maxLength={30}
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
              maxLength={300}
            />
            <Button
              className={cn("bg-brand-primary", {
                "bg-green-500 cursor-not-allowed": sent,
              })}
              disabled={(!isFormValid && !sent) || isSending}
              type="submit"
            >
              {getButtonLabel(isSending, sent)}
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
