# Labada POS — Interactive Frontend Prototype

A six-page React/Vite demonstration of a full-service laundry point-of-sale system.

## Run locally

1. Install Node.js 20.19+ or 22.12+.
2. Open a terminal in this folder.
3. Run `npm install` to download the dependencies listed in `package.json`.
4. Run `npm run dev` to start Vite's local development server.
5. Open the local address printed in the terminal (typically http://localhost:5173).

`npm run build` produces a static production bundle in `dist/`. This does **not** make the prototype secure for real-world use.

## Features

- Dashboard with operational metrics and shortcuts
- New Order: customer selection, guest orders, service selection, intake weights, rush fees, manual charges, discounts, checkout, partial/full payments
- Orders: search, status filters, payment recording, timeline, payment-gated release, receipt reprints
- Customers: directory, add/edit, order history
- Reports: totals, service revenue chart, payment methods, CSV export
- Settings: shop profile, service pricing, rush fees, receipt footer
- Browser print / Save as PDF receipt
- Browser localStorage persistence between refreshes

## Important limitations

This is a **prototype** using sample data and localStorage. It has **no backend, real database, staff authentication, payment gateway, server-side validation, real SMS, or true multi-device synchronization**. Its security checks can be bypassed and it must not be used for real customer records or real business transactions. Payments are simulated. The printed claim slip is not a BIR-compliant invoice.

The app is intended to establish and test user flows before full-stack integration.

## Next steps

Implement Express + PostgreSQL + Prisma, secure authentication, authorization, server-side pricing and release validation, atomic payment processing, and integration tests before real deployment.
