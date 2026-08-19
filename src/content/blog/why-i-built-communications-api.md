---
title: "Why I Built Yet Another Communications API"
description: "Why I decided to build another communications API, and what Dugble taught me about the infrastructure hiding behind a simple message."
pubDate: 2026-08-19
draft: false
---

# Why I Built Yet Another Communications API

The world already has plenty of communications APIs.

There are APIs for SMS. APIs for email. APIs for OTPs. APIs for WhatsApp. There are providers with excellent dashboards, mature SDKs, global infrastructure, and years of experience.

So a reasonable question is:

**Why build another one?**

I asked myself that question before starting Dugble.

The honest answer isn't that I thought the world needed another generic messaging API.

I wanted to understand the problem from the inside.

## The API is the easy part

At first glance, sending a message looks almost trivial:

```http
POST /messages
```

Give the API a recipient, some content, and a provider, then send it.

But the request is only the beginning.

What happens if the provider is unavailable? What if the provider accepts the request but delivery fails later? What if the API request times out after the provider has already accepted the message? What happens when the same request is retried?

And how do you know what happened after the original HTTP request is gone?

That's where the interesting problem starts.

## The problem I wanted to explore

Communication providers tend to have their own APIs, credentials, capabilities, limits, response formats, and failure modes.

An application shouldn't necessarily need to understand all of those differences.

I wanted Dugble to sit between the application and those providers:

```text
application
    ↓
Dugble API
    ↓
queue / workers
    ↓
communication provider
    ↓
delivery
```

The application gets a consistent interface. Dugble deals with the messy parts underneath it.

That abstraction was the starting point.

## Why not just call the provider directly?

Sometimes you absolutely should.

If your application sends a few messages and one provider gives you everything you need, adding another layer can be unnecessary complexity.

But the moment communication becomes part of a product's infrastructure, different concerns start appearing:

- provider credentials and configuration
- retries
- rate limits
- asynchronous processing
- delivery status
- logging and observability
- failures that happen after the HTTP request
- changing providers without rewriting application code

I wanted to explore what it takes to make those concerns someone else's problem.

## The interesting part happens after the request

One of the things Dugble made obvious to me is that an API response isn't the same thing as delivery.

A successful HTTP request can mean that the platform accepted the message.

It does not necessarily mean that a person received it.

That distinction changes the architecture.

Instead of trying to do everything inside the request-response cycle, Dugble can accept work and process it asynchronously. The API becomes the entry point, while workers handle the work that happens afterward.

That led me toward queues, workers, persistence, retries, and the need for useful operational visibility.

The message has a life beyond the HTTP request.

## Building the infrastructure

Dugble is built in Go, with PostgreSQL as the primary datastore and NATS JetStream for asynchronous processing.

The HTTP layer accepts requests and validates them. Data is persisted so there is a record of the work. Messages can then move through workers instead of making the original request wait for downstream providers.

Redis handles fast, ephemeral infrastructure needs, while Docker and AWS provide the deployment foundation. Typed database access, migrations, error reporting, rate limiting, and security controls fill in some of the less visible parts of the system.

None of these technologies are the point by themselves.

The point is the set of boundaries they create:

```text
request
  ↓
accepted work
  ↓
persisted state
  ↓
asynchronous processing
  ↓
provider interaction
  ↓
observable outcome
```

That's the system I wanted to understand.

## What I learned from building another one

Building Dugble didn't convince me that everyone needs another communications API.

It did convince me that infrastructure is full of problems that disappear when everything goes well and become very real when something doesn't.

A provider being down is different from an API being down.

A request succeeding is different from a message being delivered.

A retry is different from sending the same message twice.

And a system that works is different from a system you can understand when it stops working.

Those distinctions are easy to describe. Building them into software is where the learning happens.

## Why I kept going

Dugble started as a question:

> **What would it take to build the communication layer I would want to use myself?**

It became an adventure in APIs, distributed work, providers, reliability, and operations.

I'm not building Dugble because communications APIs don't exist.

I'm building it because building one forces me to confront the parts of software that are usually hidden behind the API call.

And that's what I enjoy about these projects.

Sometimes the best reason to build something that already exists is simply that **you want to understand how it works.**
