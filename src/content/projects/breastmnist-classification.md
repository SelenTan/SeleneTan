---
title: "Breast Ultrasound Classification: SVM and CNN Evaluation"
category: "Machine learning"
period: "Oct 2025 – Feb 2026"
description: "A machine learning benchmark comparing classical and deep learning approaches for BreastMNIST classification."
pubDate: "Apr 28 2026"
badge: "Individual project"
github: "https://github.com/SelenTan/AMLS_25-26_SN25187537"
tags: ["machine-learning", "medical-imaging", "pytorch"]
cvBullets:
  - "Developed SVM and CNN pipelines for benign and malignant breast ultrasound image classification, comparing classical feature based learning with learned visual representations."
  - "Designed controlled experiments across preprocessing, feature extraction, augmentation, model capacity and training budget to ensure a fair comparison between approaches."
  - "Demonstrated stronger held out performance with the CNN and used class specific error analysis to identify reduced benign recall and the effect of class imbalance."
---

This project benchmarks two machine learning approaches on the BreastMNIST dataset: a Support Vector Machine baseline and a SimpleCNN deep learning model.

The experiments compare how model capacity, data augmentation, and training budget affect classification performance. The SVM pipeline explores C-parameter settings and data conditions, while the CNN pipeline evaluates architecture width, augmentation choices, and available training data.

The repository is structured as a reproducible coursework pipeline, with separate modules for SVM and CNN experiments and a main entry point that runs both tasks and saves result plots for analysis.
