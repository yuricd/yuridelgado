"use client";

import * as Dialog from "@radix-ui/react-dialog";

import type { PropsWithChildren } from "react";
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
            <input placeholder="Your name" />
            <input type="email" placeholder="Your e-mail" />
            <input placeholder="Your phone number" />
            <select>
              <option>What you need</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>

            <textarea rows={6} placeholder="Tell me a bit what you need." />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
