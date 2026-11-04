---
title: "CRESN Navigation Platform: Security and Privacy Assessment"
category: "Security & applications"
period: "Jan – Apr 2026"
description: "A React and FastAPI navigation demo used for authorised security lab analysis."
pubDate: "Apr 28 2026"
badge: "Team lead"
github: "https://github.com/ChrisXiejq/security_team_25"
tags: ["security", "react", "fastapi"]
cvBullets:
  - "Assessed the security and privacy of a campus navigation platform combining route planning, interactive maps, an AI assisted chat service, backend APIs, database storage and external routing services."
  - "Applied STRIDE threat modelling and likelihood impact analysis to identify high priority risks including SQL injection, credential abuse, prompt injection and privileged information disclosure."
  - "Translated the assessment into practical controls including parameterised queries, login protection, rate limiting, role based prompt isolation, stronger authentication and structured security logging."
---

This project is a navigation and security lab demo built with a React and Vite frontend, a FastAPI backend, and a SQLite database for geo locations and demo users.

The app combines map-based navigation features with intentionally vulnerable lab scenarios for authorised security analysis. The README documents examples such as brute-force login behaviour, SQL injection demonstrations, resource-exhaustion endpoints, and classroom-style prompt-injection experiments.

The project also includes attack demonstration scripts and clearly separates lab mode from safer configuration options, making it useful as a coursework-style environment for studying common application security risks and defensive thinking.

The team used STRIDE to organise the threat assessment and discuss mitigations for the demonstration system.
