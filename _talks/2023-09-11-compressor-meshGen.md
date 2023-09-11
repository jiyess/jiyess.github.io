---
title: "Mesh generation for twin-screw compressors by spline-based parameterization using preconditioned Anderson acceleration"
collection: talks
type: "Conference proceedings talk"
permalink: /talks/2023-09-11-compressor-meshGen
venue: "13th International Conference on Compressors and their Systems"
date: 2023-09-11
location: "London, United Kingdom" 
---

<!-- [Slides](../files/pdf/slides/2023-09-11-compressor-meshGen/2023-09-11-compressor-meshGen.pdf),  -->
[Photo1](../images/talks/2023-09-11-compressor-meshGen/opening.jpg),
[Conference Link](https://citycompressorsconference.london)

Constructing high-quality structured meshes is a crucial pre- processing step in the simulation-based analysis of positive displacement machines and, in particular, rotary twin-screw compressors. Instead of creating these meshes directly, we resort to the computational paradigm of IsoGeometric Analysis (IGA) that integrates geometric modeling and numerical simulations in a unified spline-based formalism.

In this paper, we propose an eﬀicient approach for generating high-order analysis-suitable parameterizations of rotary twin-screw compressor ge- ometries from their boundary representation adopting the concept of elliptic grid generation and applying the IGA formalism. As this ap- proach involves the solution of nonlinear systems of equations, we speed up the computation by using a block-diagonal Jacobian-preconditioned Anderson acceleration algorithm. Our numerical results demonstrate the effectiveness and eﬀiciency of the proposed workflow. The so-created pa- rameterizations can be easily turned into high-quality structured meshes suitable for simulation-based compressor analysis.

Joint work with [Matthias Möller](https://mmoelle1.gitlab.io/website/). 
