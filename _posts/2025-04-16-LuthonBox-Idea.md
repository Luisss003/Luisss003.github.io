---
layout: post
title: "Introducing LuthonBox: My Custom RE/Malware Sandbox"
date: 2025-04-16 01:00:00 -0500
categories: [projects, reverse-engineering, malware-analysis]
---

Ever since I got into reverse engineering and malware research, I've always been interested in writing my own tools, but always felt the tools I wrote were quite simple. I wanted to create my own virutalization enviroment, and at the same time, get better at high level programming!

That’s the idea behind **LuthonBox**.

---

## What is LuthonBox?

**LuthonBox** is a self-contained virtual machine environment I'm building for:
- Reverse engineering
- Malware analysis
- Binary exploitation testing
- Building and testing malware safely (with proper isolation)

It's not just a bunch of tools thrown together — it's about **efficiency**. Creating a free and open source automated malware analysis platform.

---

## Key Features (Planning Stage)

- Built from a minimal Linux base (not Kali or Parrot)
- Lightweight setup with:
  - `Ghidra`, `x64dbg`, `Cutter`, `radare2`
  - Python tooling (`uncompyle6`, `pyinstxtractor`, `capstone`)
  - CTF prep tools (ROPgadget, pwntools, checksec)
- Network-isolated using internal NAT or host-only adapters
- Git-synced analysis notebooks and scripts
- Custom aliases + dotfiles for speed

---

## Why Build My Own?

I could use FLAREVM or REMnux, but I would lack the increased efficiency of automation:
- Trace a packed binary
- Detonate something in a contained space
- Or test an exploit without noise

**LuthonBox** will stripped down, clean, and centered around making the most out of an analysts' time.

---

If you’re into RE, malware, or just like building efficient toolkits. I’ll be blogging about updates to LuthonBox right here.

Stay tuned!
