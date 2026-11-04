---
title: "Vision–Language Model Certification with Imperfect AI Judges"
description: "Designed a framework that turns visual factuality, robustness and refusal behaviour into auditable certification evidence."
pubDate: "2026-08-01"
period: "May – Aug 2026"
badge: "MSc graduation project"
category: "Machine learning"
github: "https://github.com/SelenTan/MsC-Project-VLM-Certification"
cvBullets:
  - "Designed a scalable certification framework for vision language models, converting visual factuality, robustness and refusal behaviour into auditable evaluation targets and certification evidence."
  - "Built an image question answering evaluation pipeline covering charts, documents, forms, receipts and screenshots, supporting up to 10,000 images and 30,000 question answering records in a completed run."
  - "Calibrated imperfect AI judges against human labels using noisy hypothesis testing, allowing certification decisions to account explicitly for judge reliability rather than treating automated evaluation as ground truth."
---

Built an image-QA pipeline for charts, documents, forms, receipts and screenshots. Completed runs supported up to 10,000 images and 30,000 question-answer records. Calibrated imperfect AI judges against human labels with noisy hypothesis testing so judge reliability was explicit in certification decisions.

## Certification workflow

![Workflow from paired human and AI judge labels through variance-corrected testing to a certification decision](./vision-language-model-certification/certification-workflow.png)

*Thesis Figure 1(b). Human labels calibrate the AI judge, and a variance-corrected test accounts for uncertainty in that calibration when making the certification decision.*
