import Stripe from "stripe";

export const stripe = new Stripe(
    process.env.STRIPE_SECRECT_KEY ?? '',
    {
        apiVersion: '2024-04-10',
        appInfo: {
            name: 'Spotify Clone',
            version: '0.1.0'
        }
    }
)