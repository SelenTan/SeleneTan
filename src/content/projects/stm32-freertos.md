---
title: "Real-Time Interactive Firmware on STM32 and FreeRTOS"
description: "Implemented and measured an interactive real-time system on STM32."
pubDate: "2025-12-01"
period: "Oct – Dec 2025"
badge: "Individual project"
category: "Embedded systems & hardware"
cvBullets:
  - "Designed and implemented a real time Snake game on STM32, integrating an analog joystick, OLED display, physical controls, ADC with DMA and STM32 HAL drivers."
  - "Architected the firmware as coordinated FreeRTOS tasks for input processing, game logic, display rendering and shared state management using queues, semaphores and mutexes."
  - "Validated scheduling behaviour and processor utilisation with Segger SystemView and CPU load measurements, confirming reliable timing and sufficient processing headroom for responsive gameplay."
---

Used a Snake game to exercise an analogue joystick, OLED, ADC with DMA and HAL drivers. Coordinated input, game logic and rendering with FreeRTOS tasks, queues, semaphores and mutexes. Checked scheduling and processor utilisation with Segger SystemView and CPU-load measurements.
