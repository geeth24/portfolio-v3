import { CheckIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-scroll';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    description: 'The Starter Package',
    features: ['Logo Design', 'Landing Page Design'],
    price: 1500,
  },
  {
    name: 'Custom',
    id: 'tier-Custom',
    href: '#',
    description: 'The Complete Package',
    features: [
      'Logo Design',
      'Landing Page Design',
      'Website Design',
      'Website Development',
    ],
    price: 0,
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="isolate -mt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-xl font-semibold  text-white">Pricing</h1>
          <p className="text-3xl font-light text-white">
            Simple, transparent pricing
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-secondary">
            Custom pricing available for other use cases. Contact Me for more
          </p>
        </div>
      </div>
      <div className="flow-root bg-transparent">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-lg bg-gradient-to-br from-transparent/10 to-secondary/50 p-8 shadow-2xl shadow-secondary/100 sm:p-10"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base font-black  leading-7 tracking-wider text-white"
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-wide text-white">
                        {tier.price === 0 ? 'Contact Me' : `$${tier.price}`}
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-white">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6 text-white"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-white"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className="mt-8 block cursor-pointer rounded-full bg-background px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-background/50 transition-all duration-500"
                  >
                    Get started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto  mt-8 flex h-full w-screen  max-w-screen-xl flex-row items-center justify-center space-y-4 bg-transparent px-4 lg:mt-16">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full flex-row items-center justify-between space-x-4">
              <div className="h-[120px] w-[1px] -rotate-180 transform bg-transparent" />
              <div className="h-[120px] w-[1px] -rotate-180 transform bg-gradient-to-t from-transparent to-primary" />
            </div>
            <div className="h-[1px] w-full bg-primary" />
            <div className="flex w-full flex-row items-center justify-between space-x-4">
              <div className="h-[60px] w-[1px] -rotate-180 transform bg-gradient-to-t from-primary to-transparent" />
              <div className="h-[60px] w-[1px] -rotate-180 transform bg-transparent" />
            </div>
          </div>
          <div className="flex w-full flex-row items-start justify-between space-x-4"></div>
        </div>
      </div>
    </div>
  );
}
