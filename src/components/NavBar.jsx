import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from "next/link";
import {cn} from "@/Utilities";

const links = [
  {
    label: "Home",
    active: true
  },
  {
    label: "Features"
  },
  {
    label: "About"
  },
  {
    label: "Blog"
  },
  {
    label: "Contact Us"
  },
];

export default function TopNavBar() {
  return (
    <Disclosure as="nav" className="bg-[#F6F8FA] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex shrink-0 items-center">
            <img
              alt="Logo"
              src="/img/text-logo.svg"
              className="h-6 w-auto"
            />
          </div>

          {/* nav links */}
          <div className="hidden border rounded-full p-4 top-nav-bar h-12 self-center md:flex items-center gap-8 text-neutral-200 text-sm">
            {links.map((link, i) => (
              <Link key={i} href="#" className={cn("font-medium", link.active && "border-b-2 border-b-neutral-500 text-neutral-500")}>{link.label}</Link>
            ))}
          </div>

          <div className="hidden sm:flex sm:items-center sm:gap-2">
            {/* Desktop login and start now btn*/}
            <button className="border border-blue-100 rounded-xl px-3 py-1.5 shadow text-blue-800 font-medium">Log In
            </button>
            <button className="border bg-blue-500 rounded-xl px-3 py-1.5 shadow text-white font-medium">Start now
            </button>
          </div>


          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile Hamburger button */}
            <DisclosureButton
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-neutral-500 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5"/>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden"/>
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block"/>
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Dropdown */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-3">
          {links.map((link, i) => (
            <DisclosureButton
              key={i}
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              {link.label}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
