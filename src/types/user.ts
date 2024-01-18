interface Plan {
    currency: 'USD'
    id: string
    price: number
    tokens: number
    type: 'PREMIUM'
}

interface Subscription {
    plan: Plan
    additional_tokens: number
    tokens: number
}

export interface User {
    id: string
    email: string
    name: string
    role: 'USER' | 'ADMIN'
    subscription: Subscription
    tokens: number
    created_at: string
    plan: Plan
    planI: string
    user_id: string
}

export interface TransActions {
    id: string
    provider: "SYSTEM",
    amount: number,
    currency: "SYSTEM_TOKEN",
    meta: null,
    status: "PENDING",
    type: "REPLENISH",
    plan_id: null | string,
    user_id: string,
    referral_id: null | string,
    created_at: string,
    "external_id": null | string
}
