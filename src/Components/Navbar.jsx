import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Potfolio", href: "#potfolio" },
  { name: "Contact", href: "#contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md animate-fadeInDown"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Brand */}
              <div className="flex items-center justify-center sm:justify-start flex-1">
                <span className="text-red-500 font-extrabold text-2xl sm:text-3xl tracking-wide">
                  MAAZ
                </span>
              </div>

              {/* Desktop Links */}
              <div className="hidden sm:flex sm:items-center">
                <div className="flex space-x-6">
                  {navigation.map((item) => {
                    const isActive = hash === item.href;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          isActive
                            ? "bg-black text-white"
                            : "text-yellow-400 hover:text-white hover:border-white",
                          "no-underline border-b-2 border-transparent transition-all duration-300 ease-in-out rounded-md px-4 py-2 text-lg font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 text-left">
              {navigation.map((item) => {
                const isActive = hash === item.href;
                return (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      isActive
                        ? "bg-black text-white"
                        : "text-yellow-400 hover:text-white hover:border-white",
                      "no-underline border-b-2 border-transparent transition-all duration-300 ease-in-out block rounded-md px-3 py-2 text-lg font-medium text-left"
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
