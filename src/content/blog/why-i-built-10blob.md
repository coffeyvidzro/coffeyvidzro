---
title: "Why I Built 10Blob"
description: "What happens when you design ecommerce around how social sellers already sell instead of asking them to become traditional online stores."
pubDate: 2026-08-19
draft: false
---

# Why I Built 10Blob

A lot of sellers don't start their businesses with a storefront.

They start with a phone, a few products, a WhatsApp number, and an audience on Instagram, TikTok, or somewhere else.

The conversation is already happening there. The sale is already happening there. So I started wondering:

**What if the product was designed around that reality instead of trying to move the seller into a traditional ecommerce store?**

That question became 10Blob.

## The problem I kept seeing

Traditional ecommerce assumes that a seller needs a store.

A catalog. Categories. Product pages. Cart. Checkout. Accounts. Payments. Delivery options. And eventually a dashboard full of things to manage.

All of those things can be useful. But they can also be too much for someone whose primary sales channel is a social feed and a conversation in WhatsApp.

For a social seller, the journey can be much simpler:

```text
social post
    ↓
product link
    ↓
browse
    ↓
order
    ↓
WhatsApp conversation
```

I wanted to explore what would happen if the software respected that journey instead of fighting it.

## So I made a constraint

10Blob is built around the idea of a **drop**.

A seller publishes a small collection of products, shares a single link, and lets customers browse and order from it.

The collection is intentionally limited to ten products.

That constraint is where the name comes from, but it is also a product decision.

I didn't want to build another giant online catalog. I wanted to experiment with something closer to the way products are actually presented on social media: a small selection, a moment in time, and a link that can be shared immediately.

The constraint also keeps the product focused. A seller doesn't need to spend an afternoon organizing a virtual department store before making their next sale.

## Why not just use WhatsApp?

Because conversations are great for relationships, but they aren't always great for structured product information.

A customer asking:

> "How much is this one? Do you have medium? What colors are left?"

creates work for the seller.

10Blob sits between the social post and the conversation.

The customer can see the products, prices, options, and availability in one place. The order can be structured before the conversation moves back to WhatsApp.

So I don't see WhatsApp as something 10Blob is trying to replace.

**It's part of the product.**

10Blob handles the structured part of the transaction. WhatsApp handles the human part.

## The interesting engineering problem

The product sounds simple until you start implementing it.

Once customers can actually order something, a few uncomfortable questions appear:

- What happens when two people want the last item?
- What happens when checkout starts but doesn't finish?
- When should inventory be reserved?
- When should a reservation expire?
- What happens when a drop expires?
- How do you stop an old link from accepting new orders?

Those questions turned a small product idea into a useful engineering playground.

I ended up working through authentication, product management, image uploads, expiring drops, inventory reservation, checkout, order management, rate limiting, analytics, and the WhatsApp handoff.

The lesson was familiar but worth experiencing again: **simple products can contain complicated systems.**

## Building the smallest useful version

I deliberately didn't start by trying to solve all of ecommerce.

The core loop was enough:

```text
create a drop
    ↓
share the drop
    ↓
customer chooses a product
    ↓
customer places an order
    ↓
seller continues the conversation on WhatsApp
```

Everything else had to justify its existence around that loop.

That made decisions easier. Instead of asking, "What features should an ecommerce platform have?", I could ask:

**"Does this make the drop-to-order journey better?"**

That's a much smaller question.

## What I'm exploring

10Blob is still an adventure.

I'm not claiming that ten products is the perfect model for social commerce, or that WhatsApp is the answer to every ecommerce problem.

I'm interested in the experiment.

What happens when you take a familiar category like ecommerce and remove most of its assumptions?

What happens when the product is designed around the seller's existing behaviour instead of asking the seller to change their behaviour?

And how much software do you actually need to turn a social audience into a structured order?

Those are the questions I'm using 10Blob to explore.

For me, that's the fun of building products. You start with an idea, give it enough software to become real, and then let reality teach you what the idea was actually trying to become.