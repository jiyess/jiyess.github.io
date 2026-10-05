---
title: "Mesh generation for twin-screw compressors by spline-based parameterization using preconditioned Anderson acceleration"
collection: talks
type: "Conference talk"
permalink: /talks/2023-09-11-compressors-london
redirect_from:
  - /talks/2023-09-11-compressor-meshGen
venue: "13th International Conference on Compressors and their Systems (2023)"
date: 2023-09-11
location: "London, United Kingdom"
---

[Slides](/files/pdf/slides/2023-09-11-compressor-meshGen/2023-09-11-compressor-meshGen.pdf),
[Photo 1](/images/talks/2023-09-11-compressors-london/opening.jpg),
[Photo 2](/images/talks/2023-09-11-compressors-london/talk-2.jpg),
[Photo 3](/images/talks/2023-09-11-compressors-london/talk-1.jpg),
[Video 1](/images/talks/2023-09-11-compressors-london/compressor-slices.mov),
[Video 2](/images/talks/2023-09-11-compressors-london/compressor-simulation.mov),
[Conference Link](https://citycompressorsconference.london)

Constructing high-quality structured meshes is a crucial preprocessing step in the simulation-based analysis of positive displacement machines and, in particular, rotary twin-screw compressors. Instead of creating these meshes directly, we resort to the computational paradigm of isogeometric analysis (IGA), which integrates geometric modeling and numerical simulation in a unified spline-based formalism.

In this paper, we propose an efficient approach for generating high-order, analysis-suitable parameterizations of rotary twin-screw compressor geometries from their boundary representation by adopting the concept of elliptic grid generation and applying the IGA formalism. As this approach involves solving nonlinear systems of equations, we speed up the computation using a block-diagonal Jacobian-preconditioned Anderson acceleration algorithm. Our numerical results demonstrate the effectiveness and efficiency of the proposed workflow. The resulting parameterizations can easily be turned into high-quality structured meshes suitable for simulation-based compressor analysis.

Joint work with [Matthias Möller](https://mmoelle1.gitlab.io/website/).

Keywords: **Isogeometric Analysis**, **Structured Mesh Generation**, **Twin-Screw Compressors**, **Elliptic Grid Generation**, **Preconditioned Anderson Acceleration**
