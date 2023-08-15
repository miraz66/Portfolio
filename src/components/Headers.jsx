import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About Me", href: "#about" },
  { name: "Project", href: "#project" },
  { name: "Contacts", href: "#contacts" },
  { name: "hire Me", href: "#contacts" },
];

export default function Header() {
  return (
    <>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="mx-auto max-full py-3 px-2 2xl:py-5 sm:px-8 lg:px-10">
              <div className="relative md:max-w-2xl pt-5 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex items-center">
                    <img className="w-10 md:w-16 xl:w-20" src={""} alt="" />
                    <a
                      className="text-gray-400 font-bold text-3xl lg:text-5xl 2xl:text-6xl"
                      href="http://localhost:5173/"
                    >
                      Steven
                    </a>
                  </div>
                </div>
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static 
                              sm:inset-auto sm:ml-6 sm:pr-0 gap-3 cursor-pointer"
                >
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex lg:space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="rounded-md hover:ease-in-out hover:duration-200 text-ms lg:text-lg xl:text-xl font-medium py-1 px-5 text-gray-600 hover:shadow-[0px_10px_10px_-10px_rgba(0,0,0,0.3)]"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 w-full px-2 pt-2 pb-3 bg--300 backdrop-filter backdrop-blur-lg absolute">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block hover:underline uppercase rounded-md px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
