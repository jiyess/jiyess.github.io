---
title: "SplineMesh v2.0: Optimized high-quality spline mesh generator for twin-screw compressors"
collection: talks
type: "Conference talk"
permalink: /talks/2025-09-08-compressors-london
redirect_from:
  - /talks/2025-09-08-London/
venue: "14th International Conference on Compressors and their Systems"
date: 2025-09-08
location: "London, United Kingdom"
---

[Photo 1](/images/talks/2025-09-08-compressors-london/collaboration.jpg),
[Photo 2](/images/talks/2025-09-08-compressors-london/gala-dinner.jpg),
[Photo 3](/images/talks/2025-09-08-compressors-london/evening-with-matthias.jpg)

High-quality structured mesh generation is essential for the accurate numerical simulation and design optimization of twin-screw compressors, which are widely used in high-pressure gas production. This paper presents SplineMesh v2.0, an optimized, high-efficiency spline-based structured mesh generator specifically designed for twin-screw compressors.

Building upon the foundation of its predecessor, SplineMesh v2.0 introduces significant improvements in computational performance while preserving geometric fidelity. Key advancements include a refined boundary correspondence algorithm for improved profile accuracy, optimized elliptic grid generation techniques, and an accelerated solver framework employing block-diagonal Jacobian preconditioning with Anderson acceleration. These developments ensure faster convergence and substantial reductions in computational time without compromising mesh quality.

Developed using the open-source Geometry + Simulation Modules (G+Smo) library, SplineMesh v2.0 integrates seamlessly with isogeometric analysis (IGA)-based workflows. Performance benchmarks validate its capability to generate high-quality structured meshes more efficiently, meeting the stringent requirements of design optimization and CFD simulations. This release establishes SplineMesh v2.0 as a powerful and reliable tool for advancing the simulation and design of screw compressors.

Keywords: **Twin-Screw Compressors**, **Mesh Generation**, **B-Splines**, **Structured Mesh**
