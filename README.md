This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Truffle setup 

To deploy the contracts we are using two different techs

### Ganache

Head over to https://archive.trufflesuite.com/ganache/ and install the app, this will create a blockchain exactly like Ethereum but running on your local computer.

### Truffle 

To create a new Solidity contract you can run the following command:

``` truffle create contract name-of-contract ```

You will have to add this to migrations in order to deploy the contract, take a look at 'migrations/1721667808_initial_migration.js' to have an idea on how to add the contract to migrations

After you added the code for the migration, run the following command to deploy the contract to the Ganache blockchain:

``` truffle migrate --reset ```
