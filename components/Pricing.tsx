import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    description: 'The Basics Package',
    features: ['Logo Design', 'Landing Page Design'],
  },
  {
    name: 'Full',
    id: 'tier-full',
    href: '#',
    description: 'The Full Package',
    features: [
      'Logo Design',
      'Landing Page Design',
      'Website Design',
      'Website Development',
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="isolate -mt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-xl font-thin uppercase text-white">Pricing</h1>
          <p className="text-3xl font-black uppercase text-white">
            Simple, transparent pricing
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
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
                  className="flex flex-col justify-between rounded-lg bg-gradient-to-br from-background to-secondary p-8 shadow-xl ring-1 ring-primary/10 sm:p-10"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base font-black uppercase leading-7 tracking-wider text-primary"
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-wide text-primary">
                        Let&apos;s Talk
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
                            className="h-6 w-5 flex-none text-secondary"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-background px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-background/50"
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
