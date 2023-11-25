/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [handle, setHandle] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    e.preventDefault();
    await axios.post(
      'https://mailer.geethg.com/v3',
      new URLSearchParams({
        firstName: firstName,
        lastName: lastName,
        email: email,
        handle: handle,
        message: message,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    setIsSubmitting(false);
  };

  return (
    <div
      id="contact"
      className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2"
    >
      <div className="relative px-6 pb-20 lg:static lg:py-10 lg:px-8">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Get in touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I am excited about the prospect of discussing and collaborating with
            you to create or redesign your brand. With my expertise and your
            brand&apos;s exceptional offerings, I am confident that we can
            develop a website that truly reflects the quality and excellence of
            your brand
          </p>
          <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <BuildingOffice2Icon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>Coppell, TX 75019</dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <PhoneIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a className="hover:text-white" href="tel:+1 (972) 829-5173">
                  +1 (972) 829-5173
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <EnvelopeIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a className="hover:text-white" href="mailto:info@geethg.com">
                  info@geethg.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <form
        action="#"
        method="POST"
        className="psm:pb-32 px-6 lg:py-10 lg:px-8 pb-20"
        onSubmit={handleSubmit}
      >
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Geeth"
                  className="block w-full rounded-md border-0 bg-white/5 placeholder-white py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Gunnampalli"
                  className="block w-full rounded-md border-0 bg-white/5 placeholder-white py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="hello@geethg.com"
                  className="block w-full rounded-md border-0 bg-white/5 placeholder-white py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="handle"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Instagram or Twitter handle
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="handle"
                  id="handle"
                  placeholder="IG: @geethgs7 | TW: @geethgs7"
                  className="block w-full rounded-md border-0 bg-white/5 placeholder-white py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 bg-white/5 placeholder-white py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  placeholder="Hello!, I would like to discuss about..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="block rounded-full bg-background px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-background/50"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    width="373"
                    height="373"
                    viewBox="0 0 373 373"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                  >
                    <g>
                      <path
                        d="M59.8203 53.3929C186.263 -6.10904 272.083 72.7514 299.188 119.619L345.435 93.6382C240.54 -53.8939 111.319 5.33626 59.8203 53.3929Z"
                        fill="white"
                      />
                    </g>
                    <g>
                      <path
                        d="M55.0214 315.253C9.85718 232.149 26.5019 79.8087 182.395 55.7443C-66.77 28.723 -8.41168 267.838 55.0214 315.253Z"
                        fill="white"
                      />
                    </g>
                    <g>
                      <path
                        d="M53.9011 190.373C65.0797 263.477 139.062 392.302 313.042 322.777C295.258 367.253 28.4952 454.67 53.9011 190.373Z"
                        fill="white"
                      />
                      <path
                        d="M373 186.795H187.029V240.472H305.42C283.44 266.544 228.989 318.688 187.029 318.688C332.554 349.769 371.645 243.71 373 186.795Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
